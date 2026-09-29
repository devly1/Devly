import { ArrowRight, MapPin } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { Reveal } from "./Reveal";

const TAGS = ["Páginas para negocios", "Tiendas en línea", "Sistemas a medida"];

export function Hero() {
  return (
    <section id="inicio" className="hero-atmosphere pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal className="text-brand border-brand/25 bg-brand/10 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-wide sm:text-sm">
            <MapPin className="h-4 w-4" aria-hidden />
            Hermosillo, Sonora · proyectos en todo México
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            variant="left"
            className="mt-6 max-w-[13ch] text-4xl leading-[1.04] font-extrabold tracking-[-0.045em] sm:text-6xl lg:text-7xl"
          >
            Una página que hace avanzar <span className="animate-blue-text">tu negocio.</span>
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            Te ayudamos a explicar lo que haces, mostrar por qué elegirte y recibir mensajes de
            clientes desde su celular.
          </Reveal>

          <Reveal delay={240} className="mt-6 flex flex-wrap gap-2" as="ul">
            {TAGS.map((tag) => (
              <li
                key={tag}
                className="border-border bg-surface/70 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm"
              >
                <span
                  className="bg-brand h-1.5 w-1.5 rounded-full shadow-[0_0_10px_var(--brand)]"
                  aria-hidden
                />
                {tag}
              </li>
            ))}
          </Reveal>

          <Reveal delay={320} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cotizar"
              className="button-primary hero-cta group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold"
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
        </div>

        <Reveal delay={200} variant="right" className="relative">
          <div className="image-frame animate-float group relative rounded-2xl p-2 sm:p-3">
            <img
              src={heroMockup}
              alt="Vista de una página web adaptada a computadora y celular"
              width={1408}
              height={1104}
              fetchPriority="high"
              className="aspect-[1.2] w-full rounded-xl object-cover object-center transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.015] group-hover:saturate-125"
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
