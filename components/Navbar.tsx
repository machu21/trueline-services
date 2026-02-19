"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <Logo className="h-10" />
        </Link>

       
        <div className="hidden md:flex items-center space-x-8">
          
          <Link href="/#about" className="text-sm font-medium text-gray-400 hover:text-ice transition-colors">
            About
          </Link>
          
          <Link href="/pricing" className="text-sm font-medium text-gray-400 hover:text-ice transition-colors">
            Pricing
          </Link>
          
          <Link href="/#contact" className="text-sm font-medium text-gray-400 hover:text-ice transition-colors">
            Contact
          </Link>

          
          <Link 
            href="/consultation" 
            className="bg-ice text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-ice-dark hover:shadow-[0_0_20px_rgba(185,255,217,0.4)] transition-all active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}