// sections/bienestar-salud/ForProfessionalsSection.tsx
// Muestra el valor que ESDEC le da a los profesionales de salud deportiva — sin glows ni hex hardcodeado.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { BIENESTAR_FOR_PROFESSIONALS_VALUES } from "@/content/bienestar-salud";

export default function ForProfessionalsSection() {
  const { eyebrow, headline, headlineAccent, valueProps, cta } =
    BIENESTAR_FOR_PROFESSIONALS_VALUES;

  return (
    <section className="bg-[var(--bg2)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-landing">
        {/* Header */}
        <div className="mb-12">
          <ScrollReveal direction="up">
            <div className="mb-4 flex items-center gap-3">
              <BrandLines animated />
              <Kicker>{eyebrow}</Kicker>
            </div>
            <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
              <span className="text-[var(--t1)]">{headline}</span>
              <br />
              <span className="ecos-title-accent">{headlineAccent}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Grid de value props */}
        <ScrollReveal
          cascade
          cascadeDelay={75}
          className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {valueProps.map((vp) => (
            <div
              key={vp.id}
              className="group relative overflow-hidden rounded-[20px] border border-black/10 bg-[var(--card-bg)] p-6 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:z-10 hover:scale-[1.06] hover:shadow-[0_32px_70px_-28px_rgba(0,0,0,0.5)] dark:border-white/12 dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]"
            >
              <span
                className="pointer-events-none absolute left-0 top-0 h-[2px] w-full"
                style={{ background: "linear-gradient(90deg, var(--p1) 0%, transparent 100%)" }}
                aria-hidden="true"
              />

              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--p1)]/20 text-[var(--p1)]">
                <StickerIcon name={vp.icon} size="sm" />
              </span>

              <h3 className="mb-2 font-condensed text-[1rem] font-bold uppercase leading-[1.1] tracking-[0.02em] text-[var(--t1)]">
                {vp.title}
              </h3>

              <p className="font-sans text-[0.85rem] leading-[1.75] text-[var(--t2)]">
                {vp.description}
              </p>
            </div>
          ))}
        </ScrollReveal>

        {/* CTA directo */}
        <ScrollReveal direction="up" delay={60}>
          <div className="flex justify-start">
            <Link
              href={cta.href}
              className="group inline-flex min-h-[58px] items-center gap-2 rounded-full border border-[var(--p1)]/30 bg-[var(--p1)]/10 px-10 font-sans text-[0.95rem] font-semibold uppercase tracking-[0.04em] text-[var(--p1)] transition-all duration-200 hover:-translate-y-px hover:border-[var(--p1)]/60 hover:bg-[var(--p1)]/15"
            >
              {cta.label}
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
