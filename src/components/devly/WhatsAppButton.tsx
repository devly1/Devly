import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/devly";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp: ¿Tienes un proyecto?"
      className="glass-panel hover:border-brand/50 group fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-full py-3 pr-4 pl-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-0.5 sm:bottom-6 sm:left-6"
    >
      <span className="whatsapp-pulse bg-gradient-brand text-primary-foreground grid h-9 w-9 shrink-0 place-items-center rounded-full">
        <MessageCircle className="h-4.5 w-4.5" aria-hidden />
      </span>
      <span className="text-sm font-semibold whitespace-nowrap">¿Tienes un proyecto?</span>
    </a>
  );
}
