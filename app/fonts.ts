import {
  Fraunces,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  Lora,
  Reem_Kufi,
} from "next/font/google";

/* IBM Plex Sans + IBM Plex Sans Arabic — SIL Open Font Licence.
   Reem Kufi for the Arabic display lockup. Weight floor is 400 for body.
   Shared between the /en and /ru root layouts. */
export const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-plex-ar",
  display: "swap",
});

export const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-reem",
  display: "swap",
});

/* Fraunces — the serif of the client's "Pottery at COBA" page content.
   Used on /pottery only, so it is applied on that page's wrapper rather
   than in the root layouts. It has no Cyrillic, so /ru/pottery adds Lora
   behind it in the stack and Russian glyphs fall through to it. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const lora = Lora({
  subsets: ["cyrillic"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});
