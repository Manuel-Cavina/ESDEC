// sections/SportsCarouselSection.tsx
// Carrusel de deportes activos — marquee infinito, pausa en hover.
// Server Component: la animación es CSS puro (group-hover).

import Kicker from "@/components/ui/Kicker";
import StickerIcon from "@/components/StickerIcon";
import { ECOSYSTEM } from "@/content/landing";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";

interface SportsCarouselSectionProps {
  audience?: Audience;
}

export default function SportsCarouselSection({
  audience = "deportista",
}: SportsCarouselSectionProps) {
  const sportsLoop = [...ECOSYSTEM.sports, ...ECOSYSTEM.sports];

  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-white/[0.08] py-10 [--stripe:#3269c7]",
        audience === "profesional" && "dark:[--stripe:#0a2f5a]"
      )}
      style={{ background: "var(--stripe)" }}
    >
      {/* Fade masks laterales */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
        style={{ background: "linear-gradient(to right, var(--stripe), transparent)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
        style={{ background: "linear-gradient(to left, var(--stripe), transparent)" }}
        aria-hidden="true"
      />

      {/* Label */}
      <Kicker align="center" className="mb-4">{ECOSYSTEM.stripLabel}</Kicker>

      {/* Strip animado */}
      <div className="group flex animate-marquee gap-5 px-4 group-hover:[animation-play-state:paused]">
        {sportsLoop.map((sport, i) => (
          <span
            key={`${sport.label}-${i}`}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.2)] px-4 py-2 font-condensed text-[0.82rem] font-bold uppercase tracking-widest text-[var(--t1)] backdrop-blur-md"
          >
            <StickerIcon name={sport.icon} size="xxs" />
            {sport.label}
          </span>
        ))}
      </div>
    </section>
  );
}
