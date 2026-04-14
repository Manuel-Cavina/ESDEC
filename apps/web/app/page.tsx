"use client";

// ─────────────────────────────────────────────────────────────────────────────
// app/page.tsx
// Landing ESDEC MVP 0 — orquesta todas las secciones
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import Navbar          from "@/components/Navbar";
import PageIndex       from "@/components/PageIndex";
import HeroSection     from "@/sections/HeroSection";
import EmotionalSection from "@/sections/EmotionalSection";
import AboutSection    from "@/sections/AboutSection";
import EcosystemSection from "@/sections/EcosystemSection";
import ProblemSection  from "@/sections/ProblemSection";
import FootprintSection from "@/sections/FootprintSection";
import Footer          from "@/components/Footer";

// ── Índice de secciones por audiencia ────────────────────────────────────────
const SECTIONS_DEPORTISTA = [
  { id: "emotional", label: "Mi historia"  },
  { id: "about",     label: "ESDEC"        },
  { id: "ecosystem", label: "Mi equipo"    },
  { id: "problem",   label: "El sistema"   },
  { id: "footprint", label: "Unirme"       },
];

const SECTIONS_PROFESIONAL = [
  { id: "emotional", label: "Mi perfil"    },
  { id: "about",     label: "ESDEC"        },
  { id: "ecosystem", label: "Servicios"    },
  { id: "problem",   label: "Mi camino"    },
  { id: "footprint", label: "Sumarme"      },
];

export default function LandingPage() {
  // ── Audiencia seleccionada desde el hero split (null = aún no eligió)
  const [audienceSelected, setAudienceSelected] = useState<"deportista" | "profesional" | null>(null);

  // ── Key para forzar remount del hero al volver desde la navbar
  const [heroKey, setHeroKey] = useState(0);

  // ── Tema automático según audiencia: profesional → dark, deportista → light
  useEffect(() => {
    if (audienceSelected === "profesional") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [audienceSelected]);

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
        <Navbar onLogoClick={handleLogoClick} />
      </div>

      {/* Índice vertical de secciones — solo visible después de elegir */}
      {audienceSelected && (
        <PageIndex
          sections={
            audienceSelected === "deportista"
              ? SECTIONS_DEPORTISTA
              : SECTIONS_PROFESIONAL
          }
        />
      )}

      {/* S1 — Hero split screen (selector de audiencia) */}
      <HeroSection key={heroKey} onSelect={setAudienceSelected} />

      {/* ── DEPORTISTA ──
          Flujo: Emoción → Identidad → Equipo → Sistema + Journey → Acción
          El usuario se identifica primero, luego entiende, luego ve el camino */}
      {audienceSelected === "deportista" && (
        <>
          <EmotionalSection audience="deportista" />
          <AboutSection     audience="deportista" />
          <EcosystemSection audience="deportista" />
          <ProblemSection   audience="deportista" />
          <FootprintSection />
          <Footer />
        </>
      )}

      {/* ── PROFESIONAL ──
          Flujo: Emoción → Identidad → Red de servicios → Camino → Acción */}
      {audienceSelected === "profesional" && (
        <div className="professional-theme">
          <EmotionalSection audience="profesional" />
          <AboutSection     audience="profesional" />
          <EcosystemSection audience="profesional" />
          <ProblemSection   audience="profesional" />
          <FootprintSection />
          <Footer />
        </div>
      )}
    </main>
  );
}
