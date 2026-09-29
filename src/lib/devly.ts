/**
 * Datos de contacto y contenido editable de Devly.
 * Reemplaza los placeholders por los datos reales cuando estén disponibles.
 */

export const WHATSAPP_NUMBER = "526621617989";

export const INSTAGRAM_URL = "https://www.instagram.com/devly.web";

export const FACEBOOK_URL = "https://www.facebook.com/devly.Weeb/";

export const EMAIL = "devlycontact1@gmail.com";

export const WHATSAPP_MESSAGE =
  "Hola Devly, me interesa una página web para mi negocio. Quiero recibir información.";

export function whatsappLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];
