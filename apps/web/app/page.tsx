"use client";

// app/page.tsx
// Landing ESDEC MVP 0 — orchestration of the unified home.

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import PageIndex from "@/components/PageIndex";
import Footer from "@/components/Footer";
import { PAGE_INDEX } from "@/content/landing";
import HeroSection from "@/sections/HeroSection";
import EntrySection from "@/sections/EntrySection";
import AboutSection from "@/sections/AboutSection";
import EcosystemSection from "@/sections/EcosystemSection";
import ProblemSection from "@/sections/ProblemSection";
import EmotionalSection from "@/sections/EmotionalSection";
import FootprintSection from "@/sections/FootprintSection";

type Audience = "deportista" | "profesional";

export default function LandingPage() {
  const [audienceSelected, setAudienceSelected] = useState<Audience | null>(
    null
  );
  const [heroKey, setHeroKey] = useState(0);

  useEffect(() => {
    if (audienceSelected === "profesional") {
      document.documentElement.classList.add("dark");
      return;
    }

    document.documentElement.classList.remove("dark");
  }, [audienceSelected]);

  const handleLogoClick = () => {
    setAudienceSelected(null);
    setHeroKey((current) => current + 1);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const selectedSections =
    audienceSelected === "profesional"
      ? PAGE_INDEX.profesional
      : PAGE_INDEX.deportista;

  return (
    <main>
      <div className={audienceSelected ? "nav-visible" : "nav-hidden"}>
        <Navbar audience={audienceSelected} onLogoClick={handleLogoClick} />
      </div>

      {audienceSelected && <PageIndex sections={selectedSections} />}

      <HeroSection key={heroKey} onSelect={setAudienceSelected} />

      {audienceSelected && (
        <>
          <EntrySection audience={audienceSelected} />
          <AboutSection audience={audienceSelected} />
          <EcosystemSection audience={audienceSelected} />
          <ProblemSection audience={audienceSelected} />
          <EmotionalSection audience={audienceSelected} />
          <FootprintSection audience={audienceSelected} />
          <Footer />
        </>
      )}
    </main>
  );
}
