// content/tecnologia.ts
// Copy y datos para la landing del area de Tecnologia deportiva.

export interface TecnologiaStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TecnologiaFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

export const TECNOLOGIA_HERO = {
  eyebrow: "Ecosistema ESDEC — Tecnologia deportiva",
  headlinePre: "DATOS SIN ORDEN,",
  headlineAccent: "NO SON DECISIONES.",
  keyword: "Tecnología deportiva en Córdoba, Argentina",
  body:
    "La tecnologia de ESDEC organiza seguimiento, metricas y procesos en un mismo lugar en Cordoba — para decidir con criterio, no a ciegas.",
  ctaLabel: "Ver como funciona",
  ctaHref: "#como-funciona",
  stats: [
    { label: "Datos organizados", title: "Seguimiento y metricas en un mismo lugar" },
    { label: "Sin friccion", title: "Menos planillas sueltas, mas contexto real" },
    { label: "Para los dos", title: "Pensado para deportistas y profesionales" },
  ],
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const TECNOLOGIA_FAQ = [
  {
    question: "¿Qué es la tecnología deportiva de ESDEC?",
    answer:
      "Es la capa digital de ESDEC que organiza el proceso de cada deportista en Córdoba: registra datos, mide métricas de progreso y conecta esa información con los profesionales que forman parte de tu equipo, en un mismo lugar en vez de planillas sueltas o mensajes dispersos.",
  },
  {
    question: "¿Cómo hace ESDEC el seguimiento de mi rendimiento deportivo?",
    answer:
      "Cada dato que registrás —entrenamiento, seguimiento, ajustes— entra a un mismo sistema y se organiza en una línea de tiempo, sin que tengas que armar planillas por tu cuenta. Queda visible tanto para vos como para tu equipo de profesionales.",
  },
  {
    question: "¿Los profesionales que uso pueden ver mi historial en ESDEC?",
    answer:
      "Sí. Uno de los objetivos de esta área es que tu proceso y el de tu profesional queden en el mismo contexto, para que no pierdas el hilo entre consultas ni repitas información cada vez que cambiás de especialista.",
  },
  {
    question: "¿ESDEC tiene una app?",
    answer:
      "La tecnología de ESDEC no es una app más para instalar por separado — es la capa que conecta lo que ya hacés dentro del ecosistema. Hay además una app propia en desarrollo que va a centralizar seguimiento, planes y contacto directo con tu equipo de profesionales en un mismo lugar.",
  },
  {
    question: "¿Qué datos y métricas puedo seguir con ESDEC?",
    answer:
      "Tu progreso a lo largo del tiempo, el historial ordenado de tu proceso, y alertas o recordatorios para no perderte una sesión o un ajuste. Todo pensado para que decidas con datos reales, no a ojo.",
  },
] as const;

// ─── COMO FUNCIONA ────────────────────────────────────────────────────────────

export const TECNOLOGIA_HOW_IT_WORKS = {
  eyebrow: "Como funciona",
  headline: "Orden real,",
  headlineAccent: "no otra app suelta.",
  intro:
    "La tecnologia de ESDEC no es una app mas para instalar — es la capa que conecta lo que ya haces dentro del ecosistema.",
  steps: [
    {
      id: "registras",
      number: "01",
      title: "Registras",
      description: "Tu proceso, tus datos, tu seguimiento — todo entra a un mismo sistema.",
      icon: "tecnologia",
    },
    {
      id: "organiza",
      number: "02",
      title: "Se organiza",
      description: "La informacion se ordena sola, sin planillas sueltas ni mensajes perdidos.",
      icon: "estructura",
    },
    {
      id: "conecta",
      number: "03",
      title: "Se conecta",
      description: "Tu proceso y el de tu profesional quedan en el mismo contexto.",
      icon: "equipo",
    },
    {
      id: "decidis",
      number: "04",
      title: "Decidis mejor",
      description: "Con datos reales delante, no a ojo ni por costumbre.",
      icon: "criterio",
    },
  ] as TecnologiaStep[],
};

// ─── QUE OFRECE ───────────────────────────────────────────────────────────────

export const TECNOLOGIA_OFFERINGS = {
  eyebrow: "Que ofrece",
  headline: "Herramientas,",
  headlineAccent: "no promesas.",
  intro: "Cuatro funciones concretas, pensadas para el proceso real de un deportista y de un profesional.",
  features: [
    {
      id: "seguimiento",
      icon: "progreso",
      title: "Seguimiento de metricas",
      description: "Tu progreso medido de verdad, no a ojo.",
    },
    {
      id: "conexion",
      icon: "equipo",
      title: "Conexion entre profesionales",
      description: "Contexto compartido, sin perder el hilo entre consultas.",
    },
    {
      id: "historial",
      icon: "estructura",
      title: "Historial ordenado",
      description: "Todo tu proceso, en una misma linea de tiempo.",
    },
    {
      id: "alertas",
      icon: "objetivo",
      title: "Alertas y recordatorios",
      description: "Nunca mas te olvidas de una sesion o un ajuste.",
    },
  ] as TecnologiaFeature[],
};

// ─── CTA DE CIERRE ────────────────────────────────────────────────────────────

export const TECNOLOGIA_CTA = {
  eyebrow: "Tecnologia ESDEC",
  headline: "EL FUTURO DEL DEPORTE",
  headlineAccent: "NO SE IMPROVISA.",
  body: "Se construye — con datos reales, no con suposiciones.",
  primaryCtaLabel: "Quiero sumarme a ESDEC",
  primaryCtaHref: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20sumarme%20a%20la%20tecnologia%20deportiva.",
  primaryCtaExternal: true,
  secondaryCtaLabel: "Conocer el ecosistema",
  secondaryCtaHref: "/",
  trustText: "Pensado para el deporte amateur de Cordoba.",
};
