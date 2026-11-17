import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  /** "center" para secciones que lo necesiten; por defecto alineado a la izquierda. */
  align?: "left" | "center";
  /** Título más grande para las secciones principales. */
  size?: "md" | "lg";
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  size = "md",
}: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <Reveal as="p" className="text-brand text-sm font-semibold">
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal
        as="h2"
        delay={60}
        className={cn(
          "mt-3 leading-[1.1] font-bold tracking-tight text-white",
          size === "lg" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </Reveal>
      {subtitle ? (
        <Reveal
          as="p"
          delay={120}
          className={cn(
            "mt-4 text-base leading-relaxed text-white/65 sm:text-lg",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </Reveal>
      ) : null}
    </div>
  );
}
