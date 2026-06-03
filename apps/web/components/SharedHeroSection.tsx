// components/SharedHeroSection.tsx
// Hero estandar para todas las paginas de ESDEC.
// Fusion: overlay diagonal + dot grid + fingerprint (eventos) +
//         contenido al fondo + grid de stats + fade inferior (profesionales).

import Image from "next/image";
import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";

export interface HeroStat {
  label: string;
  title: string;
}

interface SharedHeroSectionProps {
  /** Foto de fondo — si no se provee usa gradiente solido */
  image?: string;
  imageAlt?: string;
  /** Texto pequeno sobre el headline */
  eyebrow: string;
  /** Primera linea — blanco */
  headlinePre: string;
  /** Segunda linea — color acento (--p1) */
  headlineAccent: string;
  /** Tercera linea opcional — blanco suave */
  headlinePost?: string;
  /** Cuerpo */
  body: string;
  /** CTA principal */
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  /** Stats / beneficios en el pie — maximo 4 */
  stats?: HeroStat[];
  id?: string;
}

export default function SharedHeroSection({
  image,
  imageAlt = "",
  eyebrow,
  headlinePre,
  headlineAccent,
  headlinePost,
  body,
  ctaLabel,
  ctaHref,
  ctaExternal = false,
  stats,
  id,
}: SharedHeroSectionProps) {
  const hasStats = !!stats && stats.length > 0;

  return (
    <section
      id={id}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--bg)]"
    >
      {/* ── Foto de fondo ── */}
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center opacity-55 saturate-[0.82] contrast-110"
        />
      )}

      {/* ── Overlay diagonal LEFT-HEAVY (deja respirar la foto a la derecha) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(0,10,24,0.95) 0%, rgba(4,26,68,0.84) 42%, rgba(8,40,96,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Dot grid — textura de profundidad ── */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      {/* ── Fade inferior hacia el fondo de la proxima seccion ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-44 md:h-56"
        style={{
          background: "linear-gradient(180deg, transparent 0%, var(--bg) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Fingerprint flotante — desktop, esquina derecha ── */}
      <div
        className="pointer-events-none absolute -right-10 top-28 hidden w-[38vw] max-w-[500px] opacity-22 [--fpg:rgba(90,200,255,0.05)] [--fps:rgba(90,200,255,0.42)] lg:block"
        aria-hidden="true"
      >
        <FingerprintSVG animate className="w-full animate-fp-float" strokeOpacity={0.5} />
      </div>

      {/* ── Contenido — anclado al fondo ── */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-landing flex-col justify-end px-6 pb-0 pt-32 md:pt-40">
        <div className="pb-12 lg:pb-16">

          {/* Eyebrow */}
          <ScrollReveal direction="up">
            <div className="mb-6 flex items-center gap-3">
              <BrandLines size="md" animated />
              <p className="font-condensed text-[11px] font-black uppercase tracking-[0.44em] text-[var(--p1)]">
                {eyebrow}
              </p>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up" delay={80}>
            <h1 className="max-w-[12ch] font-condensed text-[clamp(4.4rem,10.5vw,9.8rem)] font-black uppercase leading-[0.75] tracking-tight text-white">
              <span className="block">{headlinePre}</span>
              <span className="block text-[var(--p1)]">{headlineAccent}</span>
              {headlinePost && (
                <span className="block text-white/82">{headlinePost}</span>
              )}
            </h1>
          </ScrollReveal>

          {/* Body */}
          <ScrollReveal direction="up" delay={160}>
            <p className="mt-7 max-w-[55ch] font-sans text-[1rem] font-medium leading-[1.9] text-white/80 md:text-[1.08rem]">
              {body}
            </p>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal direction="up" delay={240}>
            <div className="mt-9">
              {ctaExternal ? (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-bg)] px-8 py-3.5 font-condensed text-[13px] font-bold uppercase tracking-[3px] text-[var(--btn-t)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
                >
                  {ctaLabel} →
                </a>
              ) : (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--btn-bg)] px-8 py-3.5 font-condensed text-[13px] font-bold uppercase tracking-[3px] text-[var(--btn-t)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
                >
                  {ctaLabel} →
                </Link>
              )}
            </div>
          </ScrollReveal>

        </div>

        {/* ── Stats / beneficios — separados por borde ── */}
        {hasStats && (
          <div className="border-t border-white/10 pb-10 pt-7 md:pb-14 md:pt-9">
            <div
              className={`grid gap-6 md:gap-8 ${
                stats!.length <= 3
                  ? "md:grid-cols-3"
                  : "sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {stats!.map((stat, i) => (
                <ScrollReveal key={stat.label} direction="up" delay={i * 70}>
                  <article className="max-w-[24ch]">
                    <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
                      {stat.label}
                    </p>
                    <div className="mt-3 h-px w-10 bg-gradient-to-r from-[var(--p1)]/90 to-transparent" />
                    <h3 className="mt-4 max-w-[18ch] font-condensed text-[clamp(1.1rem,1.8vw,1.35rem)] font-bold uppercase leading-[1.08] tracking-[0.02em] text-white">
                      {stat.title}
                    </h3>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
