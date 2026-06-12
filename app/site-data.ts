export type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

export type RoutePage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  highlights: string[];
  cards: Array<{ title: string; text: string }>;
  related?: Array<{ label: string; href: string }>;
};

export const navItems: NavItem[] = [
  {
    label: "Vida",
    href: "/vida",
    children: [
      { label: "Nosso time", href: "/vida/nosso-time" },
      { label: "O que fazemos", href: "/vida/o-que-fazemos" },
      { label: "Notícias", href: "/vida/noticias" },
    ],
  },
  {
    label: "Patrimonial",
    href: "/patrimonial",
    children: [
      { label: "Nosso time", href: "/patrimonial/nosso-time" },
      { label: "O que fazemos", href: "/patrimonial/o-que-fazemos" },
      { label: "Notícias", href: "/patrimonial/noticias" },
    ],
  },
  { label: "IRB(+) Inteligência", href: "/inteligencia" },
  { label: "Contato", href: "/contato" },
];

export const homeNews = [
  {
    tag: "Artigos",
    title: "Seguro garantia, solvência e o desafio da qualidade da capacidade",
    image: "/assets/patrimonial-construction.png",
    href: "/patrimonial/noticias",
  },
  {
    tag: "IRB(P&D)",
    title: "El Niño leva incerteza aos produtores rurais da bacia do Paraná",
    image: "/assets/vida-storm.png",
    href: "/vida/noticias",
  },
  {
    tag: "Mercado",
    title: "Mercado segurador ganha tração e avança 15,7% em março",
    image: "/assets/inteligencia-data.png",
    href: "/inteligencia",
  },
  {
    tag: "Patrimonial",
    title: "Infraestrutura crítica pede visão integrada de risco",
    image: "/assets/patrimonial-construction.png",
    href: "/patrimonial/o-que-fazemos",
  },
];

export const featureBands = [
  {
    title: "Vida",
    text: "Soluções para proteger pessoas, equipes e famílias com inteligência técnica, governança e resposta ágil.",
    image: "/assets/vida-storm.png",
    href: "/vida",
  },
  {
    title: "Patrimonial",
    text: "Proteção para patrimônio, obras, infraestrutura e operações expostas a riscos complexos.",
    image: "/assets/patrimonial-construction.png",
    href: "/patrimonial",
  },
  {
    title: "IRB(+)Inteligência",
    text: "Dados, boletins e análises para transformar riscos em decisões mais claras para o mercado segurador.",
    image: "/assets/inteligencia-data.png",
    href: "/inteligencia",
  },
];

const vidaRelated = [
  { label: "Nosso time", href: "/vida/nosso-time" },
  { label: "O que fazemos", href: "/vida/o-que-fazemos" },
  { label: "Notícias", href: "/vida/noticias" },
];

const patrimonialRelated = [
  { label: "Nosso time", href: "/patrimonial/nosso-time" },
  { label: "O que fazemos", href: "/patrimonial/o-que-fazemos" },
  { label: "Notícias", href: "/patrimonial/noticias" },
];

export const routePages: Record<string, RoutePage> = {
  vida: {
    slug: "vida",
    title: "Vida",
    eyebrow: "Proteção para pessoas",
    description:
      "Construímos soluções para riscos ligados a pessoas, benefícios e continuidade familiar, com capacidade técnica e atenção ao detalhe.",
    image: "/assets/vida-storm.png",
    highlights: ["Vida em grupo", "Benefícios", "Continuidade"],
    related: vidaRelated,
    cards: [
      {
        title: "Visão integrada",
        text: "Analisamos perfil de carteira, exposição e objetivos para desenhar proteções consistentes.",
      },
      {
        title: "Gestão próxima",
        text: "Times especialistas acompanham jornadas de contratação, renovação e suporte operacional.",
      },
      {
        title: "Resposta clara",
        text: "Indicadores e governança ajudam cada cliente a entender riscos e tomar decisões melhores.",
      },
    ],
  },
  "vida/nosso-time": {
    slug: "vida/nosso-time",
    title: "Nosso time",
    eyebrow: "Vida",
    description:
      "Especialistas em subscrição, relacionamento, dados e atendimento trabalham juntos para proteger pessoas com rigor técnico.",
    image: "/assets/vida-storm.png",
    highlights: ["Subscrição", "Relacionamento", "Operação"],
    related: vidaRelated,
    cards: [
      {
        title: "Equipe multidisciplinar",
        text: "Combinamos visão atuarial, comercial e operacional para estruturar soluções completas.",
      },
      {
        title: "Atendimento consultivo",
        text: "Cada conversa parte do contexto do cliente, não de um produto fechado.",
      },
      {
        title: "Governança",
        text: "Processos de análise e acompanhamento dão previsibilidade às decisões.",
      },
    ],
  },
  "vida/o-que-fazemos": {
    slug: "vida/o-que-fazemos",
    title: "O que fazemos",
    eyebrow: "Vida",
    description:
      "Apoiamos empresas e parceiros na estruturação de soluções de vida, benefícios e proteção financeira.",
    image: "/assets/vida-storm.png",
    highlights: ["Diagnóstico", "Modelagem", "Acompanhamento"],
    related: vidaRelated,
    cards: [
      {
        title: "Mapeamento de exposição",
        text: "Entendemos público, cobertura, capital segurado e dinâmica de risco.",
      },
      {
        title: "Desenho da solução",
        text: "Ajustamos capacidade, condições e fluxos para proteger pessoas com eficiência.",
      },
      {
        title: "Monitoramento",
        text: "Acompanhamos indicadores para renovar, recalibrar e melhorar a carteira.",
      },
    ],
  },
  "vida/noticias": {
    slug: "vida/noticias",
    title: "Notícias",
    eyebrow: "Vida",
    description:
      "Conteúdos, análises e atualizações sobre proteção de pessoas, benefícios e tendências do mercado.",
    image: "/assets/vida-storm.png",
    highlights: ["Artigos", "Boletins", "Tendências"],
    related: vidaRelated,
    cards: [
      {
        title: "Proteção de renda ganha prioridade",
        text: "Empresas buscam soluções mais flexíveis para apoiar colaboradores em cenários de incerteza.",
      },
      {
        title: "Dados melhoram subscrição",
        text: "Indicadores de carteira tornam o desenho de coberturas mais preciso e sustentável.",
      },
      {
        title: "Benefícios sob nova ótica",
        text: "A integração entre saúde financeira e proteção pessoal passa a orientar novas propostas.",
      },
    ],
  },
  patrimonial: {
    slug: "patrimonial",
    title: "Patrimonial",
    eyebrow: "Proteção para ativos",
    description:
      "Desenvolvemos soluções para proteger patrimônio, obras, operações e infraestrutura contra riscos de alta complexidade.",
    image: "/assets/patrimonial-construction.png",
    highlights: ["Infraestrutura", "Obras", "Operações"],
    related: patrimonialRelated,
    cards: [
      {
        title: "Capacidade técnica",
        text: "Avaliamos riscos físicos, financeiros e climáticos com uma abordagem de portfólio.",
      },
      {
        title: "Soluções sob medida",
        text: "Modelamos proteções para diferentes estágios de obra, operação e expansão.",
      },
      {
        title: "Continuidade",
        text: "Ajudamos clientes a reduzir perdas e preservar a capacidade de operar.",
      },
    ],
  },
  "patrimonial/nosso-time": {
    slug: "patrimonial/nosso-time",
    title: "Nosso time",
    eyebrow: "Patrimonial",
    description:
      "Profissionais com experiência em engenharia, subscrição e gestão de risco cuidam de ativos estratégicos.",
    image: "/assets/patrimonial-construction.png",
    highlights: ["Engenharia", "Subscrição", "Sinistros"],
    related: patrimonialRelated,
    cards: [
      {
        title: "Leitura técnica",
        text: "A equipe traduz informações de obra, operação e exposição em decisões seguráveis.",
      },
      {
        title: "Coordenação",
        text: "Integramos corretores, seguradoras e clientes para acelerar análises e respostas.",
      },
      {
        title: "Experiência",
        text: "O time atua em riscos industriais, infraestrutura, energia, logística e construção.",
      },
    ],
  },
  "patrimonial/o-que-fazemos": {
    slug: "patrimonial/o-que-fazemos",
    title: "O que fazemos",
    eyebrow: "Patrimonial",
    description:
      "Apoiamos negócios que precisam proteger ativos críticos, contratos, obras e cadeias operacionais.",
    image: "/assets/patrimonial-construction.png",
    highlights: ["Diagnóstico", "Capacidade", "Prevenção"],
    related: patrimonialRelated,
    cards: [
      {
        title: "Análise de risco",
        text: "Mapeamos ameaças materiais, climáticas e operacionais para definir prioridades.",
      },
      {
        title: "Estruturação",
        text: "Combinamos capacidade, retenção e condições para criar uma proteção robusta.",
      },
      {
        title: "Planos de melhoria",
        text: "Recomendações técnicas ajudam a reduzir exposição e melhorar segurabilidade.",
      },
    ],
  },
  "patrimonial/noticias": {
    slug: "patrimonial/noticias",
    title: "Notícias",
    eyebrow: "Patrimonial",
    description:
      "Atualizações sobre infraestrutura, riscos climáticos, obras, garantias e tendências em seguros patrimoniais.",
    image: "/assets/patrimonial-construction.png",
    highlights: ["Infraestrutura", "Clima", "Garantias"],
    related: patrimonialRelated,
    cards: [
      {
        title: "Obras demandam gestão de capacidade",
        text: "Projetos de infraestrutura exigem leitura fina de cronograma, fornecedores e exposição.",
      },
      {
        title: "Clima entra no centro da análise",
        text: "Eventos extremos passam a influenciar precificação, prevenção e continuidade operacional.",
      },
      {
        title: "Seguro garantia evolui",
        text: "Contratos mais complexos exigem avaliação técnica e acompanhamento permanente.",
      },
    ],
  },
  inteligencia: {
    slug: "inteligencia",
    title: "IRB(+) Inteligência",
    eyebrow: "Dados para decidir",
    description:
      "Uma plataforma de inteligência para consultar boletins, análises e indicadores do mercado segurador.",
    image: "/assets/inteligencia-data.png",
    highlights: ["Boletins", "Dashboard", "Análises"],
    cards: [
      {
        title: "IRB+ Mercado",
        text: "Indicadores mensais para acompanhar desempenho, prêmios, sinistros e tendências.",
      },
      {
        title: "Boletins técnicos",
        text: "Leituras objetivas sobre comportamento do mercado e fatores de risco relevantes.",
      },
      {
        title: "Visão acionável",
        text: "Dados tratados para apoiar planejamento, estratégia comercial e gestão de carteira.",
      },
    ],
  },
  contato: {
    slug: "contato",
    title: "Contato",
    eyebrow: "Fale com o IRB(Seg)",
    description:
      "Envie sua mensagem para conversar com nossos times de Vida, Patrimonial ou Inteligência.",
    image: "/assets/inteligencia-data.png",
    highlights: ["Relacionamento", "Comercial", "Atendimento"],
    cards: [
      {
        title: "Comercial",
        text: "Converse sobre novas oportunidades, programas e desenho de soluções.",
      },
      {
        title: "Atendimento",
        text: "Acompanhe demandas, documentos e encaminhamentos operacionais.",
      },
      {
        title: "Inteligência",
        text: "Solicite informações sobre boletins, dados e análises de mercado.",
      },
    ],
  },
  "norma-de-uso-e-privacidade": {
    slug: "norma-de-uso-e-privacidade",
    title: "Norma de uso e privacidade",
    eyebrow: "Transparência",
    description:
      "Diretrizes de uso do site, privacidade, tratamento de dados e canais de contato institucional.",
    image: "/assets/hero-ocean.png",
    highlights: ["Privacidade", "Segurança", "Transparência"],
    cards: [
      {
        title: "Uso do site",
        text: "As informações publicadas têm caráter institucional e podem ser atualizadas periodicamente.",
      },
      {
        title: "Dados pessoais",
        text: "Dados enviados por formulários devem ser usados apenas para atendimento da solicitação.",
      },
      {
        title: "Contato",
        text: "Dúvidas sobre uso e privacidade podem ser encaminhadas pelos canais oficiais.",
      },
    ],
  },
};

export function pageForSlug(slug: string[]) {
  return routePages[slug.join("/")];
}
