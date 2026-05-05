/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAF9",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#0A0A0A",
          muted: "#52525B",
          subtle: "#A1A1AA",
        },
        line: "#E7E5E4",
        accent: {
          DEFAULT: "#EA580C",
          soft: "#FED7AA",
          deep: "#9A3412",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 5.25rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.2em" }],
      },
      maxWidth: {
        prose: "65ch",
      },
      boxShadow: {
        card: "0 1px 0 rgba(10,10,10,0.04), 0 8px 24px -12px rgba(10,10,10,0.08)",
        "card-hover": "0 1px 0 rgba(10,10,10,0.06), 0 24px 48px -20px rgba(10,10,10,0.18)",
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
