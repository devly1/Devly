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
          title="Una web útil empieza por entender tu negocio."
          subtitle="Elegimos contigo lo que hace falta y dejamos fuera lo que no aporta."
        />

        <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {SERVICES.map(({ title, description, features }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="group border-border grid h-full grid-cols-[2.25rem_1fr] gap-x-4 border-t py-6 transition-colors duration-200 hover:border-brand/45">
                <span className="font-display text-brand/80 row-span-3 pt-1 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold transition-colors duration-200 group-hover:text-brand">
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
