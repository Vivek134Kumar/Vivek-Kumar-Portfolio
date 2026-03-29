"use client";

import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Achievements", href: "/achievements" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-mission-bg/60 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="text-mission-accent w-6 h-6 group-hover:glow-text transition-all" />
          <span className="font-mono text-xl font-bold tracking-tighter text-white group-hover:text-mission-accent transition-colors">
            Vivek<span className="text-mission-accent">-</span>Kumar
          </span>
        </Link>
        <div className="hidden md:flex gap-8 font-mono text-sm text-mission-text">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-mission-accent hover:glow-text transition-all"
            >
              {`<${item.name} />`}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-mission-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-mission-bg px-6 py-4 flex flex-col gap-4 font-mono text-sm text-mission-text absolute w-full shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-mission-accent hover:glow-text transition-all block py-2"
            >
              {`<${item.name} />`}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
