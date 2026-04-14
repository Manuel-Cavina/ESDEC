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

// ── HERO SPLIT (pantalla de selección de audiencia) ──────────────────────────
export const HERO_SPLIT = {
  topTagline: "ELITE SPORTS DEVELOPMENT · 2025",
  dividerText: "ELEGÍ TU CAMINO",

  left: {
    eyebrow: "PARA EL DEPORTISTA",
    headlinePre: "SOY",
    headlineAccent: "DEPORTISTA.",
    body: "Tengo el esfuerzo. Me falta el sistema que lo convierte en resultados reales.",
    cta: "SOY DEPORTISTA →",
    image: "/images/athletes/Atleta_1.png",
  },

  right: {
    eyebrow: "PARA EL PROFESIONAL",
    headlinePre: "SOY",
    headlineAccent: "PROFESIONAL.",
    body: "Tengo el conocimiento. ESDEC es donde mi trabajo genera impacto real.",
    cta: "SOY PROFESIONAL →",
    image: "/images/lifestyle/Medico1.png",
  },
} as const;

// ── STATS BAR ─────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "8+",   label: "Especialidades"    },
  { value: "247+", label: "En el sistema"     },
  { value: "1°",   label: "Ecosistema integral" },
  { value: "24/7", label: "Acompañamiento"    },
] as const;

// ── ABOUT — DEPORTISTA ────────────────────────────────────────────────────────
export const ABOUT = {
  eyebrow: "Por qué ESDEC existe",
  manifestoPre:    "NO TE FALTA",
  manifestoAccent: "VOLUNTAD.",
  manifestoPost:   "TE FALTA EL SISTEMA.",
  body: "El deportista amateur entrena solo, decide a ciegas y crece por intuición. ESDEC existe para cambiar eso — un sistema que pone a los mejores profesionales a trabajar en sintonía alrededor tuyo.",

  benefits: [
    {
      icon: "⚡",
      label: "Resultados reales",
      title: "Del esfuerzo aislado al progreso medible",
      description: "Cada sesión, cada comida, cada recuperación — conectadas en un sistema que muestra tu avance real.",
    },
    {
      icon: "🎯",
      label: "Plan coordinado",
      title: "Un equipo trabajando en sintonía",
      description: "Tu nutricionista, coach y kinesiólogo se hablan entre sí. Tu plan no tiene fisuras.",
    },
    {
      icon: "📊",
      label: "Decisiones con datos",
      title: "Sin más adivinar",
      description: "Métricas reales que guían cada decisión. El progreso deja de ser una sensación.",
    },
    {
      icon: "🚀",
      label: "Escala personal",
      title: "El sistema que crece con vos",
      description: "A medida que avanzás, el sistema se adapta. No hay techo cuando tenés estructura.",
    },
  ],

  quote: "Construimos ESDEC porque sabemos lo que es entrenar sin sistema — y decidimos que no debería ser así.",
  quoteAuthor: "El equipo ESDEC · Córdoba",
} as const;

// ── ABOUT — PROFESIONAL ───────────────────────────────────────────────────────
export const PROFESSIONAL_ABOUT = {
  eyebrow: "Tu lugar en el sistema",
  manifestoPre:    "TU CONOCIMIENTO",
  manifestoAccent: "YA ES SUFICIENTE.",
  manifestoPost:   "FALTA LA PLATAFORMA.",
  body: "El profesional del deporte tiene la formación y la experiencia. Lo que le falta es un sistema que conecte ese conocimiento con quienes más lo necesitan — y ESDEC es exactamente eso.",

  benefits: [
    {
      icon: "🎯",
      label: "Impacto amplificado",
      title: "Tu expertise llega más lejos",
      description: "ESDEC te conecta con los deportistas que necesitan exactamente lo que ofrecés, sin intermediarios.",
    },
    {
      icon: "🤝",
      label: "Red coordinada",
      title: "Trabajás con otros de primer nivel",
      description: "Derivaciones, co-coordinación y comunidad real con otros profesionales del ecosistema.",
    },
    {
      icon: "📈",
      label: "Crecimiento medible",
      title: "Tu impacto en números reales",
      description: "Carteras de atletas, historial de progreso y métricas que hacen visible el valor que generás.",
    },
    {
      icon: "⚙️",
      label: "Estructura lista",
      title: "Sin construir desde cero",
      description: "La infraestructura, los procesos y las herramientas ya están. Vos llegás a ejercer, no a armar.",
    },
  ],

  quote: "ESDEC no es solo una plataforma — es la estructura que el profesional del deporte siempre necesitó para ejercer a escala.",
  quoteAuthor: "El equipo ESDEC · Córdoba",
} as const;

// ── EMOTIONAL — DEPORTISTA ────────────────────────────────────────────────────
// (ver abajo — EMOTIONAL)

// ── EMOTIONAL — PROFESIONAL ───────────────────────────────────────────────────
export const PROFESSIONAL_EMOTIONAL = {
  beats: [
    {
      eyebrow: "El profesional que ya sabe",
      headlinePre: "EL CONOCIMIENTO",
      headlineAccent: "YA LO TENÉS.",
      headlineSub: "",
      body: "Años de formación, experiencia real y resultados comprobados. Pero entre lo que sabés y el impacto que podés generar existe una brecha — y esa brecha tiene nombre.",
    },
    {
      eyebrow: "El problema que limita tu alcance",
      headlinePre: "SIN SISTEMA,",
      headlineAccent: "TU IMPACTO SE FRAGMENTA.",
      headlineSub: "",
      body: "Trabajás de forma aislada, sin herramientas para coordinar con otros especialistas, sin visibilidad real y sin estructura para escalar lo que hacés.",
    },
    {
      eyebrow: "Tu lugar en ESDEC",
      headlinePre: "ESDEC TE DA",
      headlineAccent: "EL SISTEMA.",
      headlineSub: "EL QUE HACE QUE TU TRABAJO VALGA LO QUE VALE.",
      body: "Una plataforma donde tu expertise se conecta con deportistas reales, con otros profesionales y con las herramientas para que tu trabajo genere impacto sostenible.",
    },
  ],
} as const;

// ── PROBLEM — PROFESIONAL ─────────────────────────────────────────────────────
export const PROFESSIONAL_PROBLEM = {
  eyebrow: "El diagnóstico",
  headline: "EL PROFESIONAL",
  headlineAccent: "MERECE MÁS.",

  quote:
    '"El profesional del deporte tiene el conocimiento. Lo que le falta es un <strong>sistema que conecte ese conocimiento</strong> con quienes más lo necesitan."',

  problems: [
    {
      number: "01",
      title: "Visibilidad fragmentada",
      description:
        "Tu trabajo existe, pero no tiene el canal correcto para llegar a los deportistas que necesitan exactamente lo que ofrecés.",
    },
    {
      number: "02",
      title: "Sin red coordinada",
      description:
        "Derivar a otro profesional, co-coordinar un plan o hacer seguimiento conjunto es difícil sin infraestructura compartida.",
    },
    {
      number: "03",
      title: "Trabajo sin métricas",
      description:
        "¿Cuántos deportistas acompañaste este año? ¿Cuál fue el progreso medible? Sin datos, el impacto real queda invisible.",
    },
    {
      number: "04",
      title: "Escala imposible sin estructura",
      description:
        "Crecer como profesional del deporte requiere un sistema. Sin él, cada cliente nuevo suma carga, no escala.",
    },
  ],

  pivotPre:       "No te falta",
  pivotAccent1:   "conocimiento.",
  pivotConnector: "Te falta",
  pivotAccent2:   "estructura.",

  journeyLabel:          "Cómo funciona ESDEC para vos",
  journeyHeadlinePre:    "TU CAMINO,",
  journeyHeadlineAccent: "PASO A PASO.",
  journeyFingerLabel:    "Tu plataforma ESDEC",

  journey: [
    { step: "1", title: "Tu perfil",     description: "Especialidad, experiencia y objetivos profesionales mapeados." },
    { step: "2", title: "Tu cartera",    description: "Deportistas asignados según tu especialidad y disponibilidad." },
    { step: "3", title: "Coordinación",  description: "Trabajás junto a otros especialistas en un plan integrado." },
    { step: "4", title: "Seguimiento",   description: "Métricas reales del progreso de cada atleta que acompañás." },
    { step: "5", title: "Escala",        description: "Más deportistas, más impacto. El sistema crece con vos." },
  ],

  journeyCta:     "Sumate como profesional",
  journeyCtaHref: "#footprint",
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
      image: "/images/lifestyle/Correr_lluvia_1.jpg",
    },
    {
      number: "02",
      icon: "🥗",
      role: "Rendimiento",
      title: "Nutrición Deportiva",
      description:
        "Planes sincronizados con tu entrenamiento real. Ajuste continuo basado en datos.",
      tag: "Core",
      image: "/images/lifestyle/Deportes_1.jpg",
    },
    {
      number: "03",
      icon: "⚕️",
      role: "Prevención",
      title: "Kinesiología",
      description:
        "Prevención de lesiones y biomecánica. Tu cuerpo como activo a proteger.",
      tag: "Core",
      image: "/images/lifestyle/Medico1.png",
    },
    {
      number: "04",
      icon: "🏋️",
      role: "Técnico",
      title: "Coaching y Entreno",
      description:
        "Coaches especializados en tu deporte con metodología basada en datos.",
      tag: "Core",
      image: "/images/athletes/Atleta_1.png",
    },
    {
      number: "05",
      icon: "💆",
      role: "Recuperación",
      title: "Masajes y Recovery",
      description:
        "Recuperación activa integrada en el plan. Parte del rendimiento, no extra.",
      tag: "Plus",
      image: "/images/lifestyle/EstilodeVida.jpg",
    },
    {
      number: "06",
      icon: "🌟",
      role: "Crecimiento",
      title: "Marca Personal",
      description:
        "Identidad deportiva, presencia digital y proyección hacia oportunidades reales.",
      tag: "Plus",
      image: "/images/lifestyle/Deportes_2.jpg",
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
      headlineSub: "",
      body: "La dedicación está. El sacrificio está. Pero entre tu esfuerzo y los resultados que merecés existe una brecha — y esa brecha tiene nombre.",
    },
    {
      eyebrow: "El problema que frena tu crecimiento",
      headlinePre: "SIN ESTRUCTURA,",
      headlineAccent: "EL TALENTO SE DISPERSA.",
      headlineSub: "",
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

  journeyFingerLabel: "Tu estructura ESDEC",

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
      label: "Nosotros",
      items: [
        { label: "Quiénes somos", href: "#about",      icon: "🏢", description: "La visión y misión detrás de ESDEC"    },
        { label: "El problema",   href: "#problem",    icon: "🔍", description: "Por qué el deporte amateur necesita un sistema" },
        { label: "Nuestra visión",href: "#emotional",  icon: "🎯", description: "El futuro que construimos juntos"      },
      ],
    },
    {
      label: "Profesionales",
      href: "#ecosystem",
    },
    {
      label: "Deportista",
      href: "#footprint",
    },
    {
      label: "Comunidad",
      href: "#community",
    },
  ],
  cta: "Sumate →",
  ctaHref: "#footprint",
} as const;

// ── COMMUNITY ─────────────────────────────────────────────────────────────────
export const COMMUNITY = {
  eyebrow: "Comunidad ESDEC · Córdoba",
  headline: "ESTA ES",
  headlineAccent: "NUESTRA COMUNIDAD.",

  stats: [
    { value: "247+", label: "En el sistema"       },
    { value: "8+",   label: "Deportes activos"    },
    { value: "24/7", label: "Acompañamiento real" },
  ],

  // Fotos del equipo — /public/images/team/
  photos: [
    {
      src: "/images/team/Equipo_Escalinatas.png",
      alt: "Equipo ESDEC en las escalinatas de Córdoba",
      label: "El equipo",
    },
    {
      src: "/images/team/Equipo_G7.png",
      alt: "Equipo ESDEC — grupo de trabajo",
      label: "ESDEC G7",
    },
  ],

  quote: {
    text: "Construimos ESDEC porque sabemos lo que es entrenar sin sistema. Queremos que ningún deportista pase por eso.",
    author: "El equipo ESDEC",
    location: "Córdoba, Argentina",
  },
} as const;

// ── FOOTER ────────────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: "El sistema que construye deportistas.",

  groups: [
    {
      label: "La plataforma",
      links: [
        { label: "Profesionales",   href: "#ecosystem" },
        { label: "Cómo funciona",   href: "#problem"   },
        { label: "Empezá ahora",    href: "#footprint" },
      ],
    },
    {
      label: "Comunidad",
      links: [
        { label: "Nuestro equipo",  href: "#community" },
        { label: "Nuestra visión",  href: "#emotional"  },
        { label: "Quiénes somos",   href: "#about"      },
      ],
    },
  ],

  legal: [
    { label: "Privacidad",          href: "#" },
    { label: "Términos de uso",     href: "#" },
  ],

  social: [
    { label: "Instagram", href: "https://instagram.com/esdec.ok",              icon: "ig"  },
    { label: "TikTok",    href: "https://tiktok.com/@esdec",                   icon: "tt"  },
    { label: "Twitter/X", href: "https://x.com/esdec",                         icon: "x"   },
    { label: "WhatsApp",  href: "https://wa.me/5493516000000",                 icon: "wa"  },
  ],

  contact: {
    email:    "contacto@esdec.com.ar",
    location: "Córdoba · Argentina",
    phone:    "+54 9 351 600-0000",
  },

  location: "Córdoba · Argentina",
  copy: `© ${new Date().getFullYear()} ESDEC — Elite Sports Development. Todos los derechos reservados.`,
} as const;

// ── FOOTPRINT MODAL — cuestionario de incorporación ──────────────────────────
export const FOOTPRINT_MODAL = {
  title:    "EMPEZÁ A CONSTRUIR",
  subtitle: "Contanos sobre vos para conectarte con el sistema que te corresponde.",

  steps: [
    {
      id: "name",
      question: "¿Cómo te llamás?",
      type: "text" as const,
      placeholder: "Tu nombre",
    },
    {
      id: "sport",
      question: "¿Cuál es tu deporte?",
      type: "options" as const,
      options: ["⚽ Fútbol", "🏃 Running", "🏉 Rugby", "🏒 Hockey", "🏀 Básquet", "🎾 Tenis", "🏊 Natación", "🚴 Ciclismo", "🥊 Boxeo", "🤸 Crossfit", "🤼 Artes marciales", "🌟 Otro"],
    },
    {
      id: "challenge",
      question: "¿Cuál es tu mayor desafío hoy?",
      type: "options" as const,
      options: ["📈 Mejorar mi rendimiento", "🥗 Nutrición y alimentación", "🦴 Prevención de lesiones", "🧠 Mentalidad y motivación", "📋 No tengo un plan claro", "⚡ Todo a la vez"],
    },
    {
      id: "experience",
      question: "¿Cuánto tiempo llevás entrenando?",
      type: "options" as const,
      options: ["🌱 Menos de 1 año", "📅 1 a 3 años", "💪 3 a 5 años", "🏆 Más de 5 años"],
    },
    {
      id: "contact",
      question: "¿Cómo te contactamos?",
      type: "contact" as const,
      placeholder: "tu@email.com o número de WhatsApp",
    },
  ],

  ctaLabel:    "Enviar mi perfil →",
  backLabel:   "Volver",
  successTitle: "¡ESTÁS ADENTRO!",
  successBody:  "Recibimos tu perfil. En menos de 48hs un especialista ESDEC se va a poner en contacto con vos.",

  // WhatsApp business number (reemplazar con el real)
  whatsappNumber: "5493516000000",
  whatsappIntro:  "Hola ESDEC, quiero sumarme al sistema.",
} as const;
