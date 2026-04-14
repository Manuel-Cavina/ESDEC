# ESDEC — Elite Sports Development
## Contexto para Codex

---

## Qué es este proyecto

Landing page estratégica del **MVP 0** de ESDEC. No es una app funcional — es una pieza de posicionamiento, narrativa y validación conceptual. Sin registro de usuarios, sin base de datos, sin auth. El objetivo es instalar una idea clara en la mente del deportista amateur:

> "El futuro del deportista no se improvisa, se construye."

---

## Stack tecnológico

- **Next.js 14** — App Router
- **TypeScript** — strict mode
- **Tailwind CSS** — utility-first, con tokens custom en `tailwind.config.ts`
- **Sin auth · Sin DB · Sin backend**

---

## Estructura de carpetas

```
esdec-landing/
├── app/
│   ├── page.tsx          ← orquestador de la landing (importa todas las sections)
│   ├── layout.tsx        ← fonts, meta, OG tags, viewport
│   ├── sitemap.ts
│   └── robots.ts
├── sections/             ← cada sección narrativa de la landing
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── EcosystemSection.tsx
│   ├── EmotionalSection.tsx
│   ├── ProblemSection.tsx
│   └── FootprintSection.tsx
├── components/
│   ├── ui/               ← Button, Badge (piezas atómicas)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ScrollReveal.tsx  ← wrapper IntersectionObserver para animaciones
│   ├── FingerprintSVG.tsx ← la huella SVG reutilizable
│   └── AthleteCard.tsx   ← card flotante del hero con tilt 3D
├── content/
│   └── landing.ts        ← TODO el copy separado de los componentes
├── lib/
│   ├── utils.ts          ← cn() helper (clsx + tailwind-merge)
│   ├── analytics.ts      ← GA4 + Meta Pixel helpers
│   └── constants.ts      ← valores fijos del proyecto
└── styles/
    └── globals.css       ← CSS vars de ambos temas + estilos base
```

---

## Regla crítica de arquitectura

**Todo el copy vive en `content/landing.ts`.**
Los componentes no tienen texto hardcodeado. Siempre importar desde `@/content/landing`.

```ts
// ✅ Correcto
import { HERO } from "@/content/landing";
<h1>{HERO.headlineLine1}</h1>

// ❌ Incorrecto
<h1>El futuro del deportista</h1>
```

Esto permite iterar mensajes, hacer A/B testing y escalar sin tocar componentes.

---

## Identidad visual

### Logo
Tres líneas horizontales escalonadas + texto "ESDEC" en Barlow Condensed 900.
Las líneas **son** la abstracción de la huella digital — mismo ADN en distinta escala.

```
━━━━━━━━━━━━━━━━━━━━━━  (22px)
  ━━━━━━━━━━━━━━━━  (16px)
      ━━━━━━━━  (11px)
```

### Huella SVG
SVG de líneas concéntricas puras. Sin puntos de circuito, sin fondo, sin ruido.
Se define una vez en `<symbol id="fp">` y se instancia con `<use href="#fp">`.
Se colorea via CSS vars:
- `--fps` → stroke color de las líneas
- `--fpg` → fill del glow interior

### Tipografía
| Rol | Fuente |
|-----|--------|
| Display headlines grandes | Bebas Neue |
| Headlines h1 hero | Barlow Condensed 900 |
| Subtítulos, labels, CTAs | Barlow Condensed 700–900 |
| Body, nav, formularios | Barlow 300–600 |

En Tailwind: `font-display`, `font-condensed`, `font-sans`

---

## Sistema de temas

### Modo Claro (default) — Azul eléctrico
Inspirado en el look del Instagram de ESDEC. Fondo azul vibrante, texto blanco.

| Variable | Valor |
|----------|-------|
| `--bg` | `#1556d4` |
| `--bg2` | `#1245b8` |
| `--p1` (acento celeste) | `#5ac8ff` |
| `--p2` (acento verde) | `#7de8a8` |
| `--t1` | `#FFFFFF` |
| `--t2` | `rgba(255,255,255,0.75)` |
| `--btn-bg` | `#5ac8ff` |
| `--btn-t` | `#0c2d7a` |

### Modo Oscuro — Navy profundo
| Variable | Valor |
|----------|-------|
| `--bg` | `#001A33` |
| `--bg2` | `#012547` |
| `--p1` (azul ESDEC) | `#0580D3` |
| `--p2` (verde volt) | `#0CD25E` |
| `--t1` | `#E8F0FC` |
| `--t2` | `#7A9EC4` |
| `--btn-bg` | `#0CD25E` |
| `--btn-t` | `#001A33` |

El toggle está en la Navbar. La clase `dark` va en `<html>`. Se persiste en `localStorage` con key `esdec-theme`.

---

## Animaciones

Todos los keyframes están definidos en `tailwind.config.ts` y disponibles como clases `animate-*`.

| Animación | Clase | Descripción |
|-----------|-------|-------------|
| Liquid background | `animate-liquid-bg` | Gradiente del hero se mueve en loop 12s |
| Huella flota | `animate-fp-float` | Float suave + rotación leve |
| Huella dibujada | via JS en `FingerprintSVG` | stroke-dashoffset al montar |
| Líneas del logo | `animate-line-draw` | Se extienden de 0 a `--target` |
| Headline stamp | `animate-stamp` | Scale + blur → normal, por palabra |
| Glitch headline | `animate-glitch` | Distorsión horizontal cada 7s |
| Fade up | `animate-fade-up` | Entrada genérica con opacity+translateY |
| Card flota | `animate-card-float` | Float 3D suave en el hero |
| Tilt 3D | via JS en `AthleteCard` | rotateX/Y según posición del mouse |
| Spring slide | via JS en `AboutSection` | MVV rows entran desde la derecha |
| Cascade | `ScrollReveal cascade` | Hijos entran escalonados |
| Marquee | `animate-marquee` | Scroll infinito (deportes) |
| Scan line | `animate-scan` | Línea recorre grid de problemas |
| Wire draw | `animate-wire-draw` | Línea del journey se dibuja |
| Heartbeat | `animate-heartbeat` | Huella late en el CTA |
| Orbit | CSS custom | Satélites giran alrededor de la huella |
| Wipe mask | `animate-wipe-mask` | Clip-path horizontal (frases) |
| Slot roll | `animate-slot-roll` | Contador tipo slot machine |
| Ripple modo | `.mode-ripple.go` | Círculo se expande al cambiar tema |
| Ping dot | `animate-ping-dot` | Status "Disponible" en specialist cards |

---

## Las 6 secciones — orden narrativo

El orden no es arbitrario — sigue la lógica psicológica del MVP 0:
**impacto → comprensión → amplitud → emoción → diagnóstico → acción**

### 1. HeroSection `#hero`
- Liquid background azul + dot grid overlay
- Huella SVG flotante que se dibuja al cargar
- Headline "El futuro del deportista no se improvisa, se Construye." (Barlow Condensed 900)
- 3 líneas del logo como transición antes del headline
- Glitch loop en el headline
- Pillar chips: Bienestar · Salud · Tecnología · Educación · Eventos
- Athlete card flotante con tilt 3D (Maxi R., Running, barras de progreso animadas)
- 2 CTAs: "Empezá ahora →" y "Conocer ESDEC"
- Stats bar al final: 8+ · 247+ · 1° · 24/7

### 2. AboutSection `#about`
- Grid izq/der en desktop, columna en mobile
- Izquierda: headline display + mvv rows (Visión/Misión/Objetivo) con spring slide desde derecha
- Derecha: 3 val-cards con cascade (Integración total · Comunidad real · Escala global)
- Cada val-card tiene las 3 líneas de la marca como acento + accent line en hover

### 3. EcosystemSection `#ecosystem`
- Marquee infinito de deportes (pausa en hover)
- Grid 3×2 de especialistas con flip cascade
- En hover de cada card: huella SVG aparece desde esquina + accent line desde izquierda
- Tags Core/Plus

### 4. EmotionalSection `#emotional`
- Huella SVG grande centrada como fondo (50% opacidad)
- Quote central: "La diferencia entre lo posible y lo imposible reside en la **estructura** que tenés hoy."
- 6 frases satélite que orbitan permanentemente a velocidades distintas (25s, 32s, 40s, 50s, 28s, 36s)
- Cada satélite contra-rota para mantenerse legible

### 5. ProblemSection `#problem`
- Header: headline + blockquote del diagnóstico
- Grid 4 problemas con scan line que los recorre en loop
- Journey 5 pasos: Perfil → Equipo → Plan → Evolución → Escala
- La línea de conexión del journey se dibuja (wire-draw) al entrar al viewport

### 6. FootprintSection `#footprint`
- Split izq/der
- Izquierda: logo se construye pieza a pieza al entrar, huella late (heartbeat), headline "EMPEZÁ A CONSTRUIR. HOY.", features en slide-in
- Derecha: contador 247 (animado), formulario (nombre + email + deporte como emoji buttons), CTA principal
- Particle burst al hacer submit exitoso
- Mensaje de éxito integrado (sin redirect)

---

## Copy — mensajes rectores

Usar estos mensajes en las secciones correspondientes. **No inventar frases nuevas** sin consultar:

- "No te falta esfuerzo. Te falta estructura."
- "El talento sin sistema se dispersa."
- "El futuro del deportista no se improvisa. Se construye."
- "ESDEC no viene a exigirte más; viene a ayudarte a crecer mejor."
- "La diferencia entre lo posible y lo imposible reside en la estructura que tenés hoy."

**Sobre la IA:** No mencionar "inteligencia artificial" de forma prominente. Si aparece, usar "motor inteligente de acompañamiento" o "Asistente Inteligente ESDEC" en tono muy sutil.

---

## Componentes reutilizables clave

### `FingerprintSVG`
```tsx
<FingerprintSVG
  animate={true}        // dibuja las líneas al montar
  className="w-full"
  strokeOpacity={0.5}
/>
// Colorear con CSS vars en el wrapper:
// [--fps:rgba(90,200,255,0.22)]  ← stroke
// [--fpg:rgba(90,200,255,0.06)]  ← glow
```

### `ScrollReveal`
```tsx
<ScrollReveal direction="up" delay={160}>
  <p>Se anima al entrar al viewport</p>
</ScrollReveal>

<ScrollReveal cascade cascadeDelay={80}>
  <Card />
  <Card />
  <Card />
</ScrollReveal>
```

### `cn()` helper
```ts
import { cn } from "@/lib/utils";
// clsx + tailwind-merge
```

---

## Convenciones de código

- Todos los componentes con `"use client"` si usan hooks o eventos
- Comentario de cabecera en cada archivo con nombre, ruta y descripción
- Props siempre tipadas con `interface`
- No usar `any`
- Tailwind como utilidades, sin CSS modules ni styled-components
- Para estilos que no se pueden hacer con Tailwind → CSS vars en `globals.css`
- Animaciones complejas (IntersectionObserver, mouse events) → JS en `useEffect`

---

## Analytics — MVP 0

Implementar con eventos básicos en `lib/analytics.ts`:
- `page_view` — automático con GA4
- `cta_click` — en cada botón "Empezá ahora"
- `form_submit` — al enviar el formulario del footprint
- `scroll_depth` — 25%, 50%, 75%, 100%
- `section_view` — al entrar a cada sección (IntersectionObserver)

Herramientas: GA4 · Microsoft Clarity (mapas de calor gratis) · Meta Pixel

---

## Comandos frecuentes

```bash
npm run dev          # desarrollo local
npm run build        # build de producción
npm run type-check   # tsc --noEmit (verificar tipos sin compilar)
npm run lint         # eslint
```

---

## Lo que NO hacer

- ❌ No hardcodear texto en los componentes (todo en `content/landing.ts`)
- ❌ No mencionar "inteligencia artificial" de forma prominente
- ❌ No agregar registro de usuarios ni funcionalidades operativas (es MVP 0)
- ❌ No usar librerías de animación externas (Framer Motion, GSAP) — todo con CSS keyframes + JS nativo
- ❌ No romper el sistema de temas: siempre usar `var(--xxx)` para colores, nunca hardcodear hex en componentes
- ❌ No crear nuevos archivos fuera de la estructura definida sin justificación

---

*Documento de contexto para Codex — actualizar cuando cambie la arquitectura o las decisiones de diseño.*