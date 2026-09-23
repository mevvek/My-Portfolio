import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TECH_ITEMS = [
  "React",
  "Node.js",
  "MongoDB",
  "Python",
  "FastAPI",
  "AI / LLMs",
  "Git",
];

export default function IntroLoader({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast tech switcher
    const techInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < TECH_ITEMS.length - 1) return prev + 1;
        return prev;
      });
    }, 280);

    // Smooth counter to 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 35);

    // Auto complete around 2.4s
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 2400);

    // ESC to skip
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onComplete();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(techInterval);
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(12px)", y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0a0a0c] text-neutral-300 p-8 select-none"
    >
      {/* Top bar */}
      <div className="flex justify-between items-center text-xs font-mono text-neutral-500 tracking-wider">
        <span>VIVEK.DEV // SYS_INIT</span>
        <button
          onClick={onComplete}
          className="hover:text-neutral-200 transition-colors cursor-pointer px-2 py-1 rounded border border-neutral-800 hover:border-neutral-600"
        >
          SKIP [ESC]
        </button>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          VIVEK<span className="text-blue-500">.DEV</span>
        </motion.h1>

        <p className="text-xs md:text-sm font-mono text-neutral-400">
          Initializing developer environment...
        </p>

        {/* Dynamic Tech Stream */}
        <div className="h-10 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={TECH_ITEMS[currentIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-lg md:text-xl font-mono text-blue-400 font-medium"
            >
              {`> ${TECH_ITEMS[currentIndex]}`}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Micro progress line */}
        <div className="w-48 h-[2px] bg-neutral-800 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center text-xs font-mono text-neutral-500">
        <span>STATUS: {progress === 100 ? "READY" : "LOADING_MODULES"}</span>
        <span>{progress}%</span>
      </div>
    </motion.div>
  );
}