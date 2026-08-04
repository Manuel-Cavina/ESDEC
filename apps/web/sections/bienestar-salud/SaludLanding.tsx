// sections/bienestar-salud/SaludLanding.tsx
// Concepto: Prevencion Activa — orientado al deportista.
// Flujo: Hero → Profesionales → Proceso → Numeros → CTA

import SharedHeroSection from "@/components/SharedHeroSection";
import FAQSection from "@/components/FAQSection";
import SpecialtiesCarouselSection from "./SpecialtiesCarouselSection";
import AthleteJourneySection from "./AthleteJourneySection";
import BenefitsSection from "./BenefitsSection";
import SpecialtyGroupsSection from "./SpecialtyGroupsSection";
import SharedCTASection from "@/components/SharedCTASection";
import { SALUD_FAQ } from "@/content/bienestar-salud";

export default function SaludLanding() {
  return (
    <main className="overflow-hidden bg-[var(--bg)] text-[var(--t1)]">
      <SharedHeroSection
        image="/images/lifestyle/Correr_lluvia_1.jpg"
        imageAlt="Deportista en accion — Salud deportiva ESDEC Cordoba"
        eyebrow="Ecosistema ESDEC — Salud deportiva"
        headlinePre="PREVENIR"
        headlineAccent="ES EL PLAN."
        keyword="Salud deportiva en Córdoba, Argentina"
        body="Los deportistas que evaluan, monitorean y actuan antes son los que mantienen la continuidad del proceso. Sin interrupciones. Sin lesiones evitables."
        ctaLabel="Encontrar mi especialista →"
        ctaHref="https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20estoy%20buscando%20un%20especialista%20en%20salud%20deportiva."
        ctaExternal
        stats={[
          { label: "Prevencion activa", title: "Cuida tu cuerpo antes de que lo necesite" },
          { label: "Equipo coordinado", title: "6 tipos de especialistas en un ecosistema" },
          { label: "Respuesta rapida", title: "Primer contacto en menos de 48 horas" },
        ]}
      />
      <SpecialtiesCarouselSection />
      <SpecialtyGroupsSection />
      <AthleteJourneySection />
      <BenefitsSection area="salud" />
      <FAQSection
        id="preguntas-frecuentes"
        eyebrow="Preguntas frecuentes"
        headline="SALUD DEPORTIVA,"
        headlineAccent="SIN VUELTAS."
        items={SALUD_FAQ}
      />
      <SharedCTASection
        eyebrow="Salud deportiva · ESDEC"
        headline="EMPEZA A CUIDARTE."
        headlineAccent="HOY."
        body="La mayoria de las lesiones se evitan. El problema es no tener el sistema antes. Conecta con tu equipo de salud deportiva en Cordoba."
        primaryCtaLabel="Quiero mi equipo de salud →"
        primaryCtaHref="/deportistas"
        secondaryCtaLabel="Quiero unirme como profesional →"
        secondaryCtaHref="/profesionales"
        trustText="Sin costo · Primer contacto en 48hs · Especialistas en Cordoba"
      />
    </main>
  );
}
