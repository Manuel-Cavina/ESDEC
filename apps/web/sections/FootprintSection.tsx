"use client";

// ─────────────────────────────────────────────────────────────────────────────
// sections/FootprintSection.tsx
// Sección 6 — CTA + Modal de incorporación multi-paso.
//
// Layout:
//   · Sección motivacional: headline + counter + "Unirme" button
//   · Modal: cuestionario 5 pasos → genera mensaje → envía por WhatsApp
//
// Copy: todo desde FOOTPRINT_MODAL en content/landing.ts
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { FOOTPRINT_MODAL } from "@/content/landing";
import BrandLines from "@/components/BrandLines";
import FingerprintSVG from "@/components/FingerprintSVG";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

// ── Tipos ─────────────────────────────────────────────────────────────────────
type StepId = "name" | "sport" | "challenge" | "experience" | "contact";
type Answers = Partial<Record<StepId, string>>;

// ── Progress bar ──────────────────────────────────────────────────────────────
function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="flex-1 h-[3px] rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--p1)] to-[var(--p2)] transition-all duration-500"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
      <span className="font-condensed text-[10px] font-bold tracking-[3px] text-[var(--t2)]">
        {current + 1} / {total}
      </span>
    </div>
  );
}

// ── Modal step ────────────────────────────────────────────────────────────────
function ModalStep({
  step,
  stepIndex,
  answers,
  onChange,
  onNext,
  onBack,
  isLast,
}: {
  step: (typeof FOOTPRINT_MODAL.steps)[number];
  stepIndex: number;
  answers: Answers;
  onChange: (id: StepId, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
}) {
  const current = answers[step.id as StepId] ?? "";
  const canAdvance = current.trim().length > 0;

  return (
    <div className="animate-fade-up">
      <p className="mb-6 font-condensed text-[clamp(20px,3vw,28px)] font-bold uppercase leading-tight text-[var(--t1)]">
        {step.question}
      </p>

      {step.type === "text" || step.type === "contact" ? (
        <input
          type={step.type === "contact" ? "text" : "text"}
          placeholder={step.placeholder}
          value={current}
          onChange={(e) => onChange(step.id as StepId, e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && canAdvance && onNext()}
          className={cn(
            "w-full rounded-xl border border-white/20 bg-white/8",
            "px-5 py-4 font-sans text-base text-[var(--t1)] placeholder:text-[var(--t2)]",
            "outline-none focus:border-[var(--p1)]/60 focus:bg-white/10",
            "transition-colors duration-200"
          )}
          autoFocus
        />
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {step.options?.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(step.id as StepId, opt)}
              className={cn(
                "rounded-xl border px-4 py-3 text-left",
                "font-sans text-sm leading-snug transition-all duration-200",
                current === opt
                  ? "border-[var(--p1)] bg-[var(--p1)]/15 text-[var(--t1)]"
                  : "border-white/15 bg-white/5 text-[var(--t2)] hover:border-[var(--p1)]/40 hover:bg-white/8"
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Navegación */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {stepIndex > 0 ? (
          <button
            type="button"
            onClick={onBack}
            className="font-condensed text-[12px] font-bold uppercase tracking-[3px] text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
          >
            ← {FOOTPRINT_MODAL.backLabel}
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onNext}
          disabled={!canAdvance}
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-7 py-3.5",
            "font-condensed text-[13px] font-bold uppercase tracking-[3px]",
            "transition-all duration-200",
            canAdvance
              ? "bg-[var(--btn-bg)] text-[var(--btn-t)] hover:brightness-110 hover:-translate-y-px"
              : "cursor-not-allowed bg-white/10 text-white/30"
          )}
        >
          {isLast ? FOOTPRINT_MODAL.ctaLabel : "Continuar →"}
        </button>
      </div>
    </div>
  );
}

// ── Modal principal ───────────────────────────────────────────────────────────
function Modal({ onClose }: { onClose: () => void }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [success, setSuccess] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const steps = FOOTPRINT_MODAL.steps;
  const currentStep = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleChange(id: StepId, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleNext() {
    if (isLast) {
      submitToWhatsApp();
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  function handleBack() {
    setStepIndex((i) => Math.max(0, i - 1));
  }

  function buildMessage(): string {
    const a = answers;
    return (
      `${FOOTPRINT_MODAL.whatsappIntro}\n\n` +
      `👤 Nombre: ${a.name ?? "-"}\n` +
      `🏅 Deporte: ${a.sport ?? "-"}\n` +
      `🎯 Desafío principal: ${a.challenge ?? "-"}\n` +
      `📅 Experiencia: ${a.experience ?? "-"}\n` +
      `📬 Contacto: ${a.contact ?? "-"}`
    );
  }

  function submitToWhatsApp() {
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${FOOTPRINT_MODAL.whatsappNumber}?text=${msg}`, "_blank");
    setSuccess(true);
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={cn(
          "relative z-10 w-full max-w-lg overflow-hidden rounded-2xl",
          "border border-white/15 bg-[var(--bg2)]",
          "shadow-[0_32px_80px_rgba(0,0,0,0.5)]",
          "animate-fade-up"
        )}
      >
        {/* Accent line top */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--p1)] to-[var(--p2)]" />

        {/* Cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[var(--t2)] transition-colors hover:border-white/30 hover:text-[var(--t1)]"
        >
          <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-8 pt-10">
          {success ? (
            /* ── Pantalla de éxito ── */
            <div className="py-6 text-center animate-fade-up">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--p2)]/20">
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-[var(--p2)]" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-3 font-condensed text-3xl font-black uppercase tracking-tight text-[var(--t1)]">
                {FOOTPRINT_MODAL.successTitle}
              </h3>
              <p className="mb-6 font-sans text-sm leading-relaxed text-[var(--t2)]">
                {FOOTPRINT_MODAL.successBody}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="font-condensed text-[12px] font-bold uppercase tracking-[3px] text-[var(--p1)] hover:underline"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
              {/* Header del modal */}
              <div className="mb-6">
                <BrandLines size="sm" animated className="mb-3" />
                <h2 className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                  {FOOTPRINT_MODAL.title}
                </h2>
                <p className="mt-1 font-sans text-xs text-[var(--t2)]">
                  {FOOTPRINT_MODAL.subtitle}
                </p>
              </div>

              <ProgressBar current={stepIndex} total={steps.length} />

              <ModalStep
                key={stepIndex}
                step={currentStep}
                stepIndex={stepIndex}
                answers={answers}
                onChange={handleChange}
                onNext={handleNext}
                onBack={handleBack}
                isLast={isLast}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Sección principal ─────────────────────────────────────────────────────────
export default function FootprintSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="footprint"
        className="relative overflow-hidden bg-[var(--bg)] py-28 md:py-36"
      >
        {/* Huella heartbeat de fondo */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center [--fps:rgba(90,200,255,0.08)] [--fpg:rgba(90,200,255,0.02)]"
          aria-hidden="true"
        >
          <FingerprintSVG animate={false} className="w-[70vw] max-w-[600px] animate-heartbeat" />
        </div>

        {/* Glow ambiental */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-25"
          style={{ background: "radial-gradient(ellipse at 50% 100%, var(--p1), transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-landing px-6 text-center">

          {/* Eyebrow */}
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-6 inline-flex items-center gap-3">
              <BrandLines size="sm" animated />
              <span className="font-condensed text-[11px] font-bold uppercase tracking-[4px] text-[var(--p1)]">
                El primer paso
              </span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up" delay={60}>
            <h2
              className="mb-6 font-condensed font-black uppercase leading-[0.92] tracking-[-1px] text-[var(--t1)]"
              style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
            >
              <span className="block">EMPEZÁ A</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(90deg, var(--p1), var(--p2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                CONSTRUIR.
              </span>
              <span className="block text-[var(--t2)] text-[0.55em] font-bold mt-2">
                HOY.
              </span>
            </h2>
          </ScrollReveal>

          {/* Body */}
          <ScrollReveal direction="up" delay={120}>
            <p className="mx-auto mb-10 max-w-lg font-sans text-base leading-[1.8] text-[var(--t2)]">
              Los primeros en sumarse acceden con beneficios exclusivos de fundadores.
              Un especialista asignado en menos de 48hs.
            </p>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal direction="up" delay={160}>
            <ul className="mx-auto mb-12 flex max-w-md flex-col gap-3 text-left">
              {["Acceso prioritario al lanzamiento", "Precio especial de fundadores", "Especialista asignado en 48hs"].map((f) => (
                <li key={f} className="flex items-center gap-3 font-sans text-sm text-[var(--t2)]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--p2)]/20">
                    <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3 text-[var(--p2)]" aria-hidden="true">
                      <path d="M2 6l2.5 2.5L10 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal direction="up" delay={200}>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className={cn(
                "btn-shimmer relative overflow-hidden inline-flex items-center gap-3",
                "rounded-xl bg-[var(--btn-bg)] px-10 py-4",
                "font-condensed text-[15px] font-bold uppercase tracking-[4px] text-[var(--btn-t)]",
                "shadow-[0_8px_40px_rgba(90,200,255,0.25)]",
                "transition-all duration-200 hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(90,200,255,0.35)]"
              )}
            >
              Unirme →
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </>
  );
}
