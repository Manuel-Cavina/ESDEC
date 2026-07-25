// sections/ecosistema/PillarsGridSection.tsx
// Las 6 areas del ecosistema — toda la card es el link, crece al pasar el mouse, huella en hover.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import FingerprintSVG from "@/components/FingerprintSVG";
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
          <h2 className="text-clamp-problem font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {headline} <span className="ecos-title-accent">{headlineAccent}</span>
          </h2>
          <p className="mt-5 max-w-[52ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
            {subtext}
          </p>
        </ScrollReveal>

        <ScrollReveal cascade cascadeDelay={70} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.id}
              href={pillar.href}
              className="group relative block overflow-hidden rounded-[20px] border border-black/10 bg-[var(--card-bg)] p-7 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:z-10 hover:scale-[1.06] hover:shadow-[0_32px_70px_-28px_rgba(0,0,0,0.5)] dark:border-white/12 dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]"
            >
              <span
                className="pointer-events-none absolute left-0 top-0 h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, ${pillar.accent}80 0%, transparent 100%)` }}
                aria-hidden="true"
              />

              {/* Huella — aparece en hover, en vez de la flecha. Ancho proporcional a la card (40%), no un valor fijo. */}
              <div
                className="pointer-events-none absolute bottom-2 right-2 w-2/5 opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100"
                style={{ ["--fps" as string]: pillar.accent, ["--fpg" as string]: `${pillar.accent}18` }}
                aria-hidden="true"
              >
                <FingerprintSVG animate={false} className="w-full" strokeOpacity={0.5} />
              </div>

              <h3 className="relative font-condensed text-[clamp(1.15rem,1.9vw,1.4rem)] font-bold uppercase leading-[1.08] tracking-[0.02em] text-[var(--t1)]">
                {pillar.title}
              </h3>
              <p
                className="relative mt-1.5 max-w-[70%] font-condensed text-[0.8rem] font-bold uppercase tracking-[0.06em]"
                style={{ color: pillar.accent }}
              >
                {pillar.kicker}
              </p>
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
