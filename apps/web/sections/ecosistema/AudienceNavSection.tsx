// sections/ecosistema/AudienceNavSection.tsx
// Navegacion explicita del home: elegi deportista o profesional.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
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
          <h2 className="text-clamp-problem font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headline} <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>
          <p className="mt-5 max-w-[52ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
            {intro}
          </p>
        </ScrollReveal>

        {/* Dos caminos — deportista / profesional */}
        <ScrollReveal cascade cascadeDelay={100} className="mt-12 grid gap-5 md:grid-cols-2">
          {audiences.map((aud) => (
            <Link
              key={aud.id}
              href={aud.href}
              className="group relative overflow-hidden rounded-[24px] border border-black/10 bg-[var(--card-bg)] p-8 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/50 hover:bg-[var(--card-bg2)] dark:border-white/12 dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)] md:p-10"
            >
              <span
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: `${aud.accent}1f`, color: aud.accent }}
              >
                <StickerIcon name={aud.icon} size="md" />
              </span>

              <Kicker className="mb-3">{aud.eyebrow}</Kicker>
              <h3 className="font-condensed text-[clamp(1.15rem,1.9vw,1.4rem)] font-bold uppercase leading-[1.08] tracking-[0.02em] text-[var(--t1)]">
                {aud.title}
              </h3>
              <p className="mt-3 max-w-[42ch] font-sans text-[0.95rem] leading-[1.8] text-[var(--t2)]">
                {aud.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[var(--p1)]">
                {aud.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
