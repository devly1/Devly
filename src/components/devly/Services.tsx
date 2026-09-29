import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    title: "Landing Pages",
    description:
      "Páginas modernas diseñadas para presentar tu negocio, servicio o producto y generar contactos.",
    features: [
      "Diseño personalizado",
      "Responsive",
      "WhatsApp",
      "Galería",
      "Formularios",
      "CTA estratégicos",
    ],
  },
  {
    title: "Sitios Web Empresariales",
    description:
      "Una presencia digital completa para mostrar tus servicios, información y convertir visitantes en clientes.",
    features: [
      "Varias secciones",
      "Diseño profesional",
      "SEO básico",
      "Google Maps",
      "Formularios",
      "Integraciones",
    ],
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online para mostrar productos, recibir pedidos y comenzar a vender por internet.",
    features: ["Catálogo", "Productos", "Carrito", "Pedidos", "Diseño personalizado"],
  },
  {
    title: "Soluciones Digitales",
    description:
      "Desarrollamos herramientas adaptadas a las necesidades específicas de tu negocio.",
    features: [
      "Sistemas personalizados",
      "Automatización",
      "Integraciones",
      "Funciones especiales",
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Construimos solo lo que tu negocio necesita."
          subtitle="Desde una página sencilla hasta una solución más completa. Definimos el alcance contigo antes de empezar."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {SERVICES.map(({ title, description, features }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="card-premium group grid h-full grid-cols-[2.25rem_1fr] gap-x-4 p-5 sm:p-6">
                <span className="font-display text-brand bg-brand/10 row-span-3 grid h-9 w-9 place-items-center rounded-lg text-xs font-bold transition-transform duration-200 group-hover:scale-105">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold transition-colors duration-200 group-hover:text-brand sm:text-xl">
                  {title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{description}</p>
                <ul className="text-muted-foreground mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                  {features.slice(0, 4).map((feature) => (
                    <li key={feature} className="inline-flex items-center gap-1.5">
                      <Check className="text-brand h-3.5 w-3.5" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
