import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const BENEFITS = [
  {
    title: "Primero entendemos qué haces",
    description: "La estructura y el contenido parten de tu negocio, no de una plantilla genérica.",
  },
  {
    title: "Pensada para el celular",
    description: "Tus clientes pueden leer, explorar y contactarte desde el teléfono que ya usan.",
  },
  {
    title: "Sin vueltas para encontrar lo importante",
    description:
      "Ordenamos la información para que tus servicios y datos de contacto estén claros.",
  },
  {
    title: "Hablas con quien hace tu sitio",
    description: "Revisamos contigo cada decisión y te explicamos qué estamos construyendo.",
  },
];

export function WhyDevly() {
  return (
    <section id="por-que-devly" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="La forma de trabajar"
          title="Tu negocio no cabe en una plantilla."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {BENEFITS.map(({ title, description }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="border-border grid h-full min-w-0 grid-cols-[2.25rem_1fr] gap-x-4 border-t py-6">
                <span className="font-display text-brand/80 pt-0.5 text-sm font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
