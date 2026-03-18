import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAV_LINKS, CONTACT, WHATSAPP_URL, FOOTER_TAGLINE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground pt-12 sm:pt-16 pb-8 text-white/70">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <a href="#" className="mb-4 inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-horizontal.webp"
                alt="Crescer com IA"
                width={180}
                height={60}
                className="mx-auto sm:mx-0 h-12 w-auto sm:h-auto sm:w-[180px] rounded"
              />
            </a>
            <p className="mt-2 text-sm leading-relaxed">{FOOTER_TAGLINE}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Links do rodapé" className="text-center sm:text-left">
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="mb-3 sm:mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="space-y-3 inline-flex flex-col items-start">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 border-t border-white/10 pt-6 sm:pt-8 text-center text-sm">
          <div className="mb-2">
            <a
              href="/privacidade"
              className="transition-colors hover:text-white"
            >
              Política de Privacidade
            </a>
          </div>
          &copy; {new Date().getFullYear()} Crescer com IA. Todos os direitos
          reservados.
        </div>
      </Container>
    </footer>
  );
}
