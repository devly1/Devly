import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Platicamos",
    description: "Nos cuentas qué haces, qué te gustaría mejorar y qué necesita saber tu cliente.",
  },
  {
    number: "02",
    title: "Aterrizamos el plan",
    description: "Definimos juntos el contenido, las secciones y el presupuesto antes de empezar.",
  },
  {
    number: "03",
    title: "Diseñamos y construimos",
    description: "Te mostramos avances y ajustamos los detalles contigo mientras trabajamos.",
  },
  {
    number: "04",
    title: "La ponemos en línea",
    description: "Revisamos cómo se ve en celular y computadora antes de compartirla.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="bg-surface/30 border-border border-y py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="El proceso" title="Paso a paso, sin sorpresas." />

        <div className="relative mt-16">
          {/* Línea conectora: vertical en móvil, horizontal en desktop */}
          <div
            className="bg-brand/35 absolute top-0 bottom-0 left-[1.4rem] w-px lg:top-[1.4rem] lg:right-0 lg:left-0 lg:h-px lg:w-auto"
            aria-hidden
          />
          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.number}
                delay={i * 110}
                className="relative min-w-0 pl-16 lg:pl-0"
              >
                <span className="border-brand/50 bg-background text-brand font-display absolute left-0 grid h-11 w-11 place-items-center rounded-full border text-sm font-bold lg:static lg:mb-6">
                  {step.number}
                </span>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
