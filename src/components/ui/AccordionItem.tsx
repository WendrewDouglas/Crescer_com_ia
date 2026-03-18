"use client";

import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div
      className="border-b border-border"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <h3>
        <button
          id={buttonId}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 py-4 sm:py-5 text-left cursor-pointer"
        >
          <span className="text-base sm:text-lg font-semibold text-foreground" itemProp="name">
            {question}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-4 sm:pb-5" : "grid-rows-[0fr]"
        }`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" itemProp="text">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
