import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { DIFFERENCE } from "@/lib/constants";

export default function Difference() {
  return (
    <section className="gradient-hero relative overflow-hidden py-16 sm:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-white/5" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={DIFFERENCE.eyebrow}
          title={DIFFERENCE.title}
          light
        />

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            {DIFFERENCE.description}
          </p>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-white">
            {DIFFERENCE.commitmentIntro}
          </p>

          <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
            {DIFFERENCE.commitments.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2.5 sm:px-5 sm:py-3 text-white"
              >
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cta shrink-0" />
                <span className="text-sm sm:text-base font-medium">{c}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 sm:mt-10 text-lg sm:text-xl font-semibold text-cta">
            {DIFFERENCE.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}
