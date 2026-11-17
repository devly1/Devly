import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { EMAIL, whatsappLink } from "@/lib/devly";

const GA_MEASUREMENT_ID = import.meta.env["VITE_GA_MEASUREMENT_ID"];
const ANALYTICS_CONSENT_KEY = "devly-analytics-consent";

export const Route = createFileRoute("/aviso-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Aviso de privacidad | Devly" },
      {
        name: "description",
        content: "Conoce cómo Devly utiliza los datos enviados en las solicitudes de cotización.",
      },
    ],
  }),
  component: PrivacyNotice,
});

function PrivacyNotice() {
  return (
    <div className="page-atmosphere min-h-screen bg-background">
      <header className="glass-panel border-border sticky top-0 z-10 border-b">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4 sm:px-6">
          <a
            href="/"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Volver a Devly
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-brand text-xs font-bold tracking-[0.18em] uppercase">
          Información sobre tus datos
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Aviso de privacidad</h1>
        <p className="text-muted-foreground mt-3 text-sm">
          Última actualización: 28 de septiembre de 2026
        </p>

        <div className="card-premium mt-8 space-y-8 p-6 text-sm leading-relaxed sm:p-9 sm:text-base">
          <section>
            <h2 className="text-lg font-bold">Quién trata tus datos</h2>
            <p className="text-muted-foreground mt-2">
              Miguel García y Sebastian Rendon, quienes ofrecen sus servicios bajo el nombre Devly,
              son responsables del tratamiento de los datos personales que envías en el formulario
              de cotización de este sitio. Devly opera desde Hermosillo, Sonora, México.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold">Datos que recopilamos</h2>
            <p className="text-muted-foreground mt-2">
              Recibimos tu nombre, nombre del negocio, número de WhatsApp, correo electrónico, tipo
              de proyecto, presupuesto aproximado y el mensaje que escribas. No solicitamos datos
              personales sensibles en el formulario.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold">Para qué los utilizamos</h2>
            <p className="text-muted-foreground mt-2">
              Utilizamos estos datos para revisar y responder tu solicitud de cotización,
              comunicarnos contigo sobre el proyecto y, si lo solicitas, dar seguimiento a la
              conversación. No usamos los datos del formulario para enviarte publicidad no
              solicitada.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold">Cómo se envían y conservan</h2>
            <p className="text-muted-foreground mt-2">
              El formulario utiliza EmailJS y el servicio de correo configurado para entregar tu
              solicitud a Devly. Estos proveedores procesan la información necesaria para prestar
              ese servicio conforme a sus propias políticas de privacidad. Conservamos los datos
              durante el tiempo necesario para responder y dar seguimiento a tu consulta; puedes
              solicitar su eliminación cuando ya no sean necesarios para ese fin.
            </p>
          </section>

          {GA_MEASUREMENT_ID ? (
            <section>
              <h2 className="text-lg font-bold">Medición de visitas</h2>
              <p className="text-muted-foreground mt-2">
                Si aceptas las analíticas en el aviso de preferencias, este sitio usa Google
                Analytics para conocer de forma agregada cómo se utiliza y mejorar su contenido.
                Puede procesar datos de navegación, páginas visitadas, interacciones e información
                técnica del dispositivo y navegador. La etiqueta de Google Analytics no se carga
                antes de tu consentimiento. Google puede procesar estos datos conforme a su{" "}
                <a
                  className="text-brand underline underline-offset-4"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  política de privacidad
                </a>
                .
              </p>
              <AnalyticsPreferenceButton />
            </section>
          ) : null}

          <section>
            <h2 className="text-lg font-bold">Acceso, corrección o eliminación</h2>
            <p className="text-muted-foreground mt-2">
              Puedes solicitar acceso a tus datos, corregirlos o pedir su eliminación escribiendo a{" "}
              <a className="text-brand underline underline-offset-4" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              . Incluye tu nombre, el correo o WhatsApp usado en la solicitud y una descripción de
              lo que necesitas para que podamos localizar la información. También puedes escribirnos{" "}
              <a
                className="text-brand underline underline-offset-4"
                href={whatsappLink("Hola, quiero hacer una consulta sobre mis datos personales.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                por WhatsApp
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold">Cambios a este aviso</h2>
            <p className="text-muted-foreground mt-2">
              Si cambia la forma en que tratamos estos datos, actualizaremos este aviso en esta
              página e indicaremos la fecha de la última modificación.
            </p>
          </section>

          <p className="border-border border-t pt-5 text-xs text-muted-foreground">
            Las personas responsables prestan sus servicios desde Hermosillo, Sonora, México. Para
            cualquier solicitud relacionada con este aviso o con tus datos, utiliza los medios de
            contacto indicados arriba.
          </p>
        </div>
      </main>
    </div>
  );
}

function AnalyticsPreferenceButton() {
  const [updated, setUpdated] = useState(false);

  function reopenPreferences() {
    window.localStorage.removeItem(ANALYTICS_CONSENT_KEY);
    setUpdated(true);
    window.setTimeout(() => window.location.reload(), 700);
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={reopenPreferences}
        className="border-border-strong hover:bg-surface-2 rounded-lg border px-4 py-2 text-sm font-semibold transition-colors"
      >
        {updated ? "Abriendo preferencias…" : "Cambiar o retirar consentimiento de analíticas"}
      </button>
    </div>
  );
}
