// sections/bienestar-salud/BienestarAudienceSection.tsx
// Preview de la app en desarrollo — journey timeline del usuario dentro del sistema ESDEC.

import Link from "next/link";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import { BIENESTAR_APP } from "@/content/bienestar-salud";

export default function BienestarAudienceSection() {
  const { eyebrow, badge, headline, headlineAccent, subtext, steps, cta } = BIENESTAR_APP;

  return (
    <section className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-28">
      {/* Fingerprint sutil derecha */}
      <div
        className="pointer-events-none absolute right-[-8%] top-[5%] opacity-[0.05] [--fps:rgba(90,200,255,0.9)] [--fpg:rgba(90,200,255,0.01)]"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[44vw] max-w-[420px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-landing px-6">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">

          {/* Left — Header sticky */}
          <ScrollReveal direction="up">
            <div className="lg:sticky lg:top-32">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <BrandLines size="sm" animated />
                <Kicker>{eyebrow}</Kicker>
                <span className="rounded-full border border-[rgba(125,232,168,0.4)] bg-[rgba(125,232,168,0.1)] px-3 py-1 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#7de8a8]">
                  {badge}
                </span>
              </div>

              <h2 className="mb-5 font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
                <span className="text-[var(--t1)]">{headline}</span>
                <br />
                <span className="ecos-title-accent">{headlineAccent}</span>
              </h2>

              <p className="mb-8 max-w-[44ch] font-sans text-[0.95rem] leading-[1.85] text-[var(--t2)]">
                {subtext}
              </p>

              <Link
                href={cta.href}
                className="group inline-flex min-h-[52px] items-center gap-3 rounded-full border border-[rgba(125,232,168,0.3)] bg-[rgba(125,232,168,0.08)] px-9 font-sans font-semibold text-[0.92rem] uppercase tracking-[0.04em] text-[#7de8a8] transition-all duration-300 hover:-translate-y-px hover:border-[rgba(125,232,168,0.5)] hover:bg-[rgba(125,232,168,0.12)]"
              >
                {cta.label}
                <span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right — Timeline steps */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div
              className="absolute left-[19px] top-3 hidden h-[calc(100%-48px)] w-px md:block"
              style={{
                background:
                  "linear-gradient(180deg, rgba(90,200,255,0.3) 0%, rgba(125,232,168,0.3) 100%)",
              }}
              aria-hidden="true"
            />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <ScrollReveal key={step.id} direction="up" delay={index * 80}>
                  <div className="flex gap-5 md:gap-7">
                    {/* Step dot */}
                    <div className="relative shrink-0 pt-1">
                      <div
                        className="h-10 w-10 rounded-full border-2 border-[rgba(90,200,255,0.4)] bg-[var(--bg2)] flex items-center justify-center"
                        style={{
                          boxShadow: "0 0 16px rgba(90,200,255,0.15)",
                        }}
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-[var(--p1)]" />
                      </div>
                    </div>

                    {/* Step content */}
                    <div className="pb-2">
                      <span className="mb-2 inline-block font-condensed text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--p1)]">
                        {step.tag}
                      </span>
                      <h3 className="mb-2 font-condensed text-[clamp(18px,2.4vw,26px)] font-black uppercase leading-[1.15] tracking-tight text-[var(--t1)]">
                        {step.headline}
                      </h3>
                      <p className="max-w-[44ch] font-sans text-[0.88rem] leading-[1.8] text-[var(--t2)]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
