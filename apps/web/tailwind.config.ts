import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // ── FONTS
      fontFamily: {
        display:    ["var(--font-bebas)",  "sans-serif"],
        condensed:  ["var(--font-barlow-condensed)", "sans-serif"],
        sans:       ["var(--font-barlow)", "sans-serif"],
      },

      // ── COLORS (token-based, referencian CSS vars)
      colors: {
        // Modo claro — azul eléctrico
        "light-bg":    "#1556d4",
        "light-bg2":   "#1245b8",
        "light-p1":    "#5ac8ff",
        "light-p2":    "#7de8a8",
        // Modo oscuro — navy profundo
        "dark-bg":     "#001A33",
        "dark-bg2":    "#012547",
        "dark-p1":     "#0580D3",
        "dark-p2":     "#0CD25E",
      },

      // ── BACKGROUNDS hero (usan gradiente)
      backgroundImage: {
        "hero-light": "linear-gradient(135deg, #1a5fe0 0%, #1245b8 45%, #0c3494 100%)",
        "hero-dark":  "linear-gradient(135deg, #001A33 0%, #012547 50%, #0d2f6a 100%)",
        "hero-overlay": "linear-gradient(105deg, var(--hero-ov-start, rgba(14,57,160,0.85)) 0%, var(--hero-ov-mid, rgba(18,69,184,0.6)) 40%, transparent 100%)",
      },

      // ── KEYFRAMES
      keyframes: {
        // Liquid background — el gradiente se mueve
        "liquid-bg": {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        // Huella flota
        "fp-float": {
          "0%,100%": { transform: "translateY(0) rotate(-8deg)" },
          "33%":     { transform: "translateY(-12px) rotate(-6deg)" },
          "66%":     { transform: "translateY(-6px) rotate(-10deg)" },
        },
        // Huella morphing (escala y desenfoca levemente)
        "fp-morph": {
          "0%,100%": { transform: "scale(1) rotate(-8deg)" },
          "25%":     { transform: "scale(1.04) rotate(-6deg)" },
          "50%":     { transform: "scale(0.97) rotate(-10deg)" },
          "75%":     { transform: "scale(1.02) rotate(-7deg)" },
        },
        // Stamp — cada palabra del headline
        "stamp": {
          "0%":   { opacity: "0", transform: "scale(1.4) translateY(-15px)", filter: "blur(6px)" },
          "60%":  { transform: "scale(0.94) translateY(3px)", filter: "blur(0)" },
          "80%":  { transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        // Glitch en el headline
        "glitch": {
          "0%,85%,100%": { transform: "none", opacity: "1", clipPath: "none" },
          "86%": { transform: "translate(-4px,0) skewX(-3deg)", opacity: "0.9", clipPath: "inset(10% 0 80% 0)", color: "#5ac8ff" },
          "87%": { transform: "translate(4px,0) skewX(2deg)", clipPath: "inset(70% 0 5% 0)", color: "#ff5a8a" },
          "88%": { transform: "translate(-2px,0)", clipPath: "inset(40% 0 40% 0)" },
          "89%": { transform: "none", opacity: "1", clipPath: "none", color: "inherit" },
        },
        // Fade up genérico
        "fade-up": {
          from: { opacity: "0", transform: "translateY(22px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        // Las 3 líneas del logo se extienden
        "line-draw": {
          from: { width: "0", opacity: "0" },
          to:   { width: "var(--target, 72px)", opacity: "1" },
        },
        // Card flota
        "card-float": {
          "0%,100%": { transform: "translateY(0) rotateX(0deg) rotateY(-3deg)" },
          "33%":     { transform: "translateY(-12px) rotateX(2deg) rotateY(-2deg)" },
          "66%":     { transform: "translateY(-6px) rotateX(-1deg) rotateY(-4deg)" },
        },
        // Ping dot (status disponible)
        "ping-dot": {
          "0%":   { boxShadow: "0 0 0 0 rgba(90,200,255,0.55)" },
          "70%":  { boxShadow: "0 0 0 8px rgba(90,200,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(90,200,255,0)" },
        },
        // Ping verde (dark mode)
        "ping-dot-green": {
          "0%":   { boxShadow: "0 0 0 0 rgba(12,210,94,0.55)" },
          "70%":  { boxShadow: "0 0 0 8px rgba(12,210,94,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(12,210,94,0)" },
        },
        // Marquee (scroll de deportes)
        "marquee": {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        // Wire draw (journey line)
        "wire-draw": {
          from: { width: "0", opacity: "0" },
          to:   { width: "calc(100% - 56px)", opacity: "1" },
        },
        // Scan line (sección problemas)
        "scan": {
          "0%":   { top: "-2px", opacity: "0" },
          "5%":   { opacity: "1" },
          "95%":  { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        // Heartbeat (huella en CTA)
        "heartbeat": {
          "0%,100%": { transform: "scale(1)", opacity: "0.14" },
          "40%":     { transform: "scale(1.09)", opacity: "0.28" },
          "60%":     { transform: "scale(0.97)" },
        },
        // Wipe mask (frases variante B)
        "wipe-mask": {
          from: { clipPath: "inset(0 100% 0 0)" },
          to:   { clipPath: "inset(0 0% 0 0)" },
        },
        // Slot roll (CTA counter)
        "slot-roll": {
          "0%":   { transform: "translateY(-100%)", opacity: "0" },
          "60%":  { transform: "translateY(8%)" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        // Ripple (toggle modo)
        "ripple-mode": {
          "0%":   { transform: "scale(0)", opacity: "0.5" },
          "100%": { transform: "scale(90)", opacity: "0" },
        },
        // Blink (cursor typewriter)
        "blink": {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        // Orbit satélites
        "orbit": {
          from: { transform: "rotate(0deg) translateX(var(--orbit-r, 160px)) rotate(0deg)" },
          to:   { transform: "rotate(360deg) translateX(var(--orbit-r, 160px)) rotate(-360deg)" },
        },
        // Bar fill
        "bar-fill": {
          from: { width: "0" },
          to:   { width: "var(--w, 0%)" },
        },
      },

      // ── ANIMATIONS
      animation: {
        "liquid-bg":     "liquid-bg 12s ease infinite",
        "fp-float":      "fp-float 9s ease-in-out infinite",
        "fp-morph":      "fp-morph 8s ease-in-out infinite",
        "stamp":         "stamp 0.5s ease forwards",
        "glitch":        "glitch 7s 3s ease-in-out infinite",
        "fade-up":       "fade-up 0.55s ease forwards",
        "line-draw":     "line-draw 0.6s cubic-bezier(.22,1,.36,1) forwards",
        "card-float":    "card-float 6s ease-in-out infinite",
        "ping-dot":      "ping-dot 2.5s infinite",
        "ping-dot-green":"ping-dot-green 2.5s infinite",
        "marquee":       "marquee 30s linear infinite",
        "wire-draw":     "wire-draw 1.5s cubic-bezier(.22,1,.36,1) 0.3s both",
        "scan":          "scan 4s ease-in-out infinite",
        "heartbeat":     "heartbeat 4s ease-in-out infinite",
        "wipe-mask":     "wipe-mask 0.6s cubic-bezier(.22,1,.36,1) forwards",
        "slot-roll":     "slot-roll 0.3s cubic-bezier(.22,1,.36,1) both",
        "ripple-mode":   "ripple-mode 0.75s ease-out forwards",
        "blink":         "blink 1s infinite",
      },

      // ── SPACING personalizado
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
      },

      // ── MAX WIDTH
      maxWidth: {
        "landing": "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
