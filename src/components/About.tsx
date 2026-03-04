import { CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre" className="bg-muted py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {ABOUT.description}
          </p>

          <p className="mt-8 mb-2 text-left text-lg font-semibold text-foreground">
            Aqui, seu filho aprende:
          </p>

          <ul className="space-y-3 text-left">
            {ABOUT.checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-lg text-foreground/80"
              >
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-leaf" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-lg font-medium text-primary">
            {ABOUT.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}
