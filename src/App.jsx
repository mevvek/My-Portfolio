import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsShowcase from "./components/ProjectsShowcase";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-blue-500/20 selection:text-blue-300">
      <AnimatePresence mode="wait">
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <ProjectsShowcase />
            <TechStack />
            <Experience />
            <Education />
            <Certificates />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}