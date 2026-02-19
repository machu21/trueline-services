"use client";
import Link from "next/link";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessPage() {
  return (
    <main className="bg-black min-h-screen flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-ice/10 rounded-full mb-8 border border-ice/20">
          <CheckCircle className="w-10 h-10 text-ice" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Consultation Booked!</h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          Your discovery call has been logged. We&apos;ve sent a calendar invitation to your email address with the meeting link.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="flex items-center justify-center space-x-2 w-full bg-ice text-black font-bold py-4 rounded-xl hover:bg-white transition-all"
          >
            <span>Return Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">
            Trueline Services // Efficiency Delivered
          </p>
        </div>
      </motion.div>
    </main>
  );
}