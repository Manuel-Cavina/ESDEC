// sections/ecosistema/HeroSection.tsx
// Hero editorial full-bleed para la pagina del ecosistema.

import Link from "next/link";
import Image from "next/image";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_HERO } from "@/content/ecosistema";

export default function HeroSection() {
  const {
    eyebrow,
    headlineLine1,
    headlineLine2,
    headlineLine3,
    headlineAccent,
    subtext,
    pillars,
    ctaDeportista,
    ctaProfesional,
    heroImage,
    heroImageAlt,
  } = ECOSISTEMA_HERO;

  return (
    <section
      id="ecosistema-hero"
      className="pointer-events-none relative isolate min-h-[100svh] overflow-hidden bg-[var(--bg)]"
    >
      <Image
        src={heroImage}
        alt={heroImageAlt}
        fill
        priority
        quality={84}
        sizes="100vw"
        className="object-cover object-center"
        style={{
          filter:
            "blur(12px) scale(1.08) saturate(0.58) contrast(0.96) brightness(0.34)",
          objectPosition: "center 28%",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(4,23,60,0.88) 0%, rgba(8,35,88,0.9) 42%, rgba(3,18,48,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(90,200,255,0.08) 0%, rgba(90,200,255,0.03) 26%, transparent 58%)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-auto relative z-10 mx-auto flex min-h-[100svh] max-w-landing flex-col justify-center px-6 py-28 text-center md:px-10 md:py-32">
        <ScrollReveal direction="up">
          <div className="mb-6 flex items-center justify-center gap-3">
            <BrandLines size="sm" animated centered />
            <p className="ecos-kicker">
              {eyebrow}
            </p>
          </div>

          <h1 className="ecos-title">
            <span className="block text-[var(--t1)]">{headlineLine1}</span>
            <span className="block text-[var(--t1)]">{headlineLine2}</span>
            <span className="block text-[var(--t1)] opacity-88">{headlineLine3}</span>
            <span className="ecos-title-accent block">{headlineAccent}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={120}>
          <p className="mx-auto mt-7 max-w-[56ch] font-sans text-[0.98rem] leading-[1.9] text-white/78">
            {subtext}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="font-condensed text-[0.84rem] font-bold uppercase tracking-[0.22em] text-white/58 transition-colors duration-200 hover:text-[var(--p1)]"
              >
                {pillar}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <Link
              href="/deportistas"
              className="inline-flex min-h-[54px] w-full max-w-[320px] items-center justify-center rounded-[18px] bg-[#78d0ff] px-8 py-3 font-condensed text-[0.84rem] font-bold uppercase tracking-[0.3em] text-[#0f326f] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:min-w-[320px]"
            >
              {ctaDeportista}
            </Link>
            <Link
              href="/profesionales"
              className="inline-flex min-h-[54px] w-full max-w-[320px] items-center justify-center rounded-[18px] bg-[#15dc62] px-8 py-3 font-condensed text-[0.84rem] font-bold uppercase tracking-[0.3em] text-[#05213d] transition-all duration-200 hover:-translate-y-px hover:brightness-105 md:min-w-[320px]"
            >
              {ctaProfesional}
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
