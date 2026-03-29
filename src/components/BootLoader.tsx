"use client";

import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "Initializing Mission Control...",
  "Loading System Core v9.4...",
  "Establishing Secure Connection...",
  "Calibrating Neural Networks...",
  "Access Granted. Welcome, Commander."
];

export default function BootLoader() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((log, index) => {
      delay += Math.random() * 300 + 400;
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === bootSequence.length - 1) {
          setTimeout(() => setIsLoading(false), 800);
        }
      }, delay);
    });
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center font-mono text-mission-accent p-6"
        >
          <div className="w-full max-w-md space-y-2">
             <div className="flex items-center gap-2 mb-6 border-b border-mission-dark pb-2">
                 <Terminal className="w-5 h-5 animate-pulse" />
                 <span className="text-white font-bold">SYSTEM_BOOT_SEQUENCE</span>
             </div>
             
             {logs.map((log, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="text-sm md:text-base"
               >
                 <span className="text-mission-dark mr-2">{`>`}</span>
                 {log}
               </motion.div>
             ))}
             
             <div className="animate-pulse text-mission-accent pt-2">_</div>
          </div>
          
          <div className="absolute bottom-10 left-0 w-full text-center text-xs text-mission-dark">
              SECURE :: ENCRYPTED :: V.1.0.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
