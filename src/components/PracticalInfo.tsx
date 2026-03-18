import { MapPin, User, Users, Calendar, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PRACTICAL_INFO, WHATSAPP_URL } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  User,
  Users,
  Calendar,
  Award,
};

export default function PracticalInfo() {
  return (
    <section id="informacoes" className="py-16 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={PRACTICAL_INFO.eyebrow}
          title={PRACTICAL_INFO.title}
        />

        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl border border-border bg-background p-5 sm:p-8 shadow-md">
            <ul className="space-y-4 sm:space-y-5">
              {PRACTICAL_INFO.items.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg text-foreground"
                  >
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    {item.label}
                  </li>
                );
              })}
            </ul>

            <p className="mt-5 sm:mt-6 text-center text-sm font-medium text-primary">
              {PRACTICAL_INFO.closing}
            </p>

            <Button
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 sm:mt-6 w-full"
            >
              Garantir minha vaga
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
