import type { Locale } from "./config";

export type PortfolioCopy = {
  meta: { title: string; description: string };
  nav: string[];
  cover: {
    role: string;
    location: string;
    date: string;
    available: string;
    kicker: string;
    title: [string, string];
    summary: string;
    contents: string;
    items: string[];
    start: string;
    artworkAlt: string;
    artworkCaption: string;
  };
  marquee: string[];
  about: {
    label: string;
    hello: string;
    name: string;
    intro: string;
    statement: string;
    paragraphs: string[];
    tags: string[];
    quote: string;
  };
  work: {
    label: string;
    title: [string, string];
    intro: string;
    cards: Array<{
      eyebrow: string;
      title: string;
      description: string;
      tags: string[];
      tone: "red" | "green" | "yellow";
    }>;
  };
  journey: {
    label: string;
    title: [string, string];
    timeLabels: string[];
    roles: Array<{
      period: string;
      company: string;
      role: string;
      description: string;
    }>;
    toolbox: string;
    toolGroups: Array<{ title: string; items: string }>;
  };
  contact: {
    prompt: string;
    title: [string, string];
    sun: string;
    links: { email: string; linkedin: string; github: string };
  };
  footer: { made: string; back: string };
};

const sharedCards = [
  { tags: ["React", "TypeScript", "Vite"], tone: "red" as const },
  { tags: ["Design system", "Storybook", "Figma"], tone: "green" as const },
  { tags: ["Mixpanel", "Datadog", "Sentry"], tone: "yellow" as const },
];

const sharedJourney = {
  companies: ["Sympla", "Melo Pagamentos"],
  periods: ["2025 — Hoje", "2024 — 2025"],
  tools: [
    {
      title: "Core",
      items: "JavaScript · TypeScript · React · Next.js · HTML · CSS / Sass",
    },
    {
      title: "Experiência",
      items: "Acessibilidade · SEO · Performance · SSR · ISR · SSG",
    },
    {
      title: "Produto",
      items: "GraphQL · Mixpanel · Datadog · TrackJS · Jest · Cypress",
    },
  ],
};

const pt: PortfolioCopy = {
  meta: {
    title: "Laura Torquato | Desenvolvedora Front-end React e TypeScript",
    description:
      "Portfólio de Laura Torquato, desenvolvedora front-end em São Paulo com experiência em React, TypeScript, Next.js, design systems e acessibilidade.",
  },
  nav: ["Sobre", "Trabalho", "Trajetória", "Contato"],
  cover: {
    role: "Front-end Developer",
    location: "São Paulo · Brasil",
    date: "Set / 2026",
    available: "Aberta a boas conversas",
    kicker: "A matéria de capa",
    title: ["Engenharia com", "personalidade."],
    summary:
      "Uno produto, código e atenção aos detalhes para criar experiências digitais fáceis de usar — e difíceis de esquecer.",
    contents: "Nesta edição",
    items: [
      "Quem é Laura",
      "Trabalho selecionado",
      "Trajetória",
      "Vamos conversar",
    ],
    start: "Comece por aqui",
    artworkAlt:
      "Colagem editorial com globo vermelho, mapas, arquitetura clássica e paisagem litorânea",
    artworkCaption: "História × praia × código",
  },
  marquee: [
    "Interfaces",
    "Acessibilidade",
    "Performance",
    "Curiosidade",
    "Produto",
  ],
  about: {
    label: "01 / Perfil",
    hello: "Oi, eu sou",
    name: "Laura.",
    intro:
      "Desenvolvedora front-end, viajante incansável e colecionadora de referências.",
    statement:
      "Gosto de entender como as coisas funcionam — uma interface, uma cidade ou uma história.",
    paragraphs: [
      "Hoje sou Front-end Developer na Sympla. Trabalho com React, Next.js e TypeScript, conectando decisões técnicas às necessidades de produto e às pessoas que vão usar o que construímos.",
      "Fora da tela, estou quase sempre planejando uma viagem, perto da praia, em um lugar histórico, num show ou com um livro. Esse repertório também aparece no meu jeito de criar.",
    ],
    tags: ["Praia", "Viagens", "História", "Leitura", "Shows", "Arte"],
    quote: "Curiosidade é minha ferramenta favorita.",
  },
  work: {
    label: "02 / Trabalho selecionado",
    title: ["Histórias de", "transformação."],
    intro:
      "O código entra como ferramenta. O que importa é o problema resolvido, a experiência melhorada e uma base pronta para continuar evoluindo.",
    cards: [
      {
        ...sharedCards[0],
        eyebrow: "Modernização · Arquitetura",
        title: "Do legado a uma base preparada para evoluir.",
        description:
          "Da RFC à implementação: definição da estratégia para migrar uma aplicação em PHP 5, Yii e Vue.js 2 para um monorepo com React, TypeScript e Vite, integrado ao Design System.",
      },
      {
        ...sharedCards[1],
        eyebrow: "Consistência · Escala",
        title: "Componentes que aproximam design e desenvolvimento.",
        description:
          "Implementação de componentes a partir das especificações do Figma em uma biblioteca compartilhada com Storybook, fortalecendo a consistência entre telas e aplicações modernizadas.",
      },
      {
        ...sharedCards[2],
        eyebrow: "Produto · Qualidade",
        title: "Visibilidade para decidir e melhorar.",
        description:
          "Da escolha das ferramentas ao acompanhamento em produção: instrumentação, abstrações compartilhadas de tracking, dashboards e alertas para antecipar e investigar problemas.",
      },
    ],
  },
  journey: {
    label: "03 / Trajetória",
    title: ["Experiência em", "movimento."],
    timeLabels: ["Atualmente", "Anteriormente"],
    roles: [
      {
        period: sharedJourney.periods[0],
        company: sharedJourney.companies[0],
        role: "Front-end Developer",
        description:
          "Desenvolvimento e evolução de experiências digitais, equilibrando qualidade de interface, manutenção e necessidades reais de produto.",
      },
      {
        period: sharedJourney.periods[1],
        company: sharedJourney.companies[1],
        role: "Front-end Developer",
        description:
          "Modernização de aplicações legadas, criação de componentes reutilizáveis, integrações GraphQL, tracking e observabilidade.",
      },
    ],
    toolbox: "Caixa de ferramentas",
    toolGroups: sharedJourney.tools,
  },
  contact: {
    prompt: "Tem uma oportunidade, um projeto ou uma ideia interessante?",
    title: ["Vamos", "conversar!"],
    sun: "Olá · Hola · Hi",
    links: { email: "E-mail", linkedin: "LinkedIn", github: "GitHub" },
  },
  footer: { made: "Feito com curiosidade", back: "Voltar à capa ↑" },
};

const en: PortfolioCopy = {
  ...pt,
  meta: {
    title: "Laura Torquato | React and TypeScript Front-end Developer",
    description:
      "Laura Torquato's portfolio, a São Paulo-based front-end developer experienced in React, TypeScript, Next.js, design systems and accessibility.",
  },
  nav: ["About", "Work", "Journey", "Contact"],
  cover: {
    ...pt.cover,
    location: "São Paulo · Brazil",
    date: "Sep / 2026",
    available: "Open to good conversations",
    kicker: "The cover story",
    title: ["Engineering with", "personality."],
    summary:
      "I combine product, code and attention to detail to create digital experiences that are easy to use — and hard to forget.",
    contents: "In this issue",
    items: ["Meet Laura", "Selected work", "Journey", "Let's talk"],
    start: "Start here",
    artworkAlt:
      "Editorial collage with a red globe, maps, classical architecture and a coastline",
    artworkCaption: "History × beach × code",
  },
  marquee: [
    "Interfaces",
    "Accessibility",
    "Performance",
    "Curiosity",
    "Product",
  ],
  about: {
    ...pt.about,
    label: "01 / Profile",
    hello: "Hi, I am",
    intro:
      "Front-end developer, relentless traveler and collector of references.",
    statement:
      "I like understanding how things work — an interface, a city or a story.",
    paragraphs: [
      "I am a Front-end Developer at Sympla. I work with React, Next.js and TypeScript, connecting technical decisions to product needs and to the people who use what we build.",
      "Away from the screen, I am usually planning a trip, by the beach, in a historic place, at a concert or reading a book. This repertoire also shapes the way I create.",
    ],
    tags: ["Beach", "Travel", "History", "Reading", "Concerts", "Art"],
    quote: "Curiosity is my favorite tool.",
  },
  work: {
    ...pt.work,
    label: "02 / Selected work",
    title: ["Stories of", "transformation."],
    intro:
      "Code is the tool. What matters is the problem solved, the experience improved, and a foundation ready to keep evolving.",
    cards: [
      {
        ...sharedCards[0],
        eyebrow: "Modernization · Architecture",
        title: "From legacy to a foundation ready to evolve.",
        description:
          "From RFC to implementation: defining the strategy to migrate a PHP 5, Yii and Vue.js 2 application to a React, TypeScript and Vite monorepo integrated with the Design System.",
      },
      {
        ...sharedCards[1],
        eyebrow: "Consistency · Scale",
        title: "Components that bring design and development closer.",
        description:
          "Implementing components from Figma specifications in a shared Storybook library, strengthening consistency across modernized screens and applications.",
      },
      {
        ...sharedCards[2],
        eyebrow: "Product · Quality",
        title: "Visibility to decide and improve.",
        description:
          "From tool selection to production monitoring: instrumentation, shared tracking abstractions, dashboards and alerts to anticipate and investigate issues.",
      },
    ],
  },
  journey: {
    ...pt.journey,
    label: "03 / Journey",
    title: ["Experience in", "motion."],
    timeLabels: ["Currently", "Previously"],
    roles: [
      {
        ...pt.journey.roles[0],
        period: "2025 — Present",
        role: "Front-end Developer",
        description:
          "Building and evolving digital experiences while balancing interface quality, maintainability and real product needs.",
      },
      {
        ...pt.journey.roles[1],
        description:
          "Legacy modernization, reusable components, GraphQL integrations, tracking and observability.",
      },
    ],
    toolbox: "Toolbox",
    toolGroups: [
      sharedJourney.tools[0],
      { ...sharedJourney.tools[1], title: "Experience" },
      { ...sharedJourney.tools[2], title: "Product" },
    ],
  },
  contact: {
    prompt: "Have an opportunity, a project or an interesting idea?",
    title: ["Let's", "talk!"],
    sun: "Olá · Hola · Hi",
    links: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
  },
  footer: { made: "Made with curiosity", back: "Back to cover ↑" },
};

const es: PortfolioCopy = {
  ...en,
  meta: {
    title: "Laura Torquato | Desarrolladora Front-end React y TypeScript",
    description:
      "Portfolio de Laura Torquato, desarrolladora front-end en São Paulo con experiencia en React, TypeScript, Next.js, design systems y accesibilidad.",
  },
  nav: ["Sobre mí", "Trabajo", "Trayectoria", "Contacto"],
  cover: {
    ...en.cover,
    location: "São Paulo · Brasil",
    available: "Abierta a buenas conversaciones",
    kicker: "La historia de portada",
    title: ["Ingeniería con", "personalidad."],
    summary:
      "Uno producto, código y atención al detalle para crear experiencias digitales fáciles de usar — y difíciles de olvidar.",
    contents: "En esta edición",
    items: [
      "Quién es Laura",
      "Trabajo seleccionado",
      "Trayectoria",
      "Hablemos",
    ],
    start: "Empieza aquí",
    artworkAlt:
      "Collage editorial con globo rojo, mapas, arquitectura clásica y paisaje costero",
    artworkCaption: "Historia × playa × código",
  },
  marquee: [
    "Interfaces",
    "Accesibilidad",
    "Rendimiento",
    "Curiosidad",
    "Producto",
  ],
  about: {
    ...en.about,
    label: "01 / Perfil",
    hello: "Hola, soy",
    intro:
      "Desarrolladora front-end, viajera incansable y coleccionista de referencias.",
    statement:
      "Me gusta entender cómo funcionan las cosas — una interfaz, una ciudad o una historia.",
    paragraphs: [
      "Actualmente soy desarrolladora Front-end en Sympla. Trabajo con React, Next.js y TypeScript, conectando decisiones técnicas con el producto y con las personas que usan lo que construimos.",
      "Fuera de la pantalla, casi siempre estoy planeando un viaje, cerca de la playa, en un lugar histórico, en un concierto o con un libro. Ese repertorio también aparece en mi forma de crear.",
    ],
    tags: ["Playa", "Viajes", "Historia", "Lectura", "Conciertos", "Arte"],
    quote: "La curiosidad es mi herramienta favorita.",
  },
  work: {
    ...en.work,
    label: "02 / Trabajo seleccionado",
    title: ["Historias de", "transformación."],
    intro:
      "El código es la herramienta. Lo que importa es el problema resuelto, la experiencia mejorada y una base lista para seguir evolucionando.",
    cards: [
      {
        ...pt.work.cards[0],
        eyebrow: "Modernización · Arquitectura",
        title: "Del legado a una base preparada para evolucionar.",
        description:
          "De la RFC a la implementación: definición de la estrategia para migrar una aplicación en PHP 5, Yii y Vue.js 2 a un monorepo con React, TypeScript y Vite, integrado con el Design System.",
      },
      {
        ...pt.work.cards[1],
        eyebrow: "Consistencia · Escala",
        title: "Componentes que acercan diseño y desarrollo.",
        description:
          "Implementación de componentes a partir de las especificaciones de Figma en una biblioteca compartida con Storybook, fortaleciendo la consistencia entre pantallas y aplicaciones modernizadas.",
      },
      {
        ...pt.work.cards[2],
        eyebrow: "Producto · Calidad",
        title: "Visibilidad para decidir y mejorar.",
        description:
          "Desde la elección de herramientas hasta el monitoreo en producción: instrumentación, abstracciones compartidas de tracking, dashboards y alertas para anticipar e investigar problemas.",
      },
    ],
  },
  journey: {
    ...en.journey,
    label: "03 / Trayectoria",
    title: ["Experiencia en", "movimiento."],
    timeLabels: ["Actualmente", "Anteriormente"],
    roles: [
      {
        ...pt.journey.roles[0],
        period: "2025 — Hoy",
        role: "Desarrolladora Front-end",
      },
      { ...pt.journey.roles[1], role: "Desarrolladora Front-end" },
    ],
    toolbox: "Caja de herramientas",
    toolGroups: [
      sharedJourney.tools[0],
      { ...sharedJourney.tools[1], title: "Experiencia" },
      { ...sharedJourney.tools[2], title: "Producto" },
    ],
  },
  contact: {
    prompt: "¿Tienes una oportunidad, un proyecto o una idea interesante?",
    title: ["Vamos a", "conversar!"],
    sun: "Olá · Hola · Hi",
    links: { email: "Email", linkedin: "LinkedIn", github: "GitHub" },
  },
  footer: { made: "Hecho con curiosidad", back: "Volver a la portada ↑" },
};

export const portfolioCopy = { pt, en, es } satisfies Record<
  Locale,
  PortfolioCopy
>;
