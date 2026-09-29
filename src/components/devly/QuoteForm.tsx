import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const PROJECT_TYPES = [
  "Landing Page",
  "Sitio empresarial",
  "E-commerce",
  "Sistema personalizado",
  "No estoy seguro",
];

const BUDGETS = ["Menos de $2,500", "$2,500 - $5,000", "$5,000 - $10,000", "Más de $10,000"];

type Errors = Record<string, string>;

const fieldClass =
  "w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-brand focus:outline-none";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const emailServiceId = import.meta.env["VITE_EMAILJS_SERVICE_ID"];
  const emailTemplateId = import.meta.env["VITE_EMAILJS_TEMPLATE_ID"];
  const emailPublicKey = import.meta.env["VITE_EMAILJS_PUBLIC_KEY"];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (get("nombre").length < 2) next["nombre"] = "Escribe tu nombre.";
    if (get("negocio").length < 2) next["negocio"] = "Escribe el nombre de tu negocio.";
    if (!/^[\d+\s()-]{8,}$/.test(get("whatsapp"))) next["whatsapp"] = "Escribe un WhatsApp válido.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("correo")))
      next["correo"] = "Escribe un correo válido.";
    if (!get("tipo")) next["tipo"] = "Selecciona el tipo de proyecto.";
    if (!get("presupuesto")) next["presupuesto"] = "Selecciona un presupuesto aproximado.";
    if (get("mensaje").length < 10) next["mensaje"] = "Cuéntanos un poco más de tu proyecto.";
    if (data.get("privacidad") !== "on")
      next["privacidad"] = "Debes aceptar el aviso para enviar tu solicitud.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitError("");
    setSending(true);
    try {
      if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
        throw new Error("EmailJS todavía no está configurado.");
      }

      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          nombre: get("nombre"),
          negocio: get("negocio"),
          whatsapp: get("whatsapp"),
          correo: get("correo"),
          tipo: get("tipo"),
          presupuesto: get("presupuesto"),
          mensaje: get("mensaje"),
        },
        { publicKey: emailPublicKey },
      );
      setSent(true);
    } catch {
      setSubmitError(
        "No se pudo enviar tu solicitud. Revisa la configuración del formulario o inténtalo más tarde.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="cotizar" className="bg-surface/30 border-border border-y py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cotización"
          title="Cuéntanos qué necesitas"
          subtitle="Describe lo que haces y qué te gustaría resolver. Revisaremos tu mensaje y te contactaremos para conversar sobre el alcance."
        />

        <Reveal delay={120} className="mt-12">
          {sent ? (
            <div className="card-premium p-8 text-center sm:p-12">
              <CheckCircle2 className="text-brand mx-auto h-12 w-12" aria-hidden />
              <h3 className="mt-5 text-2xl font-bold">¡Solicitud enviada!</h3>
              <p className="text-muted-foreground mx-auto mt-3 max-w-md text-sm leading-relaxed">
                Gracias por contactar a Devly. Revisaremos tu proyecto y nos pondremos en contacto
                contigo.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="border-border-strong hover:bg-surface-2 mt-7 rounded-md border px-6 py-2.5 text-sm font-semibold transition-colors"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="card-premium grid gap-5 p-6 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="nombre" error={errors["nombre"]}>
                  <input id="nombre" name="nombre" className={fieldClass} placeholder="Tu nombre" />
                </Field>
                <Field label="Nombre del negocio" name="negocio" error={errors["negocio"]}>
                  <input
                    id="negocio"
                    name="negocio"
                    className={fieldClass}
                    placeholder="Nombre de tu negocio"
                  />
                </Field>
                <Field label="WhatsApp" name="whatsapp" error={errors["whatsapp"]}>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    className={fieldClass}
                    placeholder="10 dígitos"
                  />
                </Field>
                <Field label="Correo" name="correo" error={errors["correo"]}>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    className={fieldClass}
                    placeholder="tucorreo@ejemplo.com"
                  />
                </Field>
                <Field label="Tipo de proyecto" name="tipo" error={errors["tipo"]}>
                  <select id="tipo" name="tipo" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Presupuesto aproximado"
                  name="presupuesto"
                  error={errors["presupuesto"]}
                >
                  <select
                    id="presupuesto"
                    name="presupuesto"
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="¿Qué necesitas?" name="mensaje" error={errors["mensaje"]}>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  className={fieldClass}
                  placeholder="Cuéntanos sobre tu negocio y lo que necesitas en tu página."
                />
              </Field>

              <div>
                <label className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed">
                  <input
                    name="privacidad"
                    type="checkbox"
                    className="border-input accent-brand mt-1 h-4 w-4 shrink-0 rounded"
                  />
                  <span>
                    Leí y acepto el{" "}
                    <a
                      href="/aviso-de-privacidad"
                      className="text-brand underline underline-offset-4"
                    >
                      aviso de privacidad
                    </a>
                    , y autorizo el uso de mis datos para responder a esta consulta.
                  </span>
                </label>
                {errors["privacidad"] ? (
                  <p role="alert" className="text-destructive mt-2 text-xs">
                    {errors["privacidad"]}
                  </p>
                ) : null}
              </div>

              {submitError ? (
                <p role="alert" className="text-destructive text-sm">
                  {submitError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={sending}
                className="button-primary inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold"
              >
                <Send className="h-4 w-4" aria-hidden />
                {sending ? "Enviando..." : "Solicitar cotización"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={name} className="text-foreground/85 mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-destructive mt-2 text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}
