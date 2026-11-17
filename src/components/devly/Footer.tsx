import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/devly-logo-transparent.png";
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL, whatsappLink } from "@/lib/devly";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios y precios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Cotizar", href: "#cotizar" },
];

const SERVICES = [
  { label: "Landing Pages", href: "#servicios" },
  { label: "Sitios Web", href: "#servicios" },
  { label: "E-commerce", href: "#servicios" },
  { label: "Soluciones Digitales", href: "#servicios" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <img
              src={logo}
              alt="Devly Web Studio"
              width={398}
              height={299}
              loading="lazy"
              className="h-20 w-auto object-contain object-left"
            />
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
              Diseño y desarrollo web para negocios que quieren explicar mejor lo que hacen.
            </p>
          </div>

          <FooterColumn title="Navegación" items={NAV} />
          <FooterColumn title="Servicios" items={SERVICES} />

          <div className="min-w-0">
            <h3 className="text-sm font-semibold tracking-wide">Contacto</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground group inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground group inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4 shrink-0" aria-hidden />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground group inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Facebook className="h-4 w-4 shrink-0" aria-hidden />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted-foreground group inline-flex items-center gap-2 text-sm transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  Correo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border mt-12 border-t pt-6">
          <p className="text-muted-foreground/80 text-center text-xs">
            © 2026 Devly. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <h3 className="text-sm font-semibold tracking-wide">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="link-underline text-muted-foreground text-sm hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
