"use client";

// sections/events/EventsIntro.tsx
// 3-slide fullscreen intro antes de entrar a la landing de eventos ESDEC.
// Se muestra solo en la primera visita (sessionStorage) y se puede saltar.

import { useEffect, useState } from "react";
import Image from "next/image";
import BrandLines from "@/components/BrandLines";
import { EVENTS_PAGE } from "@/content/eventos";
import { cn } from "@/lib/utils";

export const EVENTS_INTRO_KEY = "esdec-events-intro-v1";

function useCountdownIntro(targetIso: string) {
  const target = new Date(targetIso).getTime();
  const calc = () => Math.max(0, target - Date.now());
  const [ms, setMs] = useState(calc);
  useEffect(() => {
    if (ms <= 0) return;
    const id = setInterval(() => setMs(calc), 1000);
    return () => clearInterval(id);
  });
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms % 86_400_000) / 3_600_000),
    minutes: Math.floor((ms % 3_600_000) / 60_000),
    seconds: Math.floor((ms % 60_000) / 1_000),
    expired: ms <= 0,
  };
}

function StepDots({ current }: { current: number }) {
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            "h-[3px] rounded-full transition-all duration-300",
            i === current ? "w-8 bg-[#5ac8ff]" : "w-3 bg-white/22"
          )}
        />
      ))}
    </div>
  );
}

function SkipButton({ onSkip }: { onSkip: () => void }) {
  return (
    <button
      type="button"
      onClick={onSkip}
      className="absolute right-6 top-6 font-condensed text-[11px] font-black uppercase tracking-[3px] text-white/32 transition-colors hover:text-white/60 sm:right-10 sm:top-8"
    >
      Saltar →
    </button>
  );
}

function NavBrand() {
  return (
    <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-8">
      <BrandLines size="sm" animated />
      <span className="font-condensed text-[11px] font-black uppercase tracking-[4px] text-[#5ac8ff]">
        ESDEC · Eventos
      </span>
    </div>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[72px] w-[72px] flex-col items-center justify-center rounded-[14px] border border-[#5ac8ff]/25 bg-[#5ac8ff]/[0.07] shadow-[0_0_24px_rgba(90,200,255,0.08)] sm:h-[82px] sm:w-[82px]">
        <span className="font-condensed text-[2rem] font-black leading-none text-white tabular-nums sm:text-[2.3rem]">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 font-condensed text-[9px] font-black uppercase tracking-[2.5px] text-white/38">
        {label}
      </span>
    </div>
  );
}

interface EventsIntroProps {
  onComplete: () => void;
}

export default function EventsIntro({ onComplete }: EventsIntroProps) {
  const [step, setStep] = useState(0);
  const [closing, setClosing] = useState(false);
  const { nextEvent } = EVENTS_PAGE;
  const countdown = useCountdownIntro("2026-05-09T08:00:00-03:00");

  const dismiss = (scrollTo?: string) => {
    setClosing(true);
    setTimeout(() => {
      sessionStorage.setItem(EVENTS_INTRO_KEY, "1");
      onComplete();
      if (scrollTo) {
        setTimeout(() => {
          document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    }, 350);
  };

  const next = () => {
    if (step < 2) setStep((s) => s + 1);
    else dismiss();
  };

  const slideClass = (i: number) =>
    cn(
      "pointer-events-none absolute inset-0 transition-all duration-500 ease-out",
      i === step && "pointer-events-auto translate-x-0 opacity-100",
      i < step && "-translate-x-full opacity-0",
      i > step && "translate-x-full opacity-0"
    );

  return (
    <div
      className={cn(
        "fixed inset-0 z-[960] overflow-hidden bg-[#001014] transition-opacity duration-300",
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Introduccion a eventos ESDEC"
    >

      {/* ── CARD 1: HOOK ─────────────────────────────────────────────── */}
      <div className={slideClass(0)}>
        <div className="absolute inset-0">
          <Image
            src={EVENTS_PAGE.hero.image}
            alt=""
            fill
            priority
            quality={88}
            sizes="100vw"
            className="object-cover object-center opacity-20 saturate-50"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(0,10,26,0.97)_0%,rgba(0,28,68,0.84)_52%,rgba(0,10,26,0.96)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_55%,rgba(90,200,255,0.06),transparent)]"
          aria-hidden="true"
        />

        <NavBrand />
        <SkipButton onSkip={() => dismiss()} />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="max-w-[740px]">
            <p className="font-condensed text-[10px] font-black uppercase tracking-[5px] text-[#5ac8ff]">
              Una experiencia que te espera
            </p>
            <h1 className="mt-5 font-condensed text-[clamp(5.5rem,16vw,13rem)] font-black uppercase leading-[0.74] tracking-[-0.02em] text-white">
              ¿ESTÁS
              <span className="block text-[#0cd25e]">LISTO?</span>
            </h1>
            <p className="mx-auto mt-8 max-w-[38ch] font-sans text-[1rem] font-medium leading-[1.9] text-white/68">
              Preparate para entrar a una experiencia que te acompana evento tras evento.
            </p>
            <button
              type="button"
              onClick={next}
              className="mt-10 inline-flex min-h-[62px] min-w-[300px] items-center justify-center rounded-[22px] bg-[#0cd25e] px-10 py-4 font-condensed text-[0.9rem] font-black uppercase tracking-[0.3em] text-[#001a33] shadow-[0_0_52px_rgba(12,210,94,0.38),0_32px_64px_-32px_rgba(0,0,0,0.9)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            >
              Sí, quiero entrar →
            </button>
          </div>
        </div>

        <StepDots current={0} />
      </div>

      {/* ── CARD 2: PILLARS ──────────────────────────────────────────── */}
      <div className={slideClass(1)}>
        <div className="absolute inset-0">
          <Image
            src="/images/team/Equipo_Escalinatas.png"
            alt=""
            fill
            quality={85}
            sizes="100vw"
            className="object-cover object-center opacity-15 saturate-50"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(0,12,30,0.97)_0%,rgba(0,26,64,0.88)_48%,rgba(0,12,30,0.97)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_46%,rgba(90,200,255,0.06),transparent)]"
          aria-hidden="true"
        />

        <NavBrand />
        <SkipButton onSkip={() => dismiss()} />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="max-w-[860px]">
            <h2 className="font-condensed text-[clamp(3rem,9vw,8.5rem)] font-black uppercase leading-[0.78] tracking-tight text-white">
              NO VENÍS SOLO
              <span className="block text-[#5ac8ff]">A ASISTIR.</span>
              <span className="block">VENÍS A VIVIRLO.</span>
            </h2>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {[
                { label: "Comunidad", dotClass: "bg-[#5ac8ff]" },
                { label: "Energia", dotClass: "bg-[#7de8a8]" },
                { label: "Progreso", dotClass: "bg-[#5ac8ff]" },
                { label: "Activacion", dotClass: "bg-[#7de8a8]" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="flex items-center gap-3 rounded-full border border-white/18 bg-white/[0.05] px-6 py-3.5 font-condensed text-[0.9rem] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm"
                >
                  <span className={cn("h-2 w-2 shrink-0 rounded-full", pill.dotClass)} aria-hidden="true" />
                  {pill.label}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="mt-10 inline-flex min-h-[58px] min-w-[260px] items-center justify-center rounded-[20px] bg-[#5ac8ff] px-9 py-3 font-condensed text-[0.86rem] font-black uppercase tracking-[0.26em] text-[#06275f] shadow-[0_18px_48px_-24px_rgba(90,200,255,0.88)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            >
              Ver el proximo evento →
            </button>
          </div>
        </div>

        <StepDots current={1} />
      </div>

      {/* ── CARD 3: PRÓXIMO EVENTO + COUNTDOWN ───────────────────────── */}
      <div className={slideClass(2)}>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_38%,rgba(90,200,255,0.09),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_38%_at_50%_82%,rgba(12,210,94,0.05),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(90,200,255,0.35),transparent)]"
          aria-hidden="true"
        />

        <NavBrand />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="w-full max-w-[680px]">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5ac8ff]/30 bg-[#5ac8ff]/[0.07] px-5 py-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5ac8ff]" aria-hidden="true" />
              <span className="font-condensed text-[10px] font-black uppercase tracking-[4px] text-[#5ac8ff]">
                {nextEvent.eyebrow}
              </span>
            </div>

            <h2 className="font-condensed text-[clamp(2.6rem,6.5vw,5.6rem)] font-black uppercase leading-[0.82] tracking-tight text-white">
              ALGO ESTÁ
              <span className="block text-[#5ac8ff]">POR PASAR.</span>
            </h2>

            <p className="mt-5 font-sans text-[1rem] font-medium leading-[1.75] text-white/50">
              {nextEvent.dateDay} de {nextEvent.dateMonth} · {nextEvent.receptionTime} · {nextEvent.venue}, Córdoba
            </p>

            {!countdown.expired && (
              <div className="mt-10 flex items-end justify-center gap-3 sm:gap-4">
                <CountdownUnit value={countdown.days} label="días" />
                <span className="mb-6 font-condensed text-[1.6rem] font-black leading-none text-white/20" aria-hidden="true">:</span>
                <CountdownUnit value={countdown.hours} label="horas" />
                <span className="mb-6 font-condensed text-[1.6rem] font-black leading-none text-white/20" aria-hidden="true">:</span>
                <CountdownUnit value={countdown.minutes} label="min" />
                <span className="mb-6 font-condensed text-[1.6rem] font-black leading-none text-white/20" aria-hidden="true">:</span>
                <CountdownUnit value={countdown.seconds} label="seg" />
              </div>
            )}

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => dismiss("proximo-evento")}
                className="btn-shimmer inline-flex min-h-[56px] min-w-[240px] items-center justify-center rounded-[18px] bg-[#5ac8ff] px-8 py-3 font-condensed text-[0.82rem] font-black uppercase tracking-[0.22em] text-[#06275f] shadow-[0_18px_46px_-24px_rgba(90,200,255,0.9)] transition-all duration-200 hover:-translate-y-px hover:brightness-110"
              >
                Ver proximo evento →
              </button>
              <button
                type="button"
                onClick={() => dismiss("eventos-anteriores")}
                className="inline-flex min-h-[56px] min-w-[220px] items-center justify-center rounded-[18px] border border-white/20 bg-white/[0.05] px-8 py-3 font-condensed text-[0.8rem] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.1]"
              >
                Ver mas eventos →
              </button>
            </div>
          </div>
        </div>

        <StepDots current={2} />
      </div>
    </div>
  );
}
