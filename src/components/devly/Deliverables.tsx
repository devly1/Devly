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
    <section
      aria-label="Qué incluye trabajar con Devly"
      className="bg-surface border-border border-y"
    >
      <div className="mx-auto grid max-w-7xl divide-y divide-border px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
        {DELIVERABLES.map((item, index) => (
          <Reveal
            as="article"
            key={item.number}
            delay={index * 80}
            className="grid grid-cols-[2.25rem_1fr] gap-x-4 py-6 first:pt-7 last:pb-7 md:px-7 md:py-7 md:first:pl-0 md:last:pr-0"
          >
            <span className="font-display text-brand/80 text-sm font-semibold">{item.number}</span>
            <div>
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
