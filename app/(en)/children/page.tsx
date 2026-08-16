import type { Metadata } from "next";
import WhatsOn from "@/components/WhatsOn";
import { copy } from "@/lib/i18n";

const c = copy("en");

export const metadata: Metadata = {
  title: c.metaChildren.title,
  description: c.metaChildren.description,
  alternates: {
    canonical: "/children",
    languages: { en: "/children", ru: "/ru/children" },
  },
  openGraph: {
    title: c.metaChildren.ogTitle,
    description: c.metaChildren.ogDescription,
    url: "https://coba.ae/children",
    siteName: "COBA",
    locale: c.meta.ogLocale,
    type: "website",
    images: [{ url: "/img/act-birthday-w.webp", width: 1080, height: 726 }],
  },
};

export default function Page() {
  return <WhatsOn lang="en" page="children" />;
}
