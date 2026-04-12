// ─────────────────────────────────────────────────────────────────────────────
// content/landing.ts
// Todo el copy de la landing separado de los componentes.
// Iterá aquí sin tocar ningún Section.
// ─────────────────────────────────────────────────────────────────────────────

// ── GLOBAL ───────────────────────────────────────────────────────────────────
export const BRAND = {
  name: "ESDEC",
  fullName: "Elite Sports Development",
  tagline: "Elite Sports Development.",
  location: "Córdoba · Argentina",
  year: "2025",
} as const;

// ── HERO ─────────────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Córdoba · Elite Sports Development · 2025",

  // Headline partido en líneas para controlar el salto tipográfico
  headlineLine1: "El futuro del",
  headlineLine2: "deportista no",
  headlineLine3: "se improvisa,",

  // La línea de acento (color p1)
  headlineAccent: "se Construye.",

  // Subtexto
  body: "ESDEC es el sistema que te acompaña <strong>día y noche</strong> para que te conviertas en el deportista que siempre quisiste ser. Especialistas coordinados, datos reales y comunidad — todo en un lugar.",

  // Pillars (chips)
  pillars: [
    "Bienestar",
    "Salud",
    "Tecnología",
    "Educación",
    "Eventos",
  ],

  // CTAs
  ctaPrimary: "Empezá ahora",
  ctaSecondary: "Conocer ESDEC",

  // Athlete card (side card)
  card: {
    name: "Maxi R.",
    sport: "Running",
    level: "Nivel 2",
    location: "Amateur · Parque Sarmiento, Córdoba",
    initials: "M",
    bars: [
      { label: "Rendimiento", value: 62 },
      { label: "Nutrición",   value: 45 },
      { label: "Bienestar",   value: 70 },
    ],
    specialists: [
      { name: "Psicólogo",     icon: "🧠", available: true },
      { name: "Nutricionista", icon: "🥗", available: true },
      { name: "Kinesiólogo",   icon: "⚕️", available: true },
      { name: "Coach",         icon: "🏋️", available: true },
    ],
  },
} as const;

// ── STATS BAR ─────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "8+",   label: "Especialidades"    },
  { value: "247+", label: "En el sistema"     },
  { value: "1°",   label: "Ecosistema integral" },
  { value: "24/7", label: "Acompañamiento"    },
] as const;

// ── ABOUT (Misión / Visión) ────────────────────────────────────────────────────
export const ABOUT = {
  eyebrow: "Quiénes somos",
  headline: ["UN", "SISTEMA.", "UNA META."],
  headlineAccentIndex: 1, // "SISTEMA." va con gradiente

  mvv: [
    {
      tag: "Visión",
      text: "Convertirnos en el <strong>ecosistema deportivo de referencia mundial</strong>, integrando multiservicios, comunidad, educación y tecnología en una sola estructura inteligente.",
    },
    {
      tag: "Misión",
      text: "Organizar y conectar el deporte dentro de un <strong>sistema accesible y escalable</strong>, que permita tomar decisiones basadas en datos y generar impacto real en el ecosistema deportivo.",
    },
    {
      tag: "Objetivo",
      text: "Ser el primer punto de acceso del deportista hacia un <strong>plan integral y coordinado</strong> — nutrición, preparación física, salud mental y seguimiento profesional en un solo lugar.",
    },
  ],

  valuesEyebrow: "Lo que nos define",
  values: [
    {
      title: "Integración total",
      description:
        "Todos los especialistas coordinados en una misma estructura. Sin silos, sin fricciones, sin intermediarios.",
    },
    {
      title: "Comunidad real",
      description:
        "Conexiones auténticas entre deportistas, profesionales y el ecosistema. Oportunidades concretas de crecimiento.",
    },
    {
      title: "Escala global",
      description:
        "Modelo replicable y sostenible diseñado para expandirse sin perder la calidad del acompañamiento individual.",
    },
  ],
} as const;

// ── ECOSYSTEM (Deportes + Especialistas) ────────────────────────────────────
export const ECOSYSTEM = {
  eyebrow: "Cobertura global",
  headline: "TU DEPORTE.",
  headlineAccent: "NUESTRO SISTEMA.",
  body: "Cualquier deporte, el mismo sistema de alto rendimiento. Sin excepciones.",

  sports: [
    "⚽ Fútbol",
    "🏃 Running",
    "🏒 Hockey",
    "🏉 Rugby",
    "🏀 Básquet",
    "🎾 Tenis",
    "🏊 Natación",
    "🚴 Ciclismo",
    "🥊 Boxeo",
    "🤸 Crossfit",
    "🤼 Artes marciales",
    "⛷️ Esquí",
    "🏄 Surf",
    "🧘 Yoga deportivo",
  ],

  specialistsEyebrow: "El equipo que necesitás",
  specialists: [
    {
      number: "01",
      icon: "🧠",
      role: "Salud mental",
      title: "Psicología Deportiva",
      description:
        "Mentalidad, gestión del estrés y resiliencia. Pilar central del plan — no un extra opcional.",
      tag: "Core",
    },
    {
      number: "02",
      icon: "🥗",
      role: "Rendimiento",
      title: "Nutrición Deportiva",
      description:
        "Planes sincronizados con tu entrenamiento real. Ajuste continuo basado en datos.",
      tag: "Core",
    },
    {
      number: "03",
      icon: "⚕️",
      role: "Prevención",
      title: "Kinesiología",
      description:
        "Prevención de lesiones y biomecánica. Tu cuerpo como activo a proteger.",
      tag: "Core",
    },
    {
      number: "04",
      icon: "🏋️",
      role: "Técnico",
      title: "Coaching y Entreno",
      description:
        "Coaches especializados en tu deporte con metodología basada en datos.",
      tag: "Core",
    },
    {
      number: "05",
      icon: "💆",
      role: "Recuperación",
      title: "Masajes y Recovery",
      description:
        "Recuperación activa integrada en el plan. Parte del rendimiento, no extra.",
      tag: "Plus",
    },
    {
      number: "06",
      icon: "🌟",
      role: "Crecimiento",
      title: "Marca Personal",
      description:
        "Identidad deportiva, presencia digital y proyección hacia oportunidades reales.",
      tag: "Plus",
    },
  ],
} as const;

// ── EMOTIONAL (3 beats narrativos) ──────────────────────────────────────────
export const EMOTIONAL = {
  beats: [
    {
      eyebrow: "El atleta que ya lo da todo",
      headlinePre: "EL ESFUERZO NO",
      headlineAccent: "ES EL PROBLEMA.",
      body: "La dedicación está. El sacrificio está. Pero entre tu esfuerzo y los resultados que merecés existe una brecha — y esa brecha tiene nombre.",
    },
    {
      eyebrow: "El problema que frena tu crecimiento",
      headlinePre: "SIN ESTRUCTURA,",
      headlineAccent: "EL TALENTO SE DISPERSA.",
      body: "Sin un sistema que coordine entrenamiento, nutrición, mentalidad y evolución, cada esfuerzo vive en una isla. Sin conexión. Sin dirección.",
    },
    {
      eyebrow: "La diferencia ESDEC",
      headlinePre: "ESDEC CONSTRUYE",
      headlineAccent: "EL SISTEMA.",
      headlineSub: "EL QUE HACE QUE TU ESFUERZO VALGA.",
      body: "No más piezas sueltas. Un sistema integrado que conecta cada parte de tu desarrollo y lo dirige hacia resultados reales.",
    },
  ],
} as const;

// ── PROBLEM (Diagnóstico + Journey) ────────────────────────────────────────
export const PROBLEM = {
  eyebrow: "El diagnóstico",
  headline: "EL PROBLEMA",
  headlineAccent: "ES CLARO.",

  quote:
    "\"El deportista amateur no carece de <strong>motivación</strong>. Carece de acceso a un <strong>sistema integral</strong> que coordine su desarrollo.\"",

  problems: [
    {
      number: "01",
      title: "Especialistas dispersos",
      description:
        "Los profesionales existen pero están desconectados. Sin criterio para encontrarlos, evaluarlos ni coordinarlos entre sí.",
    },
    {
      number: "02",
      title: "Nadie coordina el plan",
      description:
        "Nutricionista, coach y kinesiólogo trabajan en paralelo sin comunicarse. El desarrollo se fragmenta y el deportista pierde el hilo.",
    },
    {
      number: "03",
      title: "Decisiones a ciegas",
      description:
        "Sin métricas no hay dirección. Cada decisión se toma por intuición — imposible distinguir progreso real de estancamiento.",
    },
    {
      number: "04",
      title: "Esfuerzo sin sistema",
      description:
        "El deportista amateur entrena sin la infraestructura que traduzca ese esfuerzo en desarrollo real y medible.",
    },
  ],

  // Pivot — mensaje rector que separa el diagnóstico de la solución
  pivotPre:        "No te falta",
  pivotAccent1:    "esfuerzo.",
  pivotConnector:  "Te falta",
  pivotAccent2:    "estructura.",

  journeyLabel: "Cómo funciona ESDEC",
  journeyHeadlinePre: "EL SISTEMA,",
  journeyHeadlineAccent: "PASO A PASO.",

  journey: [
    { step: "1", title: "Perfil",    description: "Objetivos, deporte y punto de partida mapeados." },
    { step: "2", title: "Equipo",    description: "Especialistas validados y coordinados para vos." },
    { step: "3", title: "Plan",      description: "Integral: entreno, nutrición, recuperación y mente." },
    { step: "4", title: "Evolución", description: "Seguimiento con métricas reales, ajuste continuo." },
    { step: "5", title: "Escala",    description: "Nuevos objetivos, proyección. El ciclo no termina." },
  ],

  // CTA al final del journey — evita que el flujo se corte
  journeyCta:      "Empezá a construir",
  journeyCtaHref:  "#footprint",
} as const;

// ── FOOTPRINT / CTA ──────────────────────────────────────────────────────────
export const FOOTPRINT = {
  eyebrow: "El primer paso",

  ctaHeadline: ["EMPEZÁ A", "CONSTRUIR."],
  ctaAccent: "HOY.",

  counter: 247,
  counterLabel: "Deportistas ya en el sistema",

  body: "Los primeros en sumarse acceden con beneficios exclusivos de fundadores.",

  features: [
    "Acceso prioritario al lanzamiento",
    "Precio especial de fundadores",
    "Especialista asignado en 48hs",
  ],

  form: {
    namePlaceholder: "¿Cómo te llamás?",
    emailPlaceholder: "tu@email.com",
    sportLabel: "Tu deporte",
    sports: ["⚽", "🏃", "🏉", "🏒", "🏀", "🎾"],
    ctaButton: "Asegurar mi lugar",
    disclaimer: "Sin spam · Podés darte de baja cuando quieras",
    successTitle: "¡DENTRO!",
    successBody: "Te avisamos antes del lanzamiento con acceso prioritario.",
  },
} as const;

// ── NAV ───────────────────────────────────────────────────────────────────────
// Estructura escalable: grupos con items opcionales (dropdown) o link directo.
// comingSoon: true → se renderiza dimmed, no clickeable (roadmap visual).
export const NAV = {
  groups: [
    {
      label: "La Plataforma",
      items: [
        { label: "Especialistas",  href: "#ecosystem", icon: "🏋️", description: "El equipo coordinado detrás tuyo"          },
        { label: "El sistema",     href: "#problem",   icon: "⚙️", description: "Cómo funciona ESDEC paso a paso"            },
        { label: "Mi dashboard",   href: "#footprint", icon: "📊", description: "Tu evolución en tiempo real", comingSoon: true },
        { label: "Planes",         href: "#footprint", icon: "📋", description: "Plan integral personalizado",  comingSoon: true },
      ],
    },
    {
      label: "Comunidad",
      items: [
        { label: "Deportistas",    href: "#community", icon: "👥", description: "Personas reales, resultados reales"          },
        { label: "Nuestra visión", href: "#emotional", icon: "🎯", description: "Por qué existe ESDEC"                       },
        { label: "Eventos",        href: "#footprint", icon: "📅", description: "Actividades y encuentros",     comingSoon: true },
        { label: "Historias",      href: "#footprint", icon: "⭐", description: "Casos de transformación real", comingSoon: true },
      ],
    },
    {
      // Grupo sin dropdown — link directo a la sección
      label: "Nosotros",
      href: "#about",
    },
  ],
  cta: "Sumate →",
  ctaHref: "#footprint",
} as const;

// ── COMMUNITY ─────────────────────────────────────────────────────────────────
export const COMMUNITY = {
  eyebrow: "La comunidad",
  headline: "PERSONAS REALES.",
  headlineAccent: "RESULTADOS REALES.",
  body: "Deportistas de Córdoba que ya empezaron a construir su sistema con ESDEC.",

  stats: [
    { value: "247+", label: "En el sistema"       },
    { value: "8+",   label: "Deportes activos"    },
    { value: "24/7", label: "Acompañamiento real" },
  ],

  quote: {
    text: "Antes entrenaba solo. Ahora tengo un equipo coordinado detrás y finalmente veo resultados.",
    author: "Maxi R.",
    sport:  "Running · Amateur",
  },

  // Cards de prueba social — se completan con fotos reales
  cards: [
    { name: "Lucas P.",  sport: "Ciclismo",  level: "Amateur",     src: null },
    { name: "Sofi M.",   sport: "Natación",  level: "Intermedio",  src: null },
    { name: "Rodrigo V.", sport: "Fútbol",   level: "Amateur",     src: null },
  ],
} as const;

// ── FOOTER ────────────────────────────────────────────────────────────────────
export const FOOTER = {
  links: [
    { label: "Nosotros",      href: "#about"     },
    { label: "Especialidades", href: "#ecosystem" },
    { label: "Visión",        href: "#emotional"  },
    { label: "El sistema",    href: "#problem"    },
    { label: "Sumate",        href: "#footprint"  },
  ],
  copy: `© ${new Date().getFullYear()} ESDEC — Elite Sports Development. Todos los derechos reservados.`,
} as const;
