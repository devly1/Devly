import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import barberia from "@/assets/project-barberia.webp";
import restaurante from "@/assets/project-restaurante.webp";
import eventos from "@/assets/project-eventos.webp";
import fotografia from "@/assets/project-fotografia.webp";
import hamburgueseria from "@/assets/project-hamburgueseria.webp";
import nord from "@/assets/project-nord.webp";
import oficio from "@/assets/project-oficio.webp";
import glaze from "@/assets/project-glaze.webp";
import bruma from "@/assets/project-bruma.webp";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Project = {
  name: string;
  category: string;
  description: string;
  image: string;
};

/** Conceptos visuales para mostrar distintos tipos de proyecto, no trabajos de clientes. */
const FEATURED: Project[] = [
  {
    name: "nörd",
    category: "Tienda en línea · Decoración",
    description:
      "Colección, envíos y devoluciones explicados con calma, para comprar con confianza.",
    image: nord,
  },
  {
    name: "oficio",
    category: "Directorio de profesionales",
    description: "Perfiles, reseñas y un buscador para encontrar a la persona indicada.",
    image: oficio,
  },
  {
    name: "Glaze & Co.",
    category: "Panadería artesanal",
    description: "Sabores del día, pedidos personalizados y opiniones de clientes.",
    image: glaze,
  },
  {
    name: "bruma",
    category: "Cabañas · Hospedaje",
    description: "Fotos que invitan a escaparse y disponibilidad por fechas.",
    image: bruma,
  },
  {
    name: "S.BRGR",
    category: "Hamburguesería",
    description: "El producto como protagonista y WhatsApp directo para ordenar.",
    image: hamburgueseria,
  },
];

const MORE: Project[] = [
  {
    name: "Barbería",
    category: "Landing page",
    description: "Horarios, servicios y reservas desde el celular.",
    image: barberia,
  },
  {
    name: "Restaurante",
    category: "Sitio para restaurante",
    description: "Menú, ubicación y contacto sin hacer buscar al cliente.",
    image: restaurante,
  },
  {
    name: "Salón de eventos",
    category: "Sitio para negocio",
    description: "Espacios, paquetes y detalles para quien organiza.",
    image: eventos,
  },
  {
    name: "Fotografía",
    category: "Portafolio",
    description: "Una galería que deja que el trabajo hable.",
    image: fotografia,
  },
];

export function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  const [main, ...rest] = FEATURED;

  return (
    <section id="proyectos" className="bg-deep relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            size="lg"
            eyebrow="Proyectos"
            title="Así podría verse tu página."
            subtitle="Conceptos de muestra para distintos giros. Cada proyecto real empieza desde cero contigo."
          />
          <Reveal delay={150} className="shrink-0">
            <a
              href="#cotizar"
              className="group text-brand inline-flex items-center gap-2 text-sm font-semibold"
            >
              <span className="link-underline">Quiero una así</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Destacado grande + cuatro alrededor */}
        <div className="mt-12 grid gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {main ? (
            <ProjectCard project={main} className="lg:col-span-2 lg:row-span-2" large />
          ) : null}
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={(i + 1) * 90} />
          ))}
        </div>

        {/* Conceptos adicionales, ocultos al inicio */}
        {showMore ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MORE.map((project, i) => (
              <ProjectCard key={project.name} project={project} delay={i * 80} />
            ))}
          </div>
        ) : null}

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            {showMore ? "Ver menos" : `Ver ${MORE.length} conceptos más`}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform duration-300", showMore && "rotate-180")}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className,
  large = false,
  delay = 0,
}: {
  project: Project;
  className?: string;
  large?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={cn("h-full", className)}>
      <article className="group bg-card hover:border-brand/40 flex h-full flex-col overflow-hidden rounded-xl border border-white/10 transition-colors duration-300">
        {/* Al pasar el cursor, la captura se recorre hacia abajo */}
        <div
          className={cn(
            "relative overflow-hidden border-b border-white/10",
            large ? "aspect-[16/10] lg:aspect-auto lg:flex-1" : "aspect-[16/10]",
          )}
        >
          <img
            src={project.image}
            alt={`Concepto de página: ${project.name}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-left-top transition-[object-position,transform] duration-[2800ms] ease-in-out group-hover:object-left-bottom"
          />
        </div>
        <div className={cn("flex items-start justify-between gap-4", large ? "p-6" : "p-4")}>
          <div className="min-w-0">
            <h3 className={cn("font-semibold text-white", large ? "text-xl" : "text-base")}>
              {project.name}
            </h3>
            <p className="mt-0.5 text-xs text-white/50">{project.category}</p>
            {large ? (
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">
                {project.description}
              </p>
            ) : null}
          </div>
          <ArrowRight
            className="text-brand mt-1 h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden
          />
        </div>
      </article>
    </Reveal>
  );
}
