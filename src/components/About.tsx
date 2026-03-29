"use client";

import { Rocket, Trophy, Users } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mission-dark to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <h2 className="text-3xl font-mono font-bold text-white mb-12 text-center md:text-left">
            <span className="text-mission-accent">./</span>Bio & Experience
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Profile & Mission */}
            <div className="space-y-8">
                 <RevealOnScroll delay={0.1}>
                   <div className="relative p-1 rounded-xl group hover:border-mission-accent transition-colors duration-300">
                       <div className="absolute inset-0 bg-mission-accent/5 rounded-xl blur-xl -z-10" />
                       
                       <div className="flex flex-col items-center p-6 glass-panel rounded-lg text-center">
                          <div className="relative w-40 h-56 shrink-0 overflow-hidden rounded-lg border-2 border-mission-accent glow-box shadow-[0_0_15px_rgba(102,252,241,0.3)] mb-6">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img 
                                  src="/profile1.jpeg" 
                                  alt="Vivek Kumar" 
                                  className="w-full h-full object-cover object-top"
                              />
                          </div>
                          
                          <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2 mb-2">
                              <Rocket className="w-5 h-5 text-mission-accent" />
                              Mission Status
                          </h3>
                          <p className="text-mission-text leading-relaxed font-sans text-sm">
                              Data Analyst and Python Developer dedicated to driving organizational growth through precise financial modeling, automation, and market trend interpretation.
                          </p>
                          <div className="w-full mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-mission-accent-dim">
                               <span>EXP: 1+ YEARS</span>
                               <span className="animate-pulse flex items-center gap-2">
                                   <span className="w-2 h-2 rounded-full bg-green-500" />
                                   ONLINE
                               </span>
                           </div>
                       </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                  <div className="p-6 glass-panel rounded-xl">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-mission-accent" /> Education
                      </h3>
                      <ul className="space-y-4">
                          <li className="border-l-2 border-mission-accent/50 pl-4">
                              <h4 className="text-white font-mono font-bold">B.E. Computer Science</h4>
                              <p className="text-mission-text text-sm">Chandigarh University | 2023–Present</p>
                              <p className="text-mission-text/60 text-xs">CGPA: 7.69</p>
                          </li>
                          <li className="border-l-2 border-mission-accent/50 pl-4">
                              <h4 className="text-white font-mono font-bold">B.E. Data Analyst</h4>
                              <p className="text-mission-text text-sm">Coding Ninjas & IIT Guwahati | June2025–Dec2025</p>
                              <p className="text-mission-text/60 text-xs">Qualified</p>
                          </li>
                           <li className="border-l-2 border-mission-accent/50 pl-4">
                              <h4 className="text-white font-mono font-bold">Senior Secondary (Science)</h4>
                              <p className="text-mission-text text-sm">Oxford Public School | 2020–2022</p>
                              <p className="text-mission-text/60 text-xs">84%</p>
                          </li>
                      </ul>
                  </div>
                </RevealOnScroll>
            </div>

            {/* Right Column: Experience Timeline */}
            <div className="space-y-6">
                <RevealOnScroll delay={0.3}>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-mission-accent" /> Experience Log
                  </h3>

                  <div className="relative border-l border-mission-dark ml-3 pl-8 space-y-8">
                      {[
                          { role: "Python Developer", company: "The Developer Arena", date: "Nov 2025 - Present", desc: "Built modular automation systems integrating 6+ utilities and Django applications." },
                          { role: "Head of Event Planning and Management", company: "Aerospace Club, Chandigarh University", date: "Jan 2026 - Present", desc: "Organized and managed events, ensuring smooth execution and attendee satisfaction." },
                          { role: "Data Analyst Intern", company: "IIT Guwahati & Coding Ninjas", date: "June – Dec 2025", desc: "Analyzed datasets using SQL/Power BI, generated forecasting insights." },
                          { role: "Content Writer", company: "YUVA Intern", date: "Sept – Oct 2025", desc: "Authored structured articles improving engagement and readability." },
                          { role: "SAP FICO", company: "YUVA Intern", date: "Sept – Oct 2025", desc: "Learned SAP FICO"},
                          { role: "Product Management Intern", company: "E-Cell, IIT Guwahati", date: "June – July 2025", desc: "Conducted market analysis using SQL/APIs for go-to-market strategy." },
                          { role: "Frontend Developer Intern", company: "Cognifyz Technologies", date: "May – June 2025", desc: "Developed responsive interfaces improving UI consistency." }
                      ].map((job, i) => (
                          <div key={i} className="relative group">
                              <span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-mission-dark border border-mission-accent group-hover:bg-mission-accent transition-colors" />
                              <h4 className="text-white font-bold font-mono group-hover:text-mission-accent transition-colors">{job.role}</h4>
                              <p className="text-mission-accent-dim text-xs font-mono mb-1">{job.company} | {job.date}</p>
                              <p className="text-mission-text text-sm leading-relaxed">{job.desc}</p>
                          </div>
                      ))}
                  </div>
                </RevealOnScroll>
            </div>
        </div>
      </div>
    </section>
  );
}
