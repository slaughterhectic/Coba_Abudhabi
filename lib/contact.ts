/** COBA's live WhatsApp line (client-supplied, 2026-08-16).
 *  For now every enquiry form routes here — the visitor's own WhatsApp
 *  opens with the composed message, nothing is stored by the site. */
export const WHATSAPP_NUMBER = "971525054366";
export const WHATSAPP_DISPLAY = "+971 52 505 4366";

export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;
