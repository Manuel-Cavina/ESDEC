// sections/bienestar-salud/ForProfessionalsSection.tsx
// Muestra el valor que ESDEC le da a los profesionales de salud deportiva.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { SALUD_FOR_PROFESSIONALS } from "@/content/bienestar-salud";

const ACCENT = "#5ac8ff";

export default function ForProfessionalsSection() {
  const { eyebrow, headline, headlineAccent, subtext, valueProps, cta } =
    SALUD_FOR_PROFESSIONALS;

  return (
    <section className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-28">
      {/* Fondo grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(90,200,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,200,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      {/* Glow esquina derecha */}
      <div
        className="pointer-events-none absolute right-[-5%] top-[10%] h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(90,200,255,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* Fingerprint decorativa */}
      <div
        className="pointer-events-none absolute left-[-8%] bottom-[-5%] opacity-[0.06] [--fps:rgba(90,200,255,0.9)] [--fpg:rgba(90,200,255,0.02)]"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[44vw] max-w-[440px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <ScrollReveal direction="up">
            <BrandLines animated className="mb-5" />
            <p
              className="mb-4 font-condensed text-[10px] font-bold uppercase tracking-[4px]"
              style={{ color: ACCENT }}
            >
              {eyebrow}
            </p>
            <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
              <span className="text-[var(--t1)]">{headline}</span>
              <br />
              <span style={{ color: ACCENT }}>{headlineAccent}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={80}>
            <p className="max-w-[48ch] font-sans text-[0.96rem] leading-[1.9] text-[var(--t2)]">
              {subtext}
            </p>
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
              className="group relative overflow-hidden rounded-[22px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(90,200,255,0.3)] hover:bg-[rgba(255,255,255,0.08)]"
            >
              {/* Accent line */}
              <span
                className="pointer-events-none absolute left-0 top-0 h-px w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(255,255,255,0.06) 100%)`,
                }}
                aria-hidden="true"
              />

              <div className="mb-4" style={{ color: ACCENT }}>
                <StickerIcon
                  name={vp.icon}
                  size="sm"
                  className="[&>svg]:drop-shadow-[0_0_8px_currentColor]"
                />
              </div>

              <h3 className="mb-3 font-condensed text-[1rem] font-bold uppercase leading-[1.1] tracking-[0.02em] text-[var(--t1)]">
                {vp.title}
              </h3>

              <p className="font-sans text-[0.82rem] leading-[1.72] text-[var(--t2)]">
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
              className="inline-flex min-h-[50px] items-center gap-2 rounded-[14px] border border-[rgba(90,200,255,0.28)] bg-[rgba(90,200,255,0.08)] px-7 py-3 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.26em] text-[#5ac8ff] transition-all duration-200 hover:-translate-y-px hover:border-[rgba(90,200,255,0.5)] hover:bg-[rgba(90,200,255,0.12)]"
            >
              {cta.label}
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
