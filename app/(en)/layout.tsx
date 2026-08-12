import type { Metadata, Viewport } from "next";
import { plex, plexArabic, reemKufi } from "../fonts";
import ScrollReveal from "@/components/ScrollReveal";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coba.ae"),
  title: {
    default: "COBA — Create. Explore. Connect. | Nation Towers Mall, Abu Dhabi",
    template: "%s · COBA",
  },
  description:
    "COBA is a community house in Nation Towers Mall, Abu Dhabi — a permanent address for classes, clubs and meet-ups. A function room is somewhere you leave. COBA is somewhere you belong.",
  alternates: {
    canonical: "/",
    languages: { en: "/", ru: "/ru" },
  },
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
