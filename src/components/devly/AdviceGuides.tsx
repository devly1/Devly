import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const GUIDES = [
  {
    category: "Tu página",
    title: "En cinco segundos, debe entenderse qué haces",
    summary:
      "Alguien que llega por primera vez debería encontrar qué ofreces, para quién y cómo contactarte sin ponerse a buscar.",
    tip: "Empieza con una frase directa sobre tu servicio. Después muestra tus servicios principales y un botón visible para escribirte.",
  },
  {
    category: "Contacto",
    title: "Haz que escribirte sea el paso más fácil",
    summary:
      "Si la mayoría de tus clientes usa WhatsApp, pon el acceso junto a la información que les ayuda a decidir.",
    tip: "Un botón con un mensaje inicial sobre el servicio que vio le ahorra pasos al cliente y te da contexto para responder.",
  },
  {
    category: "Fotografía",
    title: "Muestra tu trabajo como es",
    summary:
      "Fotos propias del local, productos o equipo ayudan a que la gente sepa qué esperar antes de ponerse en contacto.",
    tip: "Usa imágenes claras y recientes. Unas pocas fotos reales suelen contar más que una galería extensa de imágenes genéricas.",
  },
];

export function AdviceGuides() {
  return (
    <section id="consejos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ideas para tu negocio"
          title="Pequeños cambios que hacen más clara tu presencia en línea."
          subtitle="Consejos prácticos para que tus clientes entiendan qué ofreces y sepan cómo dar el siguiente paso."
        />

        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {GUIDES.map((guide, index) => (
            <Reveal as="article" key={guide.title} delay={index * 90} className="h-full">
              <div className="card-premium h-full p-6">
                <span className="text-brand bg-brand/10 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {guide.category}
                </span>
                <h3 className="font-display mt-5 text-xl leading-snug font-bold">{guide.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {guide.summary}
                </p>
                <p className="text-foreground/85 border-brand/50 mt-4 border-l-2 pl-3 text-sm leading-relaxed">
                  {guide.tip}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
