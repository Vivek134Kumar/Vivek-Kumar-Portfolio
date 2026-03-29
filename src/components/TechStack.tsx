"use client";

import { 
  Code2, 
  Database, 
  Layout, 
  BarChart3, 
  Terminal, 
  Cpu, 
  Globe, 
  Workflow, 
  FileSpreadsheet, 
  LineChart, 
  BrainCircuit,
  Server
} from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function TechStack() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-5 h-5 text-mission-accent" />,
      skills: [
        { name: "Python", icon: <Code2 className="w-4 h-4" /> },
        { name: "SQL", icon: <Database className="w-4 h-4" /> },
        { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
        { name: "HTML5", icon: <Layout className="w-4 h-4" /> },
        { name: "CSS3", icon: <Layout className="w-4 h-4" /> },
        { name: "C/C++", icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Server className="w-5 h-5 text-mission-accent" />,
      skills: [
        { name: "Django", icon: <Globe className="w-4 h-4" /> },
        { name: "React & Next.js", icon: <Layout className="w-4 h-4" /> },
        { name: "Pandas & NumPy", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Scikit-learn", icon: <BrainCircuit className="w-4 h-4" /> },
        { name: "JSON Data Handling", icon: <FileSpreadsheet className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <Layout className="w-4 h-4" /> }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Cpu className="w-5 h-5 text-mission-accent" />,
      skills: [
        { name: "Power BI", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Tabular Editor", icon: <FileSpreadsheet className="w-4 h-4" /> },
        { name: "Excel / Google Sheets", icon: <FileSpreadsheet className="w-4 h-4" /> },
        { name: "Git & GitHub", icon: <Code2 className="w-4 h-4" /> },
        { name: "VS Code", icon: <Terminal className="w-4 h-4" /> },
        { name: "Figma", icon: <Layout className="w-4 h-4" /> },
        { name: "Google Colab", icon: <Code2 className="w-4 h-4" /> },
      ]
    },
    {
      title: "Analytic Methods",
      icon: <Workflow className="w-5 h-5 text-mission-accent" />,
      skills: [
        { name: "Exploratory Data Analysis (EDA)", icon: <LineChart className="w-4 h-4" /> },
        { name: "Forecasting & Trend Analysis", icon: <LineChart className="w-4 h-4" /> },
        { name: "Data Visualisation", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Data Cleaning & Processing", icon: <Database className="w-4 h-4" /> },
        { name: "Automation & Scripting", icon: <Terminal className="w-4 h-4" /> },
        { name: "REST API Development", icon: <Globe className="w-4 h-4" /> },
        { name: "FastAPI", icon: <Globe className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section className="py-20 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="flex items-center gap-2 mb-12">
            <Cpu className="w-6 h-6 text-mission-accent" />
            <h2 className="text-2xl font-mono font-bold text-white">
              <span className="text-mission-accent">System.</span>Capabilities( )
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div 
                className="group p-6 rounded-xl glass-panel hover:border-mission-accent transition-all duration-300 hover:glow-box"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 group-hover:border-mission-accent/30 transition-colors">
                  {category.icon}
                  <h3 className="font-mono font-bold text-lg text-white group-hover:text-mission-accent transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-mission-text/80 text-sm font-mono hover:text-white transition-colors">
                      <span className="text-mission-accent/60">{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
