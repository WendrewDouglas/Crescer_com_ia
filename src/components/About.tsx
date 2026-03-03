import { GraduationCap, Puzzle, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ABOUT_CARDS } from "@/lib/constants";

const icons = [GraduationCap, Puzzle, Award];

export default function About() {
  return (
    <section id="sobre" className="bg-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Quem Somos"
          title="Nascemos da paixão por educação e tecnologia"
          subtitle="Acreditamos que toda criança merece aprender sobre Inteligência Artificial de forma segura, divertida e transformadora."
        />

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Na <strong className="text-foreground">Crescer com IA</strong>, nossos cursos
            são <strong className="text-primary">100% presenciais</strong> porque
            valorizamos a interação humana, a colaboração em equipe e o acompanhamento
            próximo de cada aluno. Combinamos tecnologia de ponta com uma metodologia
            acolhedora e prática.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {ABOUT_CARDS.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
