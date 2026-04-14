"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
}

interface PageIndexProps {
  sections: Section[];
}

export default function PageIndex({ sections }: PageIndexProps) {
  const [active, setActive] = useState<string>("");
  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === active),
    0
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const map = new Map<string, number>();

    const update = () => {
      let best = "";
      let bestRatio = 0;

      map.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = id;
        }
      });

      if (best) setActive(best);
    };

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          map.set(id, entry.intersectionRatio);
          update();
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Indice de secciones"
      className="fixed right-5 top-1/2 z-[200] hidden -translate-y-1/2 md:flex"
    >
      <div className="relative bg-transparent px-2 py-3">
        <div className="relative w-[156px]">
          <div
            className="absolute bottom-3 left-[13px] top-3 w-px bg-white/8"
            aria-hidden="true"
          />

          <div className="relative h-[178px] overflow-hidden">
            {sections.map(({ id, label }, index) => {
              const isActive = active === id;
              const offset = index - activeIndex;
              const isVisible = Math.abs(offset) <= 2;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  aria-label={`Ir a ${label}`}
                  className={cn(
                    "group absolute left-0 flex w-full items-center gap-3 rounded-[14px] px-2 py-2 text-left transition-all duration-500",
                    isVisible ? "pointer-events-auto" : "pointer-events-none"
                  )}
                  style={{
                    top: "50%",
                    transform: `translateY(calc(-50% + ${offset * 48}px)) scale(${
                      isActive ? 1 : Math.abs(offset) === 1 ? 0.9 : 0.82
                    })`,
                    opacity: isVisible
                      ? isActive
                        ? 1
                        : Math.abs(offset) === 1
                          ? 0.62
                          : 0.22
                      : 0,
                  }}
                >
                  <span
                    className={cn(
                      "relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-condensed font-bold uppercase tracking-[0.5px] transition-all duration-300",
                      isActive
                        ? "border-[var(--p1)]/55 bg-transparent text-[var(--p1)]"
                        : "border-white/12 bg-transparent text-white/34 group-hover:border-[var(--p1)]/30 group-hover:text-white/56"
                    )}
                    style={{ fontSize: isActive ? "10px" : "8px" }}
                  >
                    {index + 1}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block font-condensed font-bold uppercase transition-colors duration-300",
                        isActive
                          ? "text-white"
                          : "text-white/42 group-hover:text-white/64"
                      )}
                      style={{
                        fontSize: isActive ? "15px" : "11px",
                        letterSpacing: isActive ? "0.18em" : "0.16em",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      className={cn(
                        "mt-1.5 block h-px rounded-full transition-all duration-300",
                        isActive
                          ? "w-10 bg-gradient-to-r from-[var(--p1)] via-white/50 to-[var(--p2)]"
                          : "w-4 bg-white/10 group-hover:w-6 group-hover:bg-white/18"
                      )}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
