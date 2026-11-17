import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/devly";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  // Aparece después de un pequeño scroll para no tapar el inicio al cargar
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={cn(
        "fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pr-5 pl-4 text-sm font-semibold text-[#0b2e17] transition-all duration-300 hover:bg-[#2ee370] sm:bottom-6 sm:left-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      <span className="whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
