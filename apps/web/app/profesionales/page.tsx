// ─────────────────────────────────────────────────────────────────────────────
// app/profesionales/page.tsx
// Recorrido para profesionales — 3 secciones, tema oscuro (activado por layout).
// Server Component. About, Ecosystem y Emotional se movieron a /ecosistema.
// ─────────────────────────────────────────────────────────────────────────────

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EntrySection from "@/sections/EntrySection";
import SportsCarouselSection from "@/sections/SportsCarouselSection";
import ProblemSection from "@/sections/ProblemSection";
import FootprintSection from "@/sections/FootprintSection";

export default function ProfesionalesPage() {
  return (
    <main>
      <div className="nav-visible">
        <Navbar audience="profesional" />
      </div>

      <EntrySection audience="profesional" />
      <SportsCarouselSection audience="profesional" />
      <ProblemSection audience="profesional" />
      <FootprintSection audience="profesional" />
      <Footer />
    </main>
  );
}
