"use client";
import { motion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Starts invisible and slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Fades in and slides up when seen
      viewport={{ once: true, margin: "-100px" }} // Triggers once when 100px into view
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}