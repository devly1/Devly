import { useState } from "react";
import { RotateCcw } from "lucide-react";

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
    <div id="preparar" className="bg-deep rounded-xl border border-white/10 p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-white">¿Qué tienes listo?</p>
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
        className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-label="Progreso del checklist"
        aria-valuemin={0}
        aria-valuemax={CHECKLIST.length}
        aria-valuenow={completedCount}
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      {completedCount === CHECKLIST.length ? (
        <p className="reveal reveal-in mt-3 text-sm font-semibold text-brand">
          ¡Todo listo! Ya tienes lo esencial para empezar.
        </p>
      ) : null}

      <ul className="mt-4 divide-y divide-white/10">
        {CHECKLIST.map((item) => {
          const checked = checkedItems.includes(item.id);
          return (
            <li key={item.id}>
              <label className="-mx-2 flex cursor-pointer items-start gap-3 rounded-lg px-2 py-3 transition-colors duration-200 focus-within:bg-card hover:bg-card">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleItem(item.id)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-brand ${checked ? "scale-110 border-brand bg-primary" : "border-white/30 bg-card"}`}
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-white" fill="none">
                    <path
                      d="M3.5 8.5l3 3 6-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="16"
                      strokeDashoffset={checked ? 0 : 16}
                      style={{ transition: "stroke-dashoffset 350ms ease-out 80ms" }}
                    />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span
                    className={`block text-sm font-semibold transition-colors duration-200 ${checked ? "text-muted-foreground line-through" : "text-foreground"}`}
                  >
                    {item.title}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
