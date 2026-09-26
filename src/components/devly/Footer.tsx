import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/devly-logo.png.png";
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL, whatsappLink } from "@/lib/devly";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Precios", href: "#precios" },
  { label: "Consejos", href: "#consejos" },
  { label: "Preparar proyecto", href: "#preparar" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  { label: "Landing Pages", href: "#servicios" },
  { label: "Sitios Web", href: "#servicios" },
  { label: "E-commerce", href: "#servicios" },
  { label: "Soluciones Digitales", href: "#servicios" },
];

export function Footer() {
  return (
    <footer className="border-border bg-surface/40 border-t">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <img
              src={logo}
              alt="Devly Web Studio"
              width={472}
              height={406}
              loading="lazy"
              className="h-28 w-auto object-contain object-left"
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
                  className="text-muted-foreground hover:text-brand inline-flex items-center gap-2 text-sm transition-colors"
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
                  className="text-muted-foreground hover:text-brand inline-flex items-center gap-2 text-sm transition-colors"
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
                  className="text-muted-foreground hover:text-brand inline-flex items-center gap-2 text-sm transition-colors"
                >
                  <Facebook className="h-4 w-4 shrink-0" aria-hidden />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted-foreground hover:text-brand inline-flex items-center gap-2 text-sm transition-colors"
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
              className="text-muted-foreground hover:text-brand text-sm transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
