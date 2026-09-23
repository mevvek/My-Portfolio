import React from "react";
import { motion } from "framer-motion";
import { CREDENTIALS } from "../data/certificates";

export default function Certificates() {
  return (
    <section
  id="certificates"
  className="relative w-full py-28 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0a0a0c] border-t border-neutral-900/60"
>
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
          / CREDENTIALS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          PROOF OF WHAT I’VE BUILT.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal leading-relaxed">
          Certifications, credentials, and completed learning experiences that support my work across software, AI, and development.
        </p>
      </div>

      {/* Document Index Archive Layout */}
      <div className="border-t border-neutral-800/80 divide-y divide-neutral-800/70">
        {CREDENTIALS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: idx * 0.06, ease: "easeOut" }}
            className="group py-6 sm:py-8 px-3 sm:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5 transition-colors duration-200 hover:bg-[#111116]/40"
          >
            {/* Left: Index + Title + Org */}
            <div className="flex items-start sm:items-center gap-5 sm:gap-8">
              <span className="font-mono text-sm sm:text-base font-semibold text-neutral-600 group-hover:text-blue-400 transition-colors pt-1 sm:pt-0">
                {item.id}
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-200 group-hover:text-white transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-neutral-800 bg-[#14141c] text-neutral-400 uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
                <p className="font-mono text-xs text-neutral-500">
                  {item.organization}
                </p>
              </div>
            </div>

            {/* Right: Document & Verification Actions */}
            <div className="flex flex-wrap items-center gap-3 pl-9 sm:pl-0 pt-2 lg:pt-0">
              <a
                href={encodeURI(item.localDocument)}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-neutral-800 bg-[#14141c] hover:bg-[#1c1c27] hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-mono transition-all duration-200"
              >
                <svg
                  className="w-3.5 h-3.5 text-neutral-500 group-hover/btn:text-blue-400 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span>VIEW CERTIFICATE</span>
                <span className="text-neutral-500 group-hover/btn:text-blue-400 transition-colors">↗</span>
              </a>

              {item.verificationUrl && (
                <a
                  href={item.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/verify inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-blue-900/40 bg-blue-950/20 hover:bg-blue-950/40 hover:border-blue-700/50 text-blue-300 hover:text-blue-200 text-xs font-mono transition-all duration-200"
                >
                  <span>VERIFY CREDENTIAL</span>
                  <span className="text-blue-400 group-hover/verify:translate-x-0.5 transition-transform duration-200">↗</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Section End Subtitle */}
      <div className="mt-16 text-center">
        <p className="font-mono text-xs text-neutral-600 tracking-wider">
          "Credentials are proof of learning. Projects are proof of application."
        </p>
      </div>
    </section>
  );
}