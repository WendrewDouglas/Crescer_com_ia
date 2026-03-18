import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CTA_CONTENT, WHATSAPP_URL } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="gradient-cta relative overflow-hidden py-16 sm:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-white/5" />
      </div>

      <Container className="relative text-center">
        <h2 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          {CTA_CONTENT.title}
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-xl text-white/90">
          {CTA_CONTENT.subtitle}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            {CTA_CONTENT.primaryCta}
          </Button>
          <Button
            href={WHATSAPP_URL}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            {CTA_CONTENT.secondaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
