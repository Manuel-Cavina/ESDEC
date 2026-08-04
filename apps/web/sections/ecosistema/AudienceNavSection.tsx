// sections/ecosistema/AudienceNavSection.tsx
// Navegacion explicita del home: elegi deportista o profesional.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import IconFeatureCard from "@/components/ui/IconFeatureCard";
import { ECOSISTEMA_NAV } from "@/content/ecosistema";

export default function AudienceNavSection() {
  const { eyebrow, headline, headlineAccent, intro, audiences } = ECOSISTEMA_NAV;

  return (
    <section id="elegir-camino" className="scroll-mt-24 bg-[var(--bg2)] px-6 py-24 md:py-28">
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
            {intro}
          </p>
        </ScrollReveal>

        {/* Dos caminos — deportista / profesional */}
        <ScrollReveal cascade cascadeDelay={100} className="mt-12 grid gap-5 md:grid-cols-2">
          {audiences.map((aud) => (
            <IconFeatureCard
              key={aud.id}
              href={aud.href}
              icon={aud.icon}
              eyebrow={aud.eyebrow}
              title={aud.title}
              body={aud.body}
              ctaLabel={aud.cta}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
