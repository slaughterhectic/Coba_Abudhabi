import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Reem_Kufi } from "next/font/google";

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
