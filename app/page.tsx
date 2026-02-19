import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact"
import About from "@/components/About";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-brand-ice selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />

      <footer className="py-12 border-t border-white/5 bg-[#050505] text-center">
        <p className="text-gray-500 text-sm tracking-widest uppercase font-mono">
          © 2026 <span className="text-brand-ice">Trueline Services</span> // All rights reserved.
        </p>
      </footer>
    </main>
  );
}