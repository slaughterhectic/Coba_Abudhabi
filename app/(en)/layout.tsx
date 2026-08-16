import type { Metadata, Viewport } from "next";
import { plex, plexArabic, reemKufi } from "../fonts";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFab from "@/components/WhatsAppFab";
import { copy } from "@/lib/i18n";
import "../globals.css";

const c = copy("en");

export const metadata: Metadata = {
  metadataBase: new URL("https://coba.ae"),
  title: {
    default: c.meta.title,
    template: "%s · COBA",
  },
  description: c.meta.description,
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
    "family activities Abu Dhabi",
    "networking Abu Dhabi",
  ],
  openGraph: {
    title: c.meta.ogTitle,
    description: c.meta.ogDescription,
    url: "https://coba.ae",
    siteName: "COBA",
    locale: c.meta.ogLocale,
    type: "website",
    images: [{ url: "/media/hero-poster.webp", width: 1920, height: 1080 }],
  },
  icons: {
    icon: [
      { url: "/icon-32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png?v=2",
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
        <WhatsAppFab lang="en" />
        <div className="grain" aria-hidden="true" />
        <ScrollReveal />
      </body>
    </html>
  );
}
