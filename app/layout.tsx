import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Reem_Kufi } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

/* IBM Plex Sans + IBM Plex Sans Arabic — SIL Open Font Licence.
   Reem Kufi for the Arabic display lockup. Weight floor is 400 for body. */
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-plex-ar",
  display: "swap",
});

const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-reem",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coba.ae"),
  title: {
    default: "COBA — Create. Explore. Connect. | Nation Towers Mall, Abu Dhabi",
    template: "%s · COBA",
  },
  description:
    "COBA is a community house in Nation Towers Mall, Abu Dhabi — a permanent address for classes, clubs and meet-ups. A function room is somewhere you leave. COBA is somewhere you belong.",
  keywords: [
    "COBA Abu Dhabi",
    "community hub Abu Dhabi",
    "Nation Towers Mall",
    "workshops Abu Dhabi",
    "book club Abu Dhabi",
    "residency programme",
  ],
  openGraph: {
    title: "COBA — Create. Explore. Connect.",
    description:
      "A home for creativity, connection and collaboration in Nation Towers Mall, Abu Dhabi.",
    url: "https://coba.ae",
    siteName: "COBA",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/media/hero-poster.webp", width: 1280, height: 720 }],
  },
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f1ebdf",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plex.variable} ${plexArabic.variable} ${reemKufi.variable}`}
    >
      <body>
        {children}
        <div className="grain" aria-hidden="true" />
        <ScrollReveal />
      </body>
    </html>
  );
}
