import type { Metadata, Viewport } from "next";
import { plex, plexArabic, reemKufi } from "../fonts";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFab from "@/components/WhatsAppFab";
import { copy } from "@/lib/i18n";
import "../globals.css";

const c = copy("ru");

export const metadata: Metadata = {
  metadataBase: new URL("https://coba.ae"),
  title: {
    default: c.meta.title,
    template: "%s · COBA",
  },
  description: c.meta.description,
  alternates: {
    canonical: "/ru",
    languages: { en: "/", ru: "/ru" },
  },
  keywords: [
    "COBA Абу-Даби",
    "сообщество Абу-Даби",
    "Nation Towers Mall",
    "мастер-классы Абу-Даби",
    "книжный клуб Абу-Даби",
    "программа резидентства",
  ],
  openGraph: {
    title: c.meta.ogTitle,
    description: c.meta.ogDescription,
    url: "https://coba.ae/ru",
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

export default function RuRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${plex.variable} ${plexArabic.variable} ${reemKufi.variable}`}
    >
      <body>
        {children}
        <WhatsAppFab lang="ru" />
        <div className="grain" aria-hidden="true" />
        <ScrollReveal />
      </body>
    </html>
  );
}
