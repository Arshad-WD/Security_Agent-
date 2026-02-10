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
      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="px-3 py-1 border border-white/10 rounded-full mb-10 flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Status</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Engine Online</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1] uppercase">
            Autonomous <br className="hidden md:block" /> Security Intelligence
          </h1>

          <p className="text-sm md:text-base text-slate-500 max-w-xl mb-12 font-medium leading-relaxed uppercase tracking-wide">
            Next-generation autonomous agent designed for continuous perimeter monitoring and proactive vulnerability discovery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-32">
            <Link href="/dashboard">
              <button className="bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] py-4 px-10 rounded hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-2 shadow-2xl shadow-white/5">
                Initialize Console
              </button>
            </Link>
            <button className="border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.2em] py-4 px-10 rounded hover:bg-white/5 transition-all active:scale-95">
              Documentation
            </button>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-40">
          <FeatureItem 
            icon={<Globe size={20} />}
            title="Perimeter Probe"
            description="Deep analysis of modern web architectures and dynamic infrastructure endpoints."
          />
          <FeatureItem 
            icon={<Cpu size={20} />}
            title="Agent Reasoning"
            description="Multi-provider LLM intelligence for correlating disparate security telemetry."
          />
          <FeatureItem 
            icon={<Terminal size={20} />}
            title="Real-time Audit"
            description="Continuous mission logging with instant verification of identified system weaknesses."
          />
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
      <footer className="py-20 px-6 border-t border-white/10 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8">
           <Shield size={18} className="text-white/20" />
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Sentinel AI Security</span>
        </div>
        <div className="text-white/20 text-[10px] font-black uppercase tracking-widest">
          © {new Date().getFullYear()} Precision Protocols · All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-black p-10 flex flex-col items-center text-center group">
      <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-4 text-white">{title}</h3>
      <p className="text-[12px] text-slate-500 font-medium leading-relaxed uppercase tracking-wide">
        {description}
      </p>
    </div>
  );
}
