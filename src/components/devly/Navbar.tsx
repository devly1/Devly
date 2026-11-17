import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/devly-logo-transparent.png";
import { NAV_LINKS } from "@/lib/devly";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca el enlace de la sección visible
  useEffect(() => {
    // También se observan secciones fuera del menú, para quitar el resaltado al llegar a ellas
    const sections = [...NAV_LINKS.map((l) => l.href), "#inicio", "#cotizar"]
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open ? "bg-deep border-white/10" : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center"
          aria-label="Devly Web Studio, inicio"
        >
          <img
            src={logo}
            alt="Devly Web Studio"
            width={398}
            height={299}
            className="h-12 w-auto shrink-0 object-contain sm:h-14"
          />
        </a>

        <ul className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors duration-200",
                    "after:bg-brand after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:transition-transform after:duration-300",
                    isActive
                      ? "text-white after:scale-x-100"
                      : "text-white/60 after:scale-x-0 hover:text-white",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-3 lg:ml-8">
          <a
            href="#cotizar"
            className="button-primary rounded-lg px-5 py-2.5 text-sm font-semibold whitespace-nowrap"
          >
            Hablemos
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <div
        className={cn(
          "bg-deep grid overflow-hidden border-t transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open
            ? "grid-rows-[1fr] border-white/10 opacity-100"
            : "pointer-events-none grid-rows-[0fr] border-transparent opacity-0",
        )}
      >
        <ul className="flex min-h-0 flex-col p-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  active === link.href ? "text-white" : "text-white/70 hover:text-white",
                )}
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
