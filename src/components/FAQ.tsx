"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AccordionItem from "@/components/ui/AccordionItem";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Perguntas Frequentes"
          title="Tire suas dúvidas"
          subtitle="Tudo o que você precisa saber sobre nossos cursos de IA para crianças e adolescentes."
        />

        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
