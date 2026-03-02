'use client';

import { motion } from "framer-motion";
import { Crosshair, Eye } from "lucide-react";

const cards = [
  {
    icon: Crosshair,
    tag: "Our Mission",
    title: "Why We Exist",
    body: "Our mission is simple: to provide dependable, proactive virtual assistants who treat your business like their own — helping you scale efficiently and focus on what matters most.",
  },
  {
    icon: Eye,
    tag: "Our Vision",
    title: "Where We're Going",
    body: "To become the world's most trusted remote workforce partner — empowering businesses of every size to operate at their full potential through elite virtual talent.",
  },
];

export default function MissionVision() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/5">

      {/* ── Background photo ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&auto=format&fit=crop&q=80")`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/85" />
      {/* Ice tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(185,255,217,0.06) 0%, transparent 100%)",
        }}
      />
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >


          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Built with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice via-white to-ice">
              Intent
            </span>
          </h2>

          <p className="text-white/40 text-sm max-w-md mx-auto font-light leading-relaxed">
            Every decision we make is guided by a clear purpose and a bold vision for the future of remote work.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {cards.map(({ icon: Icon, tag, title, body }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* Hover shimmer */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 20% 20%, rgba(185,255,217,0.07) 0%, transparent 60%)",
                }}
              />

              {/* Top border accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-ice/40 to-transparent" />

              <div className="relative z-10 p-8 md:p-10">
                {/* Icon row */}
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-11 h-11 rounded-xl bg-ice/10 border border-ice/20 flex items-center justify-center text-ice group-hover:bg-ice group-hover:text-black transition-all duration-300 flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-ice/70 font-mono text-xs tracking-widest uppercase">{tag}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>

                {/* Divider */}
                <div className="w-8 h-px bg-ice/30 mb-5" />

                {/* Body */}
                <p className="text-white/55 leading-relaxed text-[0.925rem] font-light">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-white/25 font-mono text-xs tracking-widest uppercase mt-14"
        >
          "Your growth is our metric of success."
        </motion.p>

      </div>
    </section>
  );
}