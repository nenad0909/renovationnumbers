import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Kept as dark bg color (footer, result card)
        ink: "#0e1c34",
        // Remapped to brand palette
        muted: "#A1A1A1",
        line: "#222222",
        paper: "#000000",
        ocean: "#61F3BB",
        "ocean-dark": "#3de0a5",
        "ocean-light": "#8ff5cc",
        sky: "#BEEBFF",
        mint: "#17a673",
        amber: "#FF6B35",
        // Primary brand colors
        "neon-mint": "#61F3BB",
        "electric-orange": "#FF6B35",
        "vibrant-yellow": "#FFE24A",
        "deep-slate": "#1A1A1A",
        "soft-lavender": "#E5D4FF",
        "sky-blue": "#BEEBFF"
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Archivo Black", "Impact", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 22px 55px -20px rgba(0, 0, 0, 0.7)",
        card: "0 12px 32px -16px rgba(0, 0, 0, 0.6)",
        ring: "0 0 0 1px rgba(97, 243, 187, 0.25), 0 18px 38px -16px rgba(0, 0, 0, 0.5)",
        glow: "0 22px 45px -16px rgba(97, 243, 187, 0.4)",
        "glow-soft": "0 14px 28px -14px rgba(97, 243, 187, 0.3)"
      },
      backgroundImage: {
        "ocean-gradient": "linear-gradient(135deg, #61F3BB 0%, #3de0a5 100%)",
        "ink-gradient": "linear-gradient(135deg, #000000 0%, #1A1A1A 100%)",
        "sky-gradient": "linear-gradient(180deg, #000000 0%, #111111 100%)",
        "hero-veil": "linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.4) 100%)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "slow-pan": {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "92% 50%" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        "slow-pan": "slow-pan 18s ease-in-out infinite alternate"
      }
    }
  },
  plugins: []
};

export default config;
