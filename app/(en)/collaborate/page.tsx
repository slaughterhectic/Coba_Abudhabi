import type { Metadata } from "next";
import Collaborate from "@/components/Collaborate";
import { copy } from "@/lib/i18n";

const c = copy("en");

export const metadata: Metadata = {
  title: c.metaCollab.title,
  description: c.metaCollab.description,
  alternates: {
    canonical: "/collaborate",
    languages: { en: "/collaborate", ru: "/ru/collaborate" },
  },
  openGraph: {
    title: c.metaCollab.ogTitle,
    description: c.metaCollab.ogDescription,
    url: "https://coba.ae/collaborate",
    siteName: "COBA",
    locale: c.meta.ogLocale,
    type: "website",
    images: [{ url: "/img/act-artists.webp", width: 1080, height: 726 }],
  },
};

export default function Page() {
  return <Collaborate lang="en" />;
}
