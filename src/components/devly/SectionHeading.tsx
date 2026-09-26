import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, className }: Props) {
  return (
    <div className={cn("mx-0 max-w-3xl text-left", className)}>
      {eyebrow ? (
        <Reveal
          as="p"
          className="text-brand border-brand border-l-2 pl-3 text-xs font-bold uppercase"
        >
          {eyebrow}
        </Reveal>
      ) : null}
      <Reveal as="h2" delay={60} className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
        {title}
      </Reveal>
      {subtitle ? (
        <Reveal as="p" delay={120} className="text-muted-foreground mt-4 text-base sm:text-lg">
          {subtitle}
        </Reveal>
      ) : null}
    </div>
  );
}
