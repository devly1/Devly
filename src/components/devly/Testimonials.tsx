import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * CONTENIDO EDITABLE — testimonios de ejemplo.
 * No corresponden a clientes reales: reemplázalos cuando tengas testimonios auténticos.
 */
const TESTIMONIALS = [
  {
    quote:
      "Devly convirtió nuestra idea en una página mucho más profesional de lo que imaginábamos.",
    author: "Cliente Devly",
  },
  {
    quote:
      "El proceso fue claro de principio a fin y la página se ve increíble en el celular.",
    author: "Cliente Devly",
  },
  {
    quote: "Ahora los clientes nos escriben directo por WhatsApp desde la página.",
    author: "Cliente Devly",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen nuestros clientes" />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} delay={i * 100}>
              <figure className="card-premium flex h-full flex-col p-7">
                <Quote className="text-brand/70 h-6 w-6 shrink-0" aria-hidden />
                <blockquote className="mt-4 text-base leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="text-muted-foreground mt-6 text-sm font-medium">
                  — {t.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="text-muted-foreground/70 mt-8 text-center text-xs">
          Testimonios de ejemplo, pendientes de reemplazar por opiniones reales de clientes.
        </Reveal>
      </div>
    </section>
  );
}
