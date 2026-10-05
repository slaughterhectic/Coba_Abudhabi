import Image from "next/image";
import { d } from "@/components/Site";
import { fraunces, lora } from "@/app/fonts";
import { copy, potteryHref, type Lang } from "@/lib/i18n";
import s from "./PotteryBand.module.css";

const PHOTOS = [
  { img: "pottery-vase-flowers", size: 600 },
  { img: "pottery-speckled-bowl", size: 600 },
  { img: "pottery-terracotta", size: 600 },
];

/**
 * Pottery on the home page — its own section, the way in to /pottery.
 * Every word is lifted from the client's pottery copy (`potteryPage`), and
 * it wears that page's type (Fraunces, brass italic) so the jump from here
 * to there reads as one thing. Sits under the four doors: it is the one
 * programme that is bookable today.
 */
export default function PotteryBand({ lang }: { lang: Lang }) {
  const c = copy(lang).potteryPage;
  const fonts = `${fraunces.variable} ${lang === "ru" ? lora.variable : ""}`;
  const href = potteryHref(lang);

  return (
    <section className={`${fonts} ${s.band}`} id="pottery" aria-label={`${c.hero.title} ${c.hero.accent}`}>
      <div className={`shell ${s.inner}`}>
        <div className={s.copy} data-reveal>
          <p className="eyebrow eyebrow--olive">{c.hero.eyebrow}</p>
          <h2 className={s.title}>
            {c.hero.title} <em>{c.hero.accent}</em>
          </h2>
          <p className={s.lede}>{c.hero.lede}</p>

          <a className={s.next} href={href}>
            <span className="eyebrow">{c.next.eyebrow}</span>
            <span className={s.nextTitle}>{c.next.title}</span>
            <span className={s.nextMeta}>{c.next.meta.join(" · ")}</span>
          </a>

          <a className={`btn btn--solid ${s.btn}`} href={href}>
            {c.next.homeCta}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <a className={s.photos} href={href} tabIndex={-1} aria-hidden="true">
          {PHOTOS.map((p, i) => (
            <span
              key={p.img}
              className={s.photo}
              data-reveal
              style={d(0.08 * i)}
            >
              <Image
                src={`/img/${p.img}.webp`}
                alt=""
                width={p.size}
                height={p.size}
                sizes="(max-width: 900px) 46vw, 24vw"
              />
            </span>
          ))}
        </a>
      </div>
    </section>
  );
}
