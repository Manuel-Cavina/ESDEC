"use client";

// sections/AboutSection.tsx
// Manifest section for the unified ESDEC thesis.

import Image from "next/image";
import { ABOUT, PROFESSIONAL_ABOUT } from "@/content/landing";
import BrandLines from "@/components/BrandLines";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";
type AboutData = typeof ABOUT | typeof PROFESSIONAL_ABOUT;

interface AboutSectionProps {
  audience?: Audience;
}

interface BenefitCardProps {
  benefit: AboutData["benefits"][number];
  index: number;
}

function BenefitCard({ benefit, index }: BenefitCardProps) {
  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <article
        className={cn(
          "spec-card-accent relative h-full overflow-hidden rounded-[24px] border border-[var(--card-bd)] bg-[var(--card-bg)] p-5 md:p-6",
          "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/50 hover:bg-[var(--card-bg2)]"
        )}
      >
        <div className="flex items-center gap-3">
          <StickerIcon name={benefit.icon} size="sm" />
          <span className="font-condensed text-[10px] font-semibold uppercase tracking-[3px] text-[var(--p1)]">
            {benefit.label}
          </span>
        </div>

        <h3 className="mt-5 max-w-[18ch] font-condensed text-[clamp(18px,2vw,20px)] font-semibold uppercase leading-[1.02] tracking-tight text-[var(--t1)]">
          {benefit.title}
        </h3>
        <p className="mt-3 max-w-[36ch] font-sans text-sm leading-[1.85] text-[var(--t2)]">
          {benefit.description}
        </p>
      </article>
    </ScrollReveal>
  );
}

export default function AboutSection({
  audience = "deportista",
}: AboutSectionProps) {
  const data = audience === "profesional" ? PROFESSIONAL_ABOUT : ABOUT;
  const manifestoPostAccent =
    audience === "deportista" ? ABOUT.manifestoPostAccent : null;
  const image =
    audience === "profesional"
      ? "/images/lifestyle/Medico1.png"
      : "/images/athletes/Atleta_1.png";

  return (
    <section
      id="about"
      data-section="about"
      className="relative overflow-hidden bg-[var(--bg)] py-28 md:py-40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--p1)]/40 to-transparent" />

      <div className="mx-auto max-w-landing px-6">
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-8 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <span className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
              {data.eyebrow}
            </span>
          </div>
        </ScrollReveal>

        <div className="space-y-14 md:space-y-16">
          <div className="max-w-4xl space-y-8 md:space-y-9">
            <ScrollReveal direction="up" delay={60}>
              <h2 className="text-clamp-manifesto font-condensed font-black uppercase leading-[0.9] tracking-tight text-[var(--t1)]">
                <span className="block">{data.manifestoPre}</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(90deg, var(--p1), var(--p2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {data.manifestoAccent}
                </span>
                <span className="block">
                  {manifestoPostAccent ? (
                    <>
                      {data.manifestoPost}{" "}
                      <span
                        className="inline-block whitespace-nowrap"
                        style={{
                          background:
                            "linear-gradient(90deg, var(--p1), var(--p2))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {manifestoPostAccent}
                      </span>
                    </>
                  ) : (
                    data.manifestoPost
                  )}
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120}>
              <p className="max-w-3xl font-sans text-[clamp(18px,2.2vw,22px)] leading-[1.75] text-[var(--t1)]">
                {data.body}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={180}>
              <div className="max-w-3xl border-l-2 border-[var(--p1)]/35 pl-5 md:pl-6">
                <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                  {data.thesisLabel}
                </p>
                <p className="mt-3 font-sans text-[15px] leading-[1.85] text-[var(--t2)] md:text-base">
                  {data.thesisBody}
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:gap-5">
            {data.benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.label}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal direction="up" delay={170}>
            <div className="grid overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.025] md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
              <div className="relative min-h-[220px] md:min-h-[260px]">
                <Image
                  src={image}
                  alt=""
                  fill
                  quality={90}
                  sizes="(max-width: 767px) 100vw, 40vw"
                  className="h-full w-full object-cover object-center opacity-85 saturate-[0.82] contrast-[0.96]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,19,0.12),rgba(5,9,19,0.52))]" />
              </div>
              <div className="flex flex-col justify-center gap-4 border-t border-white/8 p-6 md:border-l md:border-t-0 md:p-8">
                <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)] opacity-80">
                  {data.thesisLabel}
                </p>
                <blockquote className="text-clamp-quote max-w-2xl font-condensed font-bold italic leading-[1.2] text-[var(--t1)]">
                  "{data.quote}"
                </blockquote>
                <cite className="block font-condensed text-[11px] font-bold uppercase tracking-[3px] text-[var(--p1)] not-italic">
                  {data.quoteAuthor}
                </cite>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
