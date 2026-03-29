"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  const displayedProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-mono font-bold text-white">
          <span className="text-mission-accent">./</span>Projects
        </h2>
        <div className="h-px bg-mission-dark flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {displayedProjects.map((project, index) => (
          <RevealOnScroll key={index} delay={index * 0.1}>
            <div
              className="group relative glass-panel p-6 rounded-xl hover:border-mission-accent transition-all duration-300 hover:glow-box"
            >
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <project.icon className="w-8 h-8 text-mission-accent-dim group-hover:text-mission-accent" />
              </div>
              
              <div className="mb-4">
                <span className={`text-xs font-mono px-2 py-1 rounded border ${
                  project.status === "Beta" ? "border-yellow-500/50 text-yellow-500" :
                  project.status === "Released" || project.status === "Active" || project.status === "Stable" ? "border-green-500/50 text-green-500" :
                  "border-mission-text/50 text-mission-text"
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-mono mb-2 group-hover:text-mission-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-mission-text mb-6 min-h-[3rem]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-mission-accent-dim">
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-white hover:text-mission-accent transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                ) : (
                  <button className="flex items-center gap-2 text-sm font-mono text-white hover:text-mission-accent transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </button>
                )}
                 <button className="flex items-center gap-2 text-sm font-mono text-white hover:text-mission-accent transition-colors">
                    <ExternalLink className="w-4 h-4" /> Demo
                 </button>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

       <div className="flex justify-center">
            <Link 
                href="/projects" 
                className="group flex items-center gap-2 px-8 py-3 border border-mission-accent text-mission-accent font-mono hover:bg-mission-accent hover:text-mission-bg transition-all duration-300"
            >
                View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
       </div>
    </section>
  );
}
