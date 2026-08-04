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
  sharedHeadlinePre: "UN MISMO SISTEMA.",
  sharedHeadlineAccent: "DOS ENTRADAS CLARAS.",
  sharedHeadlinePost: "CERO FRICCIÓN.",
  sharedBody:
    "Elegí tu punto de entrada. ESDEC ordena el encuentro entre deportistas y profesionales dentro de una estructura compartida.",
  sharedPills: [
    "Deportistas",
    "Profesionales",
    "Ecosistema coordinado",
  ],
  left: {
    eyebrow: "PARA DEPORTISTAS",
    headlinePre: "QUIERO",
    headlineAccent: "CRECER.",
    body:
      "Entrená con estructura, criterio y un equipo mejor conectado.",
    cta: "Entrar como deportista",
    image: "/images/athletes/Atleta_1.png",
  },
  right: {
    eyebrow: "PARA PROFESIONALES",
    headlinePre: "QUIERO",
    headlineAccent: "POTENCIAR MI PRÁCTICA.",
    body:
      "Sumá visibilidad, contexto y acceso dentro de una red seria.",
    cta: "Entrar como profesional",
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
    eyebrow: "Para deportistas · ESDEC",
    headlinePre: "EL TALENTO",
    headlineAccent: "NECESITA SISTEMA.",
    keyword: "Para deportistas amateurs en Córdoba, Argentina",
    body:
      "El entrenamiento, la nutricion y la recuperacion integrados en una sola estructura. Menos intuicion, mas progreso sostenido.",
    cta: "Ver cómo funciona →",
    ctaHref: "#problem",
    image: "/images/athletes/maraton_1.jpg",
    stats: [
      { label: "Progreso real", title: "Menos intuicion, mas direccion" },
      { label: "Equipo correcto", title: "Especialistas en sintonia" },
      { label: "Criterio", title: "Decisiones con seguimiento" },
    ],
  },
  profesional: {
    eyebrow: "Para profesionales · ESDEC",
    headlinePre: "TU EXPERTISE",
    headlineAccent: "CON SISTEMA.",
    keyword: "Marketplace de profesionales del deporte en Córdoba, Argentina",
    body:
      "ESDEC conecta tu especialidad con deportistas y procesos donde tu trabajo genera impacto real. Con visibilidad, coordinacion y escala.",
    cta: "Ver cómo funciona →",
    ctaHref: "#problem",
    image: "/images/athletes/medicina2.jpg",
    stats: [
      { label: "Demanda relevante", title: "Visibilidad frente a quien te necesita" },
      { label: "Red coordinada", title: "Trabajo integrado con otros especialistas" },
      { label: "Escala real", title: "Tu practica crece con el ecosistema" },
    ],
  },
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
      image: "/images/lifestyle/Yoga1.jpg",
    },
    {
      title: "Clínica",
      shortLabel: "Prevencion y seguimiento",
      description:
        "Prevencion, evaluacion y seguimiento corporal para decidir con criterio.",
      icon: "clinica",
      image: "/images/lifestyle/Medico_2.jpg",
    },
    {
      title: "Marca",
      shortLabel: "Visibilidad y proyeccion",
      description:
        "Identidad, visibilidad y proyeccion para convertir trabajo serio en presencia.",
      icon: "marca",
      image: "/images/athletes/marketing1.jpg",
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
      image: "/images/athletes/metricas1.jpg",
    },
    {
      title: "Educación",
      shortLabel: "Guia y formacion",
      description:
        "Contenido, guia y formacion para crecer con mas claridad y autonomia.",
      icon: "educacion",
      image: "/images/lifestyle/Vida1.jpg",
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
  variants: {
    deportista: {
      headline: "EMPEZÁ TU PROCESO.",
      headlineAccent: "HOY.",
      body:
        "Contanos tu deporte y tu objetivo. Te guiamos por WhatsApp con el contexto justo para orientarte dentro del sistema ESDEC.",
      cta: "Empezar por WhatsApp →",
      trustText: "Respuesta por WhatsApp en menos de 48hs",
    },
    profesional: {
      headline: "SUMATE AL SISTEMA.",
      headlineAccent: "HOY.",
      body:
        "Compartinos tu especialidad y cómo te contactamos. Revisamos tu perfil y seguimos la conversacion por WhatsApp con claridad sobre el siguiente paso.",
      cta: "Postularme por WhatsApp →",
      trustText: "Revisamos tu perfil · Respuesta en menos de 48hs",
    },
  },
} as const;

export const NAV = {
  groups: [
    {
      label: "El ecosistema",
      href: "/",
    },
    {
      label: "Soy deportista",
      href: "/deportistas",
    },
    {
      label: "Soy profesional",
      href: "/profesionales",
    },
  ],
  audienceCtas: {
    deportista: "Empezar mi proceso →",
    profesional: "Postularme →",
  },
  cta: "Ver el ecosistema →",
  ctaHref: "#footprint",
} as const;

export const PAGE_INDEX = {
  deportista: [
    { id: "entry",     label: "Inicio" },
    { id: "problem",   label: "Proceso" },
    { id: "footprint", label: "Ingresar" },
  ],
  profesional: [
    { id: "entry",     label: "Inicio" },
    { id: "problem",   label: "Ingreso" },
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
        { label: "El ecosistema", href: "/" },
        { label: "Quiénes somos", href: "/nosotros" },
        { label: "Cómo funciona", href: "/deportistas#problem" },
        { label: "Eventos deportivos", href: "/eventos-deportivos-cordoba" },
        { label: "Educación deportiva", href: "/educacion-deportiva-cordoba" },
      ],
    },
    {
      label: "Deportistas",
      links: [
        { label: "Empezar mi proceso", href: "/deportistas#footprint" },
        { label: "Salud deportiva", href: "/salud-deportiva-cordoba" },
        { label: "Bienestar integral", href: "/bienestar-deportivo-cordoba" },
      ],
    },
    {
      label: "Profesionales",
      links: [
        { label: "Postularme", href: "/profesionales#footprint" },
        { label: "Tecnología deportiva", href: "/tecnologia-deportiva-cordoba" },
        { label: "Market deportivo", href: "/market-deportivo-cordoba" },
      ],
    },
  ],
  legal: [
    { label: "Privacidad", href: "/privacidad" },
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
      href: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20mas%20informacion.",
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

export const HOME_FAQ = [
  {
    question: "¿Qué es ESDEC?",
    answer:
      "ESDEC es el ecosistema deportivo de Córdoba, Argentina. Conecta a deportistas amateurs y semiprofesionales con profesionales del deporte —kinesiólogos, nutricionistas, psicólogos deportivos y entrenadores— dentro de una misma estructura, en vez de que cada uno tenga que buscarlos por separado.",
  },
  {
    question: "¿Para quién es ESDEC?",
    answer:
      "Para dos perfiles: deportistas amateurs y semiprofesionales que quieren entrenar con más estructura, y profesionales del deporte que buscan visibilidad y coordinación con otros especialistas dentro de un mismo ecosistema.",
  },
  {
    question: "¿Cómo funciona ESDEC?",
    answer:
      "El proceso tiene 5 pasos: se mapea tu perfil (objetivos, deporte, punto de partida), se arma tu equipo de especialistas, se define un plan que integra entrenamiento, nutrición, recuperación y mentalidad, se hace seguimiento con ajustes sostenidos, y el sistema escala con vos sin reiniciar el progreso. El contacto inicial se coordina por WhatsApp, con respuesta en menos de 48 horas.",
  },
  {
    question: "¿En qué se diferencia ESDEC de una app de entrenamiento?",
    answer:
      "Una app de entrenamiento suele cubrir un solo aspecto, como las rutinas. ESDEC integra seis áreas dentro de un mismo sistema —Salud Deportiva, Bienestar, Tecnología, Educación, Eventos y Marketplace de profesionales— para que el deportista no tenga que coordinar cada pieza por separado con proveedores distintos.",
  },
  {
    question: "¿Dónde funciona ESDEC?",
    answer:
      "ESDEC opera en Córdoba, Argentina. Es donde hoy están los deportistas y profesionales que forman parte del ecosistema.",
  },
  {
    question: "¿Qué profesionales participan en ESDEC?",
    answer:
      "Profesionales del deporte de distintas disciplinas: kinesiólogos, nutricionistas, psicólogos deportivos y entrenadores, entre otros. Cada uno se suma al ecosistema según su especialidad y disponibilidad.",
  },
  {
    question: "¿Cuánto cuesta ESDEC?",
    answer:
      "ESDEC está en una etapa inicial de validación, así que todavía no hay un esquema de precios público. Escribinos por WhatsApp y te contamos las condiciones según tu caso.",
  },
] as const;

export const PRIVACY_POLICY = {
  updatedAt: "3 de agosto de 2026",
  intro:
    "Esta política explica qué datos recolecta ESDEC a través de esdec.com.ar, con qué finalidad, y cómo podés ejercer tus derechos sobre ellos, en línea con la Ley 25.326 de Protección de Datos Personales de la República Argentina.",
  sections: [
    {
      title: "1. Responsable de los datos",
      body: [
        "El sitio esdec.com.ar es operado por Manuel Cavina, en carácter de titular del proyecto ESDEC, con domicilio en Córdoba, Argentina.",
        "Contacto para consultas de privacidad: esdec.elite@gmail.com.",
      ],
    },
    {
      title: "2. Qué datos recolectamos",
      body: [
        "Datos que ingresás vos mismo: cuando completás el formulario de contacto (nombre, deporte o rol, y la información que agregues) para iniciar una conversación por WhatsApp. Estos datos se procesan únicamente en tu navegador y se envían de forma directa a WhatsApp recién cuando vos confirmás el envío del mensaje — ESDEC no los almacena en una base de datos propia ni los recibe en un servidor propio.",
        "Datos de navegación: usamos Google Tag Manager, una herramienta que puede activar servicios de medición como Google Analytics, para entender cómo se usa el sitio (páginas visitadas, dispositivo, ubicación aproximada). Esto puede implicar el uso de cookies o identificadores similares.",
      ],
    },
    {
      title: "3. Con quién compartimos los datos",
      body: [
        "WhatsApp / Meta Platforms: recibe el mensaje que vos enviás a través del formulario de contacto, según sus propias políticas de privacidad.",
        "Google: procesa datos de navegación agregados a través de Google Tag Manager / Google Analytics.",
        "Vercel: aloja el sitio y procesa datos técnicos de acceso (como la dirección IP) necesarios para servir las páginas.",
        "ESDEC no vende ni cede datos personales a terceros con fines comerciales.",
      ],
    },
    {
      title: "4. Base legal",
      body: [
        "El tratamiento de tus datos se basa en tu consentimiento, otorgado al completar voluntariamente el formulario de contacto o al navegar el sitio aceptando el uso de cookies de analítica.",
      ],
    },
    {
      title: "5. Conservación de datos",
      body: [
        "ESDEC no mantiene una base de datos propia de contactos en esta etapa del proyecto (MVP inicial). Los datos de navegación se conservan según los plazos estándar de Google Analytics.",
      ],
    },
    {
      title: "6. Tus derechos (acceso, rectificación, actualización y supresión)",
      body: [
        "Como titular de tus datos, tenés derecho a solicitar acceso, rectificación, actualización o supresión de la información que nos hayas provisto, conforme a la Ley 25.326. Podés ejercerlos escribiendo a esdec.elite@gmail.com.",
        "La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.",
      ],
    },
    {
      title: "7. Menores de edad",
      body: [
        "El sitio no está dirigido a menores de 18 años y no recolectamos deliberadamente datos de menores sin el consentimiento de sus padres o tutores.",
      ],
    },
    {
      title: "8. Cambios en esta política",
      body: [
        "Esta política puede actualizarse a medida que ESDEC incorpore nuevas funcionalidades (por ejemplo, registro de usuarios). La fecha de la última actualización figura al inicio de este documento.",
      ],
    },
  ],
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
