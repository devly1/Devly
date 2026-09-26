import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "LANDING",
    price: "Desde $2,500 MXN",
    ideal: "Para presentar tus servicios y hacer fácil que te contacten.",
    features: [
      "Diseño personalizado",
      "Una página",
      "Responsive",
      "Botón de WhatsApp",
      "Galería",
      "Información del negocio",
      "Formulario/contacto",
      "Publicación",
    ],
    cta: "Cotizar landing",
    featured: false,
  },
  {
    name: "EMPRESARIAL",
    price: "Desde $4,500 MXN",
    ideal: "Para explicar con más detalle lo que hace tu negocio.",
    features: [
      "Todo lo de Landing",
      "Más secciones",
      "Google Maps",
      "SEO básico",
      "Galería avanzada",
      "Formularios",
      "Integraciones",
    ],
    cta: "Cotizar sitio",
    featured: true,
  },
  {
    name: "E-COMMERCE",
    price: "Desde $7,000 MXN",
    ideal: "Para negocios que quieren vender online.",
    features: [
      "Catálogo",
      "Productos",
      "Carrito",
      "Pedidos",
      "Diseño personalizado",
      "Configuración inicial",
    ],
    cta: "Platicar sobre una tienda",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="precios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inversión inicial"
          title="Una idea clara de cuánto cuesta empezar."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <article
                className={cn(
                  "card-premium flex h-full flex-col p-7",
                  plan.featured && "border-brand/55",
                )}
              >
                <h3 className="font-display text-sm font-bold tracking-[0.22em]">{plan.name}</h3>
                <p className="mt-3 text-2xl font-bold sm:text-3xl">{plan.price}</p>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{plan.ideal}</p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="text-brand mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      <span className="text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cotizar"
                  className={cn(
                    "mt-auto inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors",
                    plan.featured
                      ? "button-primary"
                      : "border-border-strong hover:bg-surface-2 border",
                  )}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="text-muted-foreground mx-auto mt-10 max-w-2xl text-center text-sm"
        >
          El precio final depende del contenido y las funciones. Te confirmamos el alcance y el
          costo antes de comenzar.
        </Reveal>
      </div>
    </section>
  );
}
