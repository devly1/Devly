import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CHECKLIST = [
  {
    id: "business",
    title: "Nombre y datos del negocio",
    detail: "Nombre, ubicación y horarios si recibes clientes en un local.",
  },
  {
    id: "services",
    title: "Servicios o productos",
    detail: "Qué ofreces, a quién y, si puedes, precios o rangos aproximados.",
  },
  {
    id: "copy",
    title: "Textos principales",
    detail: "Una descripción breve del negocio y lo que quieres destacar.",
  },
  {
    id: "images",
    title: "Fotos de tu trabajo",
    detail: "Imágenes propias del local, productos, equipo o proyectos.",
  },
  {
    id: "brand",
    title: "Logo y colores de marca",
    detail: "Si no tienes logo, podemos empezar con el nombre y tus colores preferidos.",
  },
  {
    id: "domain",
    title: "Dominio, si ya tienes uno",
    detail: "Compártenos el nombre o acceso. Si aún no tienes, podemos orientarte.",
  },
];

export function LaunchChecklist() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const completedCount = checkedItems.length;
  const progress = Math.round((completedCount / CHECKLIST.length) * 100);

  function toggleItem(id: string) {
    setCheckedItems((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <section id="preparar" className="bg-surface/30 border-border border-y py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Antes de empezar"
            title="Prepara lo esencial para tu página."
            subtitle="No necesitas tenerlo todo listo. Marca lo que ya tienes y revisamos juntos lo que falte."
          />
          <Reveal delay={120} className="mt-7">
            <a
              href="#cotizar"
              className="button-primary inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold"
            >
              Hablar sobre mi proyecto
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="card-premium p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Tu checklist</p>
                <p className="text-muted-foreground mt-1 text-sm" aria-live="polite">
                  {completedCount} de {CHECKLIST.length} listos
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCheckedItems([])}
                disabled={completedCount === 0}
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40"
              >
                <RotateCcw className="h-4 w-4" aria-hidden />
                Reiniciar
              </button>
            </div>

            <div
              className="bg-surface-2 mt-4 h-1.5 overflow-hidden rounded-full"
              role="progressbar"
              aria-label="Progreso del checklist"
              aria-valuemin={0}
              aria-valuemax={CHECKLIST.length}
              aria-valuenow={completedCount}
            >
              <div
                className="bg-brand h-full transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <ul className="mt-4 divide-y divide-border">
              {CHECKLIST.map((item) => {
                const checked = checkedItems.includes(item.id);
                return (
                  <li key={item.id}>
                    <label className="-mx-2 flex cursor-pointer items-start gap-3 rounded-sm px-2 py-4 transition-colors duration-150 hover:bg-surface/45 focus-within:bg-surface/45">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleItem(item.id)}
                        className="accent-brand mt-1 h-4 w-4 shrink-0"
                      />
                      <span className="min-w-0">
                        <span
                          className={`block text-sm font-semibold transition-colors duration-200 ${checked ? "text-muted-foreground line-through" : "text-foreground"}`}
                        >
                          {item.title}
                        </span>
                        <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
                          {item.detail}
                        </span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
