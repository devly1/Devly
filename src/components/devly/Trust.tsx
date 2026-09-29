import {
  BriefcaseBusiness,
  Scissors,
  ShoppingBag,
  Sparkles,
  Utensils,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  { name: "Restaurantes", detail: "Menú y reservaciones", icon: Utensils },
  { name: "Barberías", detail: "Servicios y citas", icon: Scissors },
  { name: "Servicios", detail: "Cotizaciones y contacto", icon: BriefcaseBusiness },
  { name: "Eventos", detail: "Paquetes y fechas", icon: Sparkles },
  { name: "Tiendas", detail: "Productos y pedidos", icon: ShoppingBag },
  { name: "Profesionales", detail: "Perfil y agenda", icon: UserRound },
];

function CategoryItem({
  name,
  detail,
  icon: Icon,
}: {
  name: string;
  detail: string;
  icon: LucideIcon;
}) {
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-border/70 bg-background/35 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-brand/35 hover:bg-background/65 sm:p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-brand/15 bg-brand/10 text-brand transition-[background-color,border-color,transform] duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-brand/30 group-hover:bg-brand/15">
        <Icon className="h-[18px] w-[18px]" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-foreground">{name}</span>
        <span className="mt-0.5 block text-xs text-muted-foreground">{detail}</span>
      </span>
    </li>
  );
}

export function Trust() {
  return (
    <section
      aria-label="Tipos de negocio"
      className="border-border border-y bg-surface/35 py-10 sm:py-14"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-7 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
        <Reveal variant="left" className="max-w-md">
          <p className="text-brand text-xs font-bold uppercase tracking-[0.18em]">
            Para cada tipo de negocio
          </p>
          <h2 className="mt-3 text-2xl leading-tight font-bold sm:text-3xl">
            Una página pensada para lo que haces.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Mostramos lo que tus clientes necesitan para elegirte y ponerse en contacto.
          </p>
        </Reveal>
        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 xl:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.name} delay={i * 55} variant="zoom">
              <CategoryItem {...category} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
