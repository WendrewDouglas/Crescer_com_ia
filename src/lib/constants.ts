import {
  Brain,
  Palette,
  Heart,
  Rocket,
  type LucideIcon,
} from "lucide-react";

/* ───── Navigation ───── */
export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Informações", href: "#informacoes" },
  { label: "FAQ", href: "#faq" },
];

/* ───── Hero ───── */
export const HERO = {
  headline: "Seu filho já vive na era da Inteligência Artificial.",
  subheadline: "A pergunta é: ele está preparado para ela?",
  paragraphs: [
    "A IA já está nos jogos, nas redes sociais, nas pesquisas escolares e nos aplicativos que as crianças usam todos os dias.",
    "Mas aprender a usar não é o mesmo que entender.",
    "Sem orientação, a tecnologia pode gerar dependência. Com direcionamento, ela desenvolve autonomia, criatividade e protagonismo.",
  ],
  cta: "A Crescer com IA nasceu para ensinar crianças a dominar a tecnologia — e não serem dominadas por ela.",
};

/* ───── About ───── */
export const ABOUT = {
  eyebrow: "O que é a Crescer com IA",
  title: "Muito mais que um curso de tecnologia.",
  description:
    "Somos um programa presencial de formação para crianças e adolescentes que desejam aprender a usar Inteligência Artificial de forma prática, ética e criativa.",
  checklist: [
    "Como funciona a Inteligência Artificial",
    "Como usar ferramentas de IA para criar projetos",
    "Como desenvolver pensamento crítico",
    "Como pesquisar com responsabilidade",
    "Como transformar curiosidade em habilidade",
  ],
  closing: "Tudo isso em um ambiente seguro, supervisionado e estimulante.",
};

/* ───── Methodology ───── */
export const METHODOLOGY = {
  eyebrow: "Como Funciona",
  title: "Metodologia prática e vivencial",
  items: [
    "Aulas presenciais semanais",
    "Turmas reduzidas",
    "Projetos práticos com ferramentas reais de IA",
    "Desenvolvimento de criatividade e resolução de problemas",
    "Acompanhamento próximo e orientado",
  ],
  closing:
    "Cada encontro é pensado para estimular o raciocínio, a expressão e a autonomia digital da criança.",
};

/* ───── Development Areas (replaces Benefits) ───── */
export interface DevelopmentArea {
  icon: LucideIcon;
  title: string;
  label: string;
  description: string;
}

export const DEVELOPMENT_AREAS: DevelopmentArea[] = [
  {
    icon: Brain,
    title: "Cognitivo",
    label: "Cognitivo",
    description:
      "Raciocínio lógico, pensamento crítico e capacidade de resolver problemas.",
  },
  {
    icon: Palette,
    title: "Criativo",
    label: "Criativo",
    description:
      "Criação de textos, imagens, ideias e projetos usando Inteligência Artificial.",
  },
  {
    icon: Heart,
    title: "Emocional",
    label: "Emocional",
    description:
      "Uso consciente da tecnologia, equilíbrio digital e responsabilidade online.",
  },
  {
    icon: Rocket,
    title: "Futuro",
    label: "Futuro",
    description:
      "Base sólida para carreiras e oportunidades que já estão surgindo.",
  },
];

export const DEVELOPMENT_CLOSING =
  "Porque ensinar IA não é sobre formar programadores. É sobre formar crianças preparadas para o mundo real.";

/* ───── Why Early ───── */
export const WHY_EARLY = {
  eyebrow: "Por que ensinar IA desde cedo?",
  title: "O mundo mudou.",
  changes: [
    "As profissões estão mudando.",
    "A forma de aprender está mudando.",
    "A maneira de pensar está mudando.",
  ],
  intro:
    "Crianças que aprendem desde cedo a usar tecnologia com consciência:",
  benefits: [
    "Desenvolvem mais autonomia",
    "Têm mais segurança digital",
    "Aprendem a questionar e não apenas consumir",
    "Se tornam mais criativas e inovadoras",
  ],
  closing: "E isso começa agora.",
};

/* ───── Difference ───── */
export const DIFFERENCE = {
  eyebrow: "Nossa Diferença",
  title: "Tecnologia com propósito.",
  description:
    "Na Crescer com IA, não ensinamos apenas ferramentas. Ensinamos valores, responsabilidade e pensamento.",
  commitmentIntro: "Nosso compromisso é equilibrar:",
  commitments: [
    "Inovação",
    "Desenvolvimento humano",
    "Segurança",
    "Educação prática",
  ],
  closing:
    "Porque o futuro precisa de crianças inteligentes — mas também conscientes.",
};

/* ───── For Parents ───── */
export const FOR_PARENTS = {
  eyebrow: "Para os Pais",
  title: "Sabemos que muitos pais se perguntam:",
  questions: [
    '"Não é cedo demais para aprender IA?"',
    '"Meu filho vai passar ainda mais tempo na frente da tela?"',
  ],
  answer:
    "Aqui, o foco não é aumentar o tempo de tela. É transformar o tempo de tela em tempo de aprendizado significativo.",
  closing: ["Você continua no controle.", "Seu filho ganha direção."],
};

/* ───── Practical Info (replaces Courses) ───── */
export const PRACTICAL_INFO = {
  eyebrow: "Informações Práticas",
  title: "Comece agora",
  items: [
    { icon: "MapPin", label: "Curso presencial em Araçatuba e região" },
    { icon: "User", label: "Idade: 9 a 14 anos" },
    { icon: "Users", label: "Turmas reduzidas" },
    { icon: "Calendar", label: "Próxima turma: em breve" },
    { icon: "Award", label: "Certificado ao final do programa" },
  ],
  closing:
    "Vagas limitadas para manter a qualidade do acompanhamento.",
};

/* ───── Testimonials ───── */
export interface Testimonial {
  name: string;
  role: string;
  text: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ana Paula M.",
    role: "Mãe do Lucas, 10 anos",
    text: "Meu filho adora as aulas! Ele já criou uma história interativa usando IA e apresentou para toda a família. Nunca vi ele tão empolgado com o aprendizado.",
    initials: "AP",
  },
  {
    name: "Roberto S.",
    role: "Pai da Sofia, 12 anos",
    text: "A Sofia melhorou muito no raciocínio lógico e na criatividade. O curso ensina tecnologia de forma responsável, e isso nos deixa muito tranquilos como pais.",
    initials: "RS",
  },
  {
    name: "Carla F.",
    role: "Mãe do Pedro, 14 anos",
    text: "O Pedro já está criando seus próprios projetos com IA. O curso despertou nele uma paixão por tecnologia que está direcionando sua escolha profissional.",
    initials: "CF",
  },
];

/* ───── FAQ ───── */
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "É necessário ter experiência prévia com tecnologia?",
    answer:
      "Não! Nosso programa é projetado para todos os níveis. O conteúdo é adaptado para a faixa etária de 9 a 14 anos, começando do básico e progredindo gradualmente.",
  },
  {
    question: "Os cursos são presenciais ou online?",
    answer:
      "Todos os nossos cursos são 100% presenciais em Araçatuba e região. Acreditamos que a interação face a face, a colaboração em grupo e o acompanhamento próximo dos instrutores são essenciais para o aprendizado.",
  },
  {
    question: "Qual a duração das aulas?",
    answer:
      "As aulas têm duração de 1h30 e acontecem uma vez por semana. O programa tem duração definida com certificado ao final.",
  },
  {
    question: "Quantos alunos por turma?",
    answer:
      "Trabalhamos com turmas reduzidas, garantindo atenção individualizada e melhor acompanhamento do progresso de cada estudante.",
  },
  {
    question: "Como funciona a matrícula?",
    answer:
      "A matrícula pode ser feita entrando em contato pelo WhatsApp. Nossa equipe entrará em contato para confirmar os detalhes e agendar uma aula experimental gratuita.",
  },
  {
    question: "O curso oferece certificado?",
    answer:
      "Sim! Ao concluir o programa, o aluno recebe um certificado de conclusão da Crescer com IA, reconhecendo as habilidades desenvolvidas.",
  },
  {
    question: "Meu filho pode fazer uma aula experimental?",
    answer:
      "Com certeza! Oferecemos uma aula experimental gratuita para que seu filho conheça nossa metodologia e nossos instrutores antes de efetuar a matrícula.",
  },
];

/* ───── CTA ───── */
export const CTA_CONTENT = {
  title: "O futuro não espera.",
  subtitle:
    "E seu filho também não deveria esperar para se preparar.",
  primaryCta: "Quero garantir a vaga do meu filho",
  secondaryCta: "Falar com a equipe pelo WhatsApp",
};

/* ───── Lead Capture ───── */
export const LEAD_CAPTURE = {
  title: "Guia gratuito para pais",
  description:
    'Baixe gratuitamente o material: "Como preparar seu filho para a era da Inteligência Artificial"',
  subtitle:
    "Receba orientações práticas para aplicar em casa enquanto decide sobre o curso presencial.",
  cta: "Baixar guia gratuito",
};

/* ───── Footer ───── */
export const FOOTER_TAGLINE =
  "Educar para o presente. Preparar para o futuro.";

/* ───── Contact ───── */
export const CONTACT = {
  whatsapp: "5500000000000",
  whatsappDisplay: "(00) 00000-0000",
  email: "contato@crescercomia.com.br",
  instagram: "https://instagram.com/crescercomia",
  address: "Araçatuba, SP",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os cursos de IA para crianças da Crescer com IA."
)}`;
