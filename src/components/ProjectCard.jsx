import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between h-full bg-[#111116] border border-neutral-800/90 hover:border-neutral-700/80 rounded-2xl p-7 transition-colors duration-300 overflow-hidden select-none"
    >
      {/* Subtle oversized watermark */}
      <span className="absolute -bottom-4 -right-2 font-mono text-7xl font-black text-neutral-900/60 pointer-events-none select-none tracking-tighter group-hover:text-neutral-800/40 transition-colors duration-300">
        {project.id}
      </span>

      {/* Top Meta */}
      <div>
        <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-neutral-400 mb-6">
          <span className="opacity-70 group-hover:opacity-100 group-hover:text-blue-400 transition-colors">
            {project.id}
          </span>
          <div className="flex items-center gap-2">
            {project.badge && (
              <span className="px-2 py-0.5 rounded text-[10px] tracking-wider uppercase bg-blue-950/50 text-blue-300 border border-blue-800/40">
                {project.badge}
              </span>
            )}
            <span className="tracking-wider uppercase opacity-70">
              {project.category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 leading-snug group-hover:text-neutral-100">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-[#16161e] border border-neutral-800/80 text-[11px] font-mono text-neutral-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className={`relative z-10 pt-4 border-t border-neutral-800/60 flex items-center ${project.liveUrl ? "justify-between" : "justify-end"}`}>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live project for ${project.title}`}
            title="Open live project"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors group/link py-1"
          >
            <svg className="w-3.5 h-3.5 text-neutral-400 group-hover/link:text-blue-400 transition-colors stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Live Demo</span>
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title}`}
            title="View source code"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors group/link py-1"
          >
            <svg className="w-3.5 h-3.5 fill-current group-hover/link:text-white transition-colors" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Source</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}