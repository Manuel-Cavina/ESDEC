"use client";

// sections/EcosystemSection.tsx
// Shared proof section for the six ESDEC categories using the original card-based layout.

import { ECOSYSTEM } from "@/content/landing";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";
type Category = (typeof ECOSYSTEM.categories)[number];

interface EcosystemSectionProps {
  audience?: Audience;
}

interface CategoryCardProps {
  category: Category;
  index: number;
}

function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <ScrollReveal direction="up" delay={index * 70}>
      <article
        className={cn(
          "spec-card-accent group relative overflow-hidden rounded-[24px] border border-[var(--card-bd)] bg-[var(--card-bg)]",
          "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--p1)]/60 hover:bg-[var(--card-bg2)]"
        )}
      >
        <div className="relative h-[210px] overflow-hidden">
          <img
            src={category.image}
            alt=""
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,19,0.08),rgba(5,9,19,0.62))]" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-condensed text-[24px] font-black uppercase leading-[0.95] tracking-tight text-white">
              {category.title}
            </h3>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4 flex items-center gap-3">
            <StickerIcon name={category.icon} size="sm" />
            <span className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
              {category.shortLabel}
            </span>
          </div>

          <p className="font-sans text-sm leading-[1.8] text-[var(--t2)]">
            {category.description}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function EcosystemSection({
  audience = "deportista",
}: EcosystemSectionProps) {
  const sportsLoop = [...ECOSYSTEM.sports, ...ECOSYSTEM.sports];
  const audienceBody = ECOSYSTEM.audienceBody[audience];
  const bridge = ECOSYSTEM.bridge[audience];

  return (
    <section
      id="ecosystem"
      data-section="ecosystem"
      className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--p1)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-landing px-6">
        <div className="group relative mb-16 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] py-3">
          <div
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20"
            style={{
              background: "linear-gradient(to right, var(--bg2), transparent)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20"
            style={{
              background: "linear-gradient(to left, var(--bg2), transparent)",
            }}
            aria-hidden="true"
          />
          <div className="mb-3 text-center">
            <span className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
              {ECOSYSTEM.stripLabel}
            </span>
          </div>
          <div className="flex animate-marquee gap-6 px-4 group-hover:[animation-play-state:paused]">
            {sportsLoop.map((sport, index) => (
              <span
                key={`${sport.label}-${index}`}
                className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[var(--card-bd)] bg-[var(--card-bg)] px-4 py-2.5 font-condensed text-sm font-bold uppercase tracking-widest text-[var(--t2)]"
              >
                <StickerIcon name={sport.icon} size="xs" className="rounded-full" />
                <span>{sport.label}</span>
              </span>
            ))}
          </div>
        </div>

        <ScrollReveal direction="up" className="mb-14 text-center">
          <p className="mb-4 font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
            {ECOSYSTEM.eyebrow}
          </p>
          <h2 className="text-clamp-eco font-condensed font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {ECOSYSTEM.headline}{" "}
            <span className="text-[var(--p1)]">{ECOSYSTEM.headlineAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-sans text-base leading-[1.85] text-[var(--t2)]">
            {ECOSYSTEM.body}
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-[1.85] text-[var(--t2)]/90">
            {audienceBody}
          </p>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ECOSYSTEM.categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        <ScrollReveal direction="up" delay={120}>
          <div className="mt-12 rounded-[24px] border border-white/10 bg-white/[0.03] px-6 py-5 text-center">
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
              {ECOSYSTEM.bridgeLabel}
            </p>
            <p className="mx-auto mt-3 max-w-3xl font-sans text-sm leading-[1.85] text-[var(--t2)]">
              {bridge}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
