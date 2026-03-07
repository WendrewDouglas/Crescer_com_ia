import { Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { LEAD_CAPTURE, WHATSAPP_URL } from "@/lib/constants";

export default function LeadCapture() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-background p-8 text-center shadow-lg sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Download className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {LEAD_CAPTURE.title}
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            {LEAD_CAPTURE.description}
          </p>

          <p className="mt-2 text-muted-foreground">
            {LEAD_CAPTURE.subtitle}
          </p>

          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            <Download className="h-5 w-5" />
            {LEAD_CAPTURE.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
