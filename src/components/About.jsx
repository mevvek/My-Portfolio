import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const metadata = [
    { label: "BASED IN", value: "Kunda, Pratapgarh, Uttar Pradesh" },
    { label: "EDUCATION", value: "BCA · Invertis University" },
    { label: "STATUS", value: "5th Semester / 3rd Year" },
    { label: "CORE FOCUS", value: "Software Engineering + AI Systems" },
  ];

  const buildPillars = [
    {
      title: "AI Applications",
      detail: "RAG systems, intelligent agents, and LLM orchestration.",
    },
    {
      title: "Full-Stack Systems",
      detail: "Scalable client-server architectures with robust APIs.",
    },
    {
      title: "Developer Tools",
      detail: "Automation utilities, code analysis, and workflows.",
    },
    {
      title: "Data & Automation",
      detail: "Optimized pipelines, relational models, and MLOps deployment.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0a0a0c] border-t border-neutral-900/70 overflow-hidden"
    >
      {/* Editorial Background Typography */}
      <span className="absolute right-4 top-12 font-mono text-8xl sm:text-9xl font-black text-neutral-900/30 select-none pointer-events-none tracking-tighter">
        PROFILE
      </span>

      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
          / ABOUT ME
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
          ENGINEERING REAL SYSTEMS.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal leading-relaxed">
          Driven by practical problem solving, building software that stands on real-world utility.
        </p>
      </div>

      {/* Main Two-Column Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Polished Professional Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="lg:col-span-7 space-y-7"
        >
          {/* Main Statement without repeated "I'm" */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-medium leading-relaxed">
            <span className="text-white font-semibold">Vivek Yadav</span> — software engineer and 3rd-year BCA undergraduate (5th Semester) at Invertis University, Bareilly, originally from Kunda, Pratapgarh (UP). Focused on architecting production-ready applications rather than learning syntax in isolation.
          </p>

          <div className="space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            <p>
              My development scope spans full-stack web architectures, AI-integrated systems, automation pipelines, APIs, and developer tooling. Built and shipped multiple end-to-end applications including an <span className="text-neutral-200 font-medium">AI Resume Analyzer</span>, <span className="text-neutral-200 font-medium">Smart Expense Tracker</span>, <span className="text-neutral-200 font-medium">Multi-PDF RAG Assistant</span>, <span className="text-neutral-200 font-medium">SwasthyaSetu</span>, and <span className="text-neutral-200 font-medium">Todo App</span>.
            </p>

            <p>
              Beyond coursework, hands-on industry exposure comes through internships in <span className="text-neutral-200 font-medium">Python Full Stack Development</span> and <span className="text-neutral-200 font-medium">AI Deployment & Automation</span> — managing backend services, Docker, CI/CD, MLOps, RAG pipelines, and cloud workflows, alongside an ongoing focus on <span className="text-neutral-200 font-medium">SQL & Database Management</span>.
            </p>
          </div>

          {/* Currently Building Alert Banner */}
          <div className="p-4 sm:p-5 rounded-xl border border-blue-900/40 bg-[#10131d]/70 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] font-mono text-blue-400 tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                CURRENTLY BUILDING
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                AI Code Reviewer
              </h4>
              <p className="text-xs text-neutral-400">
                Automated bug detection, architectural insights, and code quality scoring.
              </p>
            </div>
            <span className="self-start sm:self-center font-mono text-[11px] px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 whitespace-nowrap">
              In Active Dev
            </span>
          </div>

          {/* Technical Scope Breakdown */}
          <div className="pt-4 border-t border-neutral-900/80">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block mb-3">
              PRIMARY TECHNICAL SCOPE
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
              {[
                "React.js", "Next.js", "JavaScript", "Python", "FastAPI",
                "Node.js", "Express.js", "MongoDB", "SQL / MySQL", "Git / GitHub",
                "LangChain", "LlamaIndex", "FAISS", "RAG Arch", "Groq / Gemini", "AI Agents"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md border border-neutral-800/80 bg-[#121218] text-neutral-300 hover:border-neutral-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Identity Anchor, Permanent Clear Photo & Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Identity Snapshot Card */}
          <div className="p-6 sm:p-7 rounded-2xl border border-neutral-800/80 bg-[#111116]/80 backdrop-blur-sm space-y-6">
            
            {/* Top Identity Block - Always clear photo */}
            <div className="flex items-center gap-4 pb-6 border-b border-neutral-800/70">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-neutral-700/80 bg-neutral-900 shrink-0 shadow-md">
                <img
                  src="/profile.png"
                  alt="Vivek Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Vivek Yadav
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">
                  Software Engineering & AI
                </p>
                <span className="inline-block mt-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20">
                  ● 3rd Year Undergrad
                </span>
              </div>
            </div>

            {/* Metadata Rows */}
            <div className="space-y-3 font-mono">
              {metadata.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1.5 border-b border-neutral-800/40 gap-1"
                >
                  <span className="text-neutral-500 uppercase tracking-wider text-[10px]">
                    {item.label}
                  </span>
                  <span className="text-neutral-200 font-medium sm:text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Pillars: What I Build */}
          <div className="p-6 sm:p-7 rounded-2xl border border-neutral-800/80 bg-[#111116]/80 backdrop-blur-sm space-y-4">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block">
              WHAT I BUILD
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {buildPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-3 rounded-xl border border-neutral-800/60 bg-[#0e0e13]/60 space-y-1"
                >
                  <h5 className="text-xs font-mono font-bold text-neutral-200">
                    {pillar.title}
                  </h5>
                  <p className="text-[11px] text-neutral-500 leading-snug">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}