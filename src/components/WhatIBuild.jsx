import React from "react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    id: "01",
    title: "AI Products",
    tag: "Intelligence",
    description:
      "Production-ready AI applications, intelligent workflow automations, and deep LLM API integrations designed for practical utility.",
    bullets: ["Prompt Engineering & Agents", "Real-time AI Streaming", "Groq / OpenAI Workflows"],
  },
  {
    id: "02",
    title: "Full-Stack Applications",
    tag: "Architecture",
    description:
      "End-to-end web applications with robust backend APIs, secure authentication, reactive client state, and scalable databases.",
    bullets: ["MERN / Modern Full Stack", "WebSockets & Live State", "Database Architecture"],
  },
  {
    id: "03",
    title: "Developer Experiences",
    tag: "Performance",
    description:
      "Fast, minimalist user interfaces built with micro-interactions, clean system design, and zero bloat.",
    bullets: ["Responsive UI Systems", "API Contracts & Performance", "Modern CI/CD Deployment"],
  },
];

export default function WhatIBuild() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0a0a0c] border-t border-neutral-900/60">
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
          // CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          WHAT I BUILD.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-3 font-normal">
          Bridging the gap between intelligent AI systems and production-ready web interfaces.
        </p>
      </div>

      {/* 3 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PILLARS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl p-7 bg-[#111116]/80 border border-neutral-800/80 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-950/20 backdrop-blur-sm"
          >
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between font-mono text-xs mb-6 text-neutral-500">
                <span className="group-hover:text-blue-400 transition-colors">
                  {item.id}
                </span>
                <span className="px-2.5 py-0.5 rounded-full border border-neutral-800 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-colors">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bullets */}
            <div className="pt-8 border-t border-neutral-800/50 mt-8 space-y-2">
              {item.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-mono text-neutral-400 group-hover:text-neutral-300 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400/80" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}