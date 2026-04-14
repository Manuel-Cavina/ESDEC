"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import ScrollReveal from "@/components/ScrollReveal";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import { PROBLEM, PROFESSIONAL_PROBLEM } from "@/content/landing";
import { cn } from "@/lib/utils";

type ProblemData = typeof PROBLEM | typeof PROFESSIONAL_PROBLEM;

interface Problem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface Step {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

const JOURNEY_STAGE_LABELS = [
  "Base",
  "Conexion",
  "Sistema",
  "Ajuste",
  "Ascenso",
] as const;

const JOURNEY_STAGE_NOTES = {
  deportista: [
    "Objetivos y punto de partida",
    "Especialistas en sincronizacion",
    "Entrenamiento integral",
    "Metricas y ajuste continuo",
    "Alto rendimiento en marcha",
  ],
  profesional: [
    "Posicionamiento inicial",
    "Red y cartera conectada",
    "Coordinacion entre disciplinas",
    "Seguimiento con datos",
    "Impacto y proyeccion",
  ],
} as const;

const JOURNEY_STAGE_MARKETING = {
  deportista: [
    "Definimos tu punto de partida y convertimos intencion en direccion real.",
    "Activamos a los especialistas correctos para que dejes de entrenar en soledad.",
    "Tu esfuerzo entra en un sistema integral que ordena cuerpo, mente y rendimiento.",
    "Cada decision se afina con seguimiento real para que el progreso no se detenga.",
    "La carga se completa y tu evolucion entra en fase de alto rendimiento.",
  ],
  profesional: [
    "Ordenamos tu perfil para que tu valor profesional se vea con claridad desde el inicio.",
    "Conectamos tu conocimiento con la red correcta para multiplicar alcance e impacto.",
    "Tu trabajo se integra en un sistema donde cada disciplina potencia a la otra.",
    "Las metricas te devuelven visibilidad real para ajustar, crecer y sostener resultados.",
    "La plataforma queda cargada y tu ejercicio profesional entra en una escala mayor.",
  ],
} as const;

const JOURNEY_VALUE_COPY = {
  deportista: {
    title: "Llega mas lejos,",
    subtitle: "con estructura real detras.",
    body:
      "Cada paso te acerca a una version mas fuerte, mas clara y mejor acompaniada de vos mismo. ESDEC te ordena desde el inicio, sostiene tu proceso y te empuja hasta donde hoy solo ves como objetivo.",
  },
  profesional: {
    title: "Escala tu impacto,",
    subtitle: "con un sistema que te respalda.",
    body:
      "Cada etapa potencia tu trabajo, ordena tu crecimiento y multiplica el valor que generas. ESDEC te acompana desde el primer paso para que tu ejercicio profesional gane alcance, estructura y proyeccion real.",
  },
} as const;

function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
  return (
    <ScrollReveal direction="up" delay={index * 80}>
      <div className="border-[var(--p1)]/20 hover:border-[var(--p1)]/80 group relative overflow-hidden border-t-2 py-10 transition-colors duration-300">
        <div
          className={cn(
            "pointer-events-none absolute -bottom-10 -right-10 opacity-0",
            "transition-opacity duration-500 group-hover:opacity-100",
            "[--fps:rgba(90,200,255,0.18)] dark:[--fps:rgba(5,128,211,0.18)]",
            "[--fpg:rgba(90,200,255,0.04)]",
          )}
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-36" />
        </div>

        <span
          className="font-condensed text-[var(--p1)]/15 group-hover:text-[var(--p1)]/30 mb-2 block select-none font-black leading-none transition-colors duration-300"
          style={{ fontSize: "clamp(72px, 9vw, 108px)" }}
          aria-hidden="true"
        >
          {problem.number}
        </span>

        <div className="bg-[var(--p1)]/40 mb-5 h-[2px] w-6 transition-[width,background-color] duration-500 group-hover:w-14 group-hover:bg-[var(--p1)]" />

        <h3
          className="font-condensed mb-3 font-black uppercase leading-[0.9] tracking-tight text-[var(--t1)]"
          style={{ fontSize: "clamp(20px, 2.4vw, 34px)" }}
        >
          {problem.title}
        </h3>
        <p className="font-sans text-sm leading-relaxed text-[var(--t2)]">
          {problem.description}
        </p>
      </div>
    </ScrollReveal>
  );
}

function PivotStrip({ data }: { data: ProblemData }) {
  return (
    <div className="relative overflow-hidden bg-[var(--bg)] py-24 md:py-36">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          "[--fps:rgba(90,200,255,0.10)] dark:[--fps:rgba(5,128,211,0.10)]",
          "[--fpg:rgba(90,200,255,0.03)]",
        )}
        aria-hidden="true"
      >
        <FingerprintSVG
          animate={false}
          className="w-[55vw] max-w-[520px] opacity-70"
        />
      </div>
      <div className="max-w-landing relative z-10 mx-auto px-6 text-center">
        <ScrollReveal direction="up">
          <BrandLines animated centered className="mx-auto mb-8" />
          <div className="font-condensed text-clamp-pivot font-black uppercase leading-[0.88] tracking-tight">
            <span className="block text-[var(--t1)]">{data.pivotPre}</span>
            <span className="block text-[var(--p1)]">{data.pivotAccent1}</span>
            <span className="mt-2 block text-[0.55em] font-bold tracking-normal text-[var(--t2)]">
              -
            </span>
            <span className="block text-[var(--t1)]">
              {data.pivotConnector}
            </span>
            <span className="block text-[var(--p2)]">{data.pivotAccent2}</span>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

const JOURNEY_POINT_PROGRESS = [8, 30, 52, 74, 96] as const;

function TimelineStep({
  step,
  note,
  marketing,
  index,
  position,
  isActive,
  isCompleted,
  accentVar,
  onActivate,
  onHoverChange,
}: {
  step: Step;
  note: string;
  marketing: string;
  index: number;
  position: number;
  isActive: boolean;
  isCompleted: boolean;
  accentVar: string;
  onActivate: (index: number) => void;
  onHoverChange: (isHovering: boolean) => void;
}) {
  const isTop = index % 2 === 0;

  return (
    <button
      type="button"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onFocus={() => onHoverChange(true)}
      onBlur={() => onHoverChange(false)}
      onClick={() => onActivate(index)}
      className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-left"
      style={{ left: `${position}%` }}
      aria-label={`Etapa ${step.step}: ${step.title}`}
    >
      <div
        className={cn(
          "absolute left-1/2 w-[164px] -translate-x-1/2 rounded-[20px] px-4 py-4 shadow-[0_20px_44px_rgba(0,0,0,0.14)] transition-all duration-500 sm:w-[196px]",
          isTop ? "bottom-[30px]" : "top-[30px]",
          isActive ? "scale-[1.02]" : "scale-[0.98]"
        )}
        style={{
          background: isActive
            ? `linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025) 100%), linear-gradient(90deg, ${accentVar} 0%, transparent 55%)`
            : isCompleted
              ? "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.018), rgba(255,255,255,0.01) 100%)",
          opacity: isActive ? 1 : isCompleted ? 0.8 : 0.48,
        }}
      >
        <span
          className="mb-3 block h-[2px] w-10 rounded-full"
          style={{
            background: isActive
              ? accentVar
              : isCompleted
                ? "rgba(255,255,255,0.32)"
                : "rgba(255,255,255,0.12)",
          }}
        />
        <p
          className="font-condensed text-[10px] font-bold uppercase tracking-[3px]"
          style={{
            color:
              isActive || isCompleted ? accentVar : "rgba(255,255,255,0.36)",
          }}
        >
          {step.step.padStart(2, "0")}
        </p>
        <h4 className="mt-2 font-condensed text-[16px] font-black uppercase leading-[0.96] tracking-[0.08em] text-white">
          {step.title}
        </h4>
        <p className="mt-2 font-condensed text-[10px] font-bold uppercase tracking-[2.6px] text-white/34">
          {note}
        </p>
        <p className="mt-3 text-[11px] leading-[1.6] text-white/68">
          {marketing}
        </p>
      </div>

      <span
        className={cn(
          "absolute left-1/2 h-7 w-px -translate-x-1/2",
          isTop ? "bottom-[4px]" : "top-[4px]"
        )}
        aria-hidden="true"
        style={{
          background: isCompleted
            ? "linear-gradient(180deg, rgba(255,255,255,0.28), transparent)"
            : "linear-gradient(180deg, rgba(255,255,255,0.16), transparent)",
        }}
      />

      <span
        className="relative flex h-5 w-5 items-center justify-center rounded-full transition-all duration-500"
        style={{
          border: `1px solid ${isActive || isCompleted ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.18)"}`,
          background:
            isActive || isCompleted ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
          transform: isActive ? "scale(1.14)" : "scale(1)",
        }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background:
              isActive || isCompleted ? accentVar : "rgba(255,255,255,0.28)",
          }}
        />
      </span>
    </button>
  );
}

function TrophyBurst({
  accentVar,
  visible,
}: {
  accentVar: string;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700",
        visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
      )}
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, ${accentVar}22, transparent 68%)`,
        }}
      />
      <div
        className={cn(
          "relative h-16 w-16 transition-transform duration-700",
          visible ? "-translate-y-10 rotate-0" : "translate-y-0 rotate-[-10deg]"
        )}
      >
        <svg viewBox="0 0 120 120" className="h-full w-full">
          <path
            d="M37 18 H83 V34 C83 50 73 62 60 66 C47 62 37 50 37 34 Z"
            fill={accentVar}
            opacity="0.96"
          />
          <path
            d="M37 26 H23 C23 41 31 51 45 53"
            fill="none"
            stroke={accentVar}
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M83 26 H97 C97 41 89 51 75 53"
            fill="none"
            stroke={accentVar}
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.9"
          />
          <rect x="52" y="67" width="16" height="18" rx="4" fill={accentVar} />
          <rect x="39" y="86" width="42" height="11" rx="5.5" fill={accentVar} />
        </svg>
      </div>
    </div>
  );
}

function JourneySuccessOverlay({
  accentVar,
  visible,
  audience,
}: {
  accentVar: string;
  visible: boolean;
  audience: "deportista" | "profesional";
}) {
  const headline =
    audience === "profesional"
      ? "IMPACTO ACTIVADO"
      : "EVOLUCION ACTIVADA";
  const subline =
    audience === "profesional"
      ? "Tu sistema ya esta listo para escalar."
      : "Tu sistema ya esta listo para rendir.";
  const ctaLine =
    audience === "profesional"
      ? "Desbloqueando tu acceso a SUMARME"
      : "Desbloqueando tu acceso a SUMARME";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-[8%] top-[78px] transition-all duration-700",
        visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.96] opacity-0"
      )}
      aria-hidden="true"
    >
      <div
        className="mx-auto max-w-[560px] rounded-[28px] px-7 py-7 text-center"
        style={{
          background:
            `linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.018) 100%), radial-gradient(circle at 50% 0%, ${accentVar}22, transparent 52%)`,
          boxShadow: "0 28px 70px rgba(0,0,0,0.18)",
        }}
      >
        <div
          className="mx-auto mb-5 h-[3px] w-24 rounded-full"
          style={{ background: accentVar }}
        />
        <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-white/42">
          Elite Sports Development
        </p>
        <p
          className="mt-4 font-condensed text-[34px] font-black uppercase leading-[0.9] tracking-[0.12em] sm:text-[42px]"
          style={{ color: accentVar }}
        >
          {headline}
        </p>
        <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-[1.75] text-white/68">
          {subline}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span
            className="rounded-full px-4 py-2 font-condensed text-[11px] font-bold uppercase tracking-[3px]"
            style={{
              color: accentVar,
              background: `${accentVar}18`,
            }}
          >
            {ctaLine}
          </span>
          <span
            className={cn(
              "font-condensed text-[18px] font-black transition-transform duration-700",
              visible ? "translate-y-0" : "-translate-y-1"
            )}
            style={{ color: accentVar }}
          >
            ↓
          </span>
        </div>
      </div>
    </div>
  );
}

function JourneySection({
  data,
  audience,
}: {
  data: ProblemData;
  audience: "deportista" | "profesional";
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const checkpointPauseRef = useRef<number | null>(null);
  const checkpointPauseTimeoutRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [isHoveringStep, setIsHoveringStep] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const accentVar = audience === "profesional" ? "var(--p2)" : "var(--p1)";
  const accentGlow =
    audience === "profesional"
      ? "rgba(48, 67, 56, 0.14)"
      : "rgba(90,200,255,0.14)";
  const activeIndex = JOURNEY_POINT_PROGRESS.reduce(
    (currentIndex, point, index) => (progress >= point ? index : currentIndex),
    0
  );
  const activeStep = data.journey[activeIndex] ?? data.journey[0];
  const valueCopy = JOURNEY_VALUE_COPY[audience];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio > 0.2;
        setIsSectionVisible(visible);

        if (!visible) {
          setProgress(0);
          setIsCelebrating(false);
          setIsHoveringStep(false);
          checkpointPauseRef.current = null;
          if (checkpointPauseTimeoutRef.current !== null) {
            window.clearTimeout(checkpointPauseTimeoutRef.current);
            checkpointPauseTimeoutRef.current = null;
          }
        }
      },
      { threshold: [0, 0.2, 0.35] }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (!isSectionVisible || isHoveringStep || isCelebrating) {
          return current;
        }

        if (checkpointPauseRef.current !== null) {
          return current;
        }

        if (current >= 100) {
          checkpointPauseRef.current = null;
          return 0;
        }

        const next = Math.min(current + 0.42, 100);
        const checkpoint = JOURNEY_POINT_PROGRESS.find(
          (point) => current < point && next >= point
        );

        if (checkpoint !== undefined && checkpoint < 100) {
          checkpointPauseRef.current = checkpoint;
          if (checkpointPauseTimeoutRef.current !== null) {
            window.clearTimeout(checkpointPauseTimeoutRef.current);
          }
          checkpointPauseTimeoutRef.current = window.setTimeout(() => {
            checkpointPauseRef.current = null;
            checkpointPauseTimeoutRef.current = null;
          }, 950);
          return checkpoint;
        }

        return next;
      });
    }, 120);

    return () => {
      window.clearInterval(interval);
      if (checkpointPauseTimeoutRef.current !== null) {
        window.clearTimeout(checkpointPauseTimeoutRef.current);
        checkpointPauseTimeoutRef.current = null;
      }
    };
  }, [isCelebrating, isHoveringStep, isSectionVisible]);

  useEffect(() => {
    if (progress < 100 || !isSectionVisible) {
      setIsCelebrating(false);
      return;
    }

    setIsCelebrating(true);

    const goToFootprint = window.setTimeout(() => {
      document.getElementById("footprint")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 1300);

    return () => {
      window.clearTimeout(goToFootprint);
    };
  }, [isSectionVisible, progress]);

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--bg2)] py-24 md:py-32"
    >
      <div className="max-w-landing relative z-10 mx-auto px-6">
        <ScrollReveal direction="up" className="mb-10 max-w-2xl">
          <BrandLines
            animated
            className="mb-5"
            style={{ ["--bl-color" as string]: accentVar }}
          />
          <p
            className="font-condensed mb-4 text-[10px] font-bold uppercase tracking-[4px]"
            style={{ color: accentVar }}
          >
            {data.journeyLabel}
          </p>
          <h2 className="font-condensed text-clamp-journey font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
            {data.journeyHeadlinePre}{" "}
            <span style={{ color: accentVar }}>
              {data.journeyHeadlineAccent}
            </span>
          </h2>
        </ScrollReveal>

        <div
          className="relative mx-auto max-w-[1180px]"
          style={
            {
              "--ink": "var(--t1)",
              "--muted": "var(--t2)",
              "--accent": accentVar,
            } as CSSProperties
          }
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            aria-hidden="true"
            style={{
              background: [
                "radial-gradient(circle at 18% 28%, rgba(255,255,255,0.05), transparent 20%)",
                audience === "profesional"
                  ? "radial-gradient(circle at 78% 22%, rgba(12,210,94,0.1), transparent 24%)"
                  : "radial-gradient(circle at 78% 22%, rgba(90,200,255,0.1), transparent 24%)",
              ].join(", "),
            }}
          />

          <div className="relative z-10">
            <div className="mb-8 max-w-2xl">
              <p className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--accent)]">
                Proceso ESDEC
              </p>
              <h3 className="mt-3 font-condensed text-[30px] font-black uppercase leading-[0.92] tracking-tight text-[var(--ink)] sm:text-[38px]">
                {valueCopy.title}
                <span className="block">{valueCopy.subtitle}</span>
              </h3>
              <p className="mt-4 max-w-xl font-sans text-sm leading-[1.85] text-[var(--muted)] sm:text-[15px]">
                {valueCopy.body}
              </p>
            </div>

            <div className="overflow-x-auto pb-6" style={{ scrollbarWidth: "none" }}>
              <div
                className="relative mx-auto min-w-[860px] px-8 py-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-white/34">
                      Inicio
                    </p>
                    <p className="mt-2 font-condensed text-[18px] font-black uppercase tracking-[0.12em] text-white/72">
                      {data.journey[0]?.title}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="relative">
                      <TrophyBurst
                        accentVar={accentVar}
                        visible={isCelebrating || progress >= 100}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500",
                          isCelebrating ? "scale-100 opacity-100" : "scale-75 opacity-0"
                        )}
                        aria-hidden="true"
                        style={{
                          background: `radial-gradient(circle, ${accentGlow}, transparent 68%)`,
                        }}
                      />
                      <div
                        className={cn(
                          "pointer-events-none absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-700",
                          isCelebrating ? "scale-100 opacity-100" : "scale-75 opacity-0"
                        )}
                        aria-hidden="true"
                        style={{
                          borderColor: accentVar,
                        }}
                      />
                      <p
                        className="relative font-condensed text-[34px] font-black leading-none"
                        style={{ color: accentVar }}
                      >
                        {Math.round(progress)}%
                      </p>
                    </div>
                    <p className="mt-2 font-condensed text-[10px] font-bold uppercase tracking-[4px] text-white/34">
                      {progress >= 100
                        ? "Carga completa: evolucion activada"
                        : "Cargando sistema"}
                    </p>
                    <div
                      className={cn(
                        "mt-4 flex flex-col items-center transition-all duration-500",
                        isCelebrating ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                      )}
                      aria-hidden="true"
                    >
                      <span
                        className="h-10 w-px"
                        style={{
                          background: `linear-gradient(180deg, ${accentVar}, transparent)`,
                        }}
                      />
                      <span
                        className="font-condensed text-[22px] font-black leading-none"
                        style={{ color: accentVar }}
                      >
                        ↓
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-condensed text-[10px] font-bold uppercase tracking-[4px] text-white/34">
                      Meta
                    </p>
                    <p
                      className="mt-2 font-condensed text-[18px] font-black uppercase tracking-[0.12em]"
                      style={{ color: accentVar }}
                    >
                      {data.journey[data.journey.length - 1]?.title}
                    </p>
                  </div>
                </div>

                <div className="relative mt-20 h-[300px]">
                  <div className="absolute inset-x-[6%] inset-y-0">
                    <div
                      className="absolute inset-x-0 top-1/2 h-[8px] -translate-y-1/2 rounded-full bg-white/8"
                      aria-hidden="true"
                    >
                      <div
                        className="absolute inset-y-0 left-0 rounded-full transition-all duration-150"
                        style={{
                          width: `${progress}%`,
                          background:
                            "linear-gradient(90deg, rgb(239,68,68) 0%, rgb(245,158,11) 42%, rgb(132,204,22) 72%, rgb(34,197,94) 100%)",
                        }}
                      />
                      <div
                        className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border transition-all duration-150"
                        style={{
                          left: `calc(${progress}% - 8px)`,
                          borderColor: "rgba(255,255,255,0.28)",
                          background: "rgba(8,18,34,0.96)",
                        }}
                      />
                    </div>

                    {data.journey.map((step, index) => (
                      <TimelineStep
                        key={step.step}
                        step={step}
                        note={JOURNEY_STAGE_NOTES[audience][index] ?? step.description}
                        marketing={
                          JOURNEY_STAGE_MARKETING[audience][index] ??
                          step.description
                        }
                        index={index}
                        position={JOURNEY_POINT_PROGRESS[index] ?? 100}
                        isActive={activeIndex === index}
                        isCompleted={
                          progress >=
                          (JOURNEY_POINT_PROGRESS[index] ?? 100)
                        }
                        accentVar={accentVar}
                        onActivate={(index) =>
                          setProgress(JOURNEY_POINT_PROGRESS[index] ?? 0)
                        }
                        onHoverChange={setIsHoveringStep}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProblemSectionProps {
  audience?: "deportista" | "profesional";
}

export default function ProblemSection({
  audience = "deportista",
}: ProblemSectionProps) {
  const data = audience === "profesional" ? PROFESSIONAL_PROBLEM : PROBLEM;

  return (
    <section id="problem" className="overflow-hidden">
      <div className="bg-[var(--bg2)] pb-24 pt-24 md:pb-28 md:pt-32">
        <div className="max-w-landing mx-auto px-6">
          <div className="mb-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <ScrollReveal direction="up">
              <p className="font-condensed mb-4 text-[10px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                {data.eyebrow}
              </p>
              <h2 className="font-condensed text-clamp-problem mb-8 font-black uppercase leading-[0.92] tracking-tight text-[var(--t1)]">
                {data.headline}{" "}
                <span className="text-[var(--p1)]">{data.headlineAccent}</span>
              </h2>
              <blockquote
                className="max-w-lg font-sans text-base leading-[1.85] text-[var(--t2)] [&_strong]:font-semibold [&_strong]:text-[var(--t1)]"
                dangerouslySetInnerHTML={{ __html: data.quote }}
              />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div
                className={cn(
                  "relative flex h-[280px] items-center justify-center overflow-hidden lg:h-[360px]",
                  "[--fps:rgba(90,200,255,0.14)] dark:[--fps:rgba(5,128,211,0.14)]",
                  "[--fpg:rgba(90,200,255,0.04)]",
                )}
                aria-hidden="true"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-transparent to-[var(--bg2)] opacity-0 lg:opacity-100" />
                <FingerprintSVG
                  animate={false}
                  className="w-full max-w-[320px] translate-x-8 opacity-50 lg:translate-x-16"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {data.problems.map((problem, i) => (
              <ProblemCard key={problem.number} problem={problem} index={i} />
            ))}
          </div>
        </div>
      </div>

      <PivotStrip data={data} />
      <JourneySection data={data} audience={audience} />
    </section>
  );
}
