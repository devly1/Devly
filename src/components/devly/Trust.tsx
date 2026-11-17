const CATEGORIES = [
  "Restaurantes",
  "Barberías",
  "Tiendas en línea",
  "Cabañas y hospedaje",
  "Panaderías",
  "Profesionales",
  "Eventos",
  "Fotografía",
];

/** Franja sencilla con los tipos de negocio, que se desplaza lento. */
export function Trust() {
  return (
    <section aria-label="Tipos de negocio" className="border-y border-white/10 py-5">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <p className="hidden shrink-0 text-sm text-white/50 md:block">Hacemos páginas para</p>
        <div className="marquee min-w-0 flex-1 overflow-hidden">
          <ul className="marquee-track">
            {[...CATEGORIES, ...CATEGORIES].map((category, i) => (
              <li
                key={`${category}-${i}`}
                aria-hidden={i >= CATEGORIES.length ? true : undefined}
                className={
                  i >= CATEGORIES.length ? "marquee-dup flex items-center" : "flex items-center"
                }
              >
                <span className="px-6 text-base font-medium whitespace-nowrap text-white/80">
                  {category}
                </span>
                <span className="text-brand/60" aria-hidden>
                  ✦
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
