import { Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LEAD_CAPTURE, WHATSAPP_URL } from "@/lib/constants";

export default function LeadCapture() {
  return (
    <section className="bg-muted py-16 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-background p-6 sm:p-12 text-center shadow-lg">
          <div className="mx-auto mb-5 sm:mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10">
            <Download className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
          </div>

          <h2 className="text-xl font-bold text-foreground sm:text-3xl">
            {LEAD_CAPTURE.title}
          </h2>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
            {LEAD_CAPTURE.description}
          </p>

          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            {LEAD_CAPTURE.subtitle}
          </p>

          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 sm:mt-8 w-full sm:w-auto"
          >
            <Download className="h-5 w-5" />
            {LEAD_CAPTURE.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
