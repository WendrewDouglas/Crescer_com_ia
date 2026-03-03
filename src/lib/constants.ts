import {
  Brain,
  Lightbulb,
  Briefcase,
  ShieldCheck,
  Users,
  Star,
  Search,
  BookOpen,
  Hammer,
  Share2,
  type LucideIcon,
} from "lucide-react";

/* ───── Navigation ───── */
export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Cursos", href: "#cursos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

/* ───── About mini-cards ───── */
export const ABOUT_CARDS = [
  {
    title: "Turmas Presenciais",
    description: "Aprendizado com interação real entre alunos e instrutores.",
  },
  {
    title: "Metodologia Exclusiva",
    description: "Conteúdo desenvolvido por especialistas em educação e IA.",
  },
  {
    title: "Certificado",
    description: "Ao final do curso, seu filho recebe um certificado de conclusão.",
  },
];

/* ───── Benefits ───── */
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: Brain,
    title: "Pensamento Crítico",
    description:
      "Desenvolve a capacidade de analisar, questionar e resolver problemas de forma lógica e estruturada.",
  },
  {
    icon: Lightbulb,
    title: "Criatividade",
    description:
      "Estimula a imaginação e a capacidade de criar soluções inovadoras utilizando ferramentas de IA.",
  },
  {
    icon: Briefcase,
    title: "Preparação Profissional",
    description:
      "Prepara para as carreiras do futuro com habilidades em alta demanda no mercado de trabalho.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Digital",
    description:
      "Ensina o uso responsável e ético da tecnologia, com foco na segurança online.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Promove o trabalho em equipe e a comunicação através de projetos colaborativos.",
  },
  {
    icon: Star,
    title: "Confiança",
    description:
      "Fortalece a autoestima ao ver seus próprios projetos ganhando vida com ajuda da IA.",
  },
];

/* ───── Methodology ───── */
export interface MethodStep {
  icon: LucideIcon;
  number: number;
  title: string;
  description: string;
}

export const METHODOLOGY_STEPS: MethodStep[] = [
  {
    icon: Search,
    number: 1,
    title: "Explorar",
    description: "Os alunos descobrem o mundo da IA através de exemplos do dia a dia e demonstrações interativas.",
  },
  {
    icon: BookOpen,
    number: 2,
    title: "Entender",
    description: "Compreendem os conceitos fundamentais por trás da inteligência artificial com atividades práticas.",
  },
  {
    icon: Hammer,
    number: 3,
    title: "Criar",
    description: "Desenvolvem seus próprios projetos utilizando ferramentas de IA adaptadas para cada faixa etária.",
  },
  {
    icon: Share2,
    number: 4,
    title: "Compartilhar",
    description: "Apresentam suas criações para a turma, praticando comunicação e recebendo feedback construtivo.",
  },
];

/* ───── Courses ───── */
export interface Course {
  title: string;
  ageRange: string;
  duration: string;
  description: string;
  topics: string[];
  popular?: boolean;
}

export const COURSES: Course[] = [
  {
    title: "Exploradores de IA",
    ageRange: "7-9 anos",
    duration: "3 meses",
    description:
      "Introdução lúdica ao mundo da inteligência artificial com atividades práticas e jogos educativos.",
    topics: [
      "O que é IA e como ela está ao nosso redor",
      "Criação de histórias com IA",
      "Jogos interativos com machine learning",
      "Noções de lógica e programação visual",
    ],
  },
  {
    title: "Criadores Digitais",
    ageRange: "10-13 anos",
    duration: "4 meses",
    description:
      "Projetos criativos com ferramentas de IA para imagem, texto e áudio. O curso mais procurado!",
    topics: [
      "Criação de arte digital com IA generativa",
      "Chatbots e assistentes virtuais",
      "Edição criativa com ferramentas de IA",
      "Introdução à programação com Python",
      "Projeto final: app com IA",
    ],
    popular: true,
  },
  {
    title: "Inovadores do Futuro",
    ageRange: "14-17 anos",
    duration: "5 meses",
    description:
      "Formação avançada para adolescentes que querem dominar as tecnologias de IA e criar soluções reais.",
    topics: [
      "Machine Learning e redes neurais",
      "Desenvolvimento de aplicações com IA",
      "Ética e responsabilidade em IA",
      "Análise de dados e visualização",
      "Projeto final: solução real com IA",
      "Portfólio digital profissional",
    ],
  },
];

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
    role: "Mãe do Lucas, 9 anos",
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
    role: "Mãe do Pedro, 15 anos",
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
      "Não! Nossos cursos são projetados para todos os níveis. Cada faixa etária tem um conteúdo adaptado, começando do básico e progredindo gradualmente.",
  },
  {
    question: "Os cursos são presenciais ou online?",
    answer:
      "Todos os nossos cursos são 100% presenciais. Acreditamos que a interação face a face, a colaboração em grupo e o acompanhamento próximo dos instrutores são essenciais para o aprendizado de crianças e adolescentes.",
  },
  {
    question: "Qual a duração das aulas?",
    answer:
      "As aulas têm duração de 1h30 e acontecem uma vez por semana. Cada curso tem duração de 3 a 5 meses, dependendo da faixa etária.",
  },
  {
    question: "Quantos alunos por turma?",
    answer:
      "Trabalhamos com turmas reduzidas de no máximo 12 alunos, garantindo atenção individualizada e melhor acompanhamento do progresso de cada estudante.",
  },
  {
    question: "Como funciona a matrícula?",
    answer:
      "A matrícula pode ser feita entrando em contato pelo WhatsApp ou preenchendo o formulário de inscrição. Nossa equipe entrará em contato para confirmar os detalhes e agendar uma aula experimental gratuita.",
  },
  {
    question: "O curso oferece certificado?",
    answer:
      "Sim! Ao concluir o curso, o aluno recebe um certificado de conclusão da Crescer com IA, reconhecendo as habilidades desenvolvidas ao longo do programa.",
  },
  {
    question: "Meu filho pode fazer uma aula experimental?",
    answer:
      "Com certeza! Oferecemos uma aula experimental gratuita para que seu filho conheça nossa metodologia e nossos instrutores antes de efetuar a matrícula.",
  },
];

/* ───── Contact ───── */
export const CONTACT = {
  whatsapp: "5500000000000",
  whatsappDisplay: "(00) 00000-0000",
  email: "contato@crescercomia.com.br",
  instagram: "https://instagram.com/crescercomia",
  address: "Rua Exemplo, 123 — Centro, Cidade/UF",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os cursos de IA para crianças e adolescentes."
)}`;
