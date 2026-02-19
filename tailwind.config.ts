import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Primary "Ice Green" Palette
        ice: {
          DEFAULT: "#B9FFD9", // Use as 'text-ice' or 'bg-ice'
          dark: "#86efac",    // Use as 'text-ice-dark'
        },
        // Professional Dark Tones
        dark: {
          DEFAULT: "#0a0a0a", // Rich Black
          card: "#111111",    // Slightly lighter for card backgrounds
          muted: "#1f2937",   // For borders or subtle text
        },
        // Original Brand Green (Optional backup)
        trueline: {
          DEFAULT: "#22c55e",
          dark: "#15803d",
        },
      },
    },
  },
  plugins: [],
};
export default config;