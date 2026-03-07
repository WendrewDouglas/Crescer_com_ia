"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-horizontal.jpeg"
              alt="Crescer com IA"
              width={160}
              height={53}
              className={`rounded transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground/70" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Inscreva-se
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="cursor-pointer md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu de navegação"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav aria-label="Menu de navegação" className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2 w-full">
              Inscreva-se
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
