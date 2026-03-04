import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HERO, WHATSAPP_URL } from "@/lib/constants";

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
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
            <Sparkles className="h-4 w-4 text-cta" />
            Cursos presenciais de IA para crianças
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {HERO.headline}
          </h1>

          <p className="mt-4 text-2xl font-bold text-cta sm:text-3xl">
            {HERO.subheadline}
          </p>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-white/80 sm:text-xl">
            {HERO.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-8 text-xl font-semibold text-white sm:text-2xl">
            {HERO.cta}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#informacoes">Quero garantir a vaga</Button>
            <Button
              href={WHATSAPP_URL}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
