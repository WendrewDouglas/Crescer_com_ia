import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { METHODOLOGY_STEPS } from "@/lib/constants";

export default function Methodology() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Metodologia"
          title="Como ensinamos IA"
          subtitle="Nossa metodologia exclusiva em 4 etapas garante que cada aluno aprenda no seu ritmo."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-4 gap-8">
            {/* Connector line */}
            <div className="absolute top-10 right-12 left-12 h-0.5 bg-primary/20" />

            {METHODOLOGY_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg">
                    <Icon className="h-9 w-9 text-white" />
                  </div>
                  <span className="font-tech mb-1 text-sm font-bold text-primary">
                    Etapa {step.number}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <div className="relative space-y-8 pl-12">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-primary/20" />

            {METHODOLOGY_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  <div className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-tech mb-1 block text-sm font-bold text-primary">
                    Etapa {step.number}
                  </span>
                  <h3 className="mb-1 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
