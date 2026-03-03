import { Brain, Sparkles, Code } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-white/5" />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/10" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
              <Sparkles className="h-4 w-4 text-cta" />
              Cursos presenciais de IA para jovens
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Preparando crianças e adolescentes para o mundo da{" "}
              <span className="text-cta">Inteligência Artificial</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
              Cursos presenciais que ensinam IA de forma prática, criativa e segura.
              Seu filho vai aprender a usar a tecnologia como ferramenta de criação,
              não apenas de consumo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#cursos">Conheça Nossos Cursos</Button>
              <Button href={WHATSAPP_URL} variant="outline" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Decorative icon area */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative">
              <div className="flex h-72 w-72 items-center justify-center rounded-full bg-white/10">
                <Brain className="h-32 w-32 text-white/80" />
              </div>
              <div className="absolute -top-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cta shadow-lg">
                <Sparkles className="h-8 w-8 text-foreground" />
              </div>
              <div className="absolute -bottom-2 -left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf shadow-lg">
                <Code className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
