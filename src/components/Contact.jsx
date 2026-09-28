import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "vivek90160@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", " ");
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vivek-yadav-a3b349301",
    },
    {
      name: "GitHub",
      url: "https://github.com/mevvek",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mevvek",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full pt-28 pb-12 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0a0a0c] border-t border-neutral-900/80 overflow-hidden"
    >
      {/* Background Watermark */}
      <span className="absolute right-4 -bottom-10 font-mono text-8xl sm:text-9xl font-black text-neutral-900/25 select-none pointer-events-none tracking-tighter">
        CONNECT
      </span>

      {/* Main Two-Column Closing Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24 border-b border-neutral-900/80">
        {/* Left Column: Heading, Supporting Text, Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6"
        >
          <div>
            <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
              / LET'S TALK
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mt-3">
              LET'S BUILD <br />
              <span className="text-neutral-400">SOMETHING USEFUL.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
            Have an idea, opportunity, or project in mind? Let's connect and build
            something meaningful.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
        </motion.div>

        {/* Right Column: Direct Reach & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5 relative rounded-2xl border border-neutral-800/80 bg-[#111116]/80 backdrop-blur-sm p-7 sm:p-9 space-y-8"
        >
          {/* Email Direct Reach */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
              <span>DIRECT REACH</span>
              <span>INBOX</span>
            </div>

            <p className="font-mono text-lg sm:text-xl font-semibold text-white break-all">
              {email}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-800 bg-[#14141c] hover:border-neutral-700 hover:bg-[#1a1a24] text-neutral-300 hover:text-white text-xs font-mono transition-all duration-200"
              >
                <svg
                  className="w-3.5 h-3.5 text-neutral-500 group-hover/btn:text-blue-400 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>{copied ? "COPIED ✓" : "COPY EMAIL"}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="group/mail inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-blue-900/40 bg-blue-950/25 hover:bg-blue-900/40 hover:border-blue-700/60 text-blue-300 hover:text-blue-200 text-xs font-mono transition-all duration-200"
              >
                <span>SEND EMAIL</span>
                <span className="text-blue-400 group-hover/mail:translate-x-0.5 transition-transform duration-200">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Social / Professional Directory */}
          <div className="pt-6 border-t border-neutral-800/80 space-y-4">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block">
              CONNECT / SOCIALS
            </span>

            <div className="grid grid-cols-2 gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between px-3.5 py-2 rounded-lg border border-neutral-800/80 bg-[#0e0e13]/60 hover:bg-[#15151f] hover:border-neutral-700 text-neutral-400 hover:text-white text-xs font-mono transition-all duration-200"
                >
                  <span>{item.name}</span>
                  <span className="text-neutral-600 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 transition-all duration-200">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Minimal Editorial Footer */}
      <footer className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>SYSTEM ONLINE</span>
          <span className="text-neutral-700">·</span>
          <span>© 2026 Vivek Yadav</span>
        </div>

        <div className="text-center sm:text-left text-neutral-500 text-[11px]">
          Built with React · Designed & developed by Vivek
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top of page"
          className="hover:text-neutral-200 transition-colors duration-200 flex items-center gap-1 cursor-pointer"
        >
          BACK TO TOP ↑
        </button>
      </footer>
    </section>
  );
}