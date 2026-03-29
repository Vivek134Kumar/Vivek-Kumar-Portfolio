import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-mission-bg selection:bg-mission-accent selection:text-mission-bg">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
      <ScrollToTop />
      
      <footer className="py-8 text-center text-mission-text/40 font-mono text-xs border-t border-mission-dark">
        <p>&copy; {new Date().getFullYear()} Vivek Kumar. All systems normal.</p>
      </footer>
    </main>
  );
}
