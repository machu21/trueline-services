"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Favamore Deals", url: "/logos/favamoredeals.png" },
  { name: "JHS Pedals", url: "/logos/JHS_Pedals.jpg" },
  { name: "Snoxx", url: "/logos/snoxx.jpg" },
  { name: "Heritage Homes", url: "/logos/heritagehomes.png" },
];

export default function Clients() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section
      id="partners"
      className="py-20 bg-black border-t border-white/5 scroll-mt-20 relative overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(185,255,217,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Center ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-ice/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full mb-16 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ice/20 bg-ice/5 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-ice animate-pulse" />
            <span className="text-ice font-mono text-xs tracking-widest uppercase">Our Partners</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Trusted by{" "}
            <span className="text-ice drop-shadow-[0_0_8px_rgba(185,255,217,0.4)]">
              Industry Leaders
            </span>
          </h2>

          {/* Accent line */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-ice/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-ice/50" />
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-ice/40" />
          </div>
        </motion.div>
      </div>

      {/* Scrolling logo track */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center mx-16 w-52 h-24 opacity-50 hover:opacity-100 transition-all duration-500 hover:scale-105"
            >
              {/* Card backing on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent hover:border-ice/10 hover:bg-ice/5 transition-all duration-500" />
              <img
                src={logo.url}
                alt={logo.name}
                className="relative z-10 max-w-full max-h-full object-contain pointer-events-none filter drop-shadow-[0_5px_15px_rgba(255,255,255,0.05)]"
              />
            </div>
          ))}
        </motion.div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />
      </div>

      {/* Bottom stats row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-16 flex items-center justify-center gap-12"
      >
        {[
          { value: "50+", label: "Clients Served" },
          { value: "98%", label: "Retention Rate" },
          { value: "24/7", label: "Support Coverage" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-gray-600 text-xs uppercase tracking-widest font-mono mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}