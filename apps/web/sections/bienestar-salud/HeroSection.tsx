// sections/bienestar-salud/HeroSection.tsx
// Hero con identidad visual distinta segun el area (salud = azul / bienestar = verde).

import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import StickerIcon from "@/components/StickerIcon";
import SweepButton from "@/components/ui/SweepButton";
import {
  SALUD_HERO,
  type BienestarSaludArea,
} from "@/content/bienestar-salud";

// Inline data for bienestar hero — BienestarLanding now uses SharedHeroSection directly.
const BIENESTAR_HERO_INLINE = {
  eyebrow: "Ecosistema ESDEC — Bienestar deportivo",
  headlineLine1: "EL RENDIMIENTO",
  headlineLine2: "EMPIEZA ANTES.",
  tagline: "Mente fuerte. Habitos solidos. Equilibrio real.",
  subtext: "El deportista que trabaja su mente, construye sus habitos y encuentra equilibrio rinde mas, abandona menos y disfruta mas el proceso.",
  marqueeItems: [
    "Psicologia deportiva", "Coaching", "Yoga", "Pilates",
    "Meditacion", "Habitos", "Mindfulness", "Life coaching",
  ],
  ctaPrimary: { label: "Conocer los especialistas", href: "#profesionales" },
  accent: "#7de8a8" as const,
};

interface Props {
  area: BienestarSaludArea;
}

const CONFIGS = {
  salud: {
    data: SALUD_HERO,
    glowPrimary:
      "radial-gradient(ellipse at 22% 52%, rgba(90,200,255,0.28) 0%, rgba(90,200,255,0.09) 38%, transparent 62%)",
    glowSecondary:
      "radial-gradient(ellipse at 78% 62%, rgba(90,200,255,0.1) 0%, transparent 50%)",
    headlineColor: "var(--t1)" as string,
    accentColor: "#5ac8ff",
    chipBorder: "rgba(90,200,255,0.3)",
    chipBg: "rgba(90,200,255,0.1)",
    chipText: "#5ac8ff",
    ctaBg: "#5ac8ff",
    ctaText: "#07224a",
    dividerColor: "rgba(90,200,255,0.2)",
    // Lineas verticales precisas (estetica clinica)
    gridStyle: {
      backgroundImage:
        "linear-gradient(rgba(90,200,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(90,200,255,0.06) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    },
  },
  bienestar: {
    data: BIENESTAR_HERO_INLINE,
    glowPrimary:
      "radial-gradient(ellipse at 78% 52%, rgba(125,232,168,0.26) 0%, rgba(125,232,168,0.08) 38%, transparent 62%)",
    glowSecondary:
      "radial-gradient(ellipse at 22% 62%, rgba(125,232,168,0.1) 0%, transparent 50%)",
    headlineColor: "var(--t1)" as string,
    accentColor: "#7de8a8",
    chipBorder: "rgba(125,232,168,0.3)",
    chipBg: "rgba(125,232,168,0.1)",
    chipText: "#7de8a8",
    ctaBg: "#7de8a8",
    ctaText: "#04213d",
    dividerColor: "rgba(125,232,168,0.18)",
    // Puntos organicos (estetica holistica)
    gridStyle: {
      backgroundImage:
        "radial-gradient(circle, rgba(125,232,168,0.06) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    },
  },
} as const;

export default function HeroSection({ area }: Props) {
  const cfg = CONFIGS[area];
  const { data } = cfg;
  const chips = area === "salud" ? [...SALUD_HERO.marqueeChips, ...SALUD_HERO.marqueeChips] : null;
  const doubleText = area === "bienestar" ? [...BIENESTAR_HERO_INLINE.marqueeItems, ...BIENESTAR_HERO_INLINE.marqueeItems] : null;

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--bg)]">
      {/* Base oscuro */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(4,18,52,0.95) 0%, rgba(7,32,82,0.92) 46%, rgba(3,15,48,0.97) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Glow principal del area */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: cfg.glowPrimary }}
        aria-hidden="true"
      />

      {/* Glow secundario contraparte */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: cfg.glowSecondary }}
        aria-hidden="true"
      />

      {/* Textura de fondo — distinta por area */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={cfg.gridStyle}
        aria-hidden="true"
      />

      {/* Fingerprint central */}
      <div
        className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 opacity-[0.08] [--fps:rgba(255,255,255,0.9)] [--fpg:rgba(255,255,255,0.02)]"
        aria-hidden="true"
      >
        <FingerprintSVG animate={false} className="w-[76vw] max-w-[700px]" />
      </div>

      {/* Linea divisoria lateral — estetica de precision (salud) */}
      {area === "salud" && (
        <div
          className="pointer-events-none absolute bottom-[12%] left-[14%] top-[18%] hidden w-px lg:block"
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${cfg.dividerColor} 30%, ${cfg.dividerColor} 70%, transparent 100%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Arco organico — estetica de flujo (bienestar) */}
      {area === "bienestar" && (
        <svg
          className="pointer-events-none absolute right-[8%] top-[15%] hidden opacity-[0.12] lg:block"
          width="180"
          height="380"
          viewBox="0 0 180 380"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M160 10 Q200 190 160 370"
            stroke={cfg.accentColor}
            strokeWidth="1.2"
            strokeDasharray="6 14"
          />
          <path
            d="M130 30 Q185 190 130 350"
            stroke={cfg.accentColor}
            strokeWidth="0.8"
            strokeDasharray="4 18"
            opacity="0.6"
          />
        </svg>
      )}

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-landing flex-col justify-center px-6 pb-20 pt-28 text-center md:pb-28 md:pt-36">
        <ScrollReveal direction="up">
          <div className="mb-7 flex items-center justify-center">
            <BrandLines size="sm" animated centered />
          </div>

          <p
            className="mb-5 font-condensed text-[11px] font-bold uppercase tracking-[4px]"
            style={{ color: cfg.accentColor }}
          >
            {data.eyebrow}
          </p>

          {/* Headline */}
          <div className="font-condensed font-black uppercase leading-[0.88] tracking-tight">
            <span className="block text-[clamp(52px,9vw,136px)] text-[var(--t1)]">
              {data.headlineLine1}
            </span>
            <span
              className="block text-[clamp(52px,9vw,136px)]"
              style={{
                color: cfg.accentColor,
                textShadow: `0 0 100px ${cfg.accentColor}35`,
              }}
            >
              {data.headlineLine2}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={130}>
          {/* Tagline bajo el headline */}
          <p
            className="mx-auto mt-6 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.3em]"
            style={{ color: cfg.accentColor, opacity: 0.78 }}
          >
            {data.tagline}
          </p>

          <p className="mx-auto mt-5 max-w-[50ch] font-sans text-[0.97rem] leading-[1.9] text-white/72">
            {data.subtext}
          </p>

          {/* Chip del area */}
          <div className="mt-8 flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2 font-condensed text-[0.7rem] font-bold uppercase tracking-[0.24em]"
              style={{
                borderColor: cfg.chipBorder,
                background: cfg.chipBg,
                color: cfg.chipText,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: cfg.accentColor }}
                aria-hidden="true"
              />
              {area === "salud" ? "Salud deportiva" : "Bienestar deportivo"}
              <span aria-hidden="true">·</span>
              Ecosistema ESDEC
            </span>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={data.ctaPrimary.href}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full px-9 py-3 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.04em] transition-all duration-200 hover:-translate-y-px hover:brightness-105"
              style={{
                background: cfg.ctaBg,
                color: cfg.ctaText,
              }}
            >
              {data.ctaPrimary.label} →
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee base — solo para bienestar; salud usa SpecialtiesCarouselSection */}
      {area === "bienestar" && (
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/[0.08] bg-[rgba(0,0,0,0.16)] py-3">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {doubleText?.map((item, i) => (
                <span
                  key={i}
                  className="mx-6 font-condensed text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/36"
                >
                  {item}
                  <span className="ml-3 opacity-50" style={{ color: cfg.accentColor }}>·</span>
                </span>
              ))}
        </div>
      </div>
      )}
    </section>
  );
}
