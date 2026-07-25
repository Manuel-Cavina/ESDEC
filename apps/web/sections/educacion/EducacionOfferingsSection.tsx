// sections/educacion/EducacionOfferingsSection.tsx
// 4 formatos de contenido de Educacion deportiva.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
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
            <div
              key={format.id}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(90,200,255,0.2)] hover:bg-[rgba(255,255,255,0.05)] md:p-10"
            >
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, var(--p1) 0%, var(--p2) 100%)" }}
                aria-hidden="true"
              />

              <StickerIcon name={format.icon} size="lg" className="mb-5" />

              <h3 className="ecos-title-accent mb-3 font-condensed text-[1.4rem] font-black uppercase leading-[1.05] tracking-tight">
                {format.title}
              </h3>
              <p className="font-sans text-[0.9rem] leading-[1.8] text-[var(--t2)]">
                {format.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
