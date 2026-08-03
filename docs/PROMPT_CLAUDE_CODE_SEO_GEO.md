# Prompt para Claude Code — Auditoría técnica SEO/GEO/AEO de ESDEC (esdec.com.ar)

> **Cómo usar este archivo:** guardalo en el repo como `docs/SEO_GEO_AUDIT.md` (o donde vivan tus docs de contexto, junto a `CLAUDE.md` y `AI_CONTEXT.md`) y abrí Claude Code en la raíz del proyecto. Pegale como primer mensaje algo como:
>
> *"Leé `docs/SEO_GEO_AUDIT.md` completo y seguí las instrucciones ahí dentro antes de tocar cualquier código."*
>
> También podés pegar todo este archivo directamente como mensaje si preferís no guardarlo primero. El archivo funciona en los dos casos porque es autocontenido: no depende de que Claude Code tenga memoria de esta conversación en claude.ai.

---

## 0. Rol y objetivo

Actuá como ingeniero senior de SEO técnico especializado en Next.js/React, con criterio adicional de GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization). Tu tarea es auditar el código real de este repositorio (no una URL externa) para confirmar, refutar o precisar los hallazgos de una auditoría previa hecha desde afuera (con acceso limitado a fetch externo y a datos reales de Search Console), y dejar el proyecto en condiciones de ejecutar un roadmap de mejoras SEO/GEO de forma ordenada.

**No implementes cambios de código en esta primera pasada.** Primero auditá y documentá. Implementación va en una fase separada, después de que Manuel apruebe el diagnóstico (ver sección 5).

---

## 1. Contexto del proyecto (para que no tengas que inferirlo)

ESDEC (Elite Sports Development) es un ecosistema deportivo con sede en Córdoba, Argentina, que conecta deportistas amateurs con profesionales del deporte (kinesiólogos, nutricionistas, psicólogos deportivos, coaches) vía perfilado con IA, marketplace de dos lados y un modelo de acompañamiento diario. Opera en cinco pilares: Bienestar, Salud Deportiva, Tecnología, Educación y Eventos. Dos roles de usuario: *deportistas* y *profesionales*.

Stack: Next.js, TypeScript estricto, mobile-first. Deploy en Vercel. Automatizaciones en n8n. El scoring de IA de derivación profesional tiene ~45% de precisión declarada — cualquier copy que hable de la IA debe presentarla como sugerente, nunca como certeza clínica.

Diseño: Navy `#001A33`, azul eléctrico `#1556d4`, verde lima de acento; tipografías Bebas Neue (display) + Barlow Condensed + Barlow (body); motivo de "tres líneas" escalonadas horizontales; huella digital SVG como abstracción de marca; sin border-radius en elementos de UI. **No cambies nada de esto sin justificarlo explícitamente y avisar antes.**

---

## 2. Lo que ya sabemos (auditoría externa previa) — no lo repitas, verificalo en código

### 2.1 Datos reales de Google Search Console (23 abr – 22 jul 2026, 3 meses)

- **Totales:** ~16-17 impresiones, **1 solo clic** en todo el sitio en 3 meses.
- **Consulta "esdec" (marca pura):** 8 impresiones, posición media **5.62** (primera página), **0 clics — CTR 0%**. Esto es la señal más importante: el sitio ya rankea razonablemente para su propia marca pero nadie hace clic.
- Otras dos consultas con impresión aislada ("ced sport", "desc sport") en posiciones 42 y 89 — ruido, no accionable.
- **Home (`/`):** 16 impresiones, 1 clic, posición media **11.81** (límite de página 1/2).
- **`/tecnologia-deportiva-cordoba`:** 1 impresión en posición 1 — dato débil (una sola impresión) pero indica que la página puede rankear bien para alguna consulta muy específica.
- **Mobile vs. Desktop:** mobile rankea mucho mejor en promedio (pos. 4.75) que desktop (pos. 18.88). Con tan poco volumen no es concluyente, pero es una pista a seguir con Core Web Vitals reales por dispositivo.
- **Apariciones en resultados enriquecidos:** reporte vacío — cero fragmentos destacados, FAQ, breadcrumbs u otros rich results en 3 meses.

### 2.2 Colisión de marca (hallazgo de búsqueda pública, no de código, pero condiciona la estrategia de contenido)

"ESDEC" es usado también por: Esdec BV (estructuras de montaje para paneles solares, Países Bajos, dominio `esdec.com`, mucha más autoridad), Escola de Defesa Civil "EsDEC" (Brasil), una escuela en Francia (`@ecoleesdec`), y variantes en España. La hipótesis de trabajo es que esto explica el CTR 0% en la consulta de marca: el snippet de ESDEC Córdoba no se distingue lo suficiente en la SERP. **Toda página del sitio debería reforzar "ESDEC" + "Córdoba"/"Argentina"/"deporte" en title, H1/H2 y primer párrafo — no como keyword stuffing, sino como desambiguación real.**

### 2.3 Hallazgos on-page confirmados por fetch externo (verificar en código si siguen así)

- **Home:** title "ESDEC — Elite Sports Development" (sin keyword de categoría/ubicación), H1 = "UN MISMO SISTEMA. DOS ENTRADAS CLARAS. CERO FRICCIÓN." (eslogan de marca, sin keyword de intención), contenido textual escaso, sin H2/H3 detectables, solo 3 enlaces internos (deportistas, profesionales, ecosistema).
- **`/ecosistema-deportivo-cordoba`:** buen title/description con keyword+ubicación, H1 igualmente sin keyword ("No te falta esfuerzo. Te falta sistema."), buena exposición de los 6 pilares con enlaces propios, pero afirmaciones de marca ("Integración total", "Inteligencia aplicada", etc.) sin evidencia verificable (sin caso, dato propio o cifra).
- **`/deportistas`:** mismo patrón de H1 sin keyword, buena estructura de "problema → cómo funciona → pasos", conversión 100% dependiente de un link a WhatsApp (sin formulario propio ni tracking nativo de eventos).
- **Enlaces muertos:** "Privacidad" y "Términos de uso" en el footer apuntan a `#` en las tres páginas revisadas. Esto es prioridad alta: el sitio va a manejar datos de salud deportiva y hoy no tiene política de privacidad operativa (riesgo de cumplimiento con la Ley 25.326 de Protección de Datos Personales en Argentina, además de mala señal de confianza para Google).
- Sin evidencia de fecha de publicación/actualización, autor o firma profesional en el contenido.

### 2.4 Lo que la auditoría externa NO pudo verificar (por eso te necesitamos a vos, con acceso al repo)

- Contenido real de `robots.txt` y `sitemap.xml` (o `app/robots.ts` / `app/sitemap.ts` si usan el App Router de Next.js).
- Si hay JSON-LD implementado (Organization, WebSite, Service, ProfilePage, etc.) y si es válido.
- Tipo de renderizado real por ruta (SSR, SSG, ISR, CSR) y qué contenido llega en el HTML inicial vs. hidratado después.
- Core Web Vitals reales (LCP, INP, CLS) — hay una sospecha concreta: las imágenes se sirven vía `/_next/image?...&q=100` (calidad 100, sin comprimir), candidato directo a peso de página alto.
- Canonicals, metadatos por ruta generados correctamente (`generateMetadata` en Next.js), redirecciones, códigos de estado.
- Errores de consola, recursos bloqueados, hidratación.

---

## 3. Tareas de auditoría (en este orden)

### Fase A — Rastreo e indexación
1. Ubicá y mostrame el contenido real de robots.txt (archivo estático en `public/` o generado dinámicamente en `app/robots.ts`).
2. Ubicá y mostrame `sitemap.xml` / `app/sitemap.ts`. Verificá que incluya todas las rutas indexables reales (home, ecosistema, deportistas, profesionales, los 6 pilares) y que no incluya rutas privadas/de aplicación.
3. Revisá si existe `next.config.js/ts` con configuración de `images`, `redirects`, `rewrites` o `headers` que puedan afectar indexación o rendimiento.
4. Confirmá dominio preferido (con/sin `www`), consistencia de barra final en URLs, y si hay canonical tags correctos por ruta (via `generateMetadata` o `<link rel="canonical">`).

### Fase B — Renderizado y rendimiento
5. Determiná el tipo de renderizado real por ruta (App Router: ¿son Server Components por default, hay `'use client'` innecesario en componentes que podrían ser server-rendered?). Confirmá que el contenido principal de texto llega en el HTML inicial (no depende de hidratación para ser legible por un crawler).
6. Revisá la configuración de `next/image`: buscá el `quality` usado (la auditoría externa detectó `q=100` en las imágenes servidas — confirmá si es config global o por imagen, y si es intencional). Sugerí un valor razonable (ej. 75-85) si no hay justificación de diseño para 100.
7. Revisá lazy loading de imágenes fuera del viewport inicial, uso de `next/font` para las tipografías (Bebas Neue, Barlow Condensed, Barlow) y si hay fuentes bloqueando render.
8. Si es posible ejecutar un build de producción localmente, corré `next build` y reportá el análisis de bundle/tamaño de página que Next.js expone en la salida.

### Fase C — On-page y metadatos
9. Para cada ruta pública (home, `/ecosistema-deportivo-cordoba`, `/deportistas`, `/profesionales`, y las 6 rutas de pilares: `/bienestar-deportivo-cordoba`, `/salud-deportiva-cordoba`, `/tecnologia-deportiva-cordoba`, `/market-deportivo-cordoba`, `/educacion-deportiva-cordoba`, `/eventos-deportivos-cordoba`), extraé: title, meta description, H1, H2s, y confirmá si el H1 es un eslogan de marca sin keyword (patrón detectado en las 3 páginas ya revisadas externamente).
10. Confirmá el estado real de los enlaces "Privacidad" y "Términos de uso" en el componente de footer — la auditoría externa los vio como `href="#"`.
11. Revisá alt text de imágenes en los componentes principales (¿están presentes? ¿son descriptivos o genéricos tipo "image1"?).

### Fase D — Datos estructurados
12. Buscá si existe algún `<script type="application/ld+json">` en el código (layout raíz, componentes de página, o alguna librería de schema). Si no existe, confirmalo explícitamente — es un hallazgo, no una omisión tuya.
13. Si existe, validá la sintaxis y decime qué tipos de schema.org están implementados.

### Fase E — Analítica y medición
14. Confirmá si hay Google Analytics 4, Google Tag Manager, o algún tracking de eventos implementado (buscá `gtag`, `next/script` con GA, o el SDK correspondiente).
15. Revisá cómo están implementados los CTAs de WhatsApp ("Empezar por WhatsApp", "Postularme como profesional") — ¿disparan algún evento medible antes de redirigir, o es un link directo sin tracking?

---

## 4. Reglas obligatorias (no negociables)

- **No inventes hallazgos.** Si algo no se puede verificar con el código disponible, decilo explícitamente: "No pude verificar X con el acceso actual" — igual que hicimos en la auditoría externa.
- **Seguí Spec-Driven Development (SDD):** esto es una auditoría, que es en sí misma la fase de spec. No toques código de producción en esta pasada.
- **No premature abstractions:** cuando propongas soluciones, proponé la más simple que resuelva el problema real detectado, no una arquitectura genérica para casos hipotéticos.
- **No cambies identidad visual** (paleta, logo, tipografías, motivo de tres líneas, huella) sin justificarlo y avisar antes — ninguno de los hallazgos de esta auditoría lo requiere.
- **No elimines funcionalidad existente.**
- Cada hallazgo que reportes debe tener: archivo/ruta afectada, evidencia concreta (fragmento de código o config), problema, severidad (crítico/alto/medio/bajo), y solución propuesta con ejemplo concreto.
- Diferenciá siempre: dato comprobado en el código vs. inferencia vs. recomendación.

---

## 5. Entregable esperado de esta fase

Creá un archivo `docs/SEO_GEO_AUDIT_TECNICO.md` (o el path de docs que uses en el proyecto) con:

1. **Resumen ejecutivo técnico** — 5-8 líneas, qué confirma y qué corrige de la sección 2 de este prompt.
2. **Tabla de hallazgos** con las columnas: Archivo/Ruta, Hallazgo, Evidencia, Severidad, Solución propuesta.
3. **Confirmación o corrección de la hipótesis del CTR 0% en marca** (sección 2.1/2.2): ¿hay algo en el código (title, meta description, favicon, OG image) que pueda estar generando un snippet confuso o poco distintivo en la SERP?
4. **Lista priorizada de cambios**, ordenada igual que el roadmap ya acordado con Manuel:
   - **Prioridad 1 (esta semana):** Privacidad/Términos reales, diagnóstico del snippet de marca, H2 con keyword real debajo de cada H1, Google Business Profile (esto último es fuera de código, solo mencionalo).
   - **Prioridad 2 (2-4 semanas):** FAQ visible en texto plano por página, JSON-LD (Organization + WebSite como mínimo, ProfilePage para profesionales si aplica), tracking de eventos en CTAs de WhatsApp.
   - **Prioridad 3 (1-3 meses):** contenido de autoridad temática por pilar, revisión de performance con Core Web Vitals reales una vez optimizadas imágenes.
5. **Sección final: "Qué falta para completar la auditoría"** — igual que hicimos afuera, listá qué accesos o decisiones de Manuel siguen pendientes (ej.: confirmar si ya existe GBP, decidir contenido de Privacidad/Términos, etc.).

No implementes nada de la lista de la sección 4 todavía. Cuando Manuel apruebe el archivo `SEO_GEO_AUDIT_TECNICO.md`, create una rama separada (ej. `seo-geo-fase-1`) y arrancá SOLO por Prioridad 1, un cambio a la vez, con verificación de build entre cada uno.
