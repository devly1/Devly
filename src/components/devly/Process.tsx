import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Platicamos",
    description: "Nos cuentas qué haces, qué te gustaría mejorar y qué necesita saber tu cliente.",
  },
  {
    number: "02",
    title: "Aterrizamos el plan",
    description: "Definimos juntos el contenido, las secciones y el presupuesto antes de empezar.",
  },
  {
    number: "03",
    title: "Diseñamos y construimos",
    description: "Te mostramos avances y ajustamos los detalles contigo mientras trabajamos.",
  },
  {
    number: "04",
    title: "La ponemos en línea",
    description: "Revisamos cómo se ve en celular y computadora antes de compartirla.",
  },
];

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  // Cuántos pasos se han "alcanzado" al hacer scroll
  const [reached, setReached] = useState(0);

  useEffect(() => {
    const items = Array.from(listRef.current?.children ?? []);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = items.indexOf(entry.target);
          setReached((current) => Math.max(current, index + 1));
        }
      },
      { rootMargin: "0px 0px -40% 0px", threshold: 0.6 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="proceso" className="bg-background relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="El proceso" title="Paso a paso, sin sorpresas." />

        <Reveal className="relative mt-16">
          {/* Línea conectora: se llena conforme avanzas (vertical en móvil, horizontal en desktop) */}
          <div
            className="absolute top-0 bottom-0 left-[1.4rem] w-px bg-white/10 lg:top-[1.4rem] lg:right-0 lg:left-0 lg:h-px lg:w-auto"
            aria-hidden
          >
            <div
              className="progress-line bg-brand h-full w-full"
              style={{ "--p": reached / STEPS.length } as React.CSSProperties}
            />
          </div>

          <ol ref={listRef} className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => {
              const active = i < reached;
              // En escritorio los pasos entran juntos: se encienden uno tras otro
              const delay = { transitionDelay: active ? `${i * 260}ms` : "0ms" };
              return (
                <li key={step.number} className="relative min-w-0 pl-16 lg:pl-0">
                  <span
                    style={delay}
                    className={cn(
                      "font-display ring-background absolute left-0 grid h-11 w-11 place-items-center rounded-full border text-sm font-bold ring-8 transition-colors duration-500 lg:static lg:mb-6",
                      active
                        ? "border-primary bg-primary text-white"
                        : "bg-background border-white/20 text-white/50",
                    )}
                  >
                    {step.number}
                  </span>
                  <h3
                    style={delay}
                    className={cn(
                      "text-base font-semibold transition-colors duration-500",
                      active ? "text-white" : "text-white/50",
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={delay}
                    className={cn(
                      "mt-2 text-sm leading-relaxed transition-colors duration-500",
                      active ? "text-white/70" : "text-white/40",
                    )}
                  >
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
