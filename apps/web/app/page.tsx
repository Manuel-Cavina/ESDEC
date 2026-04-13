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
import Footer           from "@/components/Footer";
// import FootprintSection from "@/sections/FootprintSection";

export default function LandingPage() {
  // ── Theme state: light = azul eléctrico (default), dark = navy
  const [isDark, setIsDark] = useState(false);

  // ── Audiencia seleccionada desde el hero split (null = aún no eligió)
  const [audienceSelected, setAudienceSelected] = useState<"deportista" | "profesional" | null>(null);

  // ── Key para forzar remount del hero al volver desde la navbar
  const [heroKey, setHeroKey] = useState(0);

  // ── Sync con localStorage para persistir preferencia de tema
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

  // ── Clic en el logo del navbar: vuelve al hero selector
  const handleLogoClick = () => {
    setAudienceSelected(null);
    setHeroKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <main>
      {/* NAV — oculto hasta que se elija audiencia */}
      <div className={audienceSelected ? "nav-visible" : "nav-hidden"}>
        <Navbar
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
          onLogoClick={handleLogoClick}
        />
      </div>

      {/* S1 — Hero split screen (selector de audiencia) */}
      <HeroSection key={heroKey} onSelect={setAudienceSelected} />

      {/* Secciones — solo se montan después de elegir audiencia para evitar
          que se vean detrás del hero semitransparente */}
      {audienceSelected === "deportista" && (
        <>
          <AboutSection audience="deportista" />
          <EcosystemSection />
          <EmotionalSection audience="deportista" />
          <ProblemSection audience="deportista" />
          {/* <FootprintSection /> */}
          <Footer />
        </>
      )}

      {/* Profesional — mismo fondo claro que deportista, detalles en verde */}
      {audienceSelected === "profesional" && (
        <div className="professional-theme">
          <AboutSection audience="profesional" />
          <EmotionalSection audience="profesional" />
          <ProblemSection audience="profesional" />
          {/* <FootprintSection /> */}
          <Footer />
        </div>
      )}
    </main>
  );
}
