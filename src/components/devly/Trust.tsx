import { Reveal } from "./Reveal";

const CATEGORIES = [
  "Restaurantes",
  "Barberías",
  "Servicios",
  "Eventos",
  "Tiendas",
  "Profesionales",
];

export function Trust() {
  return (
    <section aria-label="Tipos de negocio" className="bg-surface border-border border-y py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Reveal as="p" className="text-foreground text-sm font-semibold sm:max-w-48">
            Hecho para negocios como el tuyo
          </Reveal>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {CATEGORIES.map((category, i) => (
              <Reveal as="li" key={category} delay={i * 60}>
                <span
                  className={`text-muted-foreground inline-flex text-sm ${i === 0 ? "" : "border-border border-l pl-3"}`}
                >
                  {category}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
