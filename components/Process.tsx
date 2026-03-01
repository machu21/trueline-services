"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, 
  Globe, 
  MonitorOff, 
  Clock, 
  TrendingDown,
  ArrowRight
} from "lucide-react";

const ADVANTAGES = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Top-Tier Filipino Talent",
    desc: "Rigorous vetting of the top 3% of Filipino VAs, ensuring cultural alignment and elite communication.",
    accent: "Elite Sourcing"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Strategic Delivery",
    desc: "We don't just find workers; we deliver strategic partners capable of handling global operations.",
    accent: "International Reach"
  },
  {
    icon: <MonitorOff className="w-8 h-8" />,
    title: "Zero Infrastructure Worry",
    desc: "Skip the office leases and hardware procurement. We handle the entire equipment and setup lifecycle.",
    accent: "Plug & Play"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Adaptive Timezone Sync",
    desc: "Efficiency that adapts to your business hours, ensuring 24/7 coverage or perfect real-time overlap.",
    accent: "Seamless Flow"
  },
  {
    icon: <TrendingDown className="w-8 h-8" />,
    title: "60% Overhead Reduction",
    desc: "Drastically reduce payroll taxes, benefits, and operational costs while increasing total output.",
    accent: "Cost Efficiency"
  }
];

export default function StrategicProcess() {
  return (
    <section id="strategy" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-ice/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ice/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-ice font-mono text-sm tracking-[0.4em] uppercase mb-4"
          >
            // THE STRATEGIC EDGE
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none"
          >
            GLOBAL TALENT. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white">
              LOCAL EFFICIENCY.
            </span>
          </motion.h3>
        </div>

        {/* Advantage Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-10 rounded-[2.5rem] border border-white/5 flex flex-col h-full group transition-all duration-500 hover:border-ice/30"
            >
              <div className="w-16 h-16 rounded-2xl bg-ice/10 flex items-center justify-center text-ice mb-8 group-hover:bg-ice group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(var(--ice-rgb),0.1)]">
                {item.icon}
              </div>
              
              <span className="text-[10px] font-mono text-ice uppercase tracking-[0.3em] mb-3 block opacity-60">
                {item.accent}
              </span>
              
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {item.title}
              </h4>
              
              <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
                {item.desc}
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-600 uppercase">Truline Standard</span>
                <ArrowRight className="w-4 h-4 text-ice opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
            </motion.div>
          ))}

          {/* Special Callout Card for 60% Savings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-ice/40 to-transparent"
          >
            <div className="bg-black w-full h-full rounded-[2.4rem] p-10 flex flex-col justify-center items-center text-center">
               <h5 className="text-7xl font-black text-ice mb-2">60%</h5>
               <p className="text-white font-bold uppercase tracking-widest text-sm mb-6">Cost Reduction</p>
               <Link href="/consultation" className="text-ice hover:text-white transition-colors flex items-center gap-2 font-mono text-xs tracking-tighter">
                  CALCULATE YOUR SAVINGS <ArrowRight className="w-3 h-3" />
               </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}