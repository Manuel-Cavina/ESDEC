"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/Navbar.tsx
// NAV fija · floating pill · smooth scroll · toggle día/noche
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { NAV, BRAND } from "@/content/landing";
import { cn } from "@/lib/utils";

// ── Las 3 líneas del logo ESDEC
function LogoLines({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-[5px]", className)}>
      <div className="h-[5px] w-[22px] rounded-[2.5px] bg-[var(--logo-l)]" />
      <div className="h-[5px] w-[16px] rounded-[2.5px] bg-[var(--logo-l)] ml-[3px]" />
      <div className="h-[5px] w-[11px] rounded-[2.5px] bg-[var(--logo-l)] ml-[6px]" />
    </div>
  );
}

interface NavbarProps {
  onThemeToggle?: (isDark: boolean) => void;
  isDark?: boolean;
}

export default function Navbar({ onThemeToggle, isDark = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const rippleRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // ── Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Smooth scroll a anchors
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ── Toggle con ripple
  const handleToggle = (e: React.MouseEvent) => {
    const ripple = rippleRef.current;
    if (ripple) {
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top  = `${e.clientY}px`;
      ripple.classList.remove("go");
      void ripple.offsetWidth; // reflow
      ripple.classList.add("go");
    }
    setTimeout(() => {
      onThemeToggle?.(!isDark);
    }, 60);
  };

  return (
    <>
      {/* Ripple overlay */}
      <div ref={rippleRef} className="mode-ripple" id="ripple" />

      <nav
        className={cn(
          "fixed top-[14px] left-1/2 -translate-x-1/2 z-[900]",
          "w-[min(1200px,calc(100%-40px))]",
          "flex items-center justify-between gap-4",
          "px-6 py-[11px] rounded-[12px]",
          "bg-[var(--nav-bg)] backdrop-blur-[20px]",
          "border border-white/15 dark:border-[rgba(5,128,211,0.2)]",
          "transition-[background,border-color,box-shadow] duration-300",
          scrolled && "shadow-[0_4px_32px_rgba(0,0,0,0.2)]"
        )}
      >
        {/* ── Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 flex-shrink-0"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <LogoLines />
          <span
            className="font-condensed font-black text-[22px] tracking-[1.5px] leading-none"
            style={{ color: "var(--logo-t)" }}
          >
            {BRAND.name}
          </span>
        </a>

        {/* ── Links */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {NAV.links.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "font-sans text-[13px] font-medium",
                  "text-[var(--nav-link)] hover:text-[var(--nav-t)]",
                  "relative transition-colors duration-200",
                  "nav-link-hover"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ── Right: toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Toggle label */}
          <span className="hidden sm:block font-sans text-[12px] text-[var(--nav-link)] font-medium whitespace-nowrap">
            {isDark ? "Modo oscuro" : "Modo claro"}
          </span>

          {/* Toggle switch */}
          <button
            ref={toggleRef}
            onClick={handleToggle}
            aria-label="Cambiar modo"
            className={cn(
              "relative w-[46px] h-[24px] rounded-full flex-shrink-0 cursor-pointer",
              "border-[1.5px] border-white/30 dark:border-[rgba(5,128,211,0.4)]",
              "bg-white/15 dark:bg-[#01305c]",
              "transition-colors duration-300"
            )}
          >
            <span
              className={cn(
                "absolute top-[2px] left-[2px] w-[16px] h-[16px] rounded-full",
                "bg-white dark:bg-[#0580D3]",
                "transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]",
                "shadow-[0_2px_8px_rgba(0,0,0,0.2)]",
                isDark && "translate-x-[22px]"
              )}
            />
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo("#footprint")}
            className={cn(
              "hidden sm:flex items-center gap-1",
              "font-condensed font-bold text-[13px] uppercase tracking-wide",
              "px-5 py-2 rounded-md",
              "bg-[var(--btn-bg)] text-[var(--btn-t)]",
              "transition-all duration-200",
              "hover:brightness-110 hover:px-[26px] hover:-translate-y-px",
              "relative overflow-hidden btn-shimmer"
            )}
          >
            {NAV.cta}
          </button>
        </div>
      </nav>
    </>
  );
}
