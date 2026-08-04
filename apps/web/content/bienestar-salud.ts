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
  subtext: "El ecosistema donde tu trabajo se ve, conecta y crece.",
  valueProps: [
    {
      id: "visibilidad",
      icon: "objetivo",
      title: "Visibilidad dentro del ecosistema",
      description: "Tu perfil, visible para quien necesita justo lo que haces.",
    },
    {
      id: "red",
      icon: "equipo",
      title: "Red profesional coordinada",
      description: "Coordinado con otros profesionales, no en paralelo.",
    },
    {
      id: "clientes",
      icon: "marca",
      title: "Clientes alineados",
      description: "Deportistas comprometidos, no casuales.",
    },
    {
      id: "espacio",
      icon: "infraestructura",
      title: "Un espacio para crecer",
      description: "Contexto, comunidad y proyeccion para tu trabajo.",
    },
  ] as ProfessionalValueProp[],
  cta: { label: "Sumarme como profesional", href: "/profesionales" },
};

export const BIENESTAR_FOR_PROFESSIONALS_VALUES = {
  eyebrow: "Para profesionales del bienestar",
  headline: "TU EXPERTISE",
  headlineAccent: "TIENE UN LUGAR.",
  subtext: "El ecosistema donde tu trabajo se ve, conecta y crece.",
  valueProps: [
    {
      id: "visibilidad",
      icon: "objetivo",
      title: "Visibilidad dentro del ecosistema",
      description: "Tu perfil, visible para quien necesita justo lo que haces.",
    },
    {
      id: "red",
      icon: "equipo",
      title: "Red profesional coordinada",
      description: "Coordinado con psicologos, nutricionistas y coaches, no en paralelo.",
    },
    {
      id: "clientes",
      icon: "marca",
      title: "Clientes alineados",
      description: "Deportistas comprometidos, no casuales.",
    },
    {
      id: "espacio",
      icon: "infraestructura",
      title: "Un espacio para crecer",
      description: "Contexto, comunidad y proyeccion para tu trabajo.",
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

// ─── SALUD: FAQ ───────────────────────────────────────────────────────────────

export const SALUD_FAQ = [
  {
    question: "¿Qué profesionales de salud deportiva hay en ESDEC?",
    answer:
      "Kinesiólogos, deportólogos, nutricionistas deportivos, traumatólogos y preparadores físicos, organizados en tres áreas: diagnóstico y clínica, rehabilitación y movimiento, y rendimiento y energía.",
  },
  {
    question: "¿Cuándo conviene consultar a un kinesiólogo deportivo?",
    answer:
      "Después de una lesión muscular, articular o tendinosa; para armar un plan preventivo antes de una temporada intensa; o durante la readaptación post-cirugía o post-lesión grave.",
  },
  {
    question: "¿Cómo trabaja ESDEC la prevención de lesiones deportivas?",
    answer:
      "Con un proceso en etapas: primero se evalúa tu punto de partida (limitaciones, riesgos, potencial), después se arma un plan de prevención con nutrición y carga de entrenamiento, y se hace monitoreo activo para detectar señales de sobrecarga antes de que se conviertan en lesión. Si algo pasa, hay un protocolo de respuesta con diagnóstico y retorno supervisado al deporte.",
  },
  {
    question: "¿Qué diferencia hay entre un kinesiólogo y un deportólogo en ESDEC?",
    answer:
      "El deportólogo hace la evaluación médica deportiva completa y las habilitaciones físicas — es el punto de partida clínico. El kinesiólogo trabaja la rehabilitación de lesiones, la prevención y la readaptación al deporte a través del movimiento. Dentro de ESDEC coordinan dentro del mismo proceso.",
  },
  {
    question: "¿ESDEC reemplaza a un médico o profesional de la salud?",
    answer:
      "No. ESDEC conecta a deportistas con profesionales de salud matriculados, pero no reemplaza la atención médica ni el criterio profesional. Cada evaluación, diagnóstico y tratamiento lo hace el profesional correspondiente.",
  },
] as const;

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
  eyebrow: "Ecosistema ESDEC — Bienestar integral",
  headlinePre: "EL RENDIMIENTO",
  headlineAccent: "QUE NO SE VE.",
  keyword: "Bienestar deportivo en Córdoba, Argentina",
  body: "Los deportistas que solo entrenan el fisico dejan el 40% de su potencial sin explorar. El bienestar integral no es un extra — es el sistema que convierte el esfuerzo en resultados reales.",
  ctaLabel: "Iniciar mi programa →",
  ctaHref: "#servicios",
  stats: [
    { label: "Rendimiento mental", title: "Gestiona tu estado cognitivo y emocional como variable de entrenamiento" },
    { label: "5 disciplinas", title: "Coaching · Mentoring · Yoga · Pilates · Meditacion" },
    { label: "Seguimiento diario", title: "Tecnologia que mide lo que los ojos no ven" },
  ],
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
  eyebrow: "Bienestar integral · ESDEC",
  headline: "EMPEZA A ENTRENAR",
  headlineAccent: "LO QUE NO SE VE.",
  body: "El sistema que los mejores atletas ya usan — ahora disponible en Cordoba, con seguimiento real y profesionales especializados.",
  primaryCtaLabel: "Iniciar mi programa →",
  primaryCtaHref: "/deportistas",
  secondaryCtaLabel: "Sumarme como profesional →",
  secondaryCtaHref: "/profesionales",
  trustText: "Sin costo inicial · Primer contacto en 48hs · Especialistas en Cordoba",
};

export const BIENESTAR_FAQ = [
  {
    question: "¿Qué es el bienestar deportivo en ESDEC?",
    answer:
      "Es el área que trabaja el rendimiento del deportista más allá del entrenamiento físico: rendimiento físico (yoga, pilates, respiración, recuperación activa), rendimiento mental (meditación, coaching, foco) y rendimiento emocional (mentoring, resiliencia, motivación).",
  },
  {
    question: "¿Cómo se maneja la ansiedad antes de competir?",
    answer:
      "Es uno de los focos del área de rendimiento mental de ESDEC, que trabaja gestión del estrés y toma de decisiones bajo presión, para que la cabeza acompañe en el momento que más importa.",
  },
  {
    question: "¿Qué disciplinas incluye el bienestar integral en ESDEC?",
    answer:
      "Yoga, Pilates, técnicas de respiración y recuperación activa para lo físico; meditación y coaching para lo mental; y mentoring para lo emocional. Las tres dimensiones se trabajan de forma integrada, no por separado.",
  },
  {
    question: "¿El bienestar deportivo es solo para alto rendimiento?",
    answer:
      "No. Está pensado para cualquier deportista amateur o semiprofesional que entrena el físico pero deja sin trabajar la parte mental y emocional del proceso — que suele ser donde está el margen de mejora más grande.",
  },
] as const;

export const BIENESTAR_SYSTEM = {
  eyebrow: "El sistema ESDEC",
  headline: "TRES DIMENSIONES.",
  headlineAccent: "UN RENDIMIENTO.",
  subtext: "El rendimiento de elite no se construye solo en la cancha. Se construye en las tres dimensiones que lo sostienen.",
  dimensions: [
    {
      id: "fisico",
      number: "01",
      label: "RENDIMIENTO FISICO",
      description: "Control corporal, movilidad, respiracion y recuperacion activa. El cuerpo como herramienta de precision.",
      tags: ["Yoga", "Pilates", "Respiracion", "Recuperacion"],
      accent: "var(--p1)",
    },
    {
      id: "mental",
      number: "02",
      label: "RENDIMIENTO MENTAL",
      description: "Foco, gestion del estres y toma de decisiones bajo presion. La mente entrenada es la que no falla cuando mas importa.",
      tags: ["Meditacion", "Coaching", "Focus", "Presion"],
      accent: "var(--p2)",
    },
    {
      id: "emocional",
      number: "03",
      label: "RENDIMIENTO EMOCIONAL",
      description: "Motivacion sostenida, resiliencia e identidad deportiva. Lo que te hace volver cuando el cuerpo ya no quiere.",
      tags: ["Mentoring", "Identidad", "Resiliencia", "Proposito"],
      accent: "var(--p1)",
    },
  ],
  techNote: "La tecnologia ESDEC trackea las tres dimensiones. No solo el fisico — el sistema completo.",
};

export const BIENESTAR_OUTCOMES = {
  eyebrow: "Lo que aporta ESDEC",
  headline: "LO QUE CAMBIA",
  headlineAccent: "EN VOS.",
  outcomes: [
    {
      id: "claridad",
      number: "01",
      headline: "LLEGAR PRESENTE.",
      sub: "Cuando mas importa, la cabeza acompana. Sin bloqueos, sin ruido mental.",
    },
    {
      id: "motivacion",
      number: "02",
      headline: "MOTIVACION QUE NO FALLA.",
      sub: "No depende del estado del dia. Se construye con sistema.",
    },
    {
      id: "recuperacion",
      number: "03",
      headline: "RECUPERACION REAL.",
      sub: "Mas alla del musculo. El desgaste mental tambien se trabaja.",
    },
    {
      id: "proceso",
      number: "04",
      headline: "PROCESO SIN QUEMARTE.",
      sub: "El sistema que te hace sostenible en el tiempo.",
    },
  ],
};

export const BIENESTAR_APP = {
  eyebrow: "La app · En desarrollo",
  badge: "Proximamente",
  headline: "EL SISTEMA QUE",
  headlineAccent: "TE ACOMPANA.",
  subtext: "Estamos construyendo la herramienta que integra el seguimiento diario de las tres dimensiones en un solo lugar. Esto es lo que va a hacer por vos:",
  steps: [
    {
      id: "punto-partida",
      tag: "Punto de partida",
      headline: "La app aprende quien sos.",
      body: "Estado fisico, mental y emocional. Tu baseline real — no el de otro deportista, el tuyo.",
    },
    {
      id: "seguimiento",
      tag: "En el dia a dia",
      headline: "Detecta lo que te frena.",
      body: "Seguimiento continuo. La app identifica patrones — que afecta tu rendimiento y por que.",
    },
    {
      id: "guia",
      tag: "Con el tiempo",
      headline: "El sistema empieza a guiarte.",
      body: "Recomendaciones y ajustes basados en tus datos, no en suposiciones.",
    },
    {
      id: "alineacion",
      tag: "En el proceso",
      headline: "Todo tu proceso alineado.",
      body: "El rendimiento que no encontrabas en el gym aparece. Porque el trabajo invisible ya esta hecho.",
    },
  ],
  cta: { label: "Quiero acceso anticipado →", href: "#cta" },
};

export const BIENESTAR_FOR_PROFESSIONALS = {
  eyebrow: "02 · Para el profesional",
  headline: "COMPARTIS.",
  headlineAccent: "TAMBIEN CRECES.",
  subtext: "ESDEC te da la plataforma para impactar — y el espacio para desarrollarte vos.",
  points: [
    { icon: "escala", text: "Plataforma para llegar a mas deportistas" },
    { icon: "equipo", text: "Red de profesionales afines" },
    { icon: "criterio", text: "Tu propio espacio de bienestar" },
  ],
  cta: { label: "Unirme como profesional →", href: "#cta" },
};
