import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="O que os pais dizem"
          subtitle="Famílias que já transformaram o futuro de seus filhos com nossos cursos."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
