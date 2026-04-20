// sections/SportsCarouselSection.tsx
// Carrusel de deportes activos — marquee infinito, pausa en hover.
// Server Component: la animación es CSS puro (group-hover).

import StickerIcon from "@/components/StickerIcon";
import { ECOSYSTEM } from "@/content/landing";

type Audience = "deportista" | "profesional";

interface SportsCarouselSectionProps {
  audience?: Audience;
}

const BG: Record<Audience, string> = {
  deportista: "#3269c7",
  profesional: "#0a2f5a",
};

export default function SportsCarouselSection({
  audience = "deportista",
}: SportsCarouselSectionProps) {
  const sportsLoop = [...ECOSYSTEM.sports, ...ECOSYSTEM.sports];
  const bg = BG[audience];

  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.08] py-10"
      style={{ background: bg }}
    >
      {/* Fade masks laterales */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
        style={{ background: `linear-gradient(to right, ${bg}, transparent)` }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
        style={{ background: `linear-gradient(to left, ${bg}, transparent)` }}
        aria-hidden="true"
      />

      {/* Label */}
      <p className="mb-4 text-center font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
        {ECOSYSTEM.stripLabel}
      </p>

      {/* Strip animado */}
      <div className="group flex animate-marquee gap-5 px-4 group-hover:[animation-play-state:paused]">
        {sportsLoop.map((sport, i) => (
          <span
            key={`${sport.label}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[var(--card-bd)] bg-[var(--card-bg)] px-4 py-2 font-condensed text-[0.82rem] font-bold uppercase tracking-widest text-[var(--t2)]"
          >
            <StickerIcon name={sport.icon} size="xxs" />
            {sport.label}
          </span>
        ))}
      </div>
    </section>
  );
}
