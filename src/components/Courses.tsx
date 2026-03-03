import { Clock, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { COURSES, WHATSAPP_URL } from "@/lib/constants";

export default function Courses() {
  return (
    <section id="cursos" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cursos"
          title="Encontre o curso ideal para seu filho"
          subtitle="Três programas desenvolvidos para diferentes faixas etárias, do iniciante ao avançado."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {COURSES.map((course) => (
            <Card key={course.title} highlighted={course.popular} className="flex flex-col">
              {course.popular && (
                <span className="font-tech mb-4 inline-block self-start rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  Mais Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{course.title}</h3>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="font-tech rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                  {course.ageRange}
                </span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>

              <ul className="mt-6 flex-1 space-y-2">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                    {topic}
                  </li>
                ))}
              </ul>

              <Button
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full"
                variant={course.popular ? "primary" : "ghost"}
              >
                {course.popular ? "Quero me Matricular" : "Saiba Mais"}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
