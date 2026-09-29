import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

type ConsentChoice = "accepted" | "rejected" | null;

const CONSENT_KEY = "devly-analytics-consent";
const measurementId = import.meta.env["VITE_GA_MEASUREMENT_ID"];

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  }
}

function GoogleAnalytics({ id }: { id: string }) {
  const pageLocation = useLocation({ select: (location) => location.href });

  useEffect(() => {
    window.dataLayer = window.dataLayer ?? [];
    Object.assign(window, { [`ga-disable-${id}`]: false });
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", id, { send_page_view: false });

    const script = document.createElement("script");
    script.async = true;
    script.dataset.devlyAnalytics = "true";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);

    return () => {
      Object.assign(window, { [`ga-disable-${id}`]: true });
      script.remove();
      delete window.gtag;
      delete window.dataLayer;
    };
  }, [id]);

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_location: new URL(pageLocation, window.location.origin).href,
      page_path: new URL(pageLocation, window.location.origin).pathname,
      page_title: document.title,
    });
  }, [pageLocation]);

  return null;
}

export function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedChoice = window.localStorage.getItem(CONSENT_KEY);
    setChoice(storedChoice === "accepted" || storedChoice === "rejected" ? storedChoice : null);
    setReady(true);
  }, []);

  function chooseConsent(nextChoice: Exclude<ConsentChoice, null>) {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
  }

  if (!measurementId) return null;

  return (
    <>
      {choice === "accepted" ? <GoogleAnalytics id={measurementId} /> : null}
      {ready && choice === null ? (
        <aside
          aria-label="Preferencias de analítica"
          className="glass-panel border-border fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border p-5 shadow-2xl sm:inset-x-6 sm:bottom-6 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold">Ayúdanos a mejorar Devly</h2>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">
                Si aceptas, Google Analytics medirá de forma agregada cómo se usa el sitio. No se
                carga antes de tu decisión. Puedes cambiarla en el aviso de privacidad.
              </p>
              <a
                href="/aviso-de-privacidad"
                className="text-brand mt-2 inline-block text-xs underline underline-offset-4"
              >
                Leer aviso de privacidad
              </a>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                onClick={() => chooseConsent("rejected")}
                className="border-border-strong hover:bg-surface-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={() => chooseConsent("accepted")}
                className="button-primary rounded-lg px-4 py-2 text-sm font-semibold"
              >
                Aceptar analíticas
              </button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
}
