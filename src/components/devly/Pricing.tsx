import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PLANS = [
  {
    name: "Landing page",
    price: "$2,500",
    ideal: "Una sola página para presentar tu negocio y que te contacten fácil.",
    features: [
      "Diseño personalizado",
      "Adaptada a celular",
      "Botón de WhatsApp",
      "Galería de fotos",
      "Formulario de contacto",
      "Publicación incluida",
    ],
    featured: false,
  },
  {
    name: "Sitio empresarial",
    price: "$4,500",
    ideal: "Varias secciones para explicar con detalle lo que haces.",
    features: [
      "Todo lo de Landing",
      "Más secciones y páginas",
      "Google Maps",
      "SEO básico",
      "Galería avanzada",
      "Integraciones",
    ],
    featured: true,
  },
  {
    name: "Tienda en línea",
    price: "$7,000",
    ideal: "Para vender productos y recibir pedidos por internet.",
    features: [
      "Catálogo de productos",
      "Carrito y pedidos",
      "Diseño personalizado",
      "Configuración inicial",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="servicios" className="bg-background relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          size="lg"
          align="center"
          eyebrow="Servicios y precios"
          title="Elige por dónde empezar."
          subtitle="Precios de referencia. Te confirmamos el costo final antes de comenzar, según el contenido y las funciones."
        />

        <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-xl border p-7 transition-colors duration-300",
                  plan.featured
                    ? "border-primary bg-card"
                    : "bg-deep border-white/10 hover:border-white/25",
                )}
              >
                {plan.featured ? (
                  <span className="bg-primary absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-semibold text-white">
                    El más pedido
                  </span>
                ) : null}

                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 min-h-[2.5rem] text-sm leading-relaxed text-white/60">
                  {plan.ideal}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5 whitespace-nowrap">
                  <span className="text-sm text-white/50">Desde</span>
                  <span className="text-4xl font-extrabold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-white/50">MXN</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                      <Check className="text-brand mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cotizar"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
                    plan.featured
                      ? "button-primary"
                      : "border border-white/15 text-white hover:bg-white/5",
                  )}
                >
                  Cotizar {plan.name.toLowerCase()}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Soluciones a medida (antes una tarjeta más en Servicios) */}
        <Reveal delay={150} className="mt-5">
          <a
            href="#cotizar"
            className="group bg-deep flex flex-col gap-4 rounded-xl border border-white/10 p-7 transition-colors duration-300 hover:border-white/25 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">¿Necesitas algo a la medida?</h3>
              <p className="mt-1 text-sm text-white/60">
                Sistemas personalizados, automatizaciones e integraciones para tu negocio.
              </p>
            </div>
            <span className="text-brand inline-flex shrink-0 items-center gap-2 text-sm font-semibold">
              Platiquemos tu idea
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
