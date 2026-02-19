import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Reveal from "@/components/Reveal"; // Import your new wrapper

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-ice/30 selection:text-ice">
      <Navbar />
      
      {/* Hero usually doesn't need a scroll reveal since it's above the fold */}
      <Hero />
      
      <Reveal>
        <Services />
      </Reveal>
      
      <Reveal>
        <About />
      </Reveal>
      
      <Reveal>
        <Contact />
      </Reveal>

      <footer className="py-12 border-t border-white/5 bg-[#050505] text-center">
        <p className="text-gray-500 text-sm tracking-widest uppercase font-mono">
          © 2026 <span className="text-ice">Trueline Services</span> // All rights reserved.
        </p>
      </footer>
    </main>
  );
}