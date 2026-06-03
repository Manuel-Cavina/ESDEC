// content/bienestar-salud.ts
// Copy y datos para las paginas separadas de Salud y Bienestar deportivo.

export type BienestarSaludArea = "salud" | "bienestar";

export interface MarqueeChip {
  icon: string;
  label: string;
}

export interface Professional {
  id: string;
  icon: string;
  role: string;
  tagline: string;
  valueProp: string;
  bullets: string[];
  whenYouNeedThem: string[];
  accent: string;
  image?: string;
  name?: string;
}

export interface ProfessionalGroup {
  id: string;
  label: string;
  description: string;
  professionalIds: string[];
}

export interface BenefitItem {
  id: string;
  icon: string;
  stat: string;
  statLabel: string;
  title: string;
  description: string;
  accent: string;
}

// ─── SALUD ────────────────────────────────────────────────────────────────────

export const SALUD_HERO = {
  eyebrow: "Ecosistema ESDEC — Salud deportiva",
  headlineLine1: "PREVENIR",
  headlineLine2: "ES EL PLAN.",
  tagline: "Prevencion activa. El sistema que cuida tu cuerpo antes de que lo necesites.",
  subtext:
    "Los deportistas que evaluan, monitorean y actuan antes son los que mantienen la continuidad del proceso. Sin interrupciones. Sin lesiones evitables.",
  marqueeChips: [
    { icon: "progreso", label: "Prevencion activa" },
    { icon: "training", label: "Kinesiologia" },
    { icon: "criterio", label: "Evaluacion clinica" },
    { icon: "nutricion", label: "Nutricion deportiva" },
    { icon: "escala", label: "Preparacion fisica" },
    { icon: "clinica", label: "Deportologia" },
    { icon: "estructura", label: "Seguimiento" },
    { icon: "objetivo", label: "Traumatologia" },
  ] as MarqueeChip[],
  ctaPrimary: { label: "Ver como funciona", href: "#proceso" },
  accent: "#5ac8ff" as const,
};

export const SALUD_PROFESSIONAL_GROUPS: ProfessionalGroup[] = [
  {
    id: "diagnostico",
    label: "Diagnostico y Clinica",
    description: "Evaluan y monitorizan tu estado fisico real",
    professionalIds: ["deportologo", "medico"],
  },
  {
    id: "rehabilitacion",
    label: "Rehabilitacion y Movimiento",
    description: "Cuidan y recuperan el cuerpo en movimiento",
    professionalIds: ["kinesiologo", "traumatologo"],
  },
  {
    id: "rendimiento",
    label: "Rendimiento y Energia",
    description: "Optimizan lo que tu cuerpo puede dar",
    professionalIds: ["preparador", "nutricionista"],
  },
];

export const SALUD_PROFESSIONALS: Professional[] = [
  {
    id: "kinesiologo",
    icon: "training",
    role: "Kinesiologo deportivo",
    tagline: "Rehabilitacion y prevencion de lesiones",
    valueProp: "Para no parar. Para volver. Para anticipar.",
    image: "/images/athletes/medicina2.jpg",
    name: "Lic. Martina Rios",
    bullets: [
      "Rehabilitacion de lesiones musculares y articulares",
      "Planes de prevencion y readaptacion al deporte",
      "Trabajo de movilidad, fuerza funcional y control motor",
    ],
    whenYouNeedThem: [
      "Despues de una lesion muscular, articular o tendinosa",
      "Para un plan preventivo antes de una temporada intensa",
      "En la readaptacion post-cirugia o post-lesion grave",
    ],
    accent: "#5ac8ff",
  },
  {
    id: "deportologo",
    icon: "clinica",
    role: "Deportologo",
    tagline: "Medicina del deporte y seguimiento clinico",
    valueProp: "Para saber de donde partes antes de exigirte.",
    image: "/images/lifestyle/Medico1.png",
    name: "Dr. Sebastian Cano",
    bullets: [
      "Evaluaciones medicas deportivas completas",
      "Habilitaciones fisicas y apto deportivo para competir",
      "Seguimiento clinico integral del deportista",
    ],
    whenYouNeedThem: [
      "Para tu primera evaluacion medica deportiva formal",
      "Antes de una competencia que requiera apto fisico",
      "Para seguimiento clinico regular de tu proceso",
    ],
    accent: "#5ac8ff",
  },
  {
    id: "nutricionista",
    icon: "nutricion",
    role: "Nutricionista deportiva",
    tagline: "Alimentacion orientada al rendimiento",
    valueProp: "Para la energia que el proceso demanda.",
    image: "/images/lifestyle/Medico_2.jpg",
    name: "Lic. Valentina Morales",
    bullets: [
      "Planes de alimentacion segun deporte y fase del proceso",
      "Nutricion para competencia, entrenamiento y recuperacion",
      "Composicion corporal y energia disponible real",
    ],
    whenYouNeedThem: [
      "Cuando la energia no alcanza para entrenar con calidad",
      "Para optimizar composicion corporal sin perder rendimiento",
      "En la preparacion previa a una temporada de competencia",
    ],
    accent: "#5ac8ff",
  },
  {
    id: "traumatologo",
    icon: "objetivo",
    role: "Traumatologo deportivo",
    tagline: "Diagnostico y tratamiento de lesiones",
    valueProp: "Para saber cuando y como volver sin riesgos.",
    image: "/images/lifestyle/Deportes_1.jpg",
    name: "Dr. Agustin Ferraro",
    bullets: [
      "Diagnostico preciso de lesiones agudas y cronicas",
      "Tiempos de recuperacion reales y protocolo de retorno",
      "Coordinacion con kinesiologo para la readaptacion",
    ],
    whenYouNeedThem: [
      "Cuando el dolor persiste mas de 48 horas sin mejorar",
      "Para diagnostico de una posible lesion articular u osea",
      "Para saber el tiempo real y seguro de vuelta al deporte",
    ],
    accent: "#5ac8ff",
  },
  {
    id: "preparador",
    icon: "escala",
    role: "Preparador fisico",
    tagline: "Planificacion de carga y periodizacion",
    valueProp: "Para entrenar con estructura, no con intuicion.",
    image: "/images/athletes/maraton_1.jpg",
    name: "Prof. Lucas Mendez",
    bullets: [
      "Planes de entrenamiento especificos por deporte y etapa",
      "Periodizacion para picos de rendimiento en competencia",
      "Control de cargas y prevencion del sobreentrenamiento",
    ],
    whenYouNeedThem: [
      "Cuando entrenás sin estructura ni progresion planificada",
      "Para prepararte especificamente para una competencia",
      "Para salir del estancamiento y volver a progresar",
    ],
    accent: "#5ac8ff",
  },
  {
    id: "medico",
    icon: "infraestructura",
    role: "Medico clinico deportivo",
    tagline: "Salud general para deportistas activos",
    valueProp: "Para el seguimiento que la mayoria ignora.",
    image: "/images/athletes/metricas1.jpg",
    name: "Dra. Carolina Paz",
    bullets: [
      "Analisis de laboratorio orientados al rendimiento deportivo",
      "Control de parametros clave: hierro, vitaminas, hormonas",
      "Coordinacion con el equipo interdisciplinario de salud",
    ],
    whenYouNeedThem: [
      "Para analisis de sangre orientados al rendimiento",
      "Cuando sentes fatiga cronica o recuperacion lenta",
      "Para un control medico preventivo anual completo",
    ],
    accent: "#5ac8ff",
  },
];

export const SALUD_BENEFITS: BenefitItem[] = [
  {
    id: "prevenibles",
    icon: "criterio",
    stat: "1/3",
    statLabel: "lesiones deportivas son prevenibles",
    title: "La que no tenia que pasar",
    description:
      "Al menos 1 de cada 3 lesiones deportivas se puede prevenir con evaluacion clinica inicial y seguimiento activo. La mayoria pasa por no tener ese sistema.",
    accent: "#5ac8ff",
  },
  {
    id: "sobreuso",
    icon: "progreso",
    stat: "80%",
    statLabel: "de lesiones por sobreuso son detectables",
    title: "Detectables antes de que duelan",
    description:
      "El 80% de las lesiones por sobreuso — las mas comunes en el deporte amateur — son detectables antes de volverse agudas con seguimiento activo.",
    accent: "#5ac8ff",
  },
  {
    id: "recuperacion",
    icon: "estructura",
    stat: "12",
    statLabel: "semanas promedio fuera por lesion muscular",
    title: "El costo de no prevenir",
    description:
      "Una lesion muscular seria puede quitar entre 6 y 12 semanas de entrenamiento. La prevencion cuesta mucho menos tiempo que eso.",
    accent: "#5ac8ff",
  },
  {
    id: "equipo",
    icon: "equipo",
    stat: "6",
    statLabel: "tipos de especialistas coordinados",
    title: "El equipo completo",
    description:
      "Kinesiologo, deportologo, nutricionista, traumatologo, preparador fisico y medico clinico. Los 6 dentro del mismo ecosistema, no por separado.",
    accent: "#5ac8ff",
  },
];

// ─── SALUD: journey del deportista ───────────────────────────────────────────

export interface JourneyPhase {
  id: string;
  icon: string;
  title: string;
  description: string;
  professionals: string[];
}

export const SALUD_JOURNEY = {
  eyebrow: "Prevencion activa",
  headlinePre: "DE LA EVALUACION",
  headlineAccent: "AL RENDIMIENTO.",
  subtext:
    "No te falta esfuerzo — te falta la estructura que lo sostenga.",
  phases: [
    {
      id: "evaluacion",
      icon: "criterio",
      title: "Punto de partida",
      description:
        "Antes de pedir mas al cuerpo, hay que saber desde donde se parte. Limitaciones, riesgos y potencial mapeados desde el primer dia.",
      professionals: ["Kinesiologo", "Deportologo"],
    },
    {
      id: "plan",
      icon: "estructura",
      title: "Plan de prevencion",
      description:
        "Nutricion, carga y seguimiento en un solo plan. Construido para tu cuerpo, tu deporte y tu etapa — sin improvisacion.",
      professionals: ["Nutricionista", "Preparador fisico"],
    },
    {
      id: "monitoreo",
      icon: "progreso",
      title: "Monitoreo activo",
      description:
        "Seguimiento continuo que detecta senales de sobrecarga antes de que se conviertan en lesiones. No es una consulta. Es un sistema.",
      professionals: ["Todo el equipo"],
    },
    {
      id: "respuesta",
      icon: "clinica",
      title: "Respuesta rapida",
      description:
        "Cuando algo pasa, el protocolo ya existe. Diagnostico, plan de recuperacion y retorno supervisado al deporte — sin tiempo perdido.",
      professionals: ["Traumatologo", "Kinesiologo"],
    },
    {
      id: "continuidad",
      icon: "escala",
      title: "Rendimiento sostenido",
      description:
        "Menos semanas fuera. Mas entrenamientos cumplidos. Un proceso que no se corta porque el cuerpo esta cuidado.",
      professionals: ["Equipo coordinado ESDEC"],
    },
  ] as JourneyPhase[],
};

// ─── SALUD: espacio para profesionales ───────────────────────────────────────

export interface ProfessionalValueProp {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const SALUD_FOR_PROFESSIONALS = {
  eyebrow: "Para profesionales de la salud",
  headline: "TU EXPERTISE",
  headlineAccent: "TIENE UN LUGAR.",
  subtext:
    "ESDEC es el ecosistema que lo potencie. Un espacio donde los profesionales de la salud deportiva se desarrollan, conectan y construyen algo real.",
  valueProps: [
    {
      id: "visibilidad",
      icon: "objetivo",
      title: "Visibilidad dentro del ecosistema",
      description:
        "Tu perfil accesible para deportistas que necesitan exactamente lo que vos haces. Sin intermediarios, sin competencia de plataformas masivas.",
    },
    {
      id: "red",
      icon: "equipo",
      title: "Red profesional coordinada",
      description:
        "Trabaja coordinado con kinesiologo, nutricionista, deportologo y preparador fisico dentro del mismo sistema. Comunicacion real entre colegas.",
    },
    {
      id: "clientes",
      icon: "marca",
      title: "Clientes alineados",
      description:
        "Deportistas amateurs comprometidos que buscan un profesional serio para su proceso. No casuales. Personas que entienden el valor de lo que haces.",
    },
    {
      id: "espacio",
      icon: "infraestructura",
      title: "Un espacio para crecer",
      description:
        "Mas que una plataforma: un ecosistema. Un lugar dentro del deporte de Cordoba donde tu expertise tiene contexto, comunidad y proyeccion.",
    },
  ] as ProfessionalValueProp[],
  cta: { label: "Sumarme como profesional", href: "/profesionales" },
};

export const SALUD_CTA = {
  eyebrow: "ESDEC — Salud deportiva",
  headline: "TU CUERPO",
  headlineAccent: "NO ESPERA.",
  subtext:
    "Entra al ecosistema como deportista o suma tu perfil como profesional de la salud deportiva en Cordoba.",
  ctaAthlete: { label: "Entrar como deportista", href: "/deportistas" },
  ctaProfessional: { label: "Sumarme como profesional", href: "/profesionales" },
};

// ─── SALUD: bloque de conexion hacia Bienestar ───────────────────────────────

export const SALUD_BRIDGE = {
  eyebrow: "Completa tu proceso",
  headlineLine1: "TU CUERPO YA TIENE",
  headlineAccent: "ESTRUCTURA.",
  headlineLine2: "DALE LO MISMO A TU MENTE.",
  subtext:
    "La salud fisica es el primer pilar. El segundo es el bienestar mental y los habitos. Descubri como se complementan.",
  cta: {
    label: "Conocer Bienestar deportivo",
    href: "/bienestar-deportivo-cordoba",
  },
};

// ─── BIENESTAR ────────────────────────────────────────────────────────────────

export const BIENESTAR_HERO = {
  eyebrow: "Ecosistema ESDEC — Bienestar deportivo",
  headlineLine1: "EL RENDIMIENTO",
  headlineLine2: "EMPIEZA ANTES.",
  tagline: "Mente fuerte. Habitos solidos. Equilibrio real.",
  subtext:
    "El deportista que trabaja su mente, construye sus habitos y encuentra equilibrio rinde mas, abandona menos y disfruta mas el proceso.",
  marqueeItems: [
    "Psicologia deportiva",
    "Coaching",
    "Yoga",
    "Pilates",
    "Meditacion",
    "Habitos",
    "Mindfulness",
    "Life coaching",
  ],
  ctaPrimary: { label: "Conocer los especialistas", href: "#profesionales" },
  accent: "#7de8a8" as const,
};

export const BIENESTAR_PROFESSIONALS: Professional[] = [
  {
    id: "psicologo",
    icon: "mentalidad",
    role: "Psicologo deportivo",
    tagline: "Gestion emocional y mental para competir mejor",
    valueProp: "Para que la mente trabaje a favor y no en contra.",
    bullets: [
      "Manejo de presion competitiva y ansiedad ante la competencia",
      "Construccion de confianza y mentalidad de crecimiento",
      "Estrategias concretas para la concentracion y el foco",
    ],
    whenYouNeedThem: [
      "Cuando la ansiedad o los nervios te juegan en contra",
      "Para desarrollar una mentalidad competitiva solida",
      "Despues de una lesion o una caida en el rendimiento",
    ],
    accent: "#7de8a8",
  },
  {
    id: "coach",
    icon: "objetivo",
    role: "Coach deportivo",
    tagline: "Claridad de objetivos y direccion del proceso",
    valueProp: "Para saber hacia donde vas y por que vale la pena.",
    bullets: [
      "Definicion de metas claras, medibles y alcanzables",
      "Desarrollo del mindset y la identidad del deportista",
      "Acompanamiento en momentos de bloqueo o estancamiento",
    ],
    whenYouNeedThem: [
      "Cuando sentes que entrenás pero no progresás",
      "Para definir hacia donde va tu proceso deportivo",
      "En momentos de estancamiento o falta de motivacion",
    ],
    accent: "#7de8a8",
  },
  {
    id: "yoga",
    icon: "yoga",
    role: "Instructor de Yoga",
    tagline: "Flexibilidad, respiracion y recuperacion activa",
    valueProp: "Para recuperar mejor entre entrenamientos.",
    bullets: [
      "Mejora de la flexibilidad y movilidad articular",
      "Tecnicas de respiracion para rendimiento y gestion del estres",
      "Recuperacion activa post-entrenamiento y reduccion del cortisol",
    ],
    whenYouNeedThem: [
      "Para complementar el entrenamiento con recuperacion activa",
      "Cuando la rigidez muscular limita el movimiento",
      "Para desarrollar conciencia corporal y control respiratorio",
    ],
    accent: "#7de8a8",
  },
  {
    id: "pilates",
    icon: "bienestar",
    role: "Instructor de Pilates",
    tagline: "Core, postura y movilidad funcional",
    valueProp: "Para un cuerpo estable que se mueve mejor.",
    bullets: [
      "Fortalecimiento del core para mayor estabilidad deportiva",
      "Correccion postural y control motor especifico",
      "Movilidad funcional aplicada al gesto deportivo",
    ],
    whenYouNeedThem: [
      "Para mejorar la estabilidad y el control del cuerpo",
      "Cuando la postura o las compensaciones generan molestias",
      "Como trabajo complementario al entrenamiento especifico",
    ],
    accent: "#7de8a8",
  },
  {
    id: "meditacion",
    icon: "criterio",
    role: "Instructor de Meditacion",
    tagline: "Concentracion, calma y control mental",
    valueProp: "Para rendir cuando mas importa.",
    bullets: [
      "Tecnicas de mindfulness aplicadas al contexto deportivo",
      "Control del estres, la presion y la ansiedad competitiva",
      "Mejora del foco y la claridad mental durante la competencia",
    ],
    whenYouNeedThem: [
      "Para mejorar la concentracion antes y durante la competencia",
      "Cuando el estres impacta en el sueno y la recuperacion",
      "Para desarrollar presencia y calma en momentos de presion",
    ],
    accent: "#7de8a8",
  },
  {
    id: "habitos",
    icon: "proceso",
    role: "Coach de Habitos",
    tagline: "Rutinas que sostienen el progreso dia a dia",
    valueProp: "Para convertir la disciplina en sistema.",
    bullets: [
      "Diseno de rutinas diarias realistas para deportistas",
      "Construccion de habitos de sueno, descanso y recuperacion",
      "Estrategias para la consistencia, la disciplina y la continuidad",
    ],
    whenYouNeedThem: [
      "Cuando saber lo que hacer y hacerlo son cosas distintas",
      "Para construir rutinas que funcionen en tu vida real",
      "Si la inconsistencia es lo que mas frena tu progreso",
    ],
    accent: "#7de8a8",
  },
];

export const BIENESTAR_BENEFITS: BenefitItem[] = [
  {
    id: "mental",
    icon: "mentalidad",
    stat: "87%",
    statLabel: "del rendimiento es mental",
    title: "La mente decide",
    description:
      "La mayoria del rendimiento deportivo es mental. Un psicologo deportivo te da las herramientas para usarla a favor, no en contra.",
    accent: "#7de8a8",
  },
  {
    id: "habitos",
    icon: "proceso",
    stat: "21d",
    statLabel: "para instalar un habito",
    title: "Habitos que quedan",
    description:
      "Un coach de habitos te ayuda a construir rutinas que funcionan en el contexto real de tu vida como deportista, sin fuerza de voluntad.",
    accent: "#7de8a8",
  },
  {
    id: "recuperacion",
    icon: "bienestar",
    stat: "2x",
    statLabel: "mejor recuperacion",
    title: "Recuperacion activa real",
    description:
      "Yoga, pilates y meditacion reducen el cortisol, mejoran la movilidad y preparan al cuerpo para el siguiente estimulo de entrenamiento.",
    accent: "#7de8a8",
  },
  {
    id: "equilibrio",
    icon: "escala",
    stat: "0",
    statLabel: "abandonos por desgaste",
    title: "Equilibrio sostenible",
    description:
      "El deportista que cuida su bienestar no se desgasta. Disfruta el proceso, lo sostiene en el tiempo y rinde mas cuando importa.",
    accent: "#7de8a8",
  },
];

export const BIENESTAR_CTA = {
  eyebrow: "ESDEC — Bienestar deportivo",
  headline: "TU MENTE MERECE",
  headlineAccent: "UN PLAN REAL.",
  subtext:
    "Entra al ecosistema como deportista o suma tu perfil como profesional del bienestar deportivo.",
  ctaAthlete: { label: "Entrar como deportista", href: "/deportistas" },
  ctaProfessional: { label: "Sumarme como profesional", href: "/profesionales" },
};
