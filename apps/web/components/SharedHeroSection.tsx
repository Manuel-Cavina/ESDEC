// components/SharedHeroSection.tsx
// Hero estandar para todas las paginas de ESDEC.
// Animacion stamp por palabra (estilo Nike) + overlay diagonal + fingerprint flotante.

import Image from "next/image";
import BrandLines from "@/components/BrandLines";
import SweepButton from "@/components/ui/SweepButton";
import FingerprintSVG from "@/components/FingerprintSVG";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";

export interface HeroStat {
  label: string;
  title: string;
}

interface SharedHeroSectionProps {
  image?: string;
  imageAlt?: string;
  eyebrow: string;
  headlinePre: string;
  headlineAccent: string;
  headlinePost?: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  stats?: HeroStat[];
  id?: string;
}

function StampWord({
  word,
  delay,
  className = "",
}: {
  word: string;
  delay: number;
  className?: string;
}) {
  return (
    <span
      className={`animate-stamp inline-block ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {word}
    </span>
  );
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

  // Pre-calcula todas las palabras con su delay para el stamp
  const preWords = headlinePre.trim().split(/\s+/);
  const accentWords = headlineAccent.trim().split(/\s+/);
  const postWords = headlinePost ? headlinePost.trim().split(/\s+/) : [];
  const WORD_DELAY = 110;
  let wi = 0;

  return (
    <section
      id={id}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--bg)]"
    >
      {/* Foto de fondo */}
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

      {/* Overlay diagonal LEFT-HEAVY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(0,10,24,0.95) 0%, rgba(4,26,68,0.84) 42%, rgba(8,40,96,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      {/* Fingerprint flotante — desktop, top-right */}
      <div
        className="pointer-events-none absolute -right-10 top-28 hidden w-[38vw] max-w-[500px] opacity-[0.22] [--fpg:rgba(90,200,255,0.05)] [--fps:rgba(90,200,255,0.42)] lg:block"
        aria-hidden="true"
      >
        <FingerprintSVG animate className="w-full animate-fp-float" strokeOpacity={0.5} />
      </div>

      {/* Contenido — anclado al fondo */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-landing flex-col justify-end px-6 pb-0 pt-32 md:pt-40">
        <div className="pb-12 lg:pb-14">

          {/* Eyebrow */}
          <ScrollReveal direction="up">
            <div className="mb-6 flex items-center gap-3">
              <BrandLines size="md" animated />
              <Kicker>{eyebrow}</Kicker>
            </div>
          </ScrollReveal>

          {/* Headline con animacion stamp por palabra */}
          <h1 className="max-w-[12ch] font-condensed text-[clamp(4.4rem,10.5vw,9.8rem)] font-black uppercase leading-[0.75] tracking-tight text-white">
            {/* Palabras blancas */}
            <span className="block">
              {preWords.map((word) => (
                <StampWord
                  key={`pre-${word}-${wi}`}
                  word={word}
                  delay={wi++ * WORD_DELAY}
                />
              ))}
            </span>

            {/* Linea acento — stamp completo + gradiente marcado azul→verde */}
            <span
              className="animate-stamp block"
              style={{
                animationDelay: `${(wi = preWords.length) * WORD_DELAY}ms`,
                animationFillMode: "both",
                background: "linear-gradient(90deg, #5ac8ff 0%, #0cd25e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {headlineAccent}
            </span>

            {/* Tercera linea opcional */}
            {postWords.length > 0 && (
              <span className="block text-white/82">
                {postWords.map((word) => (
                  <StampWord
                    key={`post-${word}-${wi}`}
                    word={word}
                    delay={wi++ * WORD_DELAY}
                    className="mr-[0.18em] last:mr-0"
                  />
                ))}
              </span>
            )}
          </h1>

          {/* Body */}
          <ScrollReveal direction="up" delay={preWords.length * WORD_DELAY + 100}>
            <p className="mt-7 max-w-[55ch] font-sans text-[1rem] font-medium leading-[1.9] text-white/80 md:text-[1.08rem]">
              {body}
            </p>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal direction="up" delay={preWords.length * WORD_DELAY + 200}>
            <div className="mt-9">
              <SweepButton
                label={ctaLabel}
                href={ctaHref}
                external={ctaExternal}
                size="md"
                variant="glass"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats bar — separados por border-t, sin fade */}
        {hasStats && (
          <div className="-mx-6 border-t border-white/12 bg-[#001f3f]/55 px-6 py-7 backdrop-blur-[3px] md:mx-0 md:bg-transparent md:px-0">
            <div
              className={`grid gap-6 md:gap-10 ${
                stats!.length <= 3 ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {stats!.map((stat, i) => (
                <ScrollReveal key={stat.label} direction="up" delay={i * 70}>
                  <article className="max-w-[24ch]">
                    <Kicker>{stat.label}</Kicker>
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
