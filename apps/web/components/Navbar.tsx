"use client";

// ─────────────────────────────────────────────────────────────────────────────
// components/Navbar.tsx
// NAV escalable — grupos con dropdown (desktop) + drawer slide-down (mobile).
//
// Datos: NAV.groups en content/landing.ts.
//   - Grupo con `items` → trigger + panel desplegable.
//   - Grupo con `href`  → link directo (sin dropdown).
//   - Item con `comingSoon: true` → dimmed, no clickeable (roadmap visual).
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { NAV, BRAND } from "@/content/landing";
import { cn } from "@/lib/utils";
import FingerprintSVG from "@/components/FingerprintSVG";

// ── Tipos ─────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
  icon?: string;
  description?: string;
  comingSoon?: boolean;
}

function getGroupItems(group: (typeof NAV.groups)[number]): readonly NavItem[] | null {
  if ("items" in group) return group.items as unknown as readonly NavItem[];
  return null;
}

function getGroupHref(group: (typeof NAV.groups)[number]): string | null {
  if (!("items" in group) && "href" in group) return (group as { href: string }).href;
  return null;
}

// ── DropdownPanel ─────────────────────────────────────────────────────────────

function DropdownPanel({
  items,
  label,
  open,
  onClose,
}: {
  items: readonly NavItem[];
  label: string;
  open: boolean;
  onClose: () => void;
}) {
  const go = (href: string) => {
    onClose();
    const id = href.replace("#", "");
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  return (
    <div
      role="menu"
      aria-label={label}
      className={cn(
        "absolute left-0 top-[calc(100%+10px)] z-[950] min-w-[260px] origin-top",
        "rounded-[14px] border border-white/12 bg-[var(--nav-bg)] backdrop-blur-[24px]",
        "shadow-[0_12px_40px_rgba(0,0,0,0.3)] dark:border-[rgba(5,128,211,0.18)]",
        "overflow-hidden",
        "transition-all duration-200",
        open
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none -translate-y-2 scale-95 opacity-0"
      )}
    >
      {/* Header del panel */}
      <div className="border-b border-white/8 px-4 py-3">
        <p className="font-condensed text-[9px] font-bold uppercase tracking-[4px] text-[var(--p1)]/70">
          {label}
        </p>
      </div>

      {/* Items */}
      <div className="p-2">
        {items.map((item) => (
          <button
            key={item.label}
            role="menuitem"
            onClick={() => !item.comingSoon && go(item.href)}
            disabled={item.comingSoon}
            className={cn(
              "group flex w-full items-start gap-3 rounded-[8px] px-3 py-2.5 text-left",
              "border-l-2 border-transparent",
              "transition-[background,border-color,padding] duration-150",
              item.comingSoon
                ? "cursor-default opacity-40"
                : "hover:border-[var(--p1)] hover:bg-white/6 hover:pl-4 dark:hover:bg-white/4"
            )}
          >
            {item.icon && (
              <span className="mt-[1px] shrink-0 text-base leading-none">{item.icon}</span>
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-condensed text-[13px] font-bold uppercase tracking-wide text-[var(--nav-t)]">
                  {item.label}
                </span>
                {item.comingSoon && (
                  <span className="shrink-0 rounded-sm bg-[var(--p1)]/20 px-1.5 py-px font-condensed text-[9px] font-bold uppercase tracking-wider text-[var(--p1)]">
                    Pronto
                  </span>
                )}
              </div>
              {item.description && (
                <p className="mt-0.5 font-sans text-[11px] leading-snug text-[var(--nav-link)]">
                  {item.description}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Navbar principal ──────────────────────────────────────────────────────────

interface NavbarProps {
  onThemeToggle?: (isDark: boolean) => void;
  isDark?: boolean;
}

export default function Navbar({ onThemeToggle, isDark = false }: NavbarProps) {
  const [scrolled,     setScrolled]     = useState(false);
  const [openGroup,    setOpenGroup]    = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef    = useRef<HTMLElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenGroup(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setIsMobileOpen(false); };
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const scrollTo = (href: string) => {
    setOpenGroup(null);
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  const handleToggle = (e: React.MouseEvent) => {
    const ripple = rippleRef.current;
    if (ripple) {
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top  = `${e.clientY}px`;
      ripple.classList.remove("go");
      void ripple.offsetWidth;
      ripple.classList.add("go");
    }
    setTimeout(() => onThemeToggle?.(!isDark), 60);
  };

  return (
    <>
      {/* Ripple de cambio de modo */}
      <div ref={rippleRef} className="mode-ripple" id="ripple" />

      {/* ── Drawer mobile ─────────────────────────────────────────────────────── */}
      <div
        className={cn(
          "nav-drawer fixed inset-x-0 top-0 z-[800] md:hidden",
          "bg-[var(--nav-bg)] backdrop-blur-[24px]",
          "border-b border-white/10 dark:border-[rgba(5,128,211,0.15)]",
          isMobileOpen ? "translate-y-0" : "-translate-y-full"
        )}
        aria-hidden={!isMobileOpen}
      >
        <div className="flex flex-col px-6 pb-10 pt-[80px]">

          {/* Logo + tagline en drawer */}
          <div className="mb-8 flex items-center gap-3 border-b border-white/8 pb-6">
            <div className="[--fps:var(--logo-l)] [--fpg:transparent]">
              <FingerprintSVG animate={false} className="w-7 h-8" strokeOpacity={1} />
            </div>
            <div>
              <p className="font-condensed text-[20px] font-black leading-none tracking-[1.5px]" style={{ color: "var(--logo-t)" }}>
                {BRAND.name}
              </p>
              <p className="mt-0.5 font-condensed text-[9px] font-bold uppercase tracking-[3px] text-[var(--p1)]/60">
                Elite Sports Development
              </p>
            </div>
          </div>

          {/* Grupos */}
          {NAV.groups.map((group) => {
            const items = getGroupItems(group);
            const href  = getGroupHref(group);

            return (
              <div key={group.label}>
                {items ? (
                  <>
                    <p className="mb-1 mt-7 font-condensed text-[9px] font-bold uppercase tracking-[4px] text-[var(--p1)]/60">
                      {group.label}
                    </p>
                    {items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => !item.comingSoon && scrollTo(item.href)}
                        disabled={item.comingSoon}
                        className={cn(
                          "flex w-full items-center gap-3 border-l-2 border-transparent py-3 pl-3 text-left",
                          "font-condensed text-[20px] font-bold uppercase tracking-wide",
                          "transition-[border-color,padding] duration-150",
                          item.comingSoon
                            ? "cursor-default opacity-35 text-[var(--t2)]"
                            : "text-[var(--t1)] hover:border-[var(--p1)] hover:pl-4 active:opacity-70"
                        )}
                      >
                        {item.icon && <span className="text-xl">{item.icon}</span>}
                        <span className="flex-1">{item.label}</span>
                        {item.comingSoon && (
                          <span className="rounded-sm bg-[var(--p1)]/15 px-2 py-px font-condensed text-[9px] font-bold uppercase tracking-wider text-[var(--p1)]">
                            Pronto
                          </span>
                        )}
                      </button>
                    ))}
                  </>
                ) : href ? (
                  <button
                    onClick={() => scrollTo(href)}
                    className={cn(
                      "mt-7 flex w-full items-center border-l-2 border-transparent py-3 pl-3",
                      "font-condensed text-[20px] font-bold uppercase tracking-wide text-[var(--t1)]",
                      "transition-[border-color,padding] duration-150",
                      "hover:border-[var(--p1)] hover:pl-4 active:opacity-70"
                    )}
                  >
                    {group.label}
                  </button>
                ) : null}
              </div>
            );
          })}

          {/* CTA mobile */}
          <button
            onClick={() => scrollTo(NAV.ctaHref)}
            className={cn(
              "mt-10 w-full rounded-md py-4",
              "bg-[var(--btn-bg)] font-condensed text-[15px] font-bold uppercase tracking-[3px] text-[var(--btn-t)]",
              "transition-opacity active:opacity-80"
            )}
          >
            {NAV.cta}
          </button>

        </div>
      </div>

      {/* ── Pill flotante ─────────────────────────────────────────────────────── */}
      <nav
        ref={navRef}
        className={cn(
          "fixed left-1/2 top-[14px] z-[900] -translate-x-1/2",
          "w-[min(1200px,calc(100%-40px))]",
          "flex items-center justify-between gap-4",
          "rounded-[12px] border border-white/15 px-6 py-[11px]",
          "bg-[var(--nav-bg)] backdrop-blur-[20px]",
          "dark:border-[rgba(5,128,211,0.2)]",
          "transition-[background,border-color,box-shadow] duration-300",
          scrolled && "shadow-[0_4px_32px_rgba(0,0,0,0.2)] border-white/20"
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex shrink-0 items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="[--fps:var(--logo-l)] [--fpg:transparent]">
            <FingerprintSVG animate={false} className="w-7 h-8" strokeOpacity={1} />
          </div>
          <span
            className="font-condensed text-[22px] font-black leading-none tracking-[1.5px]"
            style={{ color: "var(--logo-t)" }}
          >
            {BRAND.name}
          </span>
        </a>

        {/* Grupos desktop */}
        <ul className="hidden list-none items-center gap-1 md:flex">
          {NAV.groups.map((group) => {
            const items = getGroupItems(group);
            const href  = getGroupHref(group);

            return (
              <li key={group.label} className="relative">
                {items ? (
                  <>
                    <button
                      onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                      aria-expanded={openGroup === group.label}
                      aria-haspopup="menu"
                      className={cn(
                        "nav-link-hover flex items-center gap-1 rounded-[6px] px-3 py-1.5",
                        "font-sans text-[13px] font-medium transition-colors duration-200",
                        openGroup === group.label
                          ? "text-[var(--nav-t)]"
                          : "text-[var(--nav-link)] hover:text-[var(--nav-t)]"
                      )}
                    >
                      {group.label}
                      <svg
                        className={cn(
                          "h-3 w-3 transition-transform duration-200",
                          openGroup === group.label && "rotate-180"
                        )}
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 4l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <DropdownPanel
                      items={items}
                      label={group.label}
                      open={openGroup === group.label}
                      onClose={() => setOpenGroup(null)}
                    />
                  </>
                ) : href ? (
                  <button
                    onClick={() => scrollTo(href)}
                    className="nav-link-hover rounded-[6px] px-3 py-1.5 font-sans text-[13px] font-medium text-[var(--nav-link)] transition-colors duration-200 hover:text-[var(--nav-t)]"
                  >
                    {group.label}
                  </button>
                ) : null}
              </li>
            );
          })}
        </ul>

        {/* Controles derecha */}
        <div className="flex items-center gap-3">

          {/* Separador vertical */}
          <div className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />

          {/* Label modo */}
          <span className="hidden font-sans text-[12px] font-medium text-[var(--nav-link)] sm:block lg:whitespace-nowrap">
            {isDark ? "Modo oscuro" : "Modo claro"}
          </span>

          {/* Toggle */}
          <button
            onClick={handleToggle}
            aria-label="Cambiar modo"
            className={cn(
              "relative h-[24px] w-[46px] shrink-0 cursor-pointer rounded-full",
              "border-[1.5px] border-white/30 bg-white/15",
              "dark:border-[rgba(5,128,211,0.4)] dark:bg-[#01305c]",
              "transition-colors duration-300"
            )}
          >
            <span
              className={cn(
                "absolute left-[2px] top-[2px] h-[16px] w-[16px] rounded-full",
                "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.2)] dark:bg-[#0580D3]",
                "transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]",
                isDark && "translate-x-[22px]"
              )}
            />
          </button>

          {/* CTA desktop */}
          <button
            onClick={() => scrollTo(NAV.ctaHref)}
            className={cn(
              "btn-shimmer relative hidden overflow-hidden rounded-md sm:flex",
              "items-center gap-1.5",
              "bg-[var(--btn-bg)] px-5 py-2",
              "font-condensed text-[13px] font-bold uppercase tracking-wide text-[var(--btn-t)]",
              "transition-all duration-200 hover:-translate-y-px hover:brightness-110 hover:px-[26px]",
              "shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
            )}
          >
            {NAV.cta}
          </button>

          {/* Hamburger — solo mobile */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileOpen}
            className={cn("nav-ham md:hidden", isMobileOpen && "open")}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
}
