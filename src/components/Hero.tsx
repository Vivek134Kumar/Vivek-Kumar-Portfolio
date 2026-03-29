"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index >= words.length) {
      const timeout = setTimeout(() => setIndex(0), 0);
      return () => clearTimeout(timeout);
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 0);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[320px] text-center md:text-left">
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

export default function Hero() {
  const roles = [
    "Python Developer",
    "Data Analyst",
    "C/C++ Developer",
    "Machine Learning Engineer",
    "Data Scientist",
    "AI-ML Engineer"
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2833_1px,transparent_1px),linear-gradient(to_bottom,#1f2833_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 opacity-20" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mission-accent-dim/30 bg-mission-dark/50 text-mission-accent-dim text-xs font-mono mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mission-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mission-accent"></span>
          </span>
          System Online
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-mono leading-tight">
          Hello, I&apos;m Vivek <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mission-accent to-mission-accent-dim glow-text">
            <TypewriterEffect words={roles} />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-mission-text max-w-2xl mx-auto font-sans leading-relaxed">
          Building data-driven systems with Python, SQL, and C/C++.
        </p>


        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8 w-full mx-auto">
          <a
            href="#projects"
            className="group relative w-full md:w-auto px-8 py-3 bg-mission-accent/10 border border-mission-accent text-mission-accent font-mono font-bold tracking-wide overflow-hidden hover:bg-mission-accent hover:text-mission-bg transition-all duration-300 glow-box flex justify-center items-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="#about"
            className="w-full md:w-auto px-8 py-3 border border-mission-dark text-mission-text hover:border-mission-text hover:text-white font-mono transition-all duration-300 flex justify-center items-center text-center"
          >
            About Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
