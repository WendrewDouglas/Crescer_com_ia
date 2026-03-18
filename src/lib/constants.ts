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
  headline: "Seu filho já usa Inteligência Artificial todos os dias.",
  subheadline: "Mas será que ele sabe o que está fazendo?",
  paragraphs: [
    "Quando seu filho pesquisa no Google, pede ajuda pro assistente de voz ou joga online, ele já está usando IA. Isso acontece nos jogos, nas redes sociais e até nos trabalhos da escola.",
    "Só que usar não é a mesma coisa que entender.",
    "Quando a criança entende como a tecnologia funciona, ela deixa de ser apenas consumidora e passa a criar, questionar e tomar decisões melhores.",
  ],
  cta: "A Crescer com IA ensina crianças a usar a tecnologia a favor delas, com segurança, criatividade e pensamento crítico.",
};

/* ───── About ───── */
export const ABOUT = {
  eyebrow: "O que é a Crescer com IA",
  title: "Vai muito além de um curso de computação.",
  description:
    "A Crescer com IA é um programa presencial feito especialmente para crianças de 7 a 12 anos. Aqui, seu filho aprende a usar Inteligência Artificial de um jeito prático, divertido e seguro.",
  checklist: [
    "O que é Inteligência Artificial e como ela funciona no dia a dia",
    "Como usar ferramentas de IA para criar projetos legais",
    "Como pensar de forma crítica antes de acreditar em tudo que vê na internet",
    "Como pesquisar de verdade, com responsabilidade",
    "Como transformar curiosidade em habilidades que vão fazer diferença",
  ],
  closing: "Tudo isso num ambiente acolhedor, com acompanhamento de perto e muita mão na massa.",
};

/* ───── Methodology ───── */
export const METHODOLOGY = {
  eyebrow: "Como Funciona",
  title: "Aprender fazendo, do jeito que criança gosta",
  items: [
    "Aulas presenciais toda semana, com atividades práticas",
    "Turmas pequenas pra cada criança ter atenção de verdade",
    "Projetos mão na massa usando ferramentas reais de IA",
    "Atividades que estimulam a criatividade e a resolução de problemas",
    "Acompanhamento próximo do progresso de cada aluno",
  ],
  closing:
    "Cada encontro é pensado pra fazer a criança pensar, criar e se divertir aprendendo. Sem decoreba, sem tédio.",
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
    title: "Raciocínio",
    label: "Raciocínio",
    description:
      "Seu filho aprende a pensar com lógica, resolver problemas e tomar decisões com mais clareza.",
  },
  {
    icon: Palette,
    title: "Criatividade",
    label: "Criatividade",
    description:
      "Ele vai criar textos, imagens e projetos usando Inteligência Artificial como ferramenta criativa.",
  },
  {
    icon: Heart,
    title: "Consciência digital",
    label: "Consciência digital",
    description:
      "Aprende a usar a tecnologia com equilíbrio, sem exageros, entendendo o que é saudável e o que não é.",
  },
  {
    icon: Rocket,
    title: "Preparo pro futuro",
    label: "Preparo pro futuro",
    description:
      "Desenvolve habilidades que já estão sendo pedidas no mercado de trabalho e que vão fazer diferença lá na frente.",
  },
];

export const DEVELOPMENT_CLOSING =
  "Não é sobre formar programadores. É sobre preparar crianças espertas, criativas e prontas pro mundo que já mudou.";

/* ───── Why Early ───── */
export const WHY_EARLY = {
  eyebrow: "Por que começar agora?",
  title: "O mundo dos nossos filhos já é diferente do nosso.",
  changes: [
    "As profissões que eles vão ter talvez nem existam ainda.",
    "A forma de aprender mudou e vai continuar mudando.",
    "Saber lidar com tecnologia virou tão importante quanto saber ler e escrever.",
  ],
  intro:
    "Crianças que aprendem cedo a usar tecnologia com consciência:",
  benefits: [
    "Ficam mais independentes e seguras no mundo digital",
    "Sabem separar o que é confiável do que não é",
    "Aprendem a questionar em vez de só aceitar",
    "Desenvolvem mais criatividade e capacidade de inovar",
  ],
  closing: "Quanto antes esse aprendizado começa, mais natural ele se torna.",
};

/* ───── Difference ───── */
export const DIFFERENCE = {
  eyebrow: "Nossa Diferença",
  title: "Tecnologia com propósito, não por modismo.",
  description:
    "Na Crescer com IA, a gente não ensina só a mexer em ferramentas. A gente ensina a pensar, a criar e a usar a tecnologia com responsabilidade.",
  commitmentIntro: "Nosso compromisso com seu filho:",
  commitments: [
    "Inovação que faz sentido pra idade dele",
    "Desenvolvimento humano em primeiro lugar",
    "Segurança em tudo que ele faz no digital",
    "Aprendizado prático, que ele leva pra vida",
  ],
  closing:
    "Porque o futuro precisa de crianças inteligentes, mas, acima de tudo, conscientes.",
};

/* ───── For Parents ───── */
export const FOR_PARENTS = {
  eyebrow: "Direto com Você, Pai e Mãe",
  title: "A gente sabe que você pode estar pensando:",
  questions: [
    '"Meu filho tem só 7 anos. Não é cedo demais pra aprender sobre IA?"',
    '"Ele já passa tempo demais na frente da tela. Isso não vai piorar?"',
  ],
  answer:
    "A gente entende essa preocupação. Por isso, nosso foco nunca é aumentar o tempo de tela. É transformar esse tempo em aprendizado de verdade. Seu filho vai aprender a usar a tecnologia com propósito, não ficar navegando sem rumo.",
  closing: ["Você continua no controle.", "Seu filho ganha direção."],
};

/* ───── Practical Info (replaces Courses) ───── */
export const PRACTICAL_INFO = {
  eyebrow: "Informações Práticas",
  title: "Tudo que você precisa saber",
  items: [
    { icon: "MapPin", label: "Aulas presenciais em Araçatuba e região" },
    { icon: "User", label: "Para crianças de 7 a 12 anos" },
    { icon: "Users", label: "Turmas pequenas, com atenção individualizada" },
    { icon: "Calendar", label: "Próxima turma: em breve" },
    { icon: "Award", label: "Certificado de conclusão ao final" },
  ],
  closing:
    "As vagas são limitadas pra garantir que cada criança tenha o acompanhamento que merece.",
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
    role: "Mãe do Lucas, 8 anos",
    text: "O Lucas chegou em casa contando que criou uma história usando IA e quis apresentar pra família inteira no jantar. Nunca vi ele tão animado com algo que aprendeu fora da escola.",
    initials: "AP",
  },
  {
    name: "Roberto S.",
    role: "Pai da Sofia, 10 anos",
    text: "A Sofia começou a questionar as coisas que via na internet. Outro dia me perguntou se uma notícia era verdade e foi pesquisar. Isso pra mim já valeu o curso todo.",
    initials: "RS",
  },
  {
    name: "Carla F.",
    role: "Mãe do Pedro, 12 anos",
    text: "O Pedro era viciado em celular e a gente vivia brigando. Depois do curso, ele começou a usar o tempo no computador pra criar coisas. A relação dele com a tecnologia mudou completamente.",
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
    question: "Meu filho precisa saber mexer em computador pra participar?",
    answer:
      "Não precisa, não! O curso é feito pra crianças de 7 a 12 anos de qualquer nível. A gente começa do zero e vai avançando no ritmo de cada turma.",
  },
  {
    question: "As aulas são presenciais ou online?",
    answer:
      "Todas as aulas são presenciais, em Araçatuba e região. A gente acredita que criança aprende melhor quando está junto de outras crianças, com um professor do lado acompanhando de perto.",
  },
  {
    question: "Quanto tempo dura cada aula?",
    answer:
      "Cada encontro tem 1h30 e acontece uma vez por semana. O programa tem duração definida e no final seu filho recebe um certificado.",
  },
  {
    question: "Quantas crianças tem por turma?",
    answer:
      "As turmas são pequenas de propósito. Assim, cada criança recebe atenção de verdade e a gente consegue acompanhar o progresso de cada um.",
  },
  {
    question: "Como faço pra matricular meu filho?",
    answer:
      "É simples! Manda uma mensagem pra gente pelo WhatsApp e nossa equipe explica tudo. Você também pode agendar uma aula experimental gratuita pra seu filho conhecer o curso antes de se comprometer.",
  },
  {
    question: "Tem certificado?",
    answer:
      "Tem sim! Quando seu filho completa o programa, ele recebe um certificado da Crescer com IA reconhecendo tudo que aprendeu.",
  },
  {
    question: "Posso levar meu filho pra conhecer antes de matricular?",
    answer:
      "Claro! A gente oferece uma aula experimental gratuita justamente pra isso. Seu filho conhece os professores, a metodologia e já sai da primeira aula com vontade de voltar.",
  },
];

/* ───── CTA ───── */
export const CTA_CONTENT = {
  title: "Seu filho não precisa esperar o futuro chegar.",
  subtitle:
    "Ele pode começar a se preparar agora, com quem entende de tecnologia e de crianças.",
  primaryCta: "Quero garantir a vaga do meu filho",
  secondaryCta: "Falar com a equipe pelo WhatsApp",
};

/* ───── Lead Capture ───── */
export const LEAD_CAPTURE = {
  title: "Guia gratuito pra você, pai e mãe",
  description:
    'Baixe de graça o material "Como preparar seu filho para a era da Inteligência Artificial", com dicas práticas que você pode aplicar em casa hoje.',
  subtitle:
    "Mesmo que você ainda esteja em dúvida sobre o curso, esse guia já vai te ajudar.",
  cta: "Baixar guia gratuito",
};

/* ───── Footer ───── */
export const FOOTER_TAGLINE =
  "Educar para o presente. Preparar para o futuro.";

/* ───── Contact ───── */
export const CONTACT = {
  whatsapp: "5518998266162",
  whatsappDisplay: "(18) 99826-6162",
  email: "contato@crescercomia.com.br",
  instagram: "https://instagram.com/crescercom.ia",
  instagramHandle: "@crescercom.ia",
  address: "Araçatuba, SP",
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre o curso de IA para crianças da Crescer com IA."
)}`;
