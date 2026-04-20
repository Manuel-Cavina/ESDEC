"use client";

// sections/ecosistema/EcosystemVisualization.tsx
// Visualizacion orbital del ecosistema con centro ESDEC y seis areas conectadas.

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import FingerprintSVG from "@/components/FingerprintSVG";
import StickerIcon from "@/components/StickerIcon";
import { ECOSISTEMA_ECOSYSTEM } from "@/content/ecosistema";

const ORBIT_SIZE = 760;
const ORBIT_RADIUS = 272;
const ORBIT_ACCENT = "#86f7a8";

function getOrbitPosition(angle: number, radius: number, center: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: center + radius * Math.cos(rad),
    y: center + radius * Math.sin(rad),
  };
}

export default function EcosystemVisualization() {
  const { eyebrow, headline, headlineAccent, subtext, centerLabel, centerTagline, pillars } =
    ECOSISTEMA_ECOSYSTEM;

  const [activeId, setActiveId] = useState<string | null>(null);

  const activePillar = useMemo(
    () => pillars.find((pillar) => pillar.id === activeId) ?? pillars[0],
    [activeId, pillars]
  );

  return (
    <section className="relative overflow-hidden bg-[#3269c7] px-6 py-24 md:py-28 [--p1:#5ac8ff] [--p2:#7de8a8] [--t1:#ffffff] [--t2:rgba(255,255,255,0.78)] [--card-bg:rgba(7,24,60,0.78)] [--card-bg2:rgba(9,30,72,0.92)] [--card-bd:rgba(255,255,255,0.16)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(90,200,255,0.14) 0%, rgba(90,200,255,0.04) 42%, transparent 72%)",
          filter: "blur(34px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-landing">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] xl:items-start">
          <div className="relative min-h-[320px] xl:min-h-[360px]">
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                activeId ? "translate-y-4 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
              }`}
            >
              <p className="ecos-kicker mb-3">{eyebrow}</p>
              <h2 className="ecos-title-compact max-w-[11ch]">
                {headline} <span className="ecos-title-accent">{headlineAccent}</span>
              </h2>
              <p className="mt-5 max-w-[43ch] font-sans text-[0.95rem] leading-[1.9] text-[var(--t2)]">
                {subtext}
              </p>
            </div>

            <div
              className={`absolute inset-0 transition-all duration-300 ${
                activeId ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
              }`}
            >
              <div className="relative overflow-hidden rounded-[32px] border border-[rgba(255,255,255,0.12)] bg-[rgba(6,37,86,0.9)] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.55)] backdrop-blur-md">
                <span
                  className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,rgba(125,232,168,0.9)_0%,rgba(90,200,255,0.92)_100%)]"
                  aria-hidden="true"
                />
                <div className="absolute inset-0">
                  <Image
                    src={activePillar.image}
                    alt={activePillar.title}
                    fill
                    quality={92}
                    sizes="(min-width: 1280px) 28vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 24%, rgba(134,247,168,0.16) 0%, rgba(134,247,168,0.05) 22%, transparent 56%), linear-gradient(180deg, rgba(9,42,96,0.08) 0%, rgba(9,42,96,0.28) 34%, rgba(9,42,96,0.82) 58%, rgba(6,37,86,0.96) 100%)",
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 flex items-center justify-center [--fps:rgba(134,247,168,0.12)] [--fpg:rgba(134,247,168,0.02)]"
                    aria-hidden="true"
                  >
                    <FingerprintSVG animate={false} className="w-[180px] opacity-45" />
                  </div>
                  <div className="absolute left-6 top-6" style={{ color: activePillar.accent }}>
                    <StickerIcon
                      name={activePillar.icon}
                      size="xs"
                      className="[&>svg]:drop-shadow-[0_0_12px_currentColor]"
                    />
                  </div>
                </div>

                <div className="relative z-10 min-h-[420px] p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-[12ch] font-sans text-[2rem] font-semibold leading-[1.02] text-[var(--t1)]">
                      {activePillar.title}
                    </h3>
                    <div className="w-[96px] flex-shrink-0">
                      <Image
                        src="/images/Logo.png"
                        alt="ESDEC"
                        width={220}
                        height={66}
                        quality={100}
                        sizes="96px"
                        className="h-auto w-full object-contain brightness-[1.45] contrast-125"
                      />
                    </div>
                  </div>

                  <p className="mt-40 max-w-[26ch] font-sans text-[1rem] leading-[1.9] text-[rgba(214,231,255,0.9)]">
                    {activePillar.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/12 px-3 py-1.5 font-condensed text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-white/88">
                      {activePillar.kicker}
                    </span>
                  </div>

                  <Link
                    href={activePillar.href}
                    className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-center font-sans text-[1rem] font-semibold text-[#0c2d7a] transition-transform duration-200 hover:-translate-y-px"
                  >
                    {activePillar.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex xl:justify-end xl:self-start">
            <div className="relative -mt-6 translate-x-20" style={{ width: ORBIT_SIZE, height: ORBIT_SIZE }}>
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[660px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-full border orbit-energy-ring is-outer"
                style={{ borderColor: "rgba(134,247,168,0.24)" }}
                aria-hidden="true"
              />

              <svg
                className="pointer-events-none absolute inset-0"
                width={ORBIT_SIZE}
                height={ORBIT_SIZE}
                viewBox={`0 0 ${ORBIT_SIZE} ${ORBIT_SIZE}`}
                aria-hidden="true"
              >
                {pillars.map((pillar) => {
                  const center = ORBIT_SIZE / 2;
                    const { x, y } = getOrbitPosition(pillar.angle, ORBIT_RADIUS, center);

                  return (
                    <line
                      className={`orbit-energy-line ${pillar.id === activePillar.id ? "is-active" : ""}`}
                      key={pillar.id}
                      x1={center}
                      y1={center}
                      x2={x + (pillar.offsetX ?? 0)}
                      y2={y + (pillar.offsetY ?? 0)}
                      stroke={ORBIT_ACCENT}
                      strokeOpacity={pillar.id === activePillar.id ? 0.95 : 0.68}
                      strokeWidth={pillar.id === activePillar.id ? 1.8 : 1.25}
                      strokeDasharray={pillar.id === activePillar.id ? "3 8" : "4 10"}
                    />
                  );
                })}
              </svg>

              <div
                className="absolute left-1/2 top-1/2 flex h-[178px] w-[178px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_0_48px_-10px_rgba(0,0,0,0.35)]"
                style={{
                  borderColor: "rgba(134,247,168,0.26)",
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 38%, rgba(115,173,255,0.12) 100%)",
                  backdropFilter: "blur(18px)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-4 rounded-full animate-heartbeat [--fps:rgba(134,247,168,0.16)] [--fpg:rgba(134,247,168,0.03)]"
                  aria-hidden="true"
                >
                  <FingerprintSVG animate={false} className="h-full w-full opacity-55" />
                </div>
                <div
                  className="pointer-events-none absolute inset-[18px] rounded-full [--fps:rgba(134,247,168,0.22)] [--fpg:rgba(134,247,168,0.04)]"
                  aria-hidden="true"
                >
                  <FingerprintSVG animate={false} className="h-full w-full opacity-70" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="mx-auto w-[110px]">
                    <Image
                      src="/images/Logo.png"
                      alt={centerLabel}
                      width={220}
                      height={66}
                      quality={100}
                      sizes="110px"
                      className="h-auto w-full object-contain brightness-[1.55] contrast-125"
                    />
                  </div>
                  <p className="mt-3 font-condensed text-[9px] uppercase tracking-[3px] text-white/64">
                    {centerTagline}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0" onMouseLeave={() => setActiveId(null)} />

              {pillars.map((pillar) => {
                const center = ORBIT_SIZE / 2;
                const { x, y } = getOrbitPosition(pillar.angle, ORBIT_RADIUS, center);
                const isActive = pillar.id === activePillar.id;

                return (
                  <Link
                    key={pillar.id}
                    href={pillar.href}
                    className={`group absolute w-[188px] overflow-hidden rounded-[24px] border bg-[rgba(255,255,255,0.1)] text-left shadow-[0_20px_48px_-30px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 ${
                      activeId && isActive
                        ? "scale-[1.03] bg-[rgba(255,255,255,0.14)]"
                        : "hover:scale-[1.02] hover:bg-[rgba(255,255,255,0.14)]"
                    }`}
                    style={{
                      left: x + (pillar.offsetX ?? 0),
                      top: y + (pillar.offsetY ?? 0),
                      transform: "translate(-50%, -50%)",
                      borderColor: activeId && isActive ? pillar.accent : "rgba(255,255,255,0.18)",
                      boxShadow: activeId && isActive
                        ? `0 0 0 1px ${pillar.accent}55, 0 24px 56px -30px rgba(0,0,0,0.46)`
                        : "0 20px 48px -30px rgba(0,0,0,0.45)",
                    }}
                    onMouseEnter={() => setActiveId(pillar.id)}
                    onFocus={() => setActiveId(pillar.id)}
                  >
                    <span
                      className="pointer-events-none absolute left-0 top-0 h-px w-full"
                      style={{
                        background: `linear-gradient(90deg, ${pillar.accent} 0%, rgba(255,255,255,0.2) 100%)`,
                      }}
                      aria-hidden="true"
                    />

                    <div className="p-6">
                      <div className="mb-5 flex items-center gap-3">
                        <span style={{ color: pillar.accent }}>
                          <StickerIcon
                            name={pillar.icon}
                            size="xs"
                            className="[&>svg]:drop-shadow-[0_0_10px_currentColor]"
                          />
                        </span>
                      </div>

                      <h3 className="font-condensed text-[1.45rem] font-semibold uppercase leading-[0.96] tracking-[0.02em] text-[var(--t1)]">
                        {pillar.title}
                      </h3>
                      <p className="mt-4 max-w-[18ch] font-condensed text-[0.7rem] uppercase leading-[1.55] tracking-[0.08em] text-white/80">
                        {pillar.kicker}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-4 lg:hidden">
          <div className="flex items-center justify-center">
            <div
              className="relative flex h-[168px] w-[168px] items-center justify-center rounded-full border shadow-[0_0_48px_-10px_rgba(0,0,0,0.35)]"
              style={{
                borderColor: "rgba(134,247,168,0.26)",
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 38%, rgba(115,173,255,0.12) 100%)",
                backdropFilter: "blur(18px)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-4 rounded-full animate-heartbeat [--fps:rgba(134,247,168,0.16)] [--fpg:rgba(134,247,168,0.03)]"
                aria-hidden="true"
              >
                <FingerprintSVG animate={false} className="h-full w-full opacity-55" />
              </div>
              <div
                className="pointer-events-none absolute inset-[18px] rounded-full [--fps:rgba(134,247,168,0.22)] [--fpg:rgba(134,247,168,0.04)]"
                aria-hidden="true"
              >
                <FingerprintSVG animate={false} className="h-full w-full opacity-70" />
              </div>
              <div className="relative z-10 text-center">
                <div className="mx-auto w-[108px]">
                  <Image
                    src="/images/Logo.png"
                    alt={centerLabel}
                    width={220}
                    height={66}
                    quality={100}
                    sizes="108px"
                    className="h-auto w-full object-contain brightness-[1.55] contrast-125"
                  />
                </div>
                <p className="mt-3 font-condensed text-[8px] uppercase tracking-[3px] text-white/64">
                  {centerTagline}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const isActive = pillar.id === activePillar.id;

              return (
                <Link
                  key={pillar.id}
                  href={pillar.href}
                  className={`overflow-hidden rounded-[22px] border bg-[rgba(255,255,255,0.1)] text-left shadow-[0_18px_44px_-26px_rgba(0,0,0,0.4)] transition-all duration-300 ${
                    isActive ? "bg-[var(--card-bg2)]" : "hover:bg-[var(--card-bg2)]"
                  }`}
                  style={{
                    borderColor: isActive ? pillar.accent : "rgba(255,255,255,0.18)",
                  }}
                  onMouseEnter={() => setActiveId(pillar.id)}
                  onFocus={() => setActiveId(pillar.id)}
                >
                  <span
                    className="pointer-events-none block h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, ${pillar.accent} 0%, rgba(255,255,255,0.2) 100%)`,
                    }}
                    aria-hidden="true"
                  />
                  <div className="p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <span style={{ color: pillar.accent }}>
                        <StickerIcon
                          name={pillar.icon}
                          size="xs"
                          className="[&>svg]:drop-shadow-[0_0_10px_currentColor]"
                        />
                      </span>
                    </div>
                    <h3 className="font-condensed text-[1rem] font-semibold uppercase leading-[1] tracking-[0.02em] text-[var(--t1)]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 font-condensed text-[0.66rem] uppercase leading-[1.5] tracking-[0.08em] text-white/80">
                      {pillar.kicker}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
