import type { Metadata } from "next";
import Pottery from "@/components/Pottery";
import { copy } from "@/lib/i18n";

const c = copy("ru");

export const metadata: Metadata = {
  title: c.metaPottery.title,
  description: c.metaPottery.description,
  alternates: {
    canonical: "/ru/pottery",
    languages: { en: "/pottery", ru: "/ru/pottery" },
  },
  openGraph: {
    title: c.metaPottery.ogTitle,
    description: c.metaPottery.ogDescription,
    url: "https://coba.ae/ru/pottery",
    siteName: "COBA",
    locale: c.meta.ogLocale,
    type: "website",
    images: [{ url: "/img/pottery-speckled-bowl.webp", width: 600, height: 600 }],
  },
};

export default function Page() {
  return <Pottery lang="ru" />;
}
