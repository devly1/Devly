import { useState } from "react";
import barberia from "@/assets/project-barberia.jpg";
import restaurante from "@/assets/project-restaurante.jpg";
import eventos from "@/assets/project-eventos.jpg";
import fotografia from "@/assets/project-fotografia.jpg";
import tienda from "@/assets/project-tienda.jpg";
import profesional from "@/assets/hero-mockup.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const FILTERS = [
  "Todos",
  "Landing Pages",
  "Negocios",
  "Restaurantes",
  "Barberías",
  "Profesionales",
  "E-commerce",
] as const;

/** Conceptos visuales para mostrar distintos tipos de proyecto, no trabajos de clientes. */
const PROJECTS = [
  {
    name: "Concepto para barbería",
    category: "Barberías",
    tags: ["Barberías", "Landing Pages"],
    description: "Horarios, servicios y una forma sencilla de reservar desde el celular.",
    image: barberia,
  },
  {
    name: "Concepto para restaurante",
    category: "Restaurantes",
    tags: ["Restaurantes", "Negocios"],
    description: "Menú, ubicación y contacto, sin hacer que el cliente tenga que buscar.",
    image: restaurante,
  },
  {
    name: "Concepto para eventos",
    category: "Negocios",
    tags: ["Negocios", "Landing Pages"],
    description: "Espacios, paquetes y detalles importantes para quien está organizando.",
    image: eventos,
  },
  {
    name: "Concepto para fotografía",
    category: "Landing Pages",
    tags: ["Landing Pages", "Negocios"],
    description: "Una galería que deja que el trabajo hable y facilita pedir una sesión.",
    image: fotografia,
  },
  {
    name: "Concepto de tienda en línea",
    category: "E-commerce",
    tags: ["E-commerce"],
    description: "Productos, precios y pedidos reunidos en un solo lugar.",
    image: tienda,
  },
  {
    name: "Concepto para profesionales",
    category: "Profesionales",
    tags: ["Profesionales", "Negocios"],
    description: "Servicios, experiencia y contacto organizados para generar confianza.",
    image: profesional,
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState<string>("Todos");
  const visible = filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <section id="proyectos" className="bg-surface/30 border-border border-y py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ideas en pantalla"
          title="Así podría tomar forma tu página."
          subtitle="Son conceptos de muestra, no trabajos de clientes. Cada proyecto real empieza desde cero contigo."
        />

        <Reveal className="border-border mt-10 flex flex-wrap gap-x-5 border-b" as="div">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "border-b-2 px-1 py-3 text-sm font-medium transition-colors",
                filter === f
                  ? "border-brand text-brand"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border-strong",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <article className="card-premium group h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Mockup del proyecto: ${project.name}`}
                    loading="lazy"
                    width={1200}
                    height={912}
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-brand text-xs font-semibold tracking-[0.18em] uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">{project.name}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
