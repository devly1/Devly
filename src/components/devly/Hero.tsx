import { ArrowRight, MapPin } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { Reveal } from "./Reveal";

const TAGS = ["Páginas para negocios", "Tiendas en línea", "Sistemas a medida"];

export function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal className="text-brand inline-flex items-center gap-2 text-sm font-semibold">
            <MapPin className="h-4 w-4" aria-hidden />
            Hermosillo, Sonora · proyectos en todo México
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="mt-6 max-w-[13ch] text-4xl leading-[1.08] font-bold sm:text-6xl"
          >
            Una página clara, hecha para <span className="text-brand">tu negocio.</span>
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            Te ayudamos a explicar lo que haces, mostrar por qué elegirte y recibir mensajes de
            clientes desde su celular.
          </Reveal>

          <Reveal delay={240} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cotizar"
              className="button-primary group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold"
            >
              Cuéntame qué necesitas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#proyectos"
              className="border-border-strong text-foreground hover:bg-surface-2 inline-flex items-center justify-center rounded-md border px-6 py-3.5 text-base font-semibold transition-colors"
            >
              Ver conceptos
            </a>
          </Reveal>

          <Reveal
            delay={320}
            className="border-border mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t pt-5"
            as="ul"
          >
            {TAGS.map((tag) => (
              <li key={tag} className="text-muted-foreground text-sm">
                {tag}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="image-frame relative p-2 sm:p-3">
            <img
              src={heroMockup}
              alt="Vista de una página web adaptada a computadora y celular"
              width={1408}
              height={1104}
              fetchPriority="high"
              className="aspect-[1.2] w-full object-cover object-center"
            />
          </div>
          <p className="text-muted-foreground mt-5 max-w-md border-l-2 border-brand/60 pl-3 text-sm leading-relaxed">
            Diseño, desarrollo y publicación, con una persona real al otro lado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
