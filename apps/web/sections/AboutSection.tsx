"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/AboutSection.tsx
// Sección "Manifiesto" — identidad de marca + beneficios concretos.
//
// Layout:
//   1. Headline manifiesto 3 líneas (pre / accent / post)
//   2. Cuerpo de texto
//   3. Grid 2×2 de benefit cards (emocionales + racionales)
//   4. Cita de cierre con línea decorativa
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { ABOUT, PROFESSIONAL_ABOUT } from "@/content/landing";
import ScrollReveal from "@/components/ScrollReveal";
import BrandLines from "@/components/BrandLines";
import { cn } from "@/lib/utils";

type Audience = "deportista" | "profesional";
type AboutData = typeof ABOUT | typeof PROFESSIONAL_ABOUT;
type Benefit = AboutData["benefits"][number];

const ABOUT_OPTION_LABELS = [
  "Opcion 1",
  "Opcion 2",
  "Opcion 3",
  "Opcion 4",
] as const;

const ABOUT_OPTION_COPY = {
  deportista: [
    {
      eyebrow: "La estructura que te potencia",
      pre: "CUANDO TENES",
      accent: "SISTEMA.",
      post: "TODO AVANZA.",
      body:
        "ESDEC ordena cada parte de tu desarrollo para que entrenes con mas claridad, mejores decisiones y acompanamiento real. Das el primer paso con una meta; avanzas con un sistema que te sostiene hasta tu mejor version.",
      quote:
        "ESDEC acompana al deportista desde la primera decision hasta el rendimiento que quiere construir.",
    },
    {
      eyebrow: "Tu evolucion con respaldo",
      pre: "EMPEZAS CON",
      accent: "ORDEN.",
      post: "TERMINAS CON EVOLUCION.",
      body:
        "Cuando entrenamiento, nutricion, recuperacion y mentalidad trabajan juntos, el progreso deja de ser una promesa y empieza a sentirse en cada etapa. ESDEC convierte tu disciplina en una estructura que escala con vos.",
      quote:
        "Lo que hoy es objetivo, con estructura se transforma en progreso sostenido.",
    },
    {
      eyebrow: "Un ecosistema a tu favor",
      pre: "CORRES CON",
      accent: "RED.",
      post: "CRECES CON SISTEMA.",
      body:
        "No se trata solo de entrenar mas, sino de estar mejor acompanado. ESDEC conecta a los profesionales, los datos y la metodologia correcta para que cada paso tenga direccion, lectura y proyeccion.",
      quote:
        "Cada avance vale mas cuando hay un sistema completo empujando en la misma direccion.",
    },
    {
      eyebrow: "Del inicio a tu proxima meta",
      pre: "CADA PASO",
      accent: "SUMA.",
      post: "TODO CONECTA.",
      body:
        "ESDEC te acompana desde la base hasta la expansion de tus objetivos. Lo que construis hoy no se pierde: se integra, se mide y se transforma en una plataforma real para seguir creciendo.",
      quote:
        "El progreso fuerte no aparece por azar: se construye sobre una estructura que nunca te suelta.",
    },
  ],
  profesional: [
    {
      eyebrow: "La plataforma que amplifica tu valor",
      pre: "CUANDO TU",
      accent: "TRABAJO CONECTA.",
      post: "TU IMPACTO ESCALA.",
      body:
        "ESDEC ordena, muestra y potencia lo que ya sabes hacer. Te da una estructura para ejercer con mas alcance, mejor coordinacion y una presencia profesional que se sostiene en el tiempo.",
      quote:
        "Tu conocimiento crece mas cuando entra en un sistema que lo hace visible y accionable.",
    },
    {
      eyebrow: "Una red que te proyecta",
      pre: "EMPEZAS CON",
      accent: "POSICION.",
      post: "TERMINAS CON ESCALA.",
      body:
        "Con ESDEC, tu trabajo gana contexto, red y continuidad. Cada paso fortalece tu rol dentro del ecosistema y convierte tu ejercicio profesional en una propuesta mas clara, mas integrada y mas valiosa.",
      quote:
        "No se trata solo de trabajar mas, sino de hacerlo dentro de una estructura que multiplica tu alcance.",
    },
    {
      eyebrow: "Tu expertise con respaldo real",
      pre: "SUMAS",
      accent: "ESTRUCTURA.",
      post: "GANAS PROYECCION.",
      body:
        "ESDEC te acompana desde la visibilidad inicial hasta una practica profesional con mayor impacto. Lo que haces empieza a verse mejor, a coordinarse mejor y a crecer sobre una base mas firme.",
      quote:
        "Cuando el sistema acompana al profesional, el valor que genera deja de pasar desapercibido.",
    },
    {
      eyebrow: "Tu crecimiento con sistema",
      pre: "CADA ETAPA",
      accent: "TE ELEVA.",
      post: "TODO SE POTENCIA.",
      body:
        "Desde el primer contacto hasta la escala, ESDEC te da herramientas, red y lectura para crecer con criterio. No solo te integra a una plataforma: te posiciona dentro de una estructura lista para expandirte.",
      quote:
        "El futuro del profesional no depende solo de su talento, sino del sistema que lo impulsa.",
    },
  ],
} as const;

const ABOUT_OPTION_IMAGES = {
  deportista: [
    "/images/athletes/Atleta_1.png",
    "/images/team/Equipo_G7.png",
    "/images/lifestyle/Correr_lluvia_1.jpg",
    "/images/team/personascorriendo.jpg",
  ],
  profesional: [
    "/images/lifestyle/Medico1.png",
    "/images/team/Equipo_Escalinatas.png",
    "/images/lifestyle/Deportes_2.jpg",
    "/images/team/Equipo_G7.png",
  ],
} as const;

// ── Benefit card ──────────────────────────────────────────────────────────────
function BenefitCard({
  benefit,
  index,
}: {
  benefit: AboutData["benefits"][number];
  index: number;
}) {
  return (
    <ScrollReveal direction="up" delay={index * 80}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-xl",
          "border border-[var(--card-bd)] bg-[var(--card-bg)]",
          "p-6 transition-all duration-300",
          "hover:border-[var(--p1)]/60 hover:bg-[var(--card-bg2)]",
          "hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
          "spec-card-accent"
        )}
      >
        {/* Icon + label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl leading-none" aria-hidden="true">
            {benefit.icon}
          </span>
          <span className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
            {benefit.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 font-condensed text-[17px] font-bold uppercase leading-tight tracking-wide text-[var(--t1)]">
          {benefit.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm leading-relaxed text-[var(--t2)]">
          {benefit.description}
        </p>

        {/* Corner glow on hover */}
        <div
          className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
          style={{ background: "var(--p1)" }}
          aria-hidden="true"
        />
      </div>
    </ScrollReveal>
  );
}

function AboutOptionOne({
  benefits,
  body,
  image,
}: {
  benefits: readonly Benefit[];
  body: string;
  image: string;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="max-w-md">
        <div className="mb-6 overflow-hidden rounded-[26px] bg-white/[0.03]">
          <img
            src={image}
            alt=""
            className="h-[220px] w-full object-cover object-center"
          />
        </div>
        <p className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
          Lectura editorial
        </p>
        <h3 className="mt-4 font-condensed text-[34px] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
          Cuatro pilares,
          <span className="block text-[var(--t2)]">una sola estructura.</span>
        </h3>
        <p className="mt-5 font-sans text-sm leading-[1.85] text-[var(--t2)]">
          {body}
        </p>
      </div>

      <div className="space-y-5">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.label}
            className="flex items-start gap-5 pb-5 last:pb-0"
          >
            <span className="font-condensed text-[34px] font-black leading-none text-white/16">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <div className="relative flex-1">
              <span className="mb-3 block h-[2px] w-12 rounded-full bg-[var(--p1)]/55" />
              <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
                {benefit.label}
              </p>
              <h4 className="mt-2 font-condensed text-[24px] font-black uppercase leading-[0.95] tracking-tight text-[var(--t1)]">
                {benefit.title}
              </h4>
              <p className="mt-2 max-w-xl text-sm leading-[1.75] text-[var(--t2)]">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutOptionTwo({ benefits }: { benefits: readonly Benefit[] }) {
  const [first, second, third, fourth] = benefits;
  const images = [
    "/images/lifestyle/Correr_lluvia_1.jpg",
    "/images/team/Equipo_Escalinatas.png",
    "/images/lifestyle/Deportes_1.jpg",
    "/images/team/personascorriendo.jpg",
  ];

  return (
    <div className="relative grid gap-6 lg:grid-cols-[1fr_320px_1fr] lg:grid-rows-[1fr_1fr] lg:items-center">
      <div className="overflow-hidden rounded-[24px] bg-white/[0.025] shadow-[0_18px_42px_rgba(0,0,0,0.14)] lg:justify-self-end">
        <img src={images[0]} alt="" className="h-[140px] w-full object-cover" />
        <div className="p-5">
        <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
          {first.label}
        </p>
        <h4 className="mt-2 font-condensed text-[22px] font-black uppercase leading-[0.95] text-[var(--t1)]">
          {first.title}
        </h4>
        <p className="mt-3 text-sm leading-[1.7] text-[var(--t2)]">
          {first.description}
        </p>
        </div>
      </div>

      <div className="row-span-2 flex items-center justify-center">
        <div className="relative flex h-[260px] w-[260px] items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(255,255,255,0.015)_60%,transparent_100%)]">
          <img
            src={images[1]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-18"
          />
          <div className="absolute inset-6 rounded-full bg-white/[0.02]" />
          <div className="text-center">
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
              Nucleo
            </p>
            <h3 className="mt-3 font-condensed text-[34px] font-black uppercase leading-[0.9] text-[var(--t1)]">
              ESDEC
            </h3>
            <p className="mx-auto mt-3 max-w-[150px] text-sm leading-[1.7] text-[var(--t2)]">
              Todo trabaja alrededor de una sola estructura.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[24px] bg-white/[0.025] shadow-[0_18px_42px_rgba(0,0,0,0.14)] lg:justify-self-start">
        <img src={images[2]} alt="" className="h-[140px] w-full object-cover" />
        <div className="p-5">
        <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
          {second.label}
        </p>
        <h4 className="mt-2 font-condensed text-[22px] font-black uppercase leading-[0.95] text-[var(--t1)]">
          {second.title}
        </h4>
        <p className="mt-3 text-sm leading-[1.7] text-[var(--t2)]">
          {second.description}
        </p>
        </div>
      </div>

      <div className="rounded-[24px] bg-white/[0.02] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.14)] lg:justify-self-end">
        <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
          {third.label}
        </p>
        <h4 className="mt-2 font-condensed text-[22px] font-black uppercase leading-[0.95] text-[var(--t1)]">
          {third.title}
        </h4>
        <p className="mt-3 text-sm leading-[1.7] text-[var(--t2)]">
          {third.description}
        </p>
      </div>

      <div className="rounded-[24px] bg-white/[0.02] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.14)] lg:justify-self-start">
        <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
          {fourth.label}
        </p>
        <h4 className="mt-2 font-condensed text-[22px] font-black uppercase leading-[0.95] text-[var(--t1)]">
          {fourth.title}
        </h4>
        <p className="mt-3 text-sm leading-[1.7] text-[var(--t2)]">
          {fourth.description}
        </p>
      </div>
    </div>
  );
}

function AboutOptionThree({ benefits }: { benefits: readonly Benefit[] }) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="relative min-w-[860px] px-4 py-8">
        <div className="absolute left-0 right-0 top-[52px] h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div className="grid grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={benefit.label} className="relative pt-10">
              <div className="absolute left-0 top-[48px] h-2.5 w-2.5 rounded-full bg-[var(--p1)] shadow-[0_0_20px_rgba(255,255,255,0.12)]" />
              <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
                {(index + 1).toString().padStart(2, "0")} {benefit.label}
              </p>
              <h4 className="mt-3 font-condensed text-[24px] font-black uppercase leading-[0.95] text-[var(--t1)]">
                {benefit.title}
              </h4>
              <p className="mt-3 max-w-[220px] text-sm leading-[1.8] text-[var(--t2)]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutOptionFour({
  benefits,
  image,
}: {
  benefits: readonly Benefit[];
  image: string;
}) {
  const [hero, ...rest] = benefits;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))] p-6">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,16,34,0.92),rgba(5,16,34,0.5),rgba(5,16,34,0.16))]" />
        <div className="relative">
        <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
          Beneficio principal
        </p>
        <h3 className="mt-4 font-condensed text-[34px] font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
          {hero.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-[1.8] text-[var(--t2)]">
          {hero.description}
        </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {rest.map((benefit) => (
          <div
            key={benefit.label}
            className="rounded-[22px] bg-white/[0.02] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.12)]"
          >
            <p className="font-condensed text-[10px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
              {benefit.label}
            </p>
            <h4 className="mt-2 font-condensed text-[20px] font-black uppercase leading-[0.95] text-[var(--t1)]">
              {benefit.title}
            </h4>
            <p className="mt-3 text-sm leading-[1.7] text-[var(--t2)]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Sección principal ─────────────────────────────────────────────────────────

interface AboutSectionProps {
  audience?: Audience;
}

export default function AboutSection({ audience = "deportista" }: AboutSectionProps) {
  const data = audience === "profesional" ? PROFESSIONAL_ABOUT : ABOUT;
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const optionImages = ABOUT_OPTION_IMAGES[audience];
  const selectedCopy = ABOUT_OPTION_COPY[audience][selectedOption];

  return (
    <section
      id="about"
      data-section="about"
      className="relative overflow-hidden bg-[var(--bg)] py-28 md:py-40"
    >
      {/* Accent line superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--p1)]/40 to-transparent" />

      <div className="mx-auto max-w-landing px-6">

        {/* ── Eyebrow ── */}
        <ScrollReveal direction="up" delay={0}>
          <div className="mb-6 flex items-center gap-3">
            <BrandLines size="sm" animated />
            <span className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
              {selectedCopy.eyebrow}
            </span>
          </div>
        </ScrollReveal>

        {/* ── Headline manifiesto ── */}
        <ScrollReveal direction="up" delay={60}>
          <h2
            className="mb-8 font-condensed font-black uppercase leading-[0.92] tracking-[-1px] text-[var(--t1)]"
            style={{ fontSize: "clamp(52px, 8vw, 110px)" }}
          >
            <span className="block">{selectedCopy.pre}</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, var(--p1), var(--p2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {selectedCopy.accent}
            </span>
            <span className="block text-[var(--t1)]">{selectedCopy.post}</span>
          </h2>
        </ScrollReveal>

        {/* ── Body ── */}
        <ScrollReveal direction="up" delay={120}>
          <p className="mb-16 max-w-2xl font-sans text-base leading-[1.8] text-[var(--t2)]">
            {selectedCopy.body}
          </p>
        </ScrollReveal>

        {/* ── Benefit grid 2×2 ── */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {ABOUT_OPTION_LABELS.map((label, index) => {
              const isActive = selectedOption === index;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedOption(index)}
                  className={cn(
                    "rounded-full px-4 py-2 font-condensed text-[11px] font-bold uppercase tracking-[3px] transition-all duration-300",
                    isActive
                      ? "bg-[var(--p1)] text-[var(--bg)]"
                      : "border border-white/10 bg-white/[0.02] text-white/58 hover:border-[var(--p1)]/40 hover:text-white/84"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="mb-4">
          <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-white/34">
            Demo comparativa para elegir direccion visual
          </p>
        </div>

        <div className="mb-20">
          {selectedOption === 0 ? (
            <AboutOptionOne
              benefits={data.benefits}
              body={selectedCopy.body}
              image={optionImages[0]}
            />
          ) : null}
          {selectedOption === 1 ? (
            <AboutOptionTwo benefits={data.benefits} />
          ) : null}
          {selectedOption === 2 ? (
            <AboutOptionThree benefits={data.benefits} />
          ) : null}
          {selectedOption === 3 ? (
            <AboutOptionFour
              benefits={data.benefits}
              image={optionImages[3]}
            />
          ) : null}
        </div>

        {/* ── Cita de cierre ── */}
        <ScrollReveal direction="up" delay={0}>
          <div className="relative border-l-2 border-[var(--p1)]/50 pl-8 py-2">
            <blockquote className="mb-3 font-condensed font-bold italic leading-snug text-[var(--t1)]"
              style={{ fontSize: "clamp(18px, 2.2vw, 26px)" }}
            >
              &ldquo;{selectedCopy.quote}&rdquo;
            </blockquote>
            <cite className="not-italic font-condensed text-[11px] font-bold uppercase tracking-[3px] text-[var(--p1)]">
              — {data.quoteAuthor}
            </cite>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
