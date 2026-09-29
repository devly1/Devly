import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/devly-logo-transparent.png";
import { NAV_LINKS } from "@/lib/devly";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out",
        scrolled ? "glass-panel border-b" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:h-24 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="brand-mark flex min-w-0 items-center"
          aria-label="Devly Web Studio, inicio"
        >
          <img
            src={logo}
            alt="Devly Web Studio"
            width={398}
            height={308}
            className="h-14 w-auto shrink-0 object-contain sm:h-[4.5rem]"
          />
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-muted-foreground rounded-md px-3 py-2 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <a
            href="#cotizar"
            className="button-primary rounded-md px-4 py-2.5 text-sm font-semibold whitespace-nowrap sm:px-5"
          >
            Hablemos
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="border-border text-foreground hover:bg-surface-2 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "glass-panel overflow-hidden border-t transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col p-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/90 hover:bg-surface-2 block rounded-lg px-4 py-3 text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
