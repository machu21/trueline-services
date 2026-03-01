"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <Link href="/" className="flex items-center">
          <Logo className="h-10" />
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">
            Home
          </Link>

          <Link href="/#about" className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">
            About
          </Link>

          <Link href="/#services" className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">
            Services
          </Link>

          {/* Redesigned Minimalist Button */}
          <Link 
            href="/consultation" 
            className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-bold text-black transition-all duration-300 bg-ice rounded-full group hover:bg-white border border-transparent hover:border-black/10 shadow-[0_8px_20px_-10px_rgba(185,255,217,0.5)] active:scale-95"
          >
            <span className="relative text-[10px] tracking-[0.2em] uppercase">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}