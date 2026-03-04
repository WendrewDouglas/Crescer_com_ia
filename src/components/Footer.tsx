import { Brain, Mail, Phone, MapPin, Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAV_LINKS, CONTACT, WHATSAPP_URL, FOOTER_TAGLINE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground pt-16 pb-8 text-white/70">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Crescer com IA</span>
            </a>
            <p className="mt-2 text-sm leading-relaxed">{FOOTER_TAGLINE}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Links do rodapé">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
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
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <ul className="space-y-3">
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
                  @crescercomia
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Crescer com IA. Todos os direitos
          reservados.
        </div>
      </Container>
    </footer>
  );
}
