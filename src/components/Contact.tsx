"use client";

import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Send } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Vivek134Kumar",
    icon: Github,
    handle: "@Vivek134Kumar",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vivek-kumar-671442210",
    icon: Linkedin,
    handle: "Vivek Kumar",
  },
  {
    name: "Twitter",
    url: "https://x.com/VivekKu55802530",
    icon: Twitter,
    handle: "@VivekKu55802530",
  },
  {
    name: "Email",
    url: "mailto:vivekkrpandit134@gmail.com",
    icon: Mail,
    handle: "vivekkrpandit134@gmail.com",
  },
  {
    name: "Phone",
    url: "tel:+919263609397",
    icon: ExternalLink, // Or Phone icon if I import it
    handle: "+91-9263609397",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0A` +
                 `Phone: ${formData.phone}%0D%0A` +
                 `Email: ${formData.email}%0D%0A%0D%0A` +
                 `Message:%0D%0A${formData.message}`;
                 
    window.location.href = `mailto:vivekkrpandit134@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
         <RevealOnScroll>
            <div className="inline-block mb-8">
                <span className="text-mission-accent font-mono text-sm tracking-widest uppercase border-b border-mission-accent pb-1">
                    Comms Link
                </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-6">
              Initialize <span className="text-mission-accent">Handshake</span>
            </h2>
            
            <p className="text-mission-text max-w-xl mx-auto mb-12 font-sans">
              Ready to collaborate on high-performance systems or discuss the latest in AI? 
              My channels are open. Transmission secured.
            </p>
         </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          {socialLinks.map((link, index) => (
            <RevealOnScroll key={link.name} delay={index * 0.1}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 glass-panel rounded-lg hover:border-mission-accent hover:bg-mission-accent/10 transition-all duration-300"
                >
                  <div className="p-3 bg-mission-dark/50 rounded-md group-hover:bg-mission-accent group-hover:text-mission-bg transition-colors text-mission-text border border-white/5">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-mission-text/50 font-mono uppercase tracking-wider mb-1">
                        {link.name}
                    </div>
                    <div className="text-white font-mono font-bold group-hover:text-mission-accent flex items-center gap-2">
                        {link.handle} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Contact Form */}
        <RevealOnScroll delay={0.2}>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 glass-panel p-8 rounded-xl border border-white/10">
                <div className="flex flex-col md:flex-row gap-6">
                     <div className="w-full relative">
                        <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="peer w-full bg-mission-dark/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-mission-accent transition-colors placeholder-transparent"
                            placeholder="Name"
                            id="name"
                        />
                        <label 
                            htmlFor="name" 
                            className="absolute left-4 -top-2.5 bg-mission-bg px-1 text-xs text-mission-text/70 peer-placeholder-shown:text-base peer-placeholder-shown:text-mission-text/50 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-mission-accent transition-all duration-300 cursor-text"
                        >
                            Name
                        </label>
                    </div>
                    
                    <div className="w-full relative">
                         <input 
                            type="tel" 
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="peer w-full bg-mission-dark/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-mission-accent transition-colors placeholder-transparent"
                             placeholder="Phone"
                             id="phone"
                        />
                        <label 
                            htmlFor="phone" 
                             className="absolute left-4 -top-2.5 bg-mission-bg px-1 text-xs text-mission-text/70 peer-placeholder-shown:text-base peer-placeholder-shown:text-mission-text/50 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-mission-accent transition-all duration-300 cursor-text"
                        >
                            Phone
                        </label>
                    </div>
                </div>

                <div className="relative">
                    <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="peer w-full bg-mission-dark/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-mission-accent transition-colors placeholder-transparent"
                        placeholder="Email"
                        id="email"
                    />
                    <label 
                        htmlFor="email" 
                         className="absolute left-4 -top-2.5 bg-mission-bg px-1 text-xs text-mission-text/70 peer-placeholder-shown:text-base peer-placeholder-shown:text-mission-text/50 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-mission-accent transition-all duration-300 cursor-text"
                    >
                        Email
                    </label>
                </div>

                <div className="relative">
                    <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        className="peer w-full bg-mission-dark/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-mission-accent transition-colors placeholder-transparent resize-none"
                        placeholder="Your Message..."
                        id="message"
                    ></textarea>
                    <label 
                        htmlFor="message" 
                         className="absolute left-4 -top-2.5 bg-mission-bg px-1 text-xs text-mission-text/70 peer-placeholder-shown:text-base peer-placeholder-shown:text-mission-text/50 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-mission-accent transition-all duration-300 cursor-text"
                    >
                        Message (Optional)
                    </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-mission-accent/10 border border-mission-accent/50 text-mission-accent font-mono py-3 px-6 rounded hover:bg-mission-accent hover:text-mission-bg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    Send Transmission
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
