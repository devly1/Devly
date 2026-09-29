import { Reveal } from "./Reveal";

const DELIVERABLES = [
  {
    number: "01",
    title: "Una estructura clara",
    detail: "La información importante queda en el lugar donde el cliente espera encontrarla.",
  },
  {
    number: "02",
    title: "Una experiencia cuidada",
    detail: "La página se revisa en celular y computadora antes de publicarse.",
  },
  {
    number: "03",
    title: "Un siguiente paso concreto",
    detail: "WhatsApp, formulario o llamada: dejamos claro cómo puede contactarte la gente.",
  },
];

export function Deliverables() {
  return (
    <section aria-label="Qué incluye trabajar con Devly" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal
          as="p"
          variant="left"
          className="text-brand text-xs font-bold uppercase tracking-[0.18em]"
        >
          Cada detalle cuenta
        </Reveal>
        <div className="mt-5 grid gap-x-8 md:grid-cols-3">
          {DELIVERABLES.map((item, index) => (
            <Reveal
              as="article"
              key={item.number}
              delay={index * 120}
              variant={index === 1 ? "zoom" : "up"}
              className="group border-border grid grid-cols-[3.5rem_1fr] gap-x-4 border-t py-5 sm:grid-cols-[4.5rem_1fr] sm:py-7 md:block"
            >
              <span className="font-display text-brand/70 col-start-1 row-span-2 text-3xl leading-none font-bold tracking-tight transition-all duration-300 group-hover:text-brand group-hover:drop-shadow-[0_0_12px_color-mix(in_oklab,var(--brand)_55%,transparent)] sm:text-4xl md:mb-6 md:block">
                {item.number}
              </span>
              <h2 className="font-display text-base font-bold sm:text-lg">{item.title}</h2>
              <p className="text-muted-foreground col-start-2 mt-1.5 text-sm leading-relaxed md:col-start-auto md:mt-3 md:max-w-sm">
                {item.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
