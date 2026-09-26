import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/devly";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contacto" className="bg-surface-2 text-foreground py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div className="max-w-2xl">
          <Reveal as="p" className="text-accent text-sm font-semibold">
            ¿Lo platicamos?
          </Reveal>
          <Reveal as="h2" delay={60} className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">
            Hablemos de lo que necesita tu negocio.
          </Reveal>
          <Reveal as="p" delay={120} className="text-foreground/75 mt-4 text-base leading-relaxed">
            Cuéntanos qué haces y qué te gustaría mejorar. Te respondemos personalmente.
          </Reveal>
        </div>
        <Reveal delay={180} className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <a
            href="#cotizar"
            className="button-primary group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold"
          >
            Cuéntame mi idea
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="border-foreground/35 text-foreground hover:bg-foreground/10 inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3.5 text-base font-semibold transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Hablar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
