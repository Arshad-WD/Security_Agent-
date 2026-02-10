"use client";

import { motion } from "framer-motion";
import { Shield, ShieldAlert, Zap, Globe, Github, Lock, ArrowRight, Terminal, Search, Cpu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-16 border-b border-white/10 bg-black/50 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-sm font-black uppercase tracking-[0.3em]">Sentinel AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Infrastructure</Link>
            <Link href="#" className="hover:text-white transition-colors">Protocols</Link>
            <Link href="#" className="hover:text-white transition-colors">Intelligence</Link>
          </div>

          <Link href="/dashboard">
            <button className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded hover:bg-slate-200 transition-all">
              Console
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-32"
        >
          <div className="px-3 py-1 border border-white/10 rounded-full mb-10 flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Status</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Engine Online</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.05] uppercase max-w-4xl">
            Autonomous <br className="hidden md:block" /> Security Intelligence
          </h1>

          <p className="text-sm md:text-base text-slate-500 max-w-xl mb-12 font-medium leading-relaxed uppercase tracking-wide">
            Next-generation autonomous agent designed for continuous perimeter monitoring and proactive vulnerability discovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard">
              <button className="bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] py-4 px-10 rounded hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-2 shadow-2xl shadow-white/5">
                Initialize Console
              </button>
            </Link>
            <Link href="/docs/SYSTEM_DESIGN.md">
              <button className="border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 px-10 rounded hover:bg-white/5 transition-all active:scale-95">
                Technical Blueprint
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Distributed Intelligence Section */}
        <section className="w-full mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-white/40">
                <Brain className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Distributed Core</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight">Infinite Intelligence <br/> via Resilient Fallback</h2>
              <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-wide">
                Sentinel AI utilizes a multi-provider strategy. If a primary provider is exhausted, the system automatically rotates through standby agents (Ollama, Anthropic, Gemini) to ensure mission completion.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-white/10 rounded bg-white/[0.02]">
                  <div className="text-white font-black text-[10px] uppercase tracking-widest mb-1">Local Ollama</div>
                  <div className="text-slate-600 text-[9px] uppercase font-bold">Unrestricted Logic</div>
                </div>
                <div className="p-4 border border-white/10 rounded bg-white/[0.02]">
                  <div className="text-white font-black text-[10px] uppercase tracking-widest mb-1">Provider Mesh</div>
                  <div className="text-slate-600 text-[9px] uppercase font-bold">Auto-Rotation</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-10 border border-white/10 bg-black rounded-lg hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              <div className="grid grid-cols-3 gap-6 relative z-10">
                {['OpenAI', 'Claude', 'Ollama', 'Gemini', 'Groq', 'Mistral'].map((p) => (
                  <div key={p} className="aspect-square border border-white/10 rounded flex items-center justify-center bg-black/50 overflow-hidden group">
                    <span className="text-[9px] font-black text-white/20 group-hover:text-white transition-colors uppercase tracking-tighter">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* High-Velocity Engine */}
        <section className="w-full mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 text-white/40 mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Velocity Architecture</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">Built for Rapid Reconnaissance</h2>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wide max-w-2xl mx-auto">
              Parallelized infrastructure probing and concurrent vulnerability analysis reduce audit time from hours to minutes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <FeatureItem 
              icon={<Globe size={20} />}
              title="Parallel Probing"
              description="Concurrent analysis of subdomains, robots.txt, and tech stacks."
            />
            <FeatureItem 
              icon={<Cpu size={20} />}
              title="Batch Processing"
              description="Dozens of security heuristics evaluated in a single mission heart-beat."
            />
            <FeatureItem 
              icon={<Terminal size={20} />}
              title="Async Persistence"
              description="Telemetry stream writes to the database with zero blocking latency."
            />
          </div>
        </section>

        {/* Autonomous Flow */}
        <section className="w-full mb-40">
           <div className="flex flex-col md:flex-row gap-10">
             <div className="md:w-1/3">
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4 text-white">Mission <br/> Lifecycle</h3>
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">The Sentinel agent operates in a continuous loop of discovery and reasoning.</p>
             </div>
             <div className="flex-1 space-y-4">
                <WorkflowStep num="01" title="Discovery" text="Parallel crawling of the target surface area to identify infrastructure fingerprints." />
                <WorkflowStep num="02" title="Reasoning" text="Multi-LLM intelligence correlates recon data to map high-impact vulnerabilities." />
                <WorkflowStep num="03" title="Reporting" text="Automated synthesis of findings into professional, evidence-backed reports." />
             </div>
           </div>
        </section>

        {/* Console Mockup */}
        <div className="w-full bg-black border border-white/10 rounded-lg overflow-hidden text-left font-mono text-[11px] leading-relaxed shadow-3xl">
          <div className="px-4 py-2 border-b border-white/10 bg-white/[0.02] flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <div className="w-2 h-2 rounded-full bg-white/20" />
            <span className="ml-2 text-[10px] font-black uppercase tracking-widest text-white/40">mission_console.log</span>
          </div>
          <div className="p-8 space-y-2">
            <div className="flex gap-4">
              <span className="text-white/20">[16:15:02]</span>
              <span className="text-white font-bold opacity-50">➜</span>
              <span className="text-white">sentinel initialize_mission --target perimeter.alpha</span>
            </div>
            <div className="flex gap-4">
              <span className="text-white/20">[16:15:03]</span>
              <span className="text-white/40">SYST</span>
              <span className="text-slate-500">Provisioning autonomous agent...</span>
            </div>
            <div className="flex gap-4">
              <span className="text-white/20">[16:15:05]</span>
              <span className="text-white/40">ENGN</span>
              <span className="text-slate-500">Analyzing surface area: 12 endpoints detected.</span>
            </div>
            <div className="flex gap-4">
              <span className="text-white/20">[16:15:08]</span>
              <span className="text-white/40 text-red-500">ALRT</span>
              <span className="text-red-500 font-bold uppercase tracking-widest">Discovery: High-Impact SQL Exposure</span>
            </div>
            <div className="flex gap-4">
              <span className="text-white/20">[16:15:09]</span>
              <span className="text-white/40">INTE</span>
              <span className="text-slate-400">Reasoning complete. Remediation protocol generated.</span>
            </div>
            <div className="mt-4 flex gap-4">
              <span className="text-white/20">[16:15:10]</span>
              <span className="text-white opacity-50">➜</span>
              <span className="text-white bg-white/10 px-1 animate-pulse">_</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pt-40 pb-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <div className="space-y-6">
             <div className="flex items-center gap-2 text-white">
               <Shield size={16} />
               <span className="tracking-[0.2em]">Sentinel</span>
             </div>
             <p className="text-slate-600 font-medium leading-relaxed italic">The perimeter is the product.</p>
          </div>
          <div className="space-y-6">
            <h5 className="text-white">Platform</h5>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-white transition-colors">Infrastructure</Link>
              <Link href="#" className="hover:text-white transition-colors">Intelligence</Link>
              <Link href="#" className="hover:text-white transition-colors">Protocols</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-white">Engineering</h5>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-white transition-colors">OSS Agents</Link>
              <Link href="#" className="hover:text-white transition-colors">Benchmark</Link>
              <Link href="#" className="hover:text-white transition-colors">Status</Link>
            </div>
          </div>
          <div className="space-y-6">
            <h5 className="text-white">Legal</h5>
            <div className="flex flex-col gap-4">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Consent</Link>
              <Link href="#" className="hover:text-white transition-colors">Ethics</Link>
            </div>
          </div>
          <div className="space-y-6 col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 px-3 py-1 border border-green-500/20 bg-green-500/5 text-green-500 rounded-full w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>All Systems Operational</span>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10 text-white/20 text-[10px] font-black uppercase tracking-widest">
          <div>© {new Date().getFullYear()} Precision Protocols · Worldwide Access Enabled</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Global Registry</Link>
            <Link href="#" className="hover:text-white transition-colors">Mission Nodes</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-black p-12 flex flex-col items-center text-center group">
      <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-white">{title}</h3>
      <p className="text-[12px] text-slate-500 font-medium leading-relaxed uppercase tracking-wide">
        {description}
      </p>
    </div>
  );
}

function WorkflowStep({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <div className="flex gap-6 items-start p-6 border border-white/5 bg-white/[0.01] rounded hover:border-white/10 transition-colors group">
      <span className="text-[10px] font-black text-white/20 group-hover:text-white transition-colors mt-1">{num}</span>
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-widest text-white mb-2">{title}</h4>
        <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase tracking-tight">{text}</p>
      </div>
    </div>
  );
}

function Brain(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105 4 4 0 0 0 10 0 4 4 0 0 0 .52-8.105 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5z" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M12 13a4.5 4.5 0 0 1-3-4" />
      <path d="M12 13v4" />
      <path d="M12 13a4.5 4.5 0 0 0 3-4" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4" />
    </svg>
  );
}
