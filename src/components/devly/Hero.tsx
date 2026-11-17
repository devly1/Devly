import { ArrowRight, Check } from "lucide-react";
import nordShot from "@/assets/project-nord.webp";
import { Reveal } from "./Reveal";

const POINTS = [
  "Diseño pensado para celular",
  "Textos claros y ordenados",
  "WhatsApp y formulario listos",
];

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-8">
        <div>
          <Reveal as="p" className="text-brand text-sm font-semibold">
            Estudio web · Hermosillo, Sonora
          </Reveal>

          <Reveal
            as="h1"
            className="reveal-lines mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-6xl"
          >
            {["Una página clara,", "hecha para", "tu negocio."].map((line, i) => (
              <span key={line} className="line">
                <span style={{ "--i": i } as React.CSSProperties}>{line}</span>
              </span>
            ))}
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Te ayudamos a explicar lo que haces, mostrar por qué elegirte y recibir mensajes de
            clientes desde su celular.
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#cotizar"
              className="button-primary group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold"
            >
              Cuéntame qué necesitas
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold text-white underline decoration-white/30 underline-offset-[6px] transition-colors hover:decoration-white"
            >
              Ver proyectos
            </a>
          </Reveal>

          <Reveal delay={320} as="ul" className="mt-10 grid gap-3 border-t border-white/10 pt-6">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-white/75">
                <Check className="text-brand h-4 w-4 shrink-0" aria-hidden />
                {point}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} variant="right" className="relative xl:-mr-16">
          <BrowserFrame
            url="nörd · concepto de tienda"
            src={nordShot}
            alt="Concepto de página para una tienda de decoración"
            width={1665}
            height={878}
          />
          <p className="mt-5 text-sm text-white/60">
            Diseño, desarrollo y publicación, con una persona real al otro lado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

type BrowserFrameProps = {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Captura grande de una página dentro de un marco sencillo de navegador. */
function BrowserFrame({ url, src, alt, width, height }: BrowserFrameProps) {
  return (
    <div className="bg-card overflow-hidden rounded-xl border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-xs text-white/40">{url}</span>
      </div>
      {/* Recorte 16:10 centrado: quita los márgenes vacíos de la captura y la hace más alta */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        fetchPriority="high"
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}
