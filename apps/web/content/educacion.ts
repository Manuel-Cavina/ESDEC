// content/educacion.ts
// Copy y datos para la landing del area de Educacion deportiva.

export interface EducacionStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface EducacionFormat {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface EducacionBenefitItem {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
}

export interface EducacionTheme {
  icon: string;
  label: string;
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

export const EDUCACION_HERO = {
  eyebrow: "Ecosistema ESDEC — Educación deportiva",
  headlinePre: "APRENDER",
  headlineAccent: "TAMBIÉN ES ENTRENAR.",
  keyword: "Educación deportiva en Córdoba, Argentina",
  body:
    "Mejorar no es solo entrenar más — es comprender mejor. Contenido creado por profesionales, listo para aplicar a tu proceso.",
  ctaLabel: "Explorar Educación",
  ctaHref: "#como-funciona",
  stats: [
    { label: "Contenido especializado", title: "Cursos, talleres y guías de referentes del deporte" },
    { label: "Aplicable al proceso", title: "Conocimiento que se traduce en mejores decisiones" },
    { label: "A tu ritmo", title: "Organizado según tu disciplina, nivel y objetivo" },
  ],
};

// ─── COMO FUNCIONA ────────────────────────────────────────────────────────────

export const EDUCACION_HOW_IT_WORKS = {
  eyebrow: "Cómo funciona",
  headline: "APRENDIZAJE",
  headlineAccent: "A TU MEDIDA.",
  intro:
    "Los contenidos se organizan según tu disciplina, nivel y objetivo — no como una biblioteca suelta de videos y artículos.",
  steps: [
    {
      id: "descubri",
      number: "01",
      title: "Descubrí",
      description: "Contenidos sobre entrenamiento, nutrición, recuperación y salud mental.",
      icon: "criterio",
    },
    {
      id: "aprende",
      number: "02",
      title: "Aprendé",
      description: "Cursos, talleres, videos y guías creados por profesionales.",
      icon: "educacion",
    },
    {
      id: "aplica",
      number: "03",
      title: "Aplicá",
      description: "Sumá lo aprendido a tu entrenamiento y tus hábitos diarios.",
      icon: "training",
    },
    {
      id: "evoluciona",
      number: "04",
      title: "Evolucioná",
      description: "Ganá herramientas para avanzar con más criterio y seguridad.",
      icon: "progreso",
    },
  ] as EducacionStep[],
};

// ─── QUE VA A BRINDAR ─────────────────────────────────────────────────────────

export const EDUCACION_OFFERINGS = {
  eyebrow: "Qué va a brindar",
  headline: "APRENDER",
  headlineAccent: "COMO QUIERAS.",
  intro: "Distintos formatos para aprender según tus intereses y necesidades.",
  formats: [
    {
      id: "cursos",
      icon: "educacion",
      title: "Cursos y programas",
      description: "Recorridos por niveles, creados por referentes del ecosistema.",
    },
    {
      id: "talleres",
      icon: "equipo",
      title: "Talleres y encuentros",
      description: "Clases en vivo, charlas y espacios de intercambio.",
    },
    {
      id: "contenidos",
      icon: "tecnologia",
      title: "Contenidos educativos",
      description: "Videos, guías, entrevistas y podcasts con información aplicable.",
    },
    {
      id: "rutas",
      icon: "escala",
      title: "Rutas de aprendizaje",
      description: "Contenidos según tu objetivo: empezar, competir o prevenir lesiones.",
    },
  ] as EducacionFormat[],
};

// ─── TEMATICAS ────────────────────────────────────────────────────────────────

export const EDUCACION_THEMES = {
  label: "Temáticas que vas a encontrar",
  items: [
    { icon: "training", label: "Entrenamiento y planificación" },
    { icon: "nutricion", label: "Nutrición e hidratación" },
    { icon: "clinica", label: "Prevención de lesiones" },
    { icon: "bienestar", label: "Recuperación y descanso" },
    { icon: "mentalidad", label: "Salud mental y motivación" },
    { icon: "progreso", label: "Rendimiento deportivo" },
    { icon: "tecnologia", label: "Tecnología aplicada al deporte" },
    { icon: "criterio", label: "Desarrollo personal y profesional" },
    { icon: "equipo", label: "Acompañamiento para familias y entrenadores" },
  ] as EducacionTheme[],
};

// ─── QUE LE APORTA AL DEPORTISTA ──────────────────────────────────────────────

export const EDUCACION_BENEFITS = {
  eyebrow: "Qué le aporta al deportista",
  headline: "MÁS CRITERIO.",
  headlineAccent: "MEJORES DECISIONES.",
  intro:
    "Menos consejos sueltos, más criterio propio — con conocimiento organizado por expertos.",
  items: [
    {
      id: "comprender",
      number: "01",
      icon: "criterio",
      title: "Comprender",
      description: "Entender qué hacés, por qué lo hacés y cómo impacta en tu rendimiento.",
    },
    {
      id: "prevenir",
      number: "02",
      icon: "clinica",
      title: "Prevenir",
      description: "Detectar hábitos y señales que pueden afectar tu salud o tu progreso.",
    },
    {
      id: "mejorar",
      number: "03",
      icon: "progreso",
      title: "Mejorar",
      description: "Herramientas para optimizar entrenamiento, alimentación, descanso y cabeza.",
    },
    {
      id: "participar",
      number: "04",
      icon: "equipo",
      title: "Participar",
      description: "Un rol más activo en tu desarrollo y mejor comunicación con tu equipo.",
    },
    {
      id: "construir",
      number: "05",
      icon: "estructura",
      title: "Construir",
      description: "Conocimientos que te acompañan durante toda tu vida deportiva.",
    },
  ] as EducacionBenefitItem[],
};

// ─── CTA DE CIERRE ────────────────────────────────────────────────────────────

export const EDUCACION_CTA = {
  eyebrow: "Educación ESDEC",
  headline: "EL FUTURO NO SOLO SE ENTRENA.",
  headlineAccent: "TAMBIÉN SE APRENDE.",
  body: "Cada aprendizaje suma a un desarrollo deportivo más completo y sostenible.",
  primaryCtaLabel: "Quiero aprender con ESDEC",
  primaryCtaHref: "/deportistas",
  secondaryCtaLabel: "Conocer el ecosistema",
  secondaryCtaHref: "/",
  trustText: "Contenido creado por profesionales del ecosistema ESDEC.",
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const EDUCACION_FAQ = [
  {
    question: "¿Qué tipo de contenido ofrece la educación deportiva de ESDEC?",
    answer:
      "Cursos y programas por niveles, talleres y encuentros en vivo, contenidos como videos y guías, y rutas de aprendizaje según tu objetivo (empezar, competir o prevenir lesiones) — todo creado por profesionales del ecosistema.",
  },
  {
    question: "¿Sobre qué temas puedo aprender con ESDEC?",
    answer:
      "Entrenamiento y planificación, nutrición e hidratación, prevención de lesiones, recuperación y descanso, salud mental y motivación, rendimiento deportivo, y tecnología aplicada al deporte, entre otros.",
  },
  {
    question: "¿Cómo se organiza el contenido educativo de ESDEC?",
    answer:
      "Según tu disciplina, nivel y objetivo, no como una biblioteca suelta de videos. Primero descubrís el contenido relevante para vos, lo aprendés, lo aplicás a tu entrenamiento y tus hábitos diarios, y avanzás con más criterio.",
  },
  {
    question: "¿Los cursos de ESDEC tienen certificación oficial?",
    answer:
      "Hoy no — el foco está en contenido aplicable al proceso del deportista, no en certificaciones formales equivalentes a un título institucional.",
  },
] as const;
