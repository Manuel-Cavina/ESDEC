"use client";

// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx
// Landing ESDEC MVP 0 — orquesta todas las secciones
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";

import AboutSection     from "@/sections/AboutSection";
import EcosystemSection from "@/sections/EcosystemSection";
import EmotionalSection from "@/sections/EmotionalSection";
import ProblemSection   from "@/sections/ProblemSection";
import CommunitySection from "@/sections/CommunitySection";
import Footer           from "@/components/Footer";
// import FootprintSection from "@/sections/FootprintSection";

export default function LandingPage() {
  // ── Theme state: light = azul eléctrico (default), dark = navy
  const [isDark, setIsDark] = useState(false);

  // ── Sync con localStorage para persistir preferencia
  useEffect(() => {
    const saved = localStorage.getItem("esdec-theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleThemeToggle = (dark: boolean) => {
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("esdec-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("esdec-theme", "light");
    }
  };

  return (
    <main>
      {/* NAV */}
      <Navbar isDark={isDark} onThemeToggle={handleThemeToggle} />

      {/* S1 — Hero + Stats bar */}
      <HeroSection />

      {/* S2 — Quiénes somos */}
      <AboutSection />

      {/* S3 — Comunidad / galería equipo */}
      {/*
      <CommunitySection />
      */}

      {/* S4 — Deportes + Especialistas */}
      <EcosystemSection />

      {/* S5 — Narrativa emocional */}
      <EmotionalSection />

      {/* S6 — Problema + Journey */}
      <ProblemSection />

      {/* S7 — Huella + CTA final (próximo) */}
      {/* <FootprintSection /> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
