import { CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { METHODOLOGY } from "@/lib/constants";

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={METHODOLOGY.eyebrow}
          title={METHODOLOGY.title}
        />

        <div className="mx-auto max-w-2xl">
          <ul className="space-y-4">
            {METHODOLOGY.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-lg text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-lg leading-relaxed text-muted-foreground">
            {METHODOLOGY.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}
