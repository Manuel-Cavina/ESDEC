// sections/ecosistema/PillarsGridSection.tsx
// Las 6 areas del ecosistema — toda la card es el link, crece al pasar el mouse, huella en hover.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import IconFeatureCard from "@/components/ui/IconFeatureCard";
import { ECOSISTEMA_ECOSYSTEM } from "@/content/ecosistema";

export default function PillarsGridSection() {
  const { eyebrow, headline, headlineAccent, subtext, pillars } = ECOSISTEMA_ECOSYSTEM;

  return (
    <section id="areas" className="scroll-mt-24 bg-[var(--bg)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-landing">
        <ScrollReveal direction="up" className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <Kicker>{eyebrow}</Kicker>
          </div>
          <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headline} <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>
          <p className="mt-5 max-w-[52ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
            {subtext}
          </p>
        </ScrollReveal>

        <ScrollReveal cascade cascadeDelay={70} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <IconFeatureCard
              key={pillar.id}
              href={pillar.href}
              icon={pillar.icon}
              title={pillar.title}
              body={pillar.kicker}
              ctaLabel={pillar.ctaLabel}
              size="md"
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
