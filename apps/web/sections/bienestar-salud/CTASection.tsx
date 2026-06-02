// sections/bienestar-salud/CTASection.tsx
// Seccion final de llamada a la accion, especifica por area.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import {
  SALUD_CTA,
  BIENESTAR_CTA,
  type BienestarSaludArea,
} from "@/content/bienestar-salud";

interface Props {
  area: BienestarSaludArea;
}

export default function CTASection({ area }: Props) {
  const cta = area === "salud" ? SALUD_CTA : BIENESTAR_CTA;
  const accentColor = area === "salud" ? "#5ac8ff" : "#7de8a8";

  return (
    <section className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-32">
      {/* Glow del area */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${accentColor}18 0%, transparent 68%)`,
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      {/* Fingerprint con heartbeat */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] [--fps:rgba(255,255,255,0.9)] [--fpg:rgba(255,255,255,0.02)]"
        aria-hidden="true"
      >
        <FingerprintSVG
          animate={false}
          className="w-[50vw] max-w-[500px] animate-heartbeat"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-landing px-6 text-center">
        <ScrollReveal direction="up">
          <div className="mb-8 flex items-center justify-center">
            <BrandLines size="sm" animated centered />
          </div>

          <p
            className="mb-5 font-condensed text-[10px] font-bold uppercase tracking-[4px]"
            style={{ color: accentColor }}
          >
            {cta.eyebrow}
          </p>

          <h2 className="font-condensed font-black uppercase leading-[0.88] tracking-tight">
            <span className="block text-[clamp(44px,7vw,108px)] text-[var(--t1)]">
              {cta.headline}
            </span>
            <span
              className="block text-[clamp(44px,7vw,108px)]"
              style={{ color: accentColor }}
            >
              {cta.headlineAccent}
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[50ch] font-sans text-[0.97rem] leading-[1.9] text-white/70">
            {cta.subtext}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
            <Link
              href={cta.ctaAthlete.href}
              className="inline-flex min-h-[54px] w-full max-w-[320px] items-center justify-center rounded-[18px] bg-[#78d0ff] px-8 py-3 font-condensed text-[0.82rem] font-bold uppercase tracking-[0.3em] text-[#0d2e6e] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:min-w-[300px]"
            >
              {cta.ctaAthlete.label}
            </Link>
            <Link
              href={cta.ctaProfessional.href}
              className="inline-flex min-h-[54px] w-full max-w-[320px] items-center justify-center rounded-[18px] bg-[#15dc62] px-8 py-3 font-condensed text-[0.82rem] font-bold uppercase tracking-[0.3em] text-[#04213d] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:min-w-[300px]"
            >
              {cta.ctaProfessional.label}
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/ecosistema-deportivo-cordoba"
              className="inline-flex items-center gap-2 font-condensed text-[11px] font-bold uppercase tracking-[0.26em] text-white/48 transition-colors duration-200 hover:text-[var(--p1)]"
            >
              Ver todo el ecosistema ESDEC
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
