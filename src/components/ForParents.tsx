import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { FOR_PARENTS } from "@/lib/constants";

export default function ForParents() {
  return (
    <section className="bg-muted py-16 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={FOR_PARENTS.eyebrow}
          title={FOR_PARENTS.title}
        />

        <div className="mx-auto max-w-2xl text-center">
          <div className="space-y-3 sm:space-y-4">
            {FOR_PARENTS.questions.map((q) => (
              <div
                key={q}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 sm:p-5 text-left shadow-sm"
              >
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-base sm:text-lg text-muted-foreground italic">{q}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-lg sm:text-xl leading-relaxed font-medium text-foreground">
            {FOR_PARENTS.answer}
          </p>

          <div className="mt-6 sm:mt-8 space-y-1">
            {FOR_PARENTS.closing.map((line) => (
              <p
                key={line}
                className="text-base sm:text-lg font-semibold text-primary"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
