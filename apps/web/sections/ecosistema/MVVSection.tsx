// sections/ecosistema/MVVSection.tsx
// Manifiesto tipográfico + Objetivo / Visión / Misión en 3 columnas institucionales, sin ruido decorativo.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import FingerprintSVG from "@/components/FingerprintSVG";
import { ECOSISTEMA_MVV } from "@/content/ecosistema";

export default function MVVSection() {
  const { eyebrow, manifestoLead, manifestoPunch, closing, columns } = ECOSISTEMA_MVV;

  return (
    <section id="que-es-esdec" className="relative scroll-mt-24 overflow-hidden bg-[var(--bg2)] px-6 py-28">
      {/* Textura de fondo — grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(90,200,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,200,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      {/* Huella de fondo — marca de agua discreta */}
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[38vw] max-w-[460px] -translate-y-1/2 opacity-[0.05] [--fpg:rgba(255,255,255,0.02)] [--fps:rgba(255,255,255,0.9)] lg:block"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-full" />
      </div>

      <div className="relative mx-auto max-w-landing">

        {/* Eyebrow */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-14 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <Kicker>{eyebrow}</Kicker>
          </div>
        </ScrollReveal>

        {/* Manifiesto — build-up + punch line */}
        <ScrollReveal direction="up" delay={80}>
          <div className="mb-20">
            <p className="max-w-[22ch] font-condensed text-[clamp(1.6rem,3vw,2.4rem)] font-medium uppercase leading-[1.1] tracking-tight text-[var(--t2)]">
              {manifestoLead}
            </p>
            <p className="mt-2 max-w-[16ch] font-condensed text-[clamp(2.8rem,6vw,5.2rem)] font-black uppercase leading-[0.92] tracking-tight">
              <span className="ecos-title-accent">{manifestoPunch}</span>
            </p>

            {/* Frase de cierre */}
            <p className="mt-8 max-w-[52ch] font-sans text-[0.95rem] leading-[1.9] text-[var(--t2)]">
              {closing}
            </p>
          </div>
        </ScrollReveal>

        {/* Objetivo / Vision / Mision — 3 columnas institucionales */}
        <ScrollReveal
          cascade
          cascadeDelay={90}
          className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-8"
        >
          {columns.map((col) => (
            <article key={col.id}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/15 font-condensed text-[0.7rem] font-bold text-[var(--p2)]">
                  {col.number}
                </span>
                <Kicker>{col.label}</Kicker>
              </div>

              <h3 className="font-condensed text-[1.4rem] font-semibold leading-snug tracking-tight text-[var(--t1)]">
                {col.headlinePre} <span className="text-[var(--p2)]">{col.headlineAccent}</span>
                {col.headlinePost}
              </h3>

              <p className="mt-3 font-sans text-[0.92rem] leading-[1.8] text-[var(--t2)]">
                {col.body}
              </p>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
