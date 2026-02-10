// In-memory store for mock development
const mockStore = {
    scans: [] as any[],
    findings: [] as any[],
};

const mockPrisma = {
    scan: {
        create: async (data: any) => {
            const newItem = {
                id: "mock-scan-" + Math.random().toString(36).substr(2, 9),
                ...data.data,
                status: "RUNNING",
                logs: ["Initializing Agent Mission..."],
                createdAt: new Date(),
            };
            mockStore.scans.push(newItem);
            return newItem;
        },
        findMany: async (args?: any) => [...mockStore.scans].reverse(),
        findUnique: async (args: any) => mockStore.scans.find(s => s.id === args.where.id),
        update: async (args: any) => {
            const index = mockStore.scans.findIndex(s => s.id === args.where.id);
            if (index !== -1) {
                // If appending logs
                if (args.data.logs && Array.isArray(args.data.logs)) {
                    const currentLogs = mockStore.scans[index].logs || [];
                    args.data.logs = [...currentLogs, ...args.data.logs];
                }
                mockStore.scans[index] = { ...mockStore.scans[index], ...args.data };
                return mockStore.scans[index];
            }
            return { ...args.data, id: args.where.id };
        },
    },
    finding: {
        create: async (data: any) => {
            const newItem = {
                id: "mock-finding-" + Math.random().toString(36).substr(2, 9),
                ...data.data,
                createdAt: new Date(),
            };
            mockStore.findings.push(newItem);
            return newItem;
        },
        findMany: async (args?: any) => {
            if (args?.where?.scanId) {
                return mockStore.findings.filter(f => f.scanId === args.where.scanId);
            }
            return [...mockStore.findings].reverse();
        },
        findUnique: async (args: any) => mockStore.findings.find(f => f.id === args.where.id),
    },
} as any;

let prisma: any;

try {
    // Dynamically attempt to import Prisma to avoid build errors if it's missing
    const { PrismaClient } = require("@prisma/client");
    prisma = new PrismaClient();
} catch (e) {
    console.warn("Prisma client failed to initialize, using mock client.");
    prisma = mockPrisma;
}

export { prisma };
