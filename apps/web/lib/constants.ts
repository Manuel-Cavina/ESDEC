// ─────────────────────────────────────────────────────────────────────────────
// lib/constants.ts
// Valores fijos del proyecto ESDEC — no cambiar sin actualizar también .env
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://esdec.com.ar";

// Google Analytics 4 — reemplazar con ID real al ir a producción
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

// Meta Pixel — reemplazar con ID real al ir a producción
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

// localStorage key para preferencia de tema
export const THEME_KEY = "esdec-theme";
