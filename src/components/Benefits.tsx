import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { BENEFITS } from "@/lib/constants";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Benefícios"
          title="O que seu filho vai desenvolver"
          subtitle="Habilidades essenciais para o presente e o futuro, desenvolvidas de forma prática e divertida."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
