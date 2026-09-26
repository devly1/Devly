import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    q: "¿Cuánto tarda una página web?",
    a: "Depende del alcance y de cuándo estén listos los textos y las fotos. Antes de empezar te compartimos un calendario realista para tu proyecto.",
  },
  {
    q: "¿El dominio y el hospedaje están incluidos?",
    a: "Son costos aparte cuando el proyecto los necesita. Antes de comenzar te explicamos cuáles aplican, cuánto cuestan y a nombre de quién queda cada cuenta.",
  },
  {
    q: "¿Qué debo tener listo para empezar?",
    a: (
      <>
        Ayuda tener el nombre del negocio, tus servicios y algunas fotos. No hace falta tenerlo todo
        resuelto; puedes revisar nuestra{" "}
        <a href="#preparar" className="text-brand underline underline-offset-4">
          lista de preparación
        </a>
        .
      </>
    ),
  },
  {
    q: "¿La página funciona en celular?",
    a: "Sí. Revisamos cada página en móvil y escritorio antes de publicarla.",
  },
  {
    q: "¿Puedo modificar mi página después?",
    a: "Sí. Podemos cotizar cambios puntuales o acordar mantenimiento según lo que necesite tu sitio.",
  },
  {
    q: "¿Puedo conectar WhatsApp?",
    a: "Sí. Podemos agregar un acceso directo para que tus clientes te escriban desde la página.",
  },
  {
    q: "¿Qué pasa después de pedir una cotización?",
    a: "Revisamos la información y nos ponemos en contacto para aclarar el alcance. Antes de empezar, confirmamos contigo el trabajo y el costo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-surface/30 border-border border-y py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Dudas comunes" title="Preguntas frecuentes" />

        <Reveal delay={120} className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-border bg-card rounded-md border px-5"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
