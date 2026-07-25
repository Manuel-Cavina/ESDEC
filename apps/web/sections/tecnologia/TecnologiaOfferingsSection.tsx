// sections/tecnologia/TecnologiaOfferingsSection.tsx
// 4 funciones concretas de la tecnologia ESDEC.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { TECNOLOGIA_OFFERINGS } from "@/content/tecnologia";

export default function TecnologiaOfferingsSection() {
  const { eyebrow, headline, headlineAccent, intro, features } = TECNOLOGIA_OFFERINGS;

  return (
    <section className="bg-[var(--bg)] py-24 md:py-28">
      <div className="mx-auto max-w-landing px-6">
        <ScrollReveal direction="up" className="mb-14 max-w-2xl">
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

        <ScrollReveal cascade cascadeDelay={80} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden rounded-[20px] border border-black/10 bg-[var(--card-bg)] p-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/40 dark:border-white/12 dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]"
            >
              <span
                className="pointer-events-none absolute left-0 top-0 h-[2px] w-full"
                style={{ background: "linear-gradient(90deg, var(--p1) 0%, transparent 100%)" }}
                aria-hidden="true"
              />

              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--p1)]/20 text-[var(--p1)]">
                <StickerIcon name={feature.icon} size="sm" />
              </span>

              <h3 className="mb-2 font-condensed text-[1rem] font-bold uppercase leading-[1.1] tracking-[0.02em] text-[var(--t1)]">
                {feature.title}
              </h3>
              <p className="font-sans text-[0.85rem] leading-[1.75] text-[var(--t2)]">
                {feature.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
