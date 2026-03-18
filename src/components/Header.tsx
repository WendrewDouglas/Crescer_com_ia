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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f7f7f7]/95 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-horizontal.webp"
              alt="Crescer com IA"
              width={160}
              height={53}
              className="h-8 w-auto sm:h-11 rounded transition-all duration-300"
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
            className="relative z-50 cursor-pointer p-2 -mr-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu de navegação"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className={`h-6 w-6 ${scrolled || mobileOpen ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 top-16 bg-black/40 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Nav Panel */}
      <div
        className={`fixed top-16 right-0 left-0 mx-4 transition-all duration-300 md:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-label="Menu de navegação"
          className="flex flex-col gap-1 rounded-2xl bg-background p-5 shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary active:bg-primary/10"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full"
          >
            Inscreva-se
          </Button>
        </nav>
      </div>
    </header>
  );
}
