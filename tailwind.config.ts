import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-geist-mono)", "monospace"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
      colors: {
        bg: {
          DEFAULT: "#0b0a10",
          2: "#11101a",
          3: "#17152200",
        },
        accent: {
          DEFAULT: "#b57bff",
          dim: "rgba(181,123,255,0.08)",
          dim2: "rgba(181,123,255,0.16)",
          glow: "rgba(181,123,255,0.35)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.06)",
          hi: "rgba(255,255,255,0.12)",
          accent: "rgba(181,123,255,0.22)",
        },
        muted: "#635f7a",
        content: "#e6e4f0",
      },
      animation: {
        pulse2: "pulse2 2.2s ease-in-out infinite",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(181,123,255,0.4)" },
          "50%": { opacity: "0.6", boxShadow: "0 0 0 7px rgba(181,123,255,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
