import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  /** Dirección de la entrada: hacia arriba (por defecto), desde la izquierda/derecha o con zoom. */
  variant?: "up" | "left" | "right" | "scale";
  style?: CSSProperties;
};

/** Anima el contenido al entrar en el viewport (fade + desplazamiento + desenfoque). */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "up",
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-variant={variant === "up" ? undefined : variant}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn("reveal", visible && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}
