import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { DEVELOPMENT_AREAS, DEVELOPMENT_CLOSING } from "@/lib/constants";

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="O que seu filho desenvolve"
          title="Desenvolvimento integral na era digital"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DEVELOPMENT_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="group rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-semibold text-foreground">
          {DEVELOPMENT_CLOSING}
        </p>
      </Container>
    </section>
  );
}
