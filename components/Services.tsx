"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/lib/data";

const INTERVAL = 5000;
const TOTAL = services.length;

export default function Services() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % TOTAL);
    setProgressKey((k) => k + 1);
  }, []);

  const prev = () => {
    setActive((p) => (p - 1 + TOTAL) % TOTAL);
    setProgressKey((k) => k + 1);
  };

  const goTo = (index: number) => {
    setActive(index);
    setProgressKey((k) => k + 1);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section id="services" className="py-24 bg-black relative scroll-mt-20 overflow-hidden font-sans">
      {/* Updated Background Pattern to use Ice Color */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(var(--color-ice)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-ice font-mono text-sm tracking-[0.4em] uppercase mb-4">
            // OUR CORE EXPERTISE TAILORED
          </h2>
          <h3 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
            FOR YOUR MODERN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white drop-shadow-[0_0_10px_rgba(var(--ice-rgb),0.3)]">
              BUSINESS.
            </span>
          </h3>
        </div>

        <div
          className="relative h-[600px] md:h-[750px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {services.map((service, i) => {
            let position = i - active;
            if (position < -(TOTAL / 2)) position += TOTAL;
            if (position > TOTAL / 2) position -= TOTAL;

            if (Math.abs(position) > 1) return null;
            const isActive = position === 0;

            return (
              <motion.div
                key={service.slug}
                animate={{
                  x: `${position * 105}%`,
                  scale: isActive ? 1 : 0.82,
                  opacity: isActive ? 1 : 0.25,
                  zIndex: isActive ? 30 : 10,
                  filter: isActive ? "blur(0px)" : "blur(3px)",
                }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                className="absolute w-[88vw] md:w-[62vw] h-full max-w-[1000px] cursor-pointer"
                onClick={() => !isActive && goTo(i)}
              >
                <LargeServiceCard service={service} isActive={isActive} />
              </motion.div>
            );
          })}

          {/* Navigation Buttons - Updated to Ice hover */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-20 z-50 pointer-events-none">
            <button
              onClick={prev}
              className="p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-ice hover:text-black hover:shadow-[0_0_20px_rgba(var(--ice-rgb),0.4)] transition-all pointer-events-auto active:scale-90"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-white hover:bg-ice hover:text-black hover:shadow-[0_0_20px_rgba(var(--ice-rgb),0.4)] transition-all pointer-events-auto active:scale-90"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Progress Bar Indicators - Updated to Ice color */}
        <div className="flex justify-center gap-4 mt-16">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative h-1.5 bg-white/10 overflow-hidden rounded-full transition-all duration-300"
              style={{ width: i === active ? "80px" : "30px" }}
            >
              {i === active && (
                <motion.div
                  key={progressKey}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-ice shadow-[0_0_10px_rgba(var(--ice-rgb),0.5)]"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function LargeServiceCard({
  service,
  isActive,
}: {
  service: (typeof services)[0];
  isActive: boolean;
}) {
  return (
    <div className="relative w-full h-full rounded-[40px] overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] font-sans border border-white/5">
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] opacity-60"
      />
      {/* Radial Gradient overlay to match the "Ice" theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(var(--ice-rgb),0.1),transparent_70%)]" />

      <div className="relative h-full flex flex-col justify-end p-8 md:p-16 z-10 text-left">
        <div className="mb-6 flex items-center gap-4">
          <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white uppercase tracking-widest">
            {service.tag}
          </span>
        </div>

        <h4 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] font-sans tracking-tighter">
          {service.title}
        </h4>

        <p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed transition-all duration-700 font-sans"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {service.desc}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="flex items-center gap-3 px-8 py-4 bg-ice text-black font-sans font-black rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_0_30px_rgba(var(--ice-rgb),0.5)] active:scale-95 w-fit shadow-xl uppercase tracking-tight"
          style={{
            opacity: isActive ? 1 : 0,
            pointerEvents: isActive ? "auto" : "none",
            transform: isActive ? "translateY(0)" : "translateY(10px)",
          }}
        >
          Learn more <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}