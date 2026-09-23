import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full py-28 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0a0a0c] border-t border-neutral-900/60"
    >
      {/* SECTION HEADER */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
          / EXPERIENCE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          BUILDING EXPERIENCE, ONE SYSTEM AT A TIME.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal leading-relaxed">
          Hands-on experience across AI deployment, automation, full-stack development, and practical software engineering.
        </p>
      </div>

      {/* CONTINUOUS CAREER DOSSIER LOG */}
      <div className="border-t border-neutral-800/80 divide-y divide-neutral-800/80">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="group relative py-12 px-2 sm:px-6 transition-colors duration-300 hover:bg-[#111116]/40"
          >
            {/* Subtle left accent border on hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-blue-500/80 transition-colors duration-300" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* ZONE 1: NUMBER & YEAR / STATUS */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-2 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-neutral-500 group-hover:text-blue-400 transition-colors">
                    {exp.id} //
                  </span>
                  <span className="text-xs text-neutral-600">SYS_LOG</span>
                </div>

                {exp.status === "ONGOING" ? (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-400 text-[11px] tracking-wider mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span>ONGOING</span>
                  </div>
                ) : (
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-400 group-hover:text-white transition-colors">
                    {exp.year}
                  </span>
                )}
              </div>

              {/* ZONE 2 & 3: ROLE, RESPONSIBILITIES & TECH */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
                    {exp.role}
                  </h3>

                  {/* Company & Meta (if available) */}
                  {(exp.company || exp.durationLabel) && (
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs font-mono text-neutral-400">
                      {exp.company && (
                        <span className="text-neutral-300 font-medium">{exp.company}</span>
                      )}
                      {exp.type && (
                        <>
                          <span className="text-neutral-600">·</span>
                          <span>{exp.type}</span>
                        </>
                      )}
                      {exp.durationLabel && (
                        <>
                          <span className="text-neutral-600">·</span>
                          <span className="text-blue-400/90">{exp.durationLabel}</span>
                          {exp.duration && (
                            <span className="text-neutral-600">({exp.duration})</span>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Structured Responsibilities */}
                {exp.responsibilities && (
                  <div className="space-y-2 pt-1">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed"
                      >
                        <span className="text-neutral-600 group-hover:text-blue-400 transition-colors mt-1 font-mono text-xs">
                          ▹
                        </span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Brief description for ongoing entries */}
                {exp.description && (
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                )}

                {/* Compact Technical Metadata */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#16161e] border border-neutral-800/80 text-[10px] sm:text-[11px] font-mono text-neutral-400 group-hover:text-neutral-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* ZONE 4: VERIFIED DOCUMENTS */}
              <div className="lg:col-span-3 pt-2 lg:pt-0">
                <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#0e0e13]/80 group-hover:border-neutral-700/80 transition-all duration-300">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-wider pb-3 mb-3 border-b border-neutral-800/60">
                    <span>VERIFIED RECORDS</span>
                    <svg className="w-3.5 h-3.5 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    {exp.documents?.map((doc) => (
                      <a
                        key={doc.name}
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/doc flex items-center justify-between p-2.5 rounded-lg border border-neutral-800 bg-[#14141c] hover:bg-[#1b1b26] hover:border-blue-500/40 text-neutral-300 hover:text-white transition-all duration-200"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-3.5 h-3.5 text-neutral-500 group-hover/doc:text-blue-400 transition-colors"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <polyline points="13 2 13 9 20 9" />
                          </svg>
                          <span className="text-[11px]">{doc.name}</span>
                        </div>
                        <span className="text-neutral-500 group-hover/doc:text-blue-400 group-hover/doc:translate-x-0.5 transition-transform duration-200 text-xs">
                          ↗
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}