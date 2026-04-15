// content/landing.ts
// Single source of truth for the ESDEC landing copy.

export const BRAND = {
  name: "ESDEC",
  fullName: "Elite Sports Development",
  tagline: "Elite Sports Development.",
  location: "Córdoba · Argentina",
  year: "2025",
} as const;

export const HERO = {
  eyebrow: "Córdoba · Elite Sports Development · 2025",
  headlineLine1: "El futuro del",
  headlineLine2: "deportista no",
  headlineLine3: "se improvisa,",
  headlineAccent: "se construye.",
  body: "ESDEC es la estructura que conecta a cada deportista con los profesionales correctos para crecer mejor, con coordinacion, criterio y progreso real.",
  pillars: [
    "Bienestar",
    "Clínica",
    "Marca",
    "Eventos",
    "Tecnología",
    "Educación",
  ],
  ctaPrimary: "Empezá tu proceso",
  ctaSecondary: "Ver cómo funciona",
  card: {
    name: "Maxi R.",
    sport: "Running",
    level: "Nivel 2",
    location: "Amateur · Parque Sarmiento, Córdoba",
    initials: "M",
    bars: [
      { label: "Rendimiento", value: 62 },
      { label: "Nutricion", value: 45 },
      { label: "Bienestar", value: 70 },
    ],
    specialists: [
      { name: "Psicologia", icon: "mentalidad", available: true },
      { name: "Nutricion", icon: "nutricion", available: true },
      { name: "Kinesiologia", icon: "clinica", available: true },
      { name: "Coaching", icon: "training", available: true },
    ],
  },
} as const;

export const HERO_SPLIT = {
  topTagline: "ELITE SPORTS DEVELOPMENT · 2025",
  dividerText: "ELEGÍ TU RECORRIDO",
  sharedEyebrow: "Ecosistema coordinado",
  sharedHeadlinePre: "LA ESTRUCTURA QUE",
  sharedHeadlineAccent: "CONECTA PROGRESO",
  sharedHeadlinePost: "Y EXPERTISE REAL.",
  sharedBody:
    "ESDEC conecta a deportistas con profesionales del deporte y la salud dentro de un mismo sistema. Elegí el recorrido que mejor te representa y entrá con claridad, no a ciegas.",
  sharedPills: [
    "Deportistas con estructura",
    "Profesionales con impacto",
    "Coordinacion real",
  ],
  left: {
    eyebrow: "PARA DEPORTISTAS",
    headlinePre: "QUIERO",
    headlineAccent: "CRECER MEJOR.",
    body:
      "No te falta esfuerzo. Te falta la estructura que ordena tu proceso y conecta a tu equipo alrededor tuyo.",
    cta: "Entrar como deportista →",
    image: "/images/athletes/Atleta_1.png",
  },
  right: {
    eyebrow: "PARA PROFESIONALES",
    headlinePre: "QUIERO",
    headlineAccent: "SUMAR MI PRÁCTICA.",
    body:
      "Tu conocimiento ya tiene valor. ESDEC le da visibilidad, coordinacion y acceso a deportistas dentro de un sistema serio.",
    cta: "Entrar como profesional →",
    image: "/images/lifestyle/Medico1.png",
  },
} as const;

export const STATS = [
  { value: "8+", label: "Especialidades coordinadas" },
  { value: "247+", label: "Perfiles en el ecosistema" },
  { value: "1°", label: "Sistema integral" },
  { value: "24/7", label: "Seguimiento del proceso" },
] as const;

export const ABOUT = {
  eyebrow: "Estructura para crecer",
  thesisLabel: "Tesis ESDEC",
  thesisBody:
    "No cambia la identidad del sistema. Cambia el punto de entrada. El objetivo es el mismo: conectar al deportista con los profesionales correctos para crecer mejor.",
  manifestoPre: "ESDEC CONECTA",
  manifestoAccent: "UN ECOSISTEMA",
  manifestoPost: "DEPORTIVO",
  manifestoPostAccent: "360.",
  body:
    "Entrenamiento, nutricion, recuperacion y salud mental se integran dentro de una misma estructura, pensada para que cada deportista tenga mas claridad, mas direccion y un progreso mejor sostenido.",
  benefits: [
    {
      icon: "progreso",
      label: "Progreso real",
      title: "Menos intuicion, mas direccion",
      description:
        "Cada paso responde a un plan coordinado y el avance deja de sentirse aislado.",
    },
    {
      icon: "equipo",
      label: "Equipo correcto",
      title: "Especialistas en sintonia",
      description:
        "Coach, nutricion, psicologia y recovery trabajan alrededor de un mismo objetivo.",
    },
    {
      icon: "criterio",
      label: "Criterio",
      title: "Decisiones con seguimiento",
      description:
        "La informacion del proceso ordena los ajustes con criterio, no con promesas sueltas.",
    },
    {
      icon: "escala",
      label: "Escala personal",
      title: "Una estructura que crece con vos",
      description:
        "Tu proceso evoluciona sin reiniciarse cada vez que cambia la etapa.",
    },
  ],
  quote: "El talento sin sistema se dispersa.",
  quoteAuthor: "El equipo ESDEC · Córdoba",
} as const;

export const PROFESSIONAL_ABOUT = {
  eyebrow: "Estructura para ejercer mejor",
  thesisLabel: "Tesis ESDEC",
  thesisBody:
    "No cambia la identidad del sistema. Cambia tu punto de entrada. El objetivo es el mismo: conectar expertise real con procesos donde pueda generar impacto.",
  manifestoPre: "TU CONOCIMIENTO",
  manifestoAccent: "YA TIENE VALOR.",
  manifestoPost: "LE FALTA PLATAFORMA.",
  body:
    "ESDEC ordena visibilidad, coordinacion y acceso a deportistas dentro de una estructura compartida para que tu trabajo gane contexto y escala.",
  benefits: [
    {
      icon: "objetivo",
      label: "Demanda relevante",
      title: "Visibilidad frente a quien te necesita",
      description:
        "Tu practica se conecta con deportistas y procesos donde tu especialidad aporta valor concreto.",
    },
    {
      icon: "equipo",
      label: "Trabajo coordinado",
      title: "Una red que potencia tu criterio",
      description:
        "No trabajas aislado. Entras a un sistema donde otras disciplinas complementan tu trabajo.",
    },
    {
      icon: "impacto",
      label: "Impacto visible",
      title: "Seguimiento que vuelve visible tu aporte",
      description:
        "La plataforma ordena recorridos e informacion para que tu valor se vea y pueda sostenerse.",
    },
    {
      icon: "infraestructura",
      label: "Infraestructura lista",
      title: "Menos friccion operativa, mas practica real",
      description:
        "ESDEC suma estructura, contexto y continuidad para crecer dentro de un ecosistema serio.",
    },
  ],
  quote:
    "Tu expertise no necesita mas discurso. Necesita estructura.",
  quoteAuthor: "El equipo ESDEC · Córdoba",
} as const;

export const ENTRY = {
  deportista: {
    eyebrow: "PARA DEPORTISTAS",
    headlinePre: "EL FUTURO DEL",
    headlineAccent: "DEPORTISTA",
    headlinePost: "SE CONSTRUYE.",
    body:
      "ESDEC no viene a exigirte mas. Viene a ayudarte a crecer mejor, con el equipo correcto y una estructura capaz de sostener lo que hoy todavia parece lejano.",
    cta: "Ver cómo funciona",
    image: "/images/lifestyle/Correr_lluvia_1.jpg",
  },
  profesional: {
    eyebrow: "PARA PROFESIONALES",
    headlinePre: "EL FUTURO DEL",
    headlineAccent: "PROFESIONAL",
    headlinePost: "SE POTENCIA.",
    body:
      "ESDEC ordena el contexto alrededor de tu expertise para que tu trabajo gane visibilidad, coordinacion y proyeccion dentro de un ecosistema que lo respalda.",
    cta: "Ver cómo funciona",
    image: "/images/lifestyle/Medico1.png",
  },
} as const;

const ECOSYSTEM_LEGACY = {
  eyebrow: "Red coordinada",
  cardSupportLabel: "Coordinacion ESDEC",
  bridgeLabel: "Lectura del sistema",
  headline: "LAS PERSONAS",
  headlineAccent: "QUE HACEN FUNCIONAR EL SISTEMA.",
  body:
    "El valor de ESDEC no vive en una promesa abstracta. Vive en una red de especialidades que se entienden entre si y trabajan con un criterio compartido.",
  audienceBody: {
    deportista:
      "Ves al otro lado de la estructura: quienes sostienen tu proceso con criterio, seguimiento y coordinacion real.",
    profesional:
      "Ves la red con la que vas a coordinar tu practica, sumar contexto y amplificar el impacto de tu especialidad.",
  },
  stripLabel: "Disciplinas activas",
  sports: [
    "⚽ Futbol",
    "🏃 Running",
    "🏑 Hockey",
    "🏉 Rugby",
    "🏀 Basquet",
    "🎾 Tenis",
    "🏊 Natacion",
    "🚴 Ciclismo",
    "🥊 Boxeo",
    "🤸 Crossfit",
    "🤼 Artes marciales",
    "⛷️ Esqui",
    "🏄 Surf",
    "🧘 Yoga deportivo",
  ],
  bridge: {
    deportista:
      "Cada especialidad suma una capa del sistema que te ayuda a crecer mejor.",
    profesional:
      "Cada especialidad suma una capa del sistema con la que podes coordinar y trabajar mejor.",
  },
  specialists: [
    {
      number: "01",
      icon: "🧠",
      role: "Salud mental",
      title: "Psicologia deportiva",
      description:
        "Mentalidad, foco y regulacion emocional integrados en el proceso del atleta. No es un extra: es parte de la estructura.",
      tag: "Core",
      image: "/images/lifestyle/Correr_lluvia_1.jpg",
    },
    {
      number: "02",
      icon: "🥗",
      role: "Rendimiento",
      title: "Nutricion deportiva",
      description:
        "Planes conectados al contexto real del entrenamiento, la recuperacion y los objetivos de evolucion.",
      tag: "Core",
      image: "/images/lifestyle/Deportes_1.jpg",
    },
    {
      number: "03",
      icon: "clinica",
      role: "Prevencion",
      title: "Kinesiologia y biomecanica",
      description:
        "Prevencion, recuperacion y lectura del cuerpo dentro de un sistema que protege el progreso y evita improvisar.",
      tag: "Core",
      image: "/images/lifestyle/Medico1.png",
    },
    {
      number: "04",
      icon: "🏋️",
      role: "Entrenamiento",
      title: "Coaching y planificacion",
      description:
        "Direccion tecnica, carga adecuada y seguimiento para que cada decision tenga un porque y una continuidad.",
      tag: "Core",
      image: "/images/athletes/Atleta_1.png",
    },
    {
      number: "05",
      icon: "💆",
      role: "Recovery",
      title: "Recuperacion y descarga",
      description:
        "La recuperacion entra al sistema como parte del rendimiento y no como un agregado desconectado del resto.",
      tag: "Plus",
      image: "/images/lifestyle/EstilodeVida.jpg",
    },
    {
      number: "06",
      icon: "🌟",
      role: "Proyeccion",
      title: "Marca personal y visibilidad",
      description:
        "Una capa de posicionamiento para atletas y profesionales que necesitan convertir trabajo serio en presencia y oportunidad.",
      tag: "Plus",
      image: "/images/lifestyle/Deportes_2.jpg",
    },
  ],
} as const;

export const ECOSYSTEM = {
  eyebrow: "Red coordinada",
  cardSupportLabel: "Área ESDEC",
  bridgeLabel: "Lectura del sistema",
  headline: "LAS 6 ÁREAS",
  headlineAccent: "QUE HACEN FUNCIONAR EL SISTEMA.",
  body:
    "ESDEC organiza su ecosistema en seis areas conectadas entre si para que cada deportista entienda rapido donde esta cada apoyo y como se integra a su proceso.",
  audienceBody: {
    deportista:
      "No ves servicios sueltos. Ves seis areas que trabajan en sintonia para ordenar mejor tu crecimiento.",
    profesional:
      "Ves una red mas clara donde tu practica puede integrarse, aportar contexto y generar impacto real.",
  },
  stripLabel: "Deportes activos",
  sports: [
    { label: "Futbol", icon: "futbol" },
    { label: "Running", icon: "running" },
    { label: "Hockey", icon: "hockey" },
    { label: "Rugby", icon: "rugby" },
    { label: "Basquet", icon: "basquet" },
    { label: "Tenis", icon: "tenis" },
    { label: "Natacion", icon: "natacion" },
    { label: "Ciclismo", icon: "ciclismo" },
    { label: "Boxeo", icon: "boxeo" },
    { label: "Crossfit", icon: "crossfit" },
    { label: "Artes marciales", icon: "artesMarciales" },
    { label: "Esqui", icon: "esqui" },
    { label: "Surf", icon: "surf" },
    { label: "Yoga deportivo", icon: "yoga" },
  ],
  bridge: {
    deportista:
      "Cada area suma una capa del sistema para que tu progreso tenga mas contexto, criterio y continuidad.",
    profesional:
      "Cada area suma una capa del sistema con la que podes coordinar, complementar tu aporte y trabajar mejor.",
  },
  categories: [
    {
      title: "Bienestar",
      shortLabel: "Nutricion, mente y recovery",
      description:
        "Nutricion, salud mental y recuperacion para sostener tu progreso.",
      icon: "bienestar",
      image: "/images/lifestyle/EstilodeVida.jpg",
    },
    {
      title: "Clínica",
      shortLabel: "Prevencion y seguimiento",
      description:
        "Prevencion, evaluacion y seguimiento corporal para decidir con criterio.",
      icon: "clinica",
      image: "/images/lifestyle/Medico1.png",
    },
    {
      title: "Marca",
      shortLabel: "Visibilidad y proyeccion",
      description:
        "Identidad, visibilidad y proyeccion para convertir trabajo serio en presencia.",
      icon: "marca",
      image: "/images/lifestyle/Deportes_2.jpg",
    },
    {
      title: "Eventos",
      shortLabel: "Activaciones y comunidad",
      description:
        "Experiencias y activaciones que expanden el ecosistema mas alla del entrenamiento.",
      icon: "eventos",
      image: "/images/team/Personas_maraton.jpg",
    },
    {
      title: "Tecnología",
      shortLabel: "Herramientas para ordenar",
      description:
        "Herramientas y acompanamiento inteligente para ordenar mejor el proceso.",
      icon: "tecnologia",
      image: "/images/athletes/Atleta_1.png",
    },
    {
      title: "Educación",
      shortLabel: "Guia y formacion",
      description:
        "Contenido, guia y formacion para crecer con mas claridad y autonomia.",
      icon: "educacion",
      image: "/images/lifestyle/Yoga1.jpg",
    },
  ],
} as const;

export const EMOTIONAL = {
  eyebrow: "Conviccion con estructura",
  headlinePre: "EL FUTURO DEL",
  headlineAccent: "DEPORTISTA",
  headlinePost: "SE CONSTRUYE.",
  body:
    "ESDEC no viene a exigirte mas. Viene a ayudarte a crecer mejor, con el equipo correcto y una estructura capaz de sostener lo que hoy todavia parece lejano.",
  points: [
    "No te falta esfuerzo. Te falta estructura.",
    "El talento sin sistema se dispersa.",
    "Progreso real, no improvisacion.",
  ],
} as const;

export const PROFESSIONAL_EMOTIONAL = {
  eyebrow: "Impacto con criterio",
  headlinePre: "EL FUTURO DEL",
  headlineAccent: "PROFESIONAL",
  headlinePost: "SE POTENCIA.",
  body:
    "ESDEC ordena el contexto alrededor de tu expertise para que tu trabajo gane visibilidad, coordinacion y proyeccion dentro de un ecosistema que lo respalda.",
  points: [
    "Tu conocimiento ya tiene valor.",
    "La coordinacion multiplica el impacto.",
    "Una red seria cambia la escala.",
  ],
} as const;

export const PROBLEM = {
  eyebrow: "Cómo se traduce en experiencia",
  journeyStepPrefix: "Paso",
  headline: "DEL",
  headlineAccent: "DIAGNÓSTICO AL PROCESO.",
  quote:
    "\"El deportista amateur no carece de motivacion. Carece de una estructura que coordine su desarrollo y lo ayude a sostener progreso real.\"",
  problems: [
    {
      number: "01",
      title: "Especialistas desconectados",
      description:
        "Los profesionales existen, pero encontrarlos, validarlos y coordinarlos sigue siendo una carga para el deportista.",
    },
    {
      number: "02",
      title: "Decisiones sin contexto",
      description:
        "Cuando cada area trabaja por separado, el proceso pierde direccion y el esfuerzo se dispersa.",
    },
    {
      number: "03",
      title: "Progreso dificil de leer",
      description:
        "Sin seguimiento compartido, cuesta saber que funciona, que ajustar y donde esta realmente el avance.",
    },
    {
      number: "04",
      title: "Mucho esfuerzo, poca estructura",
      description:
        "El problema no es la voluntad. Es no tener una plataforma que ordene todo alrededor del objetivo.",
    },
  ],
  pivotPre: "No te falta",
  pivotAccent1: "esfuerzo.",
  pivotConnector: "Te falta",
  pivotAccent2: "estructura.",
  journeyLabel: "Cómo funciona ESDEC para deportistas",
  journeyHeadlinePre: "TU PROCESO,",
  journeyHeadlineAccent: "PASO A PASO.",
  journeyFingerLabel: "Tu estructura ESDEC",
  journey: [
    {
      step: "1",
      title: "Perfil",
      description: "Objetivos, deporte y punto de partida mapeados con claridad.",
    },
    {
      step: "2",
      title: "Equipo",
      description: "Especialistas correctos y coordinados alrededor de tu proceso.",
    },
    {
      step: "3",
      title: "Plan",
      description: "Entrenamiento, nutricion, recovery y mente dentro de una misma lectura.",
    },
    {
      step: "4",
      title: "Seguimiento",
      description: "Ajustes y decisiones sostenidas por informacion compartida.",
    },
    {
      step: "5",
      title: "Escala",
      description: "El sistema acompana nuevos objetivos sin reiniciar tu progreso.",
    },
  ],
  journeyCta: "Empezar mi proceso",
  journeyCtaHref: "#footprint",
  journeySupport:
    "Cuando avances, te pedimos solo la informacion minima para responderte por WhatsApp y orientarte en menos de 48hs.",
} as const;

export const PROFESSIONAL_PROBLEM = {
  eyebrow: "Cómo entra tu práctica al ecosistema",
  journeyStepPrefix: "Paso",
  headline: "DEL",
  headlineAccent: "VALOR A LA ESCALA.",
  quote:
    "\"El profesional del deporte no necesita mas discurso. Necesita una estructura que conecte su expertise con deportistas reales y con una red que lo potencie.\"",
  problems: [
    {
      number: "01",
      title: "Visibilidad fragmentada",
      description:
        "Tu trabajo existe, pero no siempre encuentra el contexto correcto para volverse visible frente a la demanda relevante.",
    },
    {
      number: "02",
      title: "Coordinacion dificil",
      description:
        "Derivar, complementar o sostener procesos compartidos sigue siendo complejo sin infraestructura comun.",
    },
    {
      number: "03",
      title: "Impacto poco legible",
      description:
        "Sin un sistema de seguimiento, el valor que generas queda disperso y cuesta sostenerlo a escala.",
    },
    {
      number: "04",
      title: "Crecimiento con demasiada friccion",
      description:
        "A medida que sumas demanda, crece la carga operativa si no hay una estructura que ordene el recorrido.",
    },
  ],
  pivotPre: "No te falta",
  pivotAccent1: "conocimiento.",
  pivotConnector: "Te falta",
  pivotAccent2: "plataforma.",
  journeyLabel: "Cómo funciona ESDEC para profesionales",
  journeyHeadlinePre: "TU INGRESO,",
  journeyHeadlineAccent: "PASO A PASO.",
  journeyFingerLabel: "Tu plataforma ESDEC",
  journey: [
    {
      step: "1",
      title: "Perfil",
      description: "Especialidad, experiencia y enfoque profesional presentados con claridad.",
    },
    {
      step: "2",
      title: "Encaje",
      description: "ESDEC ubica tu aporte dentro de la red y del tipo de proceso donde mas valor generas.",
    },
    {
      step: "3",
      title: "Coordinacion",
      description: "Trabajas dentro de una red que te da contexto, derivacion y lectura compartida.",
    },
    {
      step: "4",
      title: "Seguimiento",
      description: "El sistema vuelve mas visible tu impacto dentro de cada recorrido.",
    },
    {
      step: "5",
      title: "Escala",
      description: "Tu practica suma visibilidad, criterio y proyeccion dentro del ecosistema.",
    },
  ],
  journeyCta: "Postularme como profesional",
  journeyCtaHref: "#footprint",
  journeySupport:
    "Te pedimos solo la informacion necesaria para revisar tu perfil y continuar el contacto por WhatsApp.",
} as const;

export const FOOTPRINT = {
  eyebrow: "Ingreso al ecosistema",
  panelLabel: "Siguiente paso",
  variants: {
    deportista: {
      headline: ["EMPEZÁ TU", "PROCESO."],
      accent: "CON ESTRUCTURA.",
      body:
        "Contanos tu deporte y tu objetivo. Te guiamos por WhatsApp con el contexto justo para orientarte dentro del sistema ESDEC.",
      features: [
        "Primer contacto simple y guiado",
        "Respuesta en menos de 48hs",
        "Recorrido pensado para tu punto de partida",
      ],
      cta: "Empezar por WhatsApp →",
      note:
        "Te hacemos pocas preguntas y te explicamos el siguiente paso antes de pedirte mas tiempo.",
    },
    profesional: {
      headline: ["SUMATE COMO", "PROFESIONAL."],
      accent: "CON CRITERIO.",
      body:
        "Compartinos tu especialidad y cómo te contactamos. Revisamos tu perfil y seguimos la conversacion por WhatsApp con claridad sobre el siguiente paso.",
      features: [
        "Postulacion inicial liviana",
        "Revision del perfil con contexto",
        "Continuidad por WhatsApp en menos de 48hs",
      ],
      cta: "Postularme por WhatsApp →",
      note:
        "La propuesta inicial es breve: buscamos validar encaje antes de pedirte mas informacion.",
    },
  },
} as const;

export const NAV = {
  groups: [
    {
      label: "Recorrido",
      items: [
        {
          label: "Qué es ESDEC",
          href: "#about",
          icon: "estructura",
          description: "La estructura y la tesis del ecosistema",
        },
        {
          label: "Red coordinada",
          href: "#ecosystem",
          icon: "red",
          description: "Quienes hacen funcionar el sistema",
        },
        {
          label: "Cómo funciona",
          href: "#problem",
          icon: "proceso",
          description: "El paso a paso para entrar y avanzar",
        },
      ],
    },
    {
      label: "Conviccion",
      href: "#emotional",
    },
    {
      label: "Ingresar",
      href: "#footprint",
    },
  ],
  audienceCtas: {
    deportista: "Empezar mi proceso →",
    profesional: "Postularme →",
  },
  cta: "Ver el ingreso →",
  ctaHref: "#footprint",
} as const;

export const PAGE_INDEX = {
  deportista: [
    { id: "entry", label: "Inicio" },
    { id: "about", label: "Estructura" },
    { id: "ecosystem", label: "Red" },
    { id: "problem", label: "Proceso" },
    { id: "emotional", label: "Conviccion" },
    { id: "footprint", label: "Ingresar" },
  ],
  profesional: [
    { id: "entry", label: "Inicio" },
    { id: "about", label: "Plataforma" },
    { id: "ecosystem", label: "Red" },
    { id: "problem", label: "Ingreso" },
    { id: "emotional", label: "Impacto" },
    { id: "footprint", label: "Postularme" },
  ],
} as const;

export const COMMUNITY = {
  eyebrow: "Comunidad ESDEC · Córdoba",
  headline: "ESTA ES",
  headlineAccent: "NUESTRA COMUNIDAD.",
  stats: [
    { value: "247+", label: "En el sistema" },
    { value: "8+", label: "Deportes activos" },
    { value: "24/7", label: "Acompanamiento real" },
  ],
  photos: [
    {
      src: "/images/team/Equipo_Escalinatas.png",
      alt: "Equipo ESDEC en las escalinatas de Córdoba",
      label: "El equipo",
    },
    {
      src: "/images/team/Equipo_G7.png",
      alt: "Equipo ESDEC · grupo de trabajo",
      label: "ESDEC G7",
    },
  ],
  quote: {
    text: "Construimos ESDEC porque sabemos lo que es entrenar sin sistema. Queremos que ningun deportista tenga que crecer asi.",
    author: "El equipo ESDEC",
    location: "Córdoba, Argentina",
  },
} as const;

export const FOOTER = {
  tagline: "La estructura que conecta progreso y expertise.",
  groups: [
    {
      label: "Plataforma",
      links: [
        { label: "Qué es ESDEC", href: "#about" },
        { label: "Red coordinada", href: "#ecosystem" },
        { label: "Cómo funciona", href: "#problem" },
      ],
    },
    {
      label: "Ingreso",
      links: [
        { label: "Conviccion", href: "#emotional" },
        { label: "Dar el primer paso", href: "#footprint" },
      ],
    },
  ],
  legal: [
    { label: "Privacidad", href: "#" },
    { label: "Terminos de uso", href: "#" },
  ],
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/esdec.ar?igsh=N3ZtMHd0a2I2aXVz",
      icon: "instagram",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@_esdec?_r=1&_t=ZS-95XZ2oVQWqS",
      icon: "tiktok",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/5493515117555",
      icon: "whatsapp",
    },
  ],
  contact: {
    email: "contacto@esdec.com.ar",
    location: "Córdoba · Argentina",
    phone: "+54 9 3515 11-7555",
  },
  location: "Córdoba · Argentina",
  copy: `© ${new Date().getFullYear()} ESDEC · Elite Sports Development. Todos los derechos reservados.`,
} as const;

export const FOOTPRINT_MODAL = {
  whatsappNumber: "5493515117555",
  backLabel: "Volver",
  variants: {
    deportista: {
      title: "EMPEZÁ TU PROCESO",
      subtitle:
        "Tres pasos simples para orientarte dentro del sistema. Te respondemos por WhatsApp en menos de 48hs.",
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
          options: [
            { label: "Futbol", icon: "futbol" },
            { label: "Running", icon: "running" },
            { label: "Rugby", icon: "rugby" },
            { label: "Hockey", icon: "hockey" },
            { label: "Basquet", icon: "basquet" },
            { label: "Tenis", icon: "tenis" },
            { label: "Otro", icon: "otro" },
          ],
        },
        {
          id: "challenge",
          question: "¿Qué querés ordenar primero?",
          type: "options" as const,
          options: [
            { label: "Rendimiento", icon: "training" },
            { label: "Nutricion", icon: "nutricion" },
            { label: "Prevencion y recovery", icon: "clinica" },
            { label: "Mentalidad", icon: "mentalidad" },
            { label: "Tener un plan claro", icon: "estructura" },
          ],
        },
        {
          id: "contact",
          question: "¿Cómo te contactamos?",
          type: "contact" as const,
          placeholder: "Tu WhatsApp o email",
        },
      ],
      ctaLabel: "Enviar por WhatsApp →",
      successTitle: "PERFIL ENVIADO",
      successBody:
        "Recibimos tu informacion. Un especialista ESDEC te va a responder por WhatsApp en menos de 48hs.",
      whatsappIntro:
        "Hola ESDEC, quiero empezar mi proceso como deportista dentro del ecosistema.",
    },
    profesional: {
      title: "SUMARME COMO PROFESIONAL",
      subtitle:
        "Compartinos tu especialidad y seguimos por WhatsApp con claridad sobre el siguiente paso dentro del ecosistema.",
      steps: [
        {
          id: "name",
          question: "¿Cómo te llamás?",
          type: "text" as const,
          placeholder: "Tu nombre",
        },
        {
          id: "specialty",
          question: "¿Cuál es tu especialidad?",
          type: "options" as const,
          options: [
            { label: "Psicologia deportiva", icon: "mentalidad" },
            { label: "Nutricion deportiva", icon: "nutricion" },
            { label: "Kinesiologia", icon: "clinica" },
            { label: "Coaching", icon: "training" },
            { label: "Otra especialidad", icon: "otro" },
          ],
        },
        {
          id: "focus",
          question: "¿Qué buscás en ESDEC?",
          type: "options" as const,
          options: [
            { label: "Mas visibilidad", icon: "visibilidad" },
            { label: "Trabajar en red", icon: "red" },
            { label: "Escalar mi practica", icon: "escala" },
            { label: "Entender el encaje", icon: "encaje" },
          ],
        },
        {
          id: "contact",
          question: "¿Cómo te contactamos?",
          type: "contact" as const,
          placeholder: "Tu WhatsApp o email",
        },
      ],
      ctaLabel: "Enviar postulacion →",
      successTitle: "POSTULACIÓN ENVIADA",
      successBody:
        "Recibimos tu perfil. Te vamos a responder por WhatsApp en menos de 48hs para seguir el proceso.",
      whatsappIntro:
        "Hola ESDEC, quiero postularme como profesional dentro del ecosistema.",
    },
  },
} as const;
