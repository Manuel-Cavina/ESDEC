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
  experience?: string;
  titles?: string[];
  workStyle?: string;
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
    professionalIds: ["deportologo", "medico", "cardiologo"],
  },
  {
    id: "rehabilitacion",
    label: "Rehabilitacion y Movimiento",
    description: "Cuidan y recuperan el cuerpo en movimiento",
    professionalIds: ["kinesiologo", "traumatologo", "fisiatra", "osteópata"],
  },
  {
    id: "rendimiento",
    label: "Rendimiento y Energia",
    description: "Optimizan lo que tu cuerpo puede dar",
    professionalIds: ["preparador", "nutricionista", "biomedico"],
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
    experience: "7+ años",
    titles: ["Lic. Kinesiologia — UNC", "Especialista en Deporte y Actividad Fisica"],
    workStyle: "Primera sesion de evaluacion de movimiento, luego plan progresivo basado en objetivos reales. Seguimiento activo para ajustar en el proceso, no al final.",
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
    experience: "10+ años",
    titles: ["Medico — UNC", "Especialista en Medicina del Deporte — UBA"],
    workStyle: "Evaluacion completa como punto de partida obligatorio. Habilitacion fisica rigurosa y seguimiento periodico coordinado con todo el equipo.",
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
    experience: "6+ años",
    titles: ["Lic. Nutricion — UNC", "Posgrado en Nutricion Deportiva — FUSA"],
    workStyle: "Plan de alimentacion construido desde el analisis real de habitos, deporte y objetivos. Sin plantillas genericas ni dietas de internet.",
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
    experience: "12+ años",
    titles: ["Medico Traumatologo — UNC", "Fellow en Cirugia Artroscopica"],
    workStyle: "Diagnostico preciso desde el primer dia. Protocolo de recuperacion claro y coordinacion activa con kinesiologia para el retorno al deporte.",
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
    experience: "9+ años",
    titles: ["Prof. Educacion Fisica — IPEF Cordoba", "Especialista en Entrenamiento Deportivo"],
    workStyle: "Periodizacion basada en datos reales de rendimiento. Cada semana tiene un proposito. Sin improvisacion, sin planes copiados de internet.",
    bullets: [
      "Planes de entrenamiento especificos por deporte y etapa",
      "Periodizacion para picos de rendimiento en competencia",
      "Control de cargas y prevencion del sobreentrenamiento",
    ],
    whenYouNeedThem: [
      "Cuando entrenas sin estructura ni progresion planificada",
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
    experience: "8+ años",
    titles: ["Medica Clinica — UNC", "Posgrado en Medicina del Deporte"],
    workStyle: "Seguimiento preventivo orientado al rendimiento. Analisis de los indicadores que los medicos comunes no revisan en un deportista activo.",
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
  {
    id: "fisiatra",
    icon: "bienestar",
    role: "Fisiatra deportivo",
    tagline: "Rehabilitacion funcional y dolor musculoesqueletico",
    valueProp: "Para recuperar la funcion sin perder el rendimiento.",
    image: "/images/lifestyle/Deportes_2.jpg",
    name: "Dr. Matias Rios",
    experience: "6+ años",
    titles: ["Medico Fisiatra — UNC", "Especialista en Rehabilitacion Musculoesqueletica"],
    workStyle: "Evaluacion funcional completa, plan de rehabilitacion progresivo y coordinacion con el equipo para que el retorno al deporte sea seguro y definitivo.",
    bullets: [
      "Diagnostico y tratamiento del dolor musculoesqueletico",
      "Planes de rehabilitacion funcional orientados al deporte",
      "Coordinacion con kinesiologo y traumatologo del equipo",
    ],
    whenYouNeedThem: [
      "Cuando el dolor limita tu movimiento sin lesion clara",
      "Para recuperar funcion despues de una lesion o cirugia",
      "Cuando otros tratamientos no dieron resultado estable",
    ],
    accent: "#5ac8ff",
  },
  {
    id: "cardiologo",
    icon: "criterio",
    role: "Cardiologo deportivo",
    tagline: "Evaluacion cardiologica para deportistas activos",
    valueProp: "Para entrenar sin limites y con el corazon chequeado.",
    image: "/images/lifestyle/Vida1.jpg",
    name: "Dra. Ana Vega",
    experience: "9+ años",
    titles: ["Medica Cardiologa — UNC", "Especialista en Cardiologia del Deporte"],
    workStyle: "Evaluacion cardiologica completa antes de cargas intensas y seguimiento de la respuesta cardiovascular al entrenamiento. Sin el apto, no hay proceso.",
    bullets: [
      "Evaluacion cardiologica precompetitiva completa",
      "Deteccion de arritmias y patologias en deportistas jovenes",
      "Seguimiento de la salud cardiovascular en entrenamiento intenso",
    ],
    whenYouNeedThem: [
      "Antes de comenzar un plan de entrenamiento intenso",
      "Si sentes palpitaciones, mareos o falta de aire al ejercitarte",
      "Para el apto cardiologico de competencias exigentes",
    ],
    accent: "#5ac8ff",
  },
  {
    id: "osteópata",
    icon: "estructura",
    role: "Osteopata deportivo",
    tagline: "Equilibrio postural y sistema musculoesqueletico",
    valueProp: "Para un cuerpo que se mueve sin compensaciones.",
    image: "/images/athletes/Atleta_1.png",
    name: "Lic. Pablo Benitez",
    experience: "8+ años",
    titles: ["Lic. Kinesiologia — UNC", "Osteopata Certificado — UQAM Canada"],
    workStyle: "Abordaje global del cuerpo, no solo del sintoma. Evaluacion postural completa, tratamiento manual y plan preventivo integrado con el resto del equipo.",
    bullets: [
      "Evaluacion y tratamiento osteopatico del sistema locomotor",
      "Correccion de desequilibrios posturales que afectan el rendimiento",
      "Abordaje global: articulaciones, musculos y tejidos blandos",
    ],
    whenYouNeedThem: [
      "Cuando tenes dolores que se repiten sin causa clara",
      "Para mejorar la postura y el gesto deportivo",
      "Como mantenimiento preventivo dentro del plan de salud",
    ],
    accent: "#5ac8ff",
  },
  {
    id: "biomedico",
    icon: "progreso",
    role: "Biomecanico deportivo",
    tagline: "Analisis del movimiento y optimizacion del gesto",
    valueProp: "Para entrenar con la tecnica que tu cuerpo necesita.",
    image: "/images/lifestyle/Correr_lluvia_1.jpg",
    name: "Lic. Rodrigo Paz",
    experience: "5+ años",
    titles: ["Lic. Kinesiologia y Fisioterapia — UNC", "Especialista en Biomecanica Deportiva"],
    workStyle: "Analisis objetivo del movimiento con captura de marcha y gesto deportivo. Datos reales, no percepciones. Protocolo de correccion con seguimiento periodico.",
    bullets: [
      "Analisis del patron de movimiento en el gesto deportivo",
      "Identificacion de compensaciones que generan lesiones",
      "Protocolo de correccion tecnica con seguimiento periodico",
    ],
    whenYouNeedThem: [
      "Si tenes lesiones recurrentes sin causa aparente",
      "Para optimizar la tecnica de carrera, salto o gesto especifico",
      "Antes de cambiar de calzado, equipamiento o superficie",
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
  headline: "ENCONTRA TU",
  headlineAccent: "ESPECIALISTA.",
  subtext:
    "Conecta con kinesiologo, deportologo, nutricionista y mas en Cordoba. Tu proceso de salud deportiva empieza hoy.",
  ctaAthlete: { label: "Quiero mi especialista", href: "/deportistas" },
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
    experience: "8+ años",
    titles: ["Lic. Psicologia — UNC", "Especialista en Psicologia del Deporte"],
    workStyle: "Trabajo desde las herramientas del alto rendimiento adaptadas al deportista amateur comprometido. Sin cliches. Sin teoria vacia. Con resultados medibles.",
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
    experience: "7+ años",
    titles: ["Lic. Psicologia — UCC", "Certified Professional Coach — ICF"],
    workStyle: "Proceso de claridad en 3 fases: donde estas, hacia donde vas y que necesitas para no detenerte. Acompanamiento real, no motivacional.",
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
    experience: "10+ años",
    titles: ["Instructora de Yoga — Escuela Sivananda", "Especializacion en Yoga para Deportistas"],
    workStyle: "Clases adaptadas al cuerpo del deportista. Flexibilidad funcional, respiracion aplicada al rendimiento y recuperacion activa que realmente funciona.",
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
    experience: "8+ años",
    titles: ["Instructora de Pilates Clinico — STOTT Pilates", "Formacion en Pilates para Atletas"],
    workStyle: "Trabajo de core profundo, estabilidad articular y correccion de patrones de movimiento compensatorios que frenan el rendimiento deportivo.",
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
    experience: "6+ años",
    titles: ["Instructor de Mindfulness — MBSR", "Especializacion en Rendimiento Mental Deportivo"],
    workStyle: "Tecnicas practicas de mindfulness y visualizacion aplicadas directamente al contexto de la competencia y el entrenamiento de alto nivel.",
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
    experience: "5+ años",
    titles: ["Lic. Psicologia — UNC", "Certified Habit Coach — BJ Fogg Method"],
    workStyle: "Construccion gradual de sistemas de habitos desde el analisis de tu vida real. Sin cambios radicales que no se sostienen. Sin recaidas previsibles.",
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
