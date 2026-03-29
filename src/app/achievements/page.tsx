import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
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
            <span className="text-mission-accent">./</span>Achievements
            </h1>
            <div className="h-px bg-mission-dark flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
                <div
                key={index}
                className="group relative glass-panel p-6 rounded-xl hover:border-mission-accent transition-all duration-300 hover:glow-box flex flex-col h-full"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-mission-dark/50 rounded-md border border-white/5 group-hover:bg-mission-accent/20 transition-colors">
                            <achievement.icon className="w-6 h-6 text-mission-accent" />
                        </div>
                        <span className="text-xs font-mono text-mission-text/60 border border-white/10 px-2 py-1 rounded">
                            {achievement.date}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-mono mb-1 group-hover:text-mission-accent transition-colors">
                        {achievement.title}
                    </h3>
                    <p className="text-sm text-mission-text/60 mb-4 font-mono">
                        {achievement.issuer}
                    </p>
                    
                    <p className="text-mission-text mb-6 flex-grow">
                        {achievement.description}
                    </p>

                    <a 
                        href={achievement.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 text-sm font-mono text-mission-accent border border-mission-accent/20 bg-mission-accent/5 py-2 rounded group-hover:bg-mission-accent group-hover:text-mission-bg transition-all duration-300"
                    >
                        <ExternalLink className="w-4 h-4" /> View Details
                    </a>
                </div>
            ))}
        </div>
      </main>
    </div>
  );
}
