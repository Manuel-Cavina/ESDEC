// ─────────────────────────────────────────────────────────────────────────────
// lib/analytics.ts
// Helpers de GA4 + Meta Pixel para ESDEC — MVP 0
//
// Eventos registrados:
//   · page_view       → automático vía GA4
//   · cta_click       → botones "Empezá ahora"
//   · form_submit     → formulario del footprint
//   · scroll_depth    → 25 / 50 / 75 / 100 %
//   · section_view    → al entrar a cada sección (IntersectionObserver)
// ─────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// ── GA4 via Google Tag Manager (GTM-PQ2TVJ2P, cargado en app/layout.tsx)
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (!isBrowser()) return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });
}

// ── CTA click (ej: "hero_primary", "footprint_cta")
export function trackCTAClick(label: string): void {
  trackEvent("cta_click", { cta_label: label });
  if (isBrowser() && window.fbq) {
    window.fbq("track", "Lead", { cta_label: label });
  }
}

// ── Formulario enviado
export function trackFormSubmit(formId: string = "footprint_waitlist"): void {
  trackEvent("form_submit", { form_id: formId });
  if (isBrowser() && window.fbq) {
    window.fbq("track", "CompleteRegistration");
  }
}

// ── Profundidad de scroll (pasar porcentaje: 25 | 50 | 75 | 100)
export function trackScrollDepth(pct: number): void {
  trackEvent("scroll_depth", { depth_pct: pct });
}

// ── Vista de sección (ej: "hero", "about", "ecosystem")
export function trackSectionView(section: string): void {
  trackEvent("section_view", { section_id: section });
}
