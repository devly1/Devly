import { Reveal } from "./Reveal";

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

/** Formato editorial: frase grande a la izquierda (fija al hacer scroll) y lista a la derecha. */
export function WhyDevly() {
  return (
    <section id="por-que-devly" className="bg-deep relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal as="p" className="text-brand text-sm font-semibold">
            La forma de trabajar
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mt-3 text-4xl leading-[1.1] font-bold tracking-tight text-white sm:text-5xl"
          >
            Tu negocio no cabe en una plantilla.
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-5 max-w-md text-lg leading-relaxed text-white/65"
          >
            Por eso cada página empieza con una conversación, no con un diseño prefabricado.
          </Reveal>
        </div>

        <ol className="border-t border-white/10">
          {BENEFITS.map(({ title, description }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              className="group grid grid-cols-[3rem_1fr] gap-x-4 border-b border-white/10 py-8"
            >
              <span className="font-display text-brand pt-1 text-sm font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="group-hover:text-brand text-xl font-semibold text-white transition-colors duration-300">
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-white/60">{description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
