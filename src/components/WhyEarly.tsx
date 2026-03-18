import { CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { WHY_EARLY } from "@/lib/constants";

export default function WhyEarly() {
  return (
    <section className="py-16 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-tech mb-2 inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
            {WHY_EARLY.eyebrow}
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {WHY_EARLY.title}
          </h2>

          <div className="mt-5 sm:mt-6 space-y-1 text-base sm:text-lg text-muted-foreground">
            {WHY_EARLY.changes.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-base sm:text-lg font-medium text-foreground">
            {WHY_EARLY.intro}
          </p>

          <ul className="mt-5 sm:mt-6 space-y-3 text-left sm:mx-auto sm:max-w-md">
            {WHY_EARLY.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-base sm:text-lg text-foreground/80"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                {b}
              </li>
            ))}
          </ul>

          <p className="mt-8 sm:mt-10 text-xl sm:text-2xl font-bold text-primary">
            {WHY_EARLY.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}
