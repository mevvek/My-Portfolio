import React, { useState } from "react";
import { motion } from "framer-motion";
import { TECH_CATEGORIES, CORE_FOUNDATIONS } from "../data/skills";

export default function TechStack() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <section
      id="tech-stack"
      className="relative w-full scroll-mt-20 py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0a0a0c] border-t border-neutral-900/60"
    >
      {/* SECTION HEADER */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
          / TECH STACK
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          TECHNOLOGIES I BUILD WITH.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal leading-relaxed">
          Tools and technologies I use across AI, frontend engineering, backend systems, databases, and deployment.
        </p>
      </div>

      {/* 2 x 2 CATEGORY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECH_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className={`group relative flex flex-col justify-between rounded-2xl p-7 sm:p-8 bg-[#111116] border transition-all duration-300 overflow-hidden select-none ${
              cat.id === "01"
                ? "border-blue-900/50 hover:border-blue-500/50 hover:bg-blue-950/[0.08]"
                : cat.id === "02"
                  ? "border-sky-900/40 hover:border-sky-500/40 hover:bg-sky-950/[0.06]"
                  : cat.id === "03"
                    ? "border-emerald-900/40 hover:border-emerald-500/40 hover:bg-emerald-950/[0.06]"
                    : "border-amber-900/30 hover:border-amber-500/35 hover:bg-amber-950/[0.05]"
            }`}
          >
            {/* Subtle technical background watermark & grid line */}
            <span className="absolute -bottom-3 -right-1 font-mono text-7xl font-black text-neutral-900/40 pointer-events-none select-none tracking-tighter">
              {cat.id}
            </span>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neutral-800/10 to-transparent pointer-events-none" />

            <div>
              {/* Category Top Bar */}
              <div className="flex items-center justify-between font-mono text-xs mb-4">
                <span className="text-neutral-500 text-[11px] group-hover:text-neutral-400 transition-colors">
                  SEC // {cat.id}
                </span>
                <span
                    className={`px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase font-semibold border transition-colors duration-300 ${
                    cat.tag === "CORE FOCUS"
                      ? "bg-blue-950/60 border-blue-800/60 text-blue-300 group-hover:text-blue-200"
                      : "bg-neutral-900 border-neutral-800 text-neutral-400 group-hover:text-neutral-200"
                  }`}
                >
                  {cat.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-neutral-100">
                {cat.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative"
                    onMouseEnter={() => setActiveTooltip(skill.name)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <span className="inline-block px-3 py-1.5 rounded-md bg-[#16161e] border border-neutral-800/80 text-[11px] sm:text-xs font-mono text-neutral-300 hover:-translate-y-0.5 hover:text-white hover:border-neutral-700 hover:bg-[#1a1a24] transition-all duration-200 cursor-default">
                      {skill.name}
                    </span>

                    {/* Micro Tooltip */}
                    {activeTooltip === skill.name && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-300 shadow-xl pointer-events-none whitespace-nowrap z-30">
                        {skill.desc}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom accent indicator */}
            <div className="pt-6 mt-6 border-t border-neutral-800/50 flex items-center justify-between text-[11px] font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
              <span>ACTIVE_TOOLING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 opacity-70 group-hover:bg-blue-400 group-hover:opacity-90 animate-pulse transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* SECONDARY FOUNDATIONAL CONCEPTS STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group mt-8 rounded-xl bg-[#111116]/60 border border-neutral-800/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-300 hover:border-neutral-700/80 hover:bg-[#111116]/80"
      >
        <div className="font-mono text-xs text-neutral-400 flex items-center gap-2">
          <span className="text-neutral-500">FOUNDATIONS //</span>
          <span className="text-neutral-300 font-medium">Core Computer Science & Languages</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {CORE_FOUNDATIONS.map((concept) => (
            <span
              key={concept}
              className="px-2.5 py-1 rounded bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono text-neutral-400 hover:-translate-y-0.5 hover:text-neutral-200 hover:border-neutral-700 transition-all duration-200"
            >
              {concept}
            </span>
          ))}
        </div>
      </motion.div>

      {/* SECTION END VISUAL TRANSITION */}
      <div className="mt-16 text-center">
        <p className="font-mono text-xs text-neutral-500 tracking-wider uppercase">
          — Always learning. Always building. —
        </p>
      </div>
    </section>
  );
}