// sections/bienestar-salud/CTASection.tsx
// CTA de salud y bienestar usando el componente compartido estandar.

import SharedCTASection from "@/components/SharedCTASection";
import { type BienestarSaludArea } from "@/content/bienestar-salud";

interface Props {
  area: BienestarSaludArea;
}

export default function CTASection({ area }: Props) {
  if (area === "salud") {
    return (
      <SharedCTASection
        eyebrow="Salud deportiva · ESDEC"
        headline="ENCONTRA TU"
        headlineAccent="ESPECIALISTA."
        body="Conecta con kinesiologo, deportologo, nutricionista y mas en Cordoba. Tu proceso de salud deportiva empieza hoy."
        primaryCtaLabel="Entrar como deportista"
        primaryCtaHref="/deportistas"
        secondaryCtaLabel="Sumarme como profesional"
        secondaryCtaHref="/profesionales"
        trustText="Especialistas en Cordoba · Respuesta en 48hs"
      />
    );
  }

  return (
    <SharedCTASection
      eyebrow="Bienestar deportivo · ESDEC"
      headline="CONSTRUI TU"
      headlineAccent="PROCESO HOY."
      body="Conecta con psicologo deportivo, coach, instructor de yoga y mas en Cordoba. Tu bienestar empieza con la persona correcta."
      primaryCtaLabel="Entrar como deportista"
      primaryCtaHref="/deportistas"
      secondaryCtaLabel="Sumarme como profesional"
      secondaryCtaHref="/profesionales"
      trustText="Especialistas en Cordoba · Respuesta en 48hs"
    />
  );
}
