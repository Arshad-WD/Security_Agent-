import {
    validateTarget,
    performRecon,
    reasonVulnerabilities,
    generateSecurityReport,
    performRepoRecon,
    reasonRepoVulnerabilities
} from "./agents/AgentSystem";
import { prisma } from "./db";

export async function runFullSecurityScan(scanId: string, llmConfig?: { provider: string, key: string, allKeys?: Record<string, string> }) {
    try {
        // 1. Fetch scan target
        const scan = await prisma.scan.findUnique({
            where: { id: scanId }
        });

        if (!scan) throw new Error("Scan mission not found in database.");

        // 2. Pre-Scan Validation
        const validation = await validateTarget(scan.url, scan.consent);
        if (!validation.isValid) {
            await prisma.scan.update({
                where: { id: scanId },
                data: { status: "FAILED", updatedAt: new Date() }
            });
            throw new Error(validation.reason);
        }

        // Update status and initial log
        await prisma.scan.update({
            where: { id: scanId },
            data: {
                status: "RUNNING",
                logs: ["Target validated. Initiating heuristics engine..."],
                updatedAt: new Date()
            }
        });

        // Detect Target Type (URL vs GitHub)
        const isGithub = scan.url.includes("github.com");
        let issues = [];

        if (isGithub) {
            await prisma.scan.update({
                where: { id: scanId },
                data: { logs: ["Detected GitHub Repository. Launching Source Audit pipeline...", "Mapping repository structure via raw content edge..."] }
            });

            // GitHub Repo Pipeline
            const recon = await performRepoRecon(scan.url);
            await prisma.scan.update({
                where: { id: scanId },
                data: { logs: [`Recon complete: Found ${recon.foundFiles.length} key configuration files.`, "Launching heuristic secret scanner..."] }
            });

            if (llmConfig?.key) {
                await prisma.scan.update({
                    where: { id: scanId },
                    data: { logs: [`Engaging ${llmConfig.provider} Intelligence for context-aware source audit...`] }
                });
            }

            issues = await reasonRepoVulnerabilities(recon, llmConfig);

            // Parallel Finding Generation
            const findingPromises = issues.map(async (issue) => {
                const report = await generateSecurityReport(recon, issue);
                await prisma.finding.create({
                    data: {
                        scanId: scanId,
                        type: report.title,
                        severity: report.severity,
                        description: report.description,
                        evidence: report.evidence,
                        location: report.category
                    }
                });
                return `[Finding] Identified ${report.title} (${report.severity}) in mission parameters.`;
            });

            const findingLogs = await Promise.all(findingPromises);
            await prisma.scan.update({
                where: { id: scanId },
                data: { logs: findingLogs }
            });
        } else {
            await prisma.scan.update({
                where: { id: scanId },
                data: { logs: ["Probing Web Infrastructure headers and services...", `Executing HEAD request to ${scan.url}`] }
            });

            // Web URL Pipeline
            const recon = await performRecon(scan.url);
            await prisma.scan.update({
                where: { id: scanId },
                data: { logs: [`Infrastructure mapping complete. Analyzed ${Object.keys(recon.serverHeaders).length} headers.`, "Scanned HTML surface for leaked secrets."] }
            });

            if (llmConfig?.key) {
                await prisma.scan.update({
                    where: { id: scanId },
                    data: { logs: [`Engaging ${llmConfig.provider} Intelligence for deep reasoning mission...`] }
                });
            }

            issues = await reasonVulnerabilities(recon, llmConfig);

            // Parallel Finding Generation
            const findingPromises = issues.map(async (issue) => {
                const report = await generateSecurityReport(recon, issue);
                await prisma.finding.create({
                    data: {
                        scanId: scanId,
                        type: report.title,
                        severity: report.severity,
                        description: report.description,
                        evidence: report.evidence,
                        location: report.category
                    }
                });
                return `[Finding] Identified ${report.title} (${report.severity}) via ${issue.id.startsWith('LLM') ? 'Intelligence' : 'Heuristics'}.`;
            });

            const findingLogs = await Promise.all(findingPromises);
            await prisma.scan.update({
                where: { id: scanId },
                data: { logs: findingLogs }
            });
        }

        // 4. Complete Scan Mission
        await prisma.scan.update({
            where: { id: scanId },
            data: {
                status: "COMPLETED",
                logs: ["Analysis engine finalized mission telemetry.", "Persistence synchronized. Mission Success."],
                updatedAt: new Date()
            }
        });

        return { success: true, count: issues.length };
    } catch (error: any) {
        console.error("Critical Scanner Failure:", error);
        await prisma.scan.update({
            where: { id: scanId },
            data: {
                status: "FAILED",
                logs: [`Critical Error: ${error.message || "Unknown Failure"}`],
                updatedAt: new Date()
            }
        });
        throw error;
    }
}
