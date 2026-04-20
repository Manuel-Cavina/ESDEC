// sections/ecosistema/SinESDECSection.tsx
// Sección de contraste: muestra el ecosistema SIN ESDEC — fragmentado, desconectado.

import ScrollReveal from "@/components/ScrollReveal";
import { ECOSISTEMA_SIN_ESDEC } from "@/content/ecosistema";

// Posiciones absolutas deliberadamente caóticas para desktop
const DESKTOP_POSITIONS = [
  { top: "6%",  left: "2%",   width: "33%" },
  { top: "4%",  left: "38%",  width: "29%" },
  { top: "3%",  right: "2%",  width: "24%" },
  { top: "52%", left: "8%",   width: "28%" },
  { top: "54%", left: "40%",  width: "32%" },
  { top: "48%", right: "1%",  width: "22%" },
];

export default function SinESDECSection() {
  const { eyebrow, headline, subtext, problems, closingLine, transitionLine } =
    ECOSISTEMA_SIN_ESDEC;

  return (
    <section className="bg-[#040b16] px-6 py-24">
      <div className="mx-auto max-w-landing">
        {/* Header — tono apagado */}
        <ScrollReveal direction="up" className="mb-14 max-w-xl">
          <p className="font-condensed text-[10px] font-semibold uppercase tracking-[4px] text-[#3a5060]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-condensed text-[clamp(2.2rem,4.5vw,3.5rem)] uppercase leading-[0.92] tracking-[-0.02em] text-[#c0cfd8]/70">
            {headline}
          </h2>
          <p className="mt-4 font-sans text-[0.9rem] leading-[1.8] text-[#3a5060]">
            {subtext}
          </p>
        </ScrollReveal>

        {/* Layout desconectado — Desktop scattered / Mobile stack */}

        {/* DESKTOP: posicionamiento caótico intencional */}
        <div className="relative hidden min-h-[560px] md:block" aria-hidden="false">
          {/* SVG con líneas cortadas como decoración */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <line x1="28%" y1="22%" x2="38%" y2="22%" strokeDasharray="4 10" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
            <line x1="67%" y1="18%" x2="76%" y2="30%" strokeDasharray="4 12" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            <line x1="22%" y1="55%" x2="40%" y2="62%" strokeDasharray="5 9" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="52%" y1="20%" x2="52%" y2="55%" strokeDasharray="3 14" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="75%" y1="50%" x2="88%" y2="58%" strokeDasharray="4 10" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </svg>

          {problems.map((p, i) => (
            <div
              key={p.id}
              className="sin-esdec-node absolute rounded-[14px] p-4"
              style={DESKTOP_POSITIONS[i] as React.CSSProperties}
            >
              <p className="font-condensed text-[10px] font-semibold uppercase tracking-[3px] text-[#2c3e4a]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-1 font-condensed text-[0.95rem] uppercase leading-[1.1] tracking-[-0.01em] text-[#4a5e6a]">
                {p.label}
              </h4>
              <p className="mt-1 font-sans text-[0.78rem] leading-[1.6] text-[#2a3a44]">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE: stack vertical */}
        <div className="grid grid-cols-1 gap-3 md:hidden">
          {problems.map((p, i) => (
            <div key={p.id} className="sin-esdec-node rounded-[14px] p-4">
              <p className="font-condensed text-[10px] font-semibold uppercase tracking-[3px] text-[#2c3e4a]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h4 className="mt-1 font-condensed text-[0.95rem] uppercase leading-[1.1] text-[#4a5e6a]">
                {p.label}
              </h4>
              <p className="mt-1 font-sans text-[0.78rem] leading-[1.6] text-[#2a3a44]">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pivot hacia la solución */}
        <ScrollReveal direction="up" delay={200} className="mt-20 text-center">
          <hr className="mx-auto mb-8 w-12 border-t border-white/[0.12]" />
          <p className="font-condensed text-[1.1rem] uppercase tracking-[3px] text-white/40">
            {closingLine}
          </p>
          <p className="mt-3 font-condensed text-[clamp(1.8rem,3.5vw,2.8rem)] uppercase leading-[0.95] tracking-[-0.02em] text-[#eef4ff]">
            {transitionLine}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
