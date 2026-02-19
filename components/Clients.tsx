"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Favamore Deals", url: "/logos/favamoredeals.png" },
  { name: "JHS Pedals", url: "/logos/JHS_Pedals.jpg" },
  { name: "Petron", url: "/logos/Petron_logo.png" },
  { name: "Snoxx", url: "/logos/snoxx.jpg" },
  { name: "San Miguel", url: "/logos/sanmig.png" },
  { name: "Heritage Homes", url: "/logos/heritagehomes.png" },
];

export default function Clients() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section 
      id="partners" 
      className="py-20 bg-black border-t border-white/5 scroll-mt-20 relative overflow-hidden"
    >
      {/* Subtle background glow to connect with Hero gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-ice/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Trusted by <span className="text-ice drop-shadow-[0_0_8px_rgba(185,255,217,0.4)]">Industry Leaders</span>
          </h2>
          
          {/* Accent Line - matches your Services section style */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-ice to-transparent" />
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40, // Slightly slower for a more premium, "unrushed" feel
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-16 w-52 h-24 opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-105"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-w-full max-h-full object-contain pointer-events-none filter drop-shadow-[0_5px_15px_rgba(255,255,255,0.05)]"
              />
            </div>
          ))}
        </motion.div>

        {/* Edge Fades: Pure black to match your site background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />
      </div>
    </section>
  );
}