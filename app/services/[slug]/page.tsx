"use client";

import React, { useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Shield, Target, Rocket } from "lucide-react";

// Data & Components
import { services } from "@/lib/data";
import Navbar from "@/components/Navbar";

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  if (!service) return notFound();

  return (
    <main className="bg-black min-h-screen text-white font-sans selection:bg-ice selection:text-black">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section 
        ref={containerRef}
        className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 z-0 bg-black">
          <motion.div style={{ y }} className="relative w-full h-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover opacity-35 scale-110" 
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--ice-rgb),0.15),transparent,transparent)] opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-ice uppercase bg-ice/10 border border-ice/20 rounded-full animate-pulse">
              {service.tag}
            </span>

            <h1 className="mb-8 text-6xl font-extrabold tracking-tight text-white lg:text-8xl max-w-4xl leading-[0.95]">
              {service.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white drop-shadow-[0_0_20px_rgba(var(--ice-rgb),0.4)]">
                Precision Support.
              </span>
            </h1>

            <p className="max-w-2xl mb-10 text-lg text-gray-400 md:text-xl font-light leading-relaxed">
              {service.desc}
            </p>

            <Link
              href="/consultation"
              className="px-8 py-4 text-lg font-bold text-black transition-all bg-ice rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(var(--ice-rgb),0.5)] active:scale-95 inline-flex items-center gap-2"
            >
              Get started with {service.title} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- EXPANDED CAPABILITIES SECTION --- */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ice/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: Capability Grid */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-ice/10 border border-ice/20">
                  <Zap className="text-ice w-6 h-6" />
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">Core Competencies</h2>
              </div>
              
              <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
                Our approach combines specialized human intelligence with AI-driven workflows to ensure your <span className="text-ice font-semibold">{service.title}</span> operations are flawless.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {service.features?.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-6 p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-ice/30 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-ice/10 border border-ice/20 flex items-center justify-center shrink-0 group-hover:bg-ice group-hover:text-black transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-lg text-gray-200 font-medium block leading-tight">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Strategic Impact Cards */}
            <div className="space-y-6 lg:sticky lg:top-32">
                <div className="grid gap-6">
                  {/* Dynamic Industry Impact Card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="glass-card p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent"
                  >
                    <Target className="text-ice w-10 h-10 mb-6" />
                    <h3 className="text-2xl font-bold mb-3">{service.impactTitle}</h3>
                    <p className="text-gray-500 leading-relaxed">{service.impactDesc}</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="glass-card p-8 rounded-[2rem] border border-white/10"
                  >
                    <Shield className="text-ice w-10 h-10 mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Military-Grade Security</h3>
                    <p className="text-gray-500 leading-relaxed">All data handling follows strict ISO-standard protocols and multi-layer encryption to ensure your sensitive business intel remains private.</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="glass-card p-8 rounded-[2rem] border border-white/10"
                  >
                    <Rocket className="text-ice w-10 h-10 mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Rapid Deployment</h3>
                    <p className="text-gray-500 leading-relaxed">Integrate specialized support into your existing workspace in under 72 hours with our automated onboarding and sync protocol.</p>
                  </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE TRULINE PROCESS --- */}
      <section className="py-24 bg-[#050505] border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-ice font-mono text-sm tracking-[0.4em] uppercase mb-4">// EXECUTION TIMELINE</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">How We Deploy Precision.</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[32px] left-[10%] w-[80%] h-px bg-gradient-to-r from-transparent via-ice/30 to-transparent z-0" />
            
            {[
              { step: "01", title: "Discovery & Audit", desc: "We map your current workflows and identify the high-leverage areas for delegation." },
              { step: "02", title: "VA Integration", desc: "Syncing your tools, security permissions, and communication channels with our elite talent." },
              { step: "03", title: "Active Scaling", desc: "Continuous performance monitoring and AI-tool updates to maximize your output." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-black border border-ice/30 flex items-center justify-center text-ice font-black text-2xl mb-8 shadow-[0_0_30px_rgba(var(--ice-rgb),0.1)] group-hover:border-ice transition-colors">
                  {item.step}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-32 relative overflow-hidden bg-black text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--ice-rgb),0.07),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
              READY FOR THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white drop-shadow-[0_0_20px_rgba(var(--ice-rgb),0.4)]">
                TRULINE STANDARD?
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 font-light">
              Stop managing tasks. Start leading growth. Let's build your high-performance <span className="text-white font-medium">{service.title}</span> team today.
            </p>
            <Link
                href="/consultation"
                className="px-12 py-6 text-xl font-black text-black transition-all bg-ice rounded-2xl hover:bg-white hover:shadow-[0_0_50px_rgba(var(--ice-rgb),0.6)] active:scale-95 inline-flex items-center gap-3"
              >
                BOOK A CONSULTATION <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <div className="h-24 bg-black" />
    </main>
  );
}