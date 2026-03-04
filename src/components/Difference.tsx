import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { DIFFERENCE } from "@/lib/constants";

export default function Difference() {
  return (
    <section className="gradient-hero relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow={DIFFERENCE.eyebrow}
          title={DIFFERENCE.title}
          light
        />

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-white/80">
            {DIFFERENCE.description}
          </p>

          <p className="mt-8 text-lg font-medium text-white">
            {DIFFERENCE.commitmentIntro}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {DIFFERENCE.commitments.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-white"
              >
                <Sparkles className="h-4 w-4 text-cta" />
                <span className="font-medium">{c}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xl font-semibold text-cta">
            {DIFFERENCE.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}
