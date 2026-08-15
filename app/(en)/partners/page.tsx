import type { Metadata } from "next";
import Partners from "@/components/Partners";
import { copy } from "@/lib/i18n";

const c = copy("en");

export const metadata: Metadata = {
  title: c.metaPartners.title,
  description: c.metaPartners.description,
  alternates: {
    canonical: "/partners",
    languages: { en: "/partners", ru: "/ru/partners" },
  },
  openGraph: {
    title: c.metaPartners.ogTitle,
    description: c.metaPartners.ogDescription,
    url: "https://coba.ae/partners",
    siteName: "COBA",
    locale: c.meta.ogLocale,
    type: "website",
    images: [{ url: "/media/loop-majlis-hero-poster.webp", width: 1920, height: 1082 }],
  },
};

export default function Page() {
  return <Partners lang="en" />;
}
