import React from "react";
import { motion } from "framer-motion";
import {
  PRIMARY_EDUCATION,
  SECONDARY_EDUCATION,
  PROGRESSION_STEPS,
} from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full py-28 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0a0a0c] border-t border-neutral-900/60 overflow-hidden"
    >
      {/* SECTION HEADER */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
          / EDUCATION
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          ACADEMIC PROFILE.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal leading-relaxed">
          Academic foundation behind the work I build.
        </p>
      </div>

      {/* TWO-COLUMN EDITORIAL COMPOSITION (55% LEFT / 45% RIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT 55%: ACADEMIC TIMELINE */}
        <div className="lg:col-span-7">
          {/* PRIMARY ENTRY: BCA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative pb-12 pl-6 sm:pl-8 border-l border-neutral-800 hover:border-blue-500/50 transition-colors duration-300"
          >
            {/* Active timeline pulse marker */}
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-[#0a0a0c]">
              <span className="absolute -inset-1 rounded-full bg-blue-400/40 animate-ping" />
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs sm:text-sm text-neutral-400 font-semibold tracking-wider">
                  {PRIMARY_EDUCATION.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-[10px] font-mono tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  {PRIMARY_EDUCATION.status}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                  {PRIMARY_EDUCATION.degree}
                </h3>
                <p className="text-sm font-mono text-blue-400 mt-0.5 tracking-wider">
                  {PRIMARY_EDUCATION.shortDegree}
                </p>
              </div>

              <div className="text-xs sm:text-sm font-mono text-neutral-400 pt-1">
                <p className="text-neutral-200 font-medium">
                  {PRIMARY_EDUCATION.institution}
                </p>
                <p className="text-neutral-500 text-xs">
                  {PRIMARY_EDUCATION.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* SECONDARY ENTRIES: 12TH & 10TH */}
          <div className="pl-6 sm:pl-8 border-l border-neutral-800/60 space-y-8 pt-1">
            {SECONDARY_EDUCATION.map((item, idx) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 * (idx + 1) }}
                className="group/item relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-neutral-800/40 pb-6"
              >
                {/* Timeline node */}
                <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-2 h-2 rounded-full bg-neutral-700 group-hover/item:bg-neutral-500 transition-colors ring-4 ring-[#0a0a0c]" />

                <div>
                  <h4 className="text-sm font-mono font-bold tracking-wider text-neutral-300 group-hover/item:text-white transition-colors">
                    {item.level}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    {item.school} <span className="text-neutral-600">·</span> {item.board}
                  </p>
                  <p className="font-mono text-[11px] text-neutral-500 mt-0.5">
                    {item.duration}
                  </p>
                </div>

                <div className="font-mono text-base font-semibold text-neutral-300 group-hover/item:text-white transition-colors">
                  {item.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT 45%: ACADEMIC SNAPSHOT & PROGRESSION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 relative rounded-2xl border border-neutral-800/80 bg-[#111116]/90 p-7 sm:p-9 overflow-hidden"
        >
          {/* Faded background watermark */}
          <span className="absolute -bottom-6 -right-2 font-mono text-7xl sm:text-8xl font-black text-neutral-900/40 select-none pointer-events-none tracking-tighter">
            2024—27
          </span>

          {/* Top Label */}
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pb-5 mb-6 border-b border-neutral-800/70">
            <span className="tracking-wider uppercase">ACADEMIC SNAPSHOT</span>
            <span className="text-neutral-400">IN PROGRESS</span>
          </div>

          {/* Anchor Metric */}
          <div className="mb-8">
            <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
              CURRENT CGPA
            </div>
            <div className="text-5xl sm:text-6xl font-extrabold text-white font-mono tracking-tight mt-1">
              8.2
            </div>
            <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-[10px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              CURRENTLY PURSUING
            </div>
          </div>

          {/* Progression Visualization */}
          <div className="pt-6 border-t border-neutral-800/70">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4">
              ACADEMIC PROGRESSION PATH
            </div>

            <div className="grid grid-cols-3 gap-2 relative">
              {PROGRESSION_STEPS.map((step, idx) => (
                <div
                  key={step.label}
                  className={`p-3 rounded-xl border text-center transition-all duration-200 ${
                    step.active
                      ? "border-sky-500/30 bg-sky-950/20 text-white"
                      : "border-neutral-800/80 bg-[#0e0e13]/60 text-neutral-400"
                  }`}
                >
                  <div className="text-[11px] font-mono font-bold text-neutral-300">
                    {step.label}
                  </div>
                  <div
                    className={`text-sm sm:text-base font-mono font-bold mt-1 ${
                      step.active ? "text-sky-400" : "text-neutral-200"
                    }`}
                  >
                    {step.metric}
                  </div>
                  <div className="text-[9px] font-mono text-neutral-500 mt-1">
                    {step.year}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-600 mt-4 px-1">
              <span>Foundation</span>
              <span>→</span>
              <span>Senior Secondary</span>
              <span>→</span>
              <span className="text-neutral-400">Degree</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}