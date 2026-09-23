import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vivek-yadav-a3b349301",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mevvek?stkn=MTBneXFldWhwbmdtMA==",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/mevvek",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Linktree",
    url: "https://linktr.ee/mevvek",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="m13.736 5.853 4.006-4.115 2.325 2.38-4.27 4.385h6.203v3.394h-6.203l4.27 4.386-2.325 2.38-4.006-4.115v9.652h-3.472v-9.652L6.258 22.66l-2.325-2.38 4.27-4.386H2v-3.394h6.203L3.933 8.498l2.325-2.38 4.006 4.115V.58h3.472v5.273z" />
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com/mevvvek",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:vivek90160@gmail.com",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [hoveredTip, setHoveredTip] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 80 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    const { clientWidth, clientHeight } = document.documentElement;
    const x = e.clientX / clientWidth - 0.5;
    const y = e.clientY / clientHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#0a0a0c]"
    >
      {/* BACKGROUND / PHOTO LAYER */}
      <motion.div
        style={{ x: imageX, y: imageY }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-full md:w-[60%] lg:w-[55%] h-full z-0 pointer-events-none"
      >
        <img
          src="/profile.png"
          alt="Vivek Yadav"
          className="w-full h-full object-cover object-[center_top] md:object-[65%_top] contrast-[1.02] brightness-95 select-none"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-[#0a0a0c]/80 md:hidden" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0a0a0c] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
      </motion.div>

      {/* Atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-blue-500/[0.07] blur-[160px] pointer-events-none rounded-full" />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-xs font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            HI, I'M VIVEK. <br />
            <span className="text-neutral-400 font-normal">I CODE. DEPLOY.</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
              AUTOMATE WITH AI.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm sm:text-base text-neutral-300 md:text-neutral-400 max-w-lg leading-relaxed font-normal"
          >
            I’m a full-stack developer focused on building, deploying, and improving real-world software. I work across modern web technologies, APIs, databases, and AI to turn ideas into practical products. I enjoy solving problems through clean code, automation, and continuous experimentation with emerging technologies.
          </motion.p>

          {/* Social Icon Dock */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-1 flex items-center"
          >
            <div className="inline-flex items-center gap-2">
              {SOCIAL_LINKS.map((item) => (
                <div key={item.name} className="relative flex flex-col items-center">
                  <a
                    href={item.url}
                    target={item.name === "Email" ? "_self" : "_blank"}
                    rel={item.name === "Email" ? undefined : "noopener noreferrer"}
                    aria-label={item.name}
                    onMouseEnter={() => setHoveredTip(item.name)}
                    onMouseLeave={() => setHoveredTip(null)}
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#111116] border border-neutral-800/90 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04]"
                  >
                    {item.icon}
                  </a>

                  {hoveredTip === item.name && (
                    <span className="absolute -top-7 px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-200 shadow-md pointer-events-none whitespace-nowrap z-20">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2 font-mono text-xs"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-neutral-200 transition-all shadow-lg hover:shadow-white/10"
            >
              Explore My Work →
            </a>

            {/* Local PDF Resume */}
            <a
              href="/certificates/vivekyadav_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-blue-500/30 bg-blue-950/40 hover:bg-blue-900/50 text-blue-200 hover:text-white transition-all shadow-lg shadow-blue-950/20 backdrop-blur-md"
            >
              <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Resume ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}