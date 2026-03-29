import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-mission-bg">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-mission-bg/60 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
           <Link href="/" className="inline-flex items-center gap-2 text-mission-accent hover:text-white transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-mono font-bold">Return to Mission Control</span>
           </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-12">
            <h1 className="text-4xl font-mono font-bold text-white">
            <span className="text-mission-accent">./</span>All_Projects
            </h1>
            <div className="h-px bg-mission-dark flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div
                key={index}
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
            ))}
        </div>
      </main>
    </div>
  );
}
