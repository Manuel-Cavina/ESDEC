"use client";

// components/WhatsAppWizardModal.tsx
// Multi-step lead capture modal that hands the conversation off to WhatsApp.
// Extracted from FootprintSection so any CTA can trigger the same flow.

import { useEffect, useMemo, useRef, useState } from "react";
import { FOOTPRINT_MODAL } from "@/content/landing";
import BrandLines from "@/components/BrandLines";
import Kicker from "@/components/ui/Kicker";
import StickerIcon from "@/components/StickerIcon";
import { cn } from "@/lib/utils";

export type WizardAudience = "deportista" | "profesional";
type StepType = "text" | "options" | "contact";

interface StepOption {
  label: string;
  icon: string;
}

interface StepConfig {
  id: string;
  question: string;
  type: StepType;
  placeholder?: string;
  options?: readonly StepOption[];
}

type Answers = Record<string, string>;

interface WhatsAppWizardModalProps {
  audience: WizardAudience;
  onClose: () => void;
}

interface ProgressBarProps {
  current: number;
  total: number;
}

interface ModalStepProps {
  step: StepConfig;
  stepIndex: number;
  answers: Answers;
  onChange: (id: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
  backLabel: string;
  submitLabel: string;
}

function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-[3px] flex-1 rounded-full bg-white/10">
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

function ModalStep({
  step,
  stepIndex,
  answers,
  onChange,
  onNext,
  onBack,
  isLast,
  backLabel,
  submitLabel,
}: ModalStepProps) {
  const current = answers[step.id] ?? "";
  const canAdvance = current.trim().length > 0;

  return (
    <div className="animate-fade-up">
      <p className="mb-6 font-condensed text-[clamp(20px,3vw,28px)] font-bold uppercase leading-tight text-[var(--t1)]">
        {step.question}
      </p>

      {step.type === "text" || step.type === "contact" ? (
        <input
          type="text"
          placeholder={step.placeholder}
          value={current}
          onChange={(event) => onChange(step.id, event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && canAdvance && onNext()}
          className={cn(
            "w-full rounded-xl border border-white/20 bg-white/8 px-5 py-4",
            "font-sans text-base text-[var(--t1)] placeholder:text-[var(--t2)]",
            "outline-none transition-colors duration-200 focus:border-[var(--p1)]/60 focus:bg-white/10"
          )}
          autoFocus
        />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {step.options?.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => onChange(step.id, option.label)}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-3 text-left font-sans text-sm leading-snug transition-all duration-200",
                current === option.label
                  ? "border-[var(--p1)] bg-[var(--p1)]/15 text-[var(--t1)]"
                  : "border-white/15 bg-white/5 text-[var(--t2)] hover:border-[var(--p1)]/40 hover:bg-white/8"
              )}
            >
              <StickerIcon name={option.icon} size="xs" />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        {stepIndex > 0 ? (
          <button
            type="button"
            onClick={onBack}
            className="font-condensed text-[12px] font-bold uppercase tracking-[3px] text-[var(--t2)] transition-colors hover:text-[var(--t1)]"
          >
            ← {backLabel}
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onNext}
          disabled={!canAdvance}
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-sans text-[0.95rem] font-semibold uppercase tracking-[0.04em] transition-all duration-200",
            canAdvance
              ? "bg-[var(--btn-bg)] text-[var(--btn-t)] hover:-translate-y-px hover:brightness-110"
              : "cursor-not-allowed bg-white/10 text-white/30"
          )}
        >
          {isLast ? submitLabel : "Continuar →"}
        </button>
      </div>
    </div>
  );
}

export default function WhatsAppWizardModal({ audience, onClose }: WhatsAppWizardModalProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [success, setSuccess] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const config = FOOTPRINT_MODAL.variants[audience];
  const steps = useMemo(() => [...config.steps] as StepConfig[], [config.steps]);
  const currentStep = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleChange(id: string, value: string) {
    setAnswers((previous) => ({ ...previous, [id]: value }));
  }

  function handleNext() {
    if (isLast) {
      submitToWhatsApp();
      return;
    }

    setStepIndex((current) => current + 1);
  }

  function handleBack() {
    setStepIndex((current) => Math.max(0, current - 1));
  }

  function buildMessage() {
    const lines = steps.map((step) => {
      const label = step.question.replace(/[¿?]/g, "");
      return `• ${label}: ${answers[step.id] ?? "-"}`;
    });

    return `${config.whatsappIntro}\n\n${lines.join("\n")}`;
  }

  function submitToWhatsApp() {
    const message = encodeURIComponent(buildMessage());
    window.open(
      `https://wa.me/${FOOTPRINT_MODAL.whatsappNumber}?text=${message}`,
      "_blank"
    );
    setSuccess(true);
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      onClick={(event) => {
        if (event.target === overlayRef.current) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className={cn(
          "relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[var(--bg2)] shadow-[0_32px_80px_rgba(0,0,0,0.5)]",
          "animate-fade-up"
        )}
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--p1)] to-[var(--p2)]" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[var(--t2)] transition-colors hover:border-white/30 hover:text-[var(--t1)]"
        >
          <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="p-8 pt-10">
          {success ? (
            <div className="animate-fade-up py-6 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--p2)]/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 text-[var(--p2)]"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-condensed text-3xl font-black uppercase tracking-tight text-[var(--t1)]">
                {config.successTitle}
              </h3>
              <p className="mb-6 font-sans text-sm leading-relaxed text-[var(--t2)]">
                {config.successBody}
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
              <div className="mb-6">
                <BrandLines size="sm" animated className="mb-3" />
                <Kicker>{config.title}</Kicker>
                <p className="mt-1 font-sans text-xs leading-[1.7] text-[var(--t2)]">
                  {config.subtitle}
                </p>
              </div>

              <ProgressBar current={stepIndex} total={steps.length} />

              <ModalStep
                key={currentStep.id}
                step={currentStep}
                stepIndex={stepIndex}
                answers={answers}
                onChange={handleChange}
                onNext={handleNext}
                onBack={handleBack}
                isLast={isLast}
                backLabel={FOOTPRINT_MODAL.backLabel}
                submitLabel={config.ctaLabel}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
