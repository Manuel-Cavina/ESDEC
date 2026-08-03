// content/eventos.ts
// Source of truth for the ESDEC events page copy and structured event data.

export interface EventsCta {
  label: string;
  href: string;
  trackingLabel: string;
  variant: "primary" | "secondary";
  external?: boolean;
}

export interface EventPhase {
  id: string;
  label: string;
  title: string;
  body: string;
}

export interface EcosystemLink {
  id: string;
  icon: string;
  title: string;
  body: string;
}

export interface PastEvent {
  id: string;
  name: string;
  date: string;
  tag: string;
  summary: string;
  description: string;
  pillars: readonly string[];
  benefits: readonly string[];
  evolution: readonly string[];
  image: string;
  modalImage?: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface EsdecEvent {
  eyebrow: string;
  name: string;
  startsAt: string;
  dateDay: string;
  dateMonth: string;
  dateLabel: string;
  receptionTime: string;
  startTime: string;
  venue: string;
  city: string;
  summary: string;
  about?: string;
  highlights?: readonly string[];
  benefit?: string;
  spotsWarning?: string;
  image: string;
  modalImage?: string;
  imageAlt: string;
  waitlist: {
    eyebrow: string;
    title: string;
    body: string;
    cta: EventsCta;
    secondaryCta: EventsCta;
  };
  cta: EventsCta;
  ctas: readonly EventsCta[];
}

export const EVENTS_PAGE = {
  seo: {
    title: "Eventos Deportivos en Cordoba | ESDEC",
    description:
      "Eventos ESDEC en Cordoba: experiencias deportivas donde comunidad, energia y progreso se convierten en activacion real.",
  },
  hero: {
    eyebrow: "Eventos ESDEC · Cordoba",
    headlineLine1: "VENÍ.",
    headlineLine2: "ACTIVÁTE.",
    body:
      "Running, trekking, torneos y encuentros pensados para moverte, sumar comunidad y llevarte beneficios reales — no solo mirar desde afuera.",
    image: "/images/athletes/maraton_1.jpg",
    imageAlt: "Corredores en una activacion deportiva de ESDEC",
    words: [
      {
        label: "comunidad",
        title: "personas que se mueven con vos",
      },
      {
        label: "energia",
        title: "un entorno que te enciende",
      },
      {
        label: "progreso",
        title: "cada experiencia deja algo",
      },
    ],
    ctas: [
      {
        label: "Ver proximo evento",
        href: "#proximo-evento",
        trackingLabel: "events_hero_next",
        variant: "primary",
        external: false,
      },
      {
        label: "Como se vive",
        href: "#experiencia",
        trackingLabel: "events_hero_how",
        variant: "secondary",
        external: false,
      },
    ] satisfies EventsCta[],
  },
  transition: {
    eyebrow: "El inicio",
    title: "ASI EMPIEZA",
    titleAccent: "LA EXPERIENCIA.",
    steps: [
      {
        id: "descubri",
        label: "Clave 01",
        title: "DESCUBRI",
        body:
          "Running, trekking, torneos y encuentros — publicados en Instagram y por WhatsApp, con cupo limitado.",
      },
      {
        id: "te-sumas",
        label: "Clave 02",
        title: "TE SUMAS",
        body:
          "Reservás tu lugar con un formulario simple. Confirmación al instante, sin vueltas.",
      },
      {
        id: "lo-vivis",
        label: "Clave 03",
        title: "LO VIVIS",
        body:
          "Guía profesional en el momento, recuperación activa y beneficios exclusivos para quienes participan.",
      },
    ] satisfies EventPhase[],
  },
  nextEvent: {
    eyebrow: "Proximo evento",
    name: "Run + Coffee + Recovery",
    startsAt: "2026-05-09T08:00:00-03:00",
    dateDay: "9",
    dateMonth: "Mayo",
    dateLabel: "Viernes 9 de mayo",
    receptionTime: "8:00 AM",
    startTime: "9:00 AM",
    venue: "Diario Cafe",
    city: "Cordoba Capital",
    summary:
      "Movimiento, recuperacion y comunidad en una manana creada para activar el cuerpo y entrar al ecosistema desde una experiencia real.",
    about:
      "No es solo una carrera: es una manana pensada para vivir el deporte desde otro lugar. Movimiento con estructura, recuperacion real y comunidad que acompana antes, durante y despues del esfuerzo.",
    highlights: [
      "Estiramientos guiados para entrada en calor y enfriamiento.",
      "Recuperacion activa post-esfuerzo.",
      "Combo especial del espacio anfitrion para todos los participantes.",
      "Sorteos entre asistentes: indumentaria, accesorios, suplementos deportivos y mas.",
      "Descuentos exclusivos con codigo especial para quienes se registren.",
    ],
    benefit:
      "Todos los participantes reciben descuentos especiales en marcas del ecosistema. El codigo se entrega al completar la inscripcion.",
    spotsWarning:
      "Cupos limitados. Registrarte garantiza tu lugar y participacion en todos los sorteos del evento.",
    image: "/images/Evento/imagen banner.png",
    modalImage: "/images/Evento/image.png",
    imageAlt: "Imagen principal del evento Run Coffee Recovery de ESDEC",
    waitlist: {
      eyebrow: "Proxima activacion",
      title: "S\u00c9 DE LOS PRIMEROS EN ENTERARTE.",
      body:
        "Cada evento ESDEC tiene cupos limitados y beneficios exclusivos para quienes se anotan antes. Dejanos tu WhatsApp y te avisamos apenas abramos inscripciones.",
      cta: {
        label: "Avisarme por WhatsApp",
        href: "https://wa.me/5493515117555?text=Hola%20ESDEC%2C%20quiero%20sumarme%20a%20la%20lista%20para%20enterarme%20del%20proximo%20evento.",
        trackingLabel: "events_waitlist_whatsapp",
        variant: "primary",
        external: true,
      },
      secondaryCta: {
        label: "Ver eventos anteriores",
        href: "#eventos-anteriores",
        trackingLabel: "events_waitlist_past",
        variant: "secondary",
        external: false,
      },
    },
    cta: {
      label: "Reservar mi lugar",
      href: "https://tally.so/r/VL1BlM",
      trackingLabel: "events_next_reserve",
      variant: "primary",
      external: true,
    },
    ctas: [
      {
        label: "Reservar mi lugar",
        href: "https://tally.so/r/VL1BlM",
        trackingLabel: "events_next_reserve",
        variant: "primary",
        external: true,
      },
      {
        label: "Explorar la experiencia",
        href: "#experiencia",
        trackingLabel: "events_next_experience",
        variant: "secondary",
      },
    ] satisfies EventsCta[],
  } satisfies EsdecEvent,
  experience: {
    eyebrow: "Como se vive un evento ESDEC",
    title: "LO QUE TE LLEV\u00c1S",
    titleAccent: "DE UN EVENTO ESDEC.",
    phases: [
      {
        id: "antes",
        label: "01",
        title: "COMUNIDAD",
        body: "Entren\u00e1s y compart\u00eds con gente que se mueve en serio, no con espectadores.",
      },
      {
        id: "durante",
        label: "02",
        title: "GU\u00cdA EN EL MOMENTO",
        body: "Estiramiento, recuperaci\u00f3n activa y criterio profesional, ah\u00ed mismo, sin turno.",
      },
      {
        id: "despues",
        label: "03",
        title: "BENEFICIOS REALES",
        body: "Descuentos y sorteos exclusivos del ecosistema ESDEC para cada participante.",
      },
    ] satisfies EventPhase[],
  },
  pastEvents: {
    eyebrow: "Registro vivo",
    title: "YA PASO. YA SE VIVIO.",
    titleAccent: "YA DEJO HUELLA.",
    modalLabels: {
      date: "Fecha",
      format: "Formato",
      description: "Descripcion",
      pillars: "Pilares",
      benefits: "Beneficios",
      evolution: "Evolucion",
      cta: "Revivir la experiencia",
    },
    items: [
      {
        id: "social-running",
        name: "Social Running ESDEC",
        date: "Mayo 2026",
        tag: "Running - Comunidad",
        summary:
          "Una activacion social para moverse, compartir cafe y entrar en recuperacion con energia de comunidad.",
        description:
          "Social Running ESDEC reunio movimiento, cafe y recovery en una experiencia pensada para activar el cuerpo, conectar con otros y vivir el deporte como punto de encuentro real.",
        pillars: ["Running", "Comunidad", "Recovery", "Activacion"],
        benefits: [
          "Movimiento grupal en un formato accesible.",
          "Espacio social para conectar antes y despues de la actividad.",
          "Recuperacion y habitos para cerrar la experiencia con criterio.",
          "Primer contacto con el ecosistema ESDEC desde una vivencia real.",
        ],
        evolution: [
          "Los participantes pasaron de entrenar de forma aislada a compartir una experiencia con estructura.",
          "La actividad transformo el movimiento en encuentro, energia y continuidad.",
          "El evento dejo una invitacion concreta a seguir preparandose dentro del ecosistema.",
        ],
        image: "/images/Evento/image.png",
        modalImage: "/images/Evento/image.png",
        imageAlt: "Social Running ESDEC con running, cafe y recovery",
        ctaLabel: "Revivir la experiencia",
        ctaHref: "https://www.instagram.com/esdec.ar",
      },
      {
        id: "trekking",
        name: "Trekking ESDEC",
        date: "Abril 2026",
        tag: "Trekking - Comunidad",
        summary:
          "Una salida al aire libre para conectar movimiento, naturaleza y grupo desde una experiencia accesible y con sentido.",
        description:
          "El trekking ESDEC fue una activacion pensada para que cada participante pudiera salir de la rutina, moverse con otros y reconocer que el progreso tambien se construye paso a paso, con entorno, energia y acompanamiento.",
        pillars: ["Comunidad", "Bienestar", "Movimiento consciente", "Conexion"],
        benefits: [
          "Actividad guiada en un entorno natural.",
          "Espacio para compartir con personas con objetivos similares.",
          "Ritmo accesible para distintos niveles de experiencia.",
          "Cierre grupal para integrar lo vivido y fortalecer vinculos.",
        ],
        evolution: [
          "Los participantes ganaron confianza para sumarse a nuevas experiencias.",
          "Se activaron vinculos reales entre personas que antes entrenaban de forma aislada.",
          "La experiencia dejo una sensacion concreta de energia, claridad y continuidad.",
        ],
        image: "/images/Evento/Trekking/trekkingCARD.png",
        modalImage: "/images/Evento/Trekking/trekkingMODAL.png",
        imageAlt: "Participantes del trekking ESDEC en una experiencia al aire libre",
        ctaLabel: "Revivir la experiencia",
        ctaHref: "https://www.instagram.com/esdec.ar",
      },
      {
        id: "pastoral",
        name: "Pastoral ESDEC",
        date: "Marzo 2026",
        tag: "Comunidad - Valores",
        summary:
          "Un encuentro donde el deporte funciono como puente para compartir valores, pertenencia y crecimiento personal.",
        description:
          "Pastoral ESDEC reunio a personas que buscaban algo mas que una actividad fisica: un espacio para sentirse parte, conversar, moverse y conectar el desarrollo deportivo con la dimension humana.",
        pillars: ["Pertenencia", "Valores", "Acompanamiento", "Comunidad"],
        benefits: [
          "Espacio cuidado para compartir experiencias personales.",
          "Actividad fisica como disparador de encuentro y reflexion.",
          "Acompanamiento cercano antes, durante y despues de la jornada.",
          "Mayor integracion entre personas, grupos y referentes.",
        ],
        evolution: [
          "Los participantes se fueron con mas claridad sobre su lugar dentro de una comunidad.",
          "Se fortalecio la confianza para hablar, pedir ayuda y acompanar a otros.",
          "El evento transformo una participacion puntual en sentido de pertenencia.",
        ],
        image: "/images/Evento/Pastoral/pastoralCARD.png",
        modalImage: "/images/Evento/Pastoral/pastoralMODAL.png",
        imageAlt: "Participantes de Pastoral ESDEC compartiendo una jornada comunitaria",
        ctaLabel: "Revivir la experiencia",
        ctaHref: "https://www.instagram.com/esdec.ar",
      },
      {
        id: "torneo-padel",
        name: "Torneo de Padel ESDEC",
        date: "Febrero 2026",
        tag: "Padel - Competencia",
        summary:
          "Una competencia amateur organizada para vivir el deporte con estructura, energia y conexion entre jugadores.",
        description:
          "El torneo de padel ESDEC fue una experiencia competitiva con foco en el disfrute, la organizacion y el progreso. Cada pareja encontro un espacio para medirse, aprender y formar parte de una comunidad activa.",
        pillars: ["Competencia sana", "Organizacion", "Progreso", "Comunidad"],
        benefits: [
          "Formato claro para competir sin perder el disfrute.",
          "Encuentro entre jugadores de distintos niveles.",
          "Motivacion para seguir entrenando despues del torneo.",
          "Experiencia social alrededor del deporte.",
        ],
        evolution: [
          "Los participantes identificaron aspectos concretos para mejorar su juego.",
          "La competencia impulso constancia y nuevas ganas de entrenar.",
          "El evento convirtio partidos aislados en una experiencia compartida con continuidad.",
        ],
        image: "/images/Evento/TorneoPadel/padelCARD.png",
        modalImage: "/images/Evento/TorneoPadel/padelMODAL.png",
        imageAlt: "Jugadores del Torneo de Padel ESDEC durante una competencia amateur",
        ctaLabel: "Revivir la experiencia",
        ctaHref: "https://www.instagram.com/esdec.ar",
      },
    ] satisfies PastEvent[],
  },
  ecosystem: {
    eyebrow: "Despues del evento",
    title: "EL EVENTO ES SOLO EL ARRANQUE.",
    titleAccent: "NO EL FINAL.",
    intro:
      "Lo que activás en un evento ESDEC no se queda ahí — sigue en el resto del ecosistema.",
    items: [
      {
        id: "comunidad",
        icon: "equipo",
        title: "SEGUÍS EN COMUNIDAD",
        body: "La gente que conocés en el evento no se pierde al otro día — queda como red real dentro de ESDEC.",
      },
      {
        id: "salud",
        icon: "bienestar",
        title: "TU CUERPO, ACOMPAÑADO",
        body: "Lo que activaste se conecta con Salud Deportiva ESDEC: recuperación y seguimiento real, no solo el día del evento.",
      },
      {
        id: "educacion",
        icon: "educacion",
        title: "APRENDÉS DE VERDAD",
        body: "Cada evento es también una puerta a Educación ESDEC — contenido de profesionales para entrenar con criterio.",
      },
      {
        id: "tecnologia",
        icon: "tecnologia",
        title: "TU PROGRESO, MEDIDO",
        body: "Tecnología ESDEC conecta lo que hacés en cada evento con tu proceso completo — no arrancás de cero cada vez.",
      },
    ] satisfies EcosystemLink[],
  },
  finalCta: {
    eyebrow: "El momento es ahora",
    headlineLine1: "RESERV\u00c1 TU LUGAR.",
    headlineLine2: "HOY.",
    headlineStack: [
      "EVOLUCIONAR NO ES UNA IDEA.",
      "ES UNA DECISI\u00d3N.",
      "Y ES AHORA.",
    ],
    body:
      "Cada evento ESDEC es el punto donde empez\u00e1s a entrenar, conectar y avanzar en serio.",
    panelEyebrow: "TU PR\u00d3XIMA EXPERIENCIA ARRANCA AC\u00c1",
    panelTitle: "RESERV\u00c1 TU LUGAR EN ESDEC",
    panelBody: "Esto empieza en un evento. No termina ah\u00ed.",
    panelTrust: "Pr\u00f3ximo evento en C\u00f3rdoba \u00b7 Cupos limitados",
    ctas: [
      {
        label: "QUIERO MI LUGAR \u2192",
        href: "https://tally.so/r/VL1BlM",
        trackingLabel: "events_final_place",
        variant: "primary",
        external: true,
      },
      {
        label: "Ver todos los eventos",
        href: "#eventos-anteriores",
        trackingLabel: "events_final_all",
        variant: "secondary",
      },
    ] satisfies EventsCta[],
  },
} as const;
