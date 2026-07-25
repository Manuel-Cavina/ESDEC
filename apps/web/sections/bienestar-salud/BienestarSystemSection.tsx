// sections/bienestar-salud/BienestarSystemSection.tsx
// Las tres dimensiones del rendimiento, encadenadas hacia un statement de impacto.

import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import ScrollReveal from "@/components/ScrollReveal";
import { BIENESTAR_SYSTEM } from "@/content/bienestar-salud";

export default function BienestarSystemSection() {
  const { eyebrow, headline, headlineAccent, dimensions, techNote } = BIENESTAR_SYSTEM;

  return (
    <section className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-28">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(90,200,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,200,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-landing px-6">
        {/* Header */}
        <div className="mb-16">
          <ScrollReveal direction="up">
            <BrandLines animated className="mb-5" />
            <Kicker className="mb-4">{eyebrow}</Kicker>
            <h2 className="font-condensed text-[clamp(36px,5vw,68px)] font-black uppercase leading-[0.92] tracking-tight">
              <span className="text-[var(--t1)]">{headline}</span>
              <br />
              <span className="ecos-title-accent">{headlineAccent}</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Dimensions — staggered chain */}
        <div className="space-y-3">
          {dimensions.map((dim, index) => (
            <ScrollReveal key={dim.id} direction="up" delay={index * 80}>
              <div
                className="group relative grid grid-cols-[56px_1fr] items-center gap-6 overflow-hidden rounded-[20px] border border-white/10 bg-[rgba(255,255,255,0.03)] px-6 py-5 transition-all duration-300 hover:border-[rgba(90,200,255,0.22)] hover:bg-[rgba(255,255,255,0.05)] md:grid-cols-[80px_220px_1fr_auto] md:gap-8 md:px-8 md:py-6"
                style={{ marginLeft: `${index * 32}px` }}
              >
                {/* Accent left bar */}
                <span
                  className="pointer-events-none absolute left-0 top-0 h-full w-[3px]"
                  style={{ background: "linear-gradient(180deg, var(--p1) 0%, var(--p2) 100%)" }}
                  aria-hidden="true"
                />

                {/* Number */}
                <div
                  className="select-none font-display text-[40px] leading-none text-[var(--t1)] opacity-[0.15] md:text-[52px]"
                  aria-hidden="true"
                >
                  {dim.number}
                </div>

                {/* Label */}
                <h3 className="ecos-title-accent font-condensed text-[1rem] font-black uppercase leading-[1.1] tracking-[0.02em] md:text-[1.15rem]">
                  {dim.label}
                </h3>

                {/* Description */}
                <p className="col-span-2 font-sans text-[0.86rem] leading-[1.75] text-[var(--t2)] md:col-span-1">
                  {dim.description}
                </p>

                {/* Tags */}
                <div className="col-span-2 flex flex-wrap gap-2 md:col-span-1 md:justify-end">
                  {dim.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.07] px-3 py-1 font-sans text-[0.7rem] font-medium text-[var(--t2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Combined impact statement */}
        <ScrollReveal direction="up" delay={280}>
          <div className="mt-10 overflow-hidden rounded-[20px] border border-[rgba(90,200,255,0.18)] bg-[rgba(90,200,255,0.05)] px-8 py-8 text-center md:px-12 md:py-10">
            <p className="font-condensed text-[clamp(22px,3.5vw,40px)] font-black uppercase leading-[1.05] tracking-tight text-[var(--t1)]">
              Cuando los tres se alinean,
              <br />
              <span className="ecos-title-accent">
                el rendimiento no suma. Multiplica.
              </span>
            </p>
            <p className="mx-auto mt-4 max-w-[52ch] font-sans text-[0.88rem] leading-[1.8] text-[var(--t2)]">
              {techNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
