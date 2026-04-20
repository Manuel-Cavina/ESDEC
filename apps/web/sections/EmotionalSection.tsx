"use client";

// sections/EmotionalSection.tsx
// Compact conviction section placed after the functional explanation.

import Image from "next/image";
import { EMOTIONAL, PROFESSIONAL_EMOTIONAL } from "@/content/landing";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";

type Audience = "deportista" | "profesional";

interface EmotionalSectionProps {
  audience?: Audience;
}

export default function EmotionalSection({
  audience = "deportista",
}: EmotionalSectionProps) {
  const data = audience === "profesional" ? PROFESSIONAL_EMOTIONAL : EMOTIONAL;
  const image =
    audience === "profesional"
      ? "/images/lifestyle/Medico1.png"
      : "/images/lifestyle/Vida1.jpg";

  return (
    <section
      id="emotional"
      className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-32"
    >
      <Image
        src={image}
        alt=""
        fill
        quality={90}
        sizes="100vw"
        priority={audience === "profesional"}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,19,0.58),rgba(5,9,19,0.76))]" />
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center [--fps:rgba(90,200,255,0.12)] [--fpg:rgba(90,200,255,0.04)]"
        aria-hidden="true"
      >
        <FingerprintSVG
          animate={false}
          className="w-[58vw] max-w-[520px] animate-heartbeat"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-landing px-6">
        <ScrollReveal direction="up" className="text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <BrandLines size="sm" animated centered />
            <span className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
              {data.eyebrow}
            </span>
          </div>

          <h2 className="text-clamp-beat-lg font-condensed font-black uppercase leading-[0.92] tracking-tight text-white">
            <span className="block">{data.headlinePre}</span>
            <span className="block text-[var(--p1)]">{data.headlineAccent}</span>
            <span className="block text-white/84">{data.headlinePost}</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl font-sans text-base leading-[1.9] text-white/78">
            {data.body}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {data.points.map((point, index) => (
            <ScrollReveal key={point} direction="up" delay={index * 80}>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.06] px-5 py-5 text-center backdrop-blur-[12px]">
                <p className="font-condensed text-[17px] font-bold uppercase leading-[1.15] tracking-wide text-white">
                  {point}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
