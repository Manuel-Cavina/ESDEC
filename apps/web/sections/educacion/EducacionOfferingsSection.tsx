// sections/educacion/EducacionOfferingsSection.tsx
// 4 formatos de contenido de Educacion deportiva.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import IconFeatureCard from "@/components/ui/IconFeatureCard";
import { EDUCACION_OFFERINGS } from "@/content/educacion";

export default function EducacionOfferingsSection() {
  const { eyebrow, headline, headlineAccent, intro, formats } = EDUCACION_OFFERINGS;

  return (
    <section id="que-brinda" className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-28">
      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <ScrollReveal direction="up" className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <Kicker>{eyebrow}</Kicker>
          </div>
          <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
            <span className="text-[var(--t1)]">{headline}</span>{" "}
            <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>
          <p className="mt-5 max-w-[56ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
            {intro}
          </p>
        </ScrollReveal>

        {/* Format cards — 2x2 */}
        <ScrollReveal cascade cascadeDelay={80} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {formats.map((format) => (
            <IconFeatureCard
              key={format.id}
              icon={format.icon}
              title={format.title}
              body={format.description}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
