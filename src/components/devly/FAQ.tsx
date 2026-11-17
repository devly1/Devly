import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/devly";
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
        <a href="#cotizar" className="text-brand underline underline-offset-4">
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
    <section id="faq" className="bg-deep relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Dudas comunes"
            title="Preguntas frecuentes"
            subtitle="Si tu duda no está aquí, escríbenos y te respondemos en persona."
          />
          <Reveal delay={150} className="mt-6">
            <a
              href={whatsappLink("Hola Devly, tengo una duda sobre su servicio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-brand inline-flex items-center gap-2 text-sm font-semibold"
            >
              <span className="link-underline">Preguntar por WhatsApp</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="border-t border-white/10"
          >
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-white/10">
                <AccordionTrigger className="data-[state=open]:text-brand py-5 text-left text-base font-semibold text-white hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-white/65">
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
