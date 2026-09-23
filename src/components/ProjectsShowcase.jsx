import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/projects";

export default function ProjectsShowcase() {
  return (
    <section
      id="work"
      className="relative w-full py-24 px-6 sm:px-12 md:px-16 lg:px-24 bg-[#0a0a0c] border-t border-neutral-900/60"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">
          / PROJECTS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">
          SELECTED WORK.
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 mt-2 font-normal">
          Things I've built, deployed, and experimented with.
        </p>
      </div>

      {/* Clean 3 x 2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}