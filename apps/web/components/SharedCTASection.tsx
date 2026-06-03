// components/SharedCTASection.tsx
// CTA estandar para todas las paginas de ESDEC.
// Un boton principal prominente + link secundario discreto = sin paralisis de eleccion.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";

interface SharedCTASectionProps {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  body: string;
  /** Boton principal — verde, grande, centrado */
  primaryCtaLabel: string;
  primaryCtaHref: string;
  primaryCtaExternal?: boolean;
  /** Accion secundaria — se muestra como link de texto, no como boton */
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaExternal?: boolean;
  trustText?: string;
  bg?: string;
}

export default function SharedCTASection({
  eyebrow,
  headline,
  headlineAccent,
  body,
  primaryCtaLabel,
  primaryCtaHref,
  primaryCtaExternal = false,
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaExternal = false,
  trustText,
  bg = "var(--bg)",
}: SharedCTASectionProps) {
  const hasTwoCtas = !!secondaryCtaLabel && !!secondaryCtaHref;

  const primaryBtnClass =
    "inline-flex min-h-[64px] w-full max-w-[480px] items-center justify-center rounded-[18px] bg-[#15dc62] px-10 py-4 font-condensed text-[0.86rem] font-bold uppercase tracking-[0.3em] text-[#05213d] no-underline transition-all duration-200 hover:-translate-y-px hover:brightness-105";

  return (
    <section
      className="relative overflow-hidden px-6 py-20 md:py-28"
      style={{ background: bg }}
    >
      {/* Glow central que atrae el ojo al CTA */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(12,210,94,0.1) 0%, rgba(90,200,255,0.07) 42%, transparent 68%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-landing">
        <ScrollReveal direction="up">
          <div className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/[0.075] px-8 py-14 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_30px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-md md:px-12 md:py-20">

            {/* Accent line en hover */}
            <span
              className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[linear-gradient(90deg,rgba(125,232,168,0.9)_0%,rgba(90,200,255,0.92)_100%)] transition-transform duration-500 ease-out group-hover:scale-x-100"
              aria-hidden="true"
            />

            {/* Fingerprint animada de fondo */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.055] [--fps:rgba(255,255,255,0.9)] [--fpg:rgba(255,255,255,0.02)]"
              aria-hidden="true"
            >
              <FingerprintSVG animate={false} className="w-[52vw] max-w-[520px] animate-heartbeat" />
            </div>

            {/* Eyebrow */}
            <div className="relative mb-6 flex items-center justify-center gap-3">
              <BrandLines size="sm" animated centered />
              <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                {eyebrow}
              </p>
            </div>

            {/* Titulo */}
            <h2 className="text-clamp-problem relative font-condensed font-black uppercase leading-[0.88] tracking-tight text-white">
              {headline}{" "}
              {headlineAccent && (
                <span className="text-[var(--p2)]">{headlineAccent}</span>
              )}
            </h2>

            {/* Body */}
            <p className="relative mx-auto mt-6 max-w-[48ch] font-sans text-[0.96rem] leading-[1.9] text-white/70">
              {body}
            </p>

            {/* Boton principal — unico y prominente */}
            <div className="relative mt-10 flex flex-col items-center gap-3">
              {primaryCtaExternal ? (
                <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer" className={primaryBtnClass}>
                  {primaryCtaLabel}
                </a>
              ) : (
                <Link href={primaryCtaHref} className={primaryBtnClass}>
                  {primaryCtaLabel}
                </Link>
              )}

              {/* Accion secundaria — link discreto, no compite con el principal */}
              {hasTwoCtas && (
                secondaryCtaExternal ? (
                  <a
                    href={secondaryCtaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 font-condensed text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/40 no-underline transition-colors hover:text-white/65"
                  >
                    {secondaryCtaLabel} →
                  </a>
                ) : (
                  <Link
                    href={secondaryCtaHref!}
                    className="mt-1 font-condensed text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/40 no-underline transition-colors hover:text-white/65"
                  >
                    {secondaryCtaLabel} →
                  </Link>
                )
              )}
            </div>

            {/* Trust text */}
            {trustText && (
              <p className="relative mt-6 text-center font-sans text-[0.78rem] font-semibold text-white/45">
                {trustText}
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
