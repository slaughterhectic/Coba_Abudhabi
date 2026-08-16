import type { Metadata } from "next";
import WhatsOn from "@/components/WhatsOn";
import { copy } from "@/lib/i18n";

const c = copy("en");

export const metadata: Metadata = {
  title: c.metaAdults.title,
  description: c.metaAdults.description,
  alternates: {
    canonical: "/adults",
    languages: { en: "/adults", ru: "/ru/adults" },
  },
  openGraph: {
    title: c.metaAdults.ogTitle,
    description: c.metaAdults.ogDescription,
    url: "https://coba.ae/adults",
    siteName: "COBA",
    locale: c.meta.ogLocale,
    type: "website",
    images: [{ url: "/img/act-floristry-w.webp", width: 1080, height: 726 }],
  },
};

export default function Page() {
  return <WhatsOn lang="en" page="adults" />;
}
