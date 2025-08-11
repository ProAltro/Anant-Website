/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Space–metal palette
        "anant-dark": "#0a0a0a",
        "anant-primary": "#1a1a1a",
        "anant-secondary": "#111111",
        "anant-gray": "#161616",
        "anant-mild": "#b9b8b8",
        "anant-accent": "#00d4ff",
        "anant-accent-hover": "#33e3ff",
        "anant-accent-light": "#66eaff",
        "anant-success": "#28a745",
        "anant-warning": "#ffc107",
        "anant-error": "#dc3545",
        "anant-pure": "#ffffff",
        "anant-glass": "rgba(30, 30, 30, 0.7)",
        "anant-glass-border": "rgba(255, 255, 255, 0.1)",
        "anant-metallic": "#3a3a3a",
        "anant-metallic-light": "#4a4a4a",
        "anant-glow": "rgba(0, 102, 204, 0.4)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 3s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "slide-in": "slide-in 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "metallic-shine": "metallic-shine 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 102, 204, 0.4)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 102, 204, 0.8)" },
        },
        shimmer: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        "pulse-glow": {
          "0%": {
            boxShadow:
              "0 0 20px rgba(0, 102, 204, 0.4), 0 0 40px rgba(0, 102, 204, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 40px rgba(0, 102, 204, 0.8), 0 0 80px rgba(0, 102, 204, 0.4)",
          },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "metallic-shine": {
          "0%, 100%": { backgroundPosition: "200% 0" },
          "50%": { backgroundPosition: "-200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
        "3xl": "24px",
      },
      boxShadow: {
        glass:
          "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glass-hover":
          "0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(0, 102, 204, 0.1)",
        metallic:
          "0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
        "metallic-hover":
          "0 6px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
        glow: "0 0 14px rgba(93, 228, 255, 0.32), 0 0 28px rgba(93, 228, 255, 0.18)",
        "glow-intense":
          "0 0 18px rgba(93, 228, 255, 0.45), 0 0 36px rgba(93, 228, 255, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "metallic-gradient": "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
        "metallic-gradient-hover": "linear-gradient(145deg, #3a3a3a, #2a2a2a)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(30, 30, 30, 0.7), rgba(25, 25, 25, 0.8))",
        "metallic-text":
          "linear-gradient(145deg, #e0e0e0, #a0a0a0, #ffffff, #c0c0c0)",
        "metallic-shine":
          "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
        "aurora-space":
          "radial-gradient(1200px_600px_at_70%_-10%, rgba(93,228,255,0.08), transparent_60%), radial-gradient(900px_600px_at_20%_110%, rgba(167,139,250,0.07), transparent_60%), linear-gradient(180deg, #0b0f1a, #0f1624)",
      },
    },
  },
  plugins: [],
};
