// ─────────────────────────────────────────────────────────────────────────────
// app/deportistas/page.tsx
// Recorrido para deportistas — 3 secciones, tema claro, enfocado en conversión.
// Server Component. About, Ecosystem y Emotional se movieron a /ecosistema.
// ─────────────────────────────────────────────────────────────────────────────

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EntrySection from "@/sections/EntrySection";
import SportsCarouselSection from "@/sections/SportsCarouselSection";
import ProblemSection from "@/sections/ProblemSection";
import FootprintSection from "@/sections/FootprintSection";

export default function DeportistasPage() {
  return (
    <main>
      <div className="nav-visible">
        <Navbar audience="deportista" />
      </div>

      <EntrySection audience="deportista" />
      <SportsCarouselSection audience="deportista" />
      <ProblemSection audience="deportista" />
      <FootprintSection audience="deportista" />
      <Footer />
    </main>
  );
}
