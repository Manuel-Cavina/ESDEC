"use client";

// sections/EntrySection.tsx
// Audience-specific opening hero that bridges the split selector with the chosen route.

import Image from "next/image";
import { ABOUT, ENTRY, PROFESSIONAL_ABOUT } from "@/content/landing";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import Kicker from "@/components/ui/Kicker";
import SweepButton from "@/components/ui/SweepButton";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";

interface EntrySectionProps {
  audience?: Audience;
}

export default function EntrySection({
  audience = "deportista",
}: EntrySectionProps) {
  const intro = audience === "profesional" ? ENTRY.profesional : ENTRY.deportista;
  const benefits =
    audience === "profesional"
      ? PROFESSIONAL_ABOUT.benefits.slice(0, 3)
      : ABOUT.benefits.slice(0, 3);

  return (
    <section
      id="entry"
      data-section="entry"
      className="relative isolate overflow-hidden bg-[var(--bg)]"
    >
      <Image
        src={intro.image}
        alt=""
        fill
        priority
        quality={92}
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            audience === "profesional"
              ? "linear-gradient(115deg, rgba(0, 12, 26, 0.94) 0%, rgba(0, 20, 40, 0.84) 38%, rgba(1, 37, 71, 0.56) 68%, rgba(0, 12, 26, 0.88) 100%)"
              : "linear-gradient(115deg, rgba(5, 9, 19, 0.94) 0%, rgba(8, 28, 74, 0.84) 38%, rgba(21, 86, 212, 0.34) 68%, rgba(5, 9, 19, 0.82) 100%)",
        }}
      />


      <div
        className={cn(
          "pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 md:block",
          audience === "profesional"
            ? "[--fps:rgba(12,210,94,0.12)] [--fpg:rgba(12,210,94,0.03)]"
            : "[--fps:rgba(90,200,255,0.16)] [--fpg:rgba(90,200,255,0.04)]"
        )}
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[38vw] max-w-[460px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-landing items-end px-6 pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="w-full">
          <div className="max-w-4xl">
            <ScrollReveal direction="up">
              <div className="mb-6 flex items-center gap-3">
                <BrandLines size="sm" animated />
                <Kicker>{intro.eyebrow}</Kicker>
              </div>

              <h2 className="font-condensed text-[clamp(52px,8vw,118px)] font-black uppercase leading-[0.9] tracking-tight text-white">
                <span className="block">{intro.headlinePre}</span>
                <span className="block text-[var(--p1)]">{intro.headlineAccent}</span>
                <span className="block text-white/86">{intro.headlinePost}</span>
              </h2>

              <p className="mt-6 max-w-2xl font-sans text-base leading-[1.85] text-white/78 md:text-[18px]">
                {intro.body}
              </p>

              <SweepButton
                label={`${intro.cta} →`}
                href="#problem"
                variant="glass"
                size="md"
                className="mt-8"
              />
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/[0.2] pt-6 md:grid-cols-3 md:gap-8 md:pt-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.label} direction="up" delay={index * 80}>
                <article className="max-w-[24ch]">
                  <Kicker>{benefit.label}</Kicker>
                  <div className="mt-3 h-px w-10 bg-gradient-to-r from-[var(--p1)]/90 to-transparent" />
                  <h3 className="mt-4 font-condensed text-[20px] font-semibold uppercase leading-[1.08] tracking-[0.02em] text-white md:tracking-[0.03em]">
                    {benefit.title}
                  </h3>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
