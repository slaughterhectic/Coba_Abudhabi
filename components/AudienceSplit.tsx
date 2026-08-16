import Image from "next/image";
import type { CSSProperties } from "react";
import { adultsHref, childrenHref, copy, type Lang } from "@/lib/i18n";
import s from "./AudienceSplit.module.css";

/**
 * The two customer doors, straight after the slideshow: a child's week or
 * your own. Each is one large photographic card that routes to its
 * "What's On" page.
 */
export default function AudienceSplit({ lang }: { lang: Lang }) {
  const c = copy(lang).audience;
  const cards = [
    { ...c.childrenCard, href: childrenHref(lang) },
    { ...c.adultsCard, href: adultsHref(lang) },
  ];

  return (
    <div className={s.grid}>
      {cards.map((card, i) => (
        <a
          key={card.href}
          href={card.href}
          className={s.card}
          data-reveal
          style={{ "--d": `${i * 0.12}s` } as CSSProperties}
        >
          <div className={s.media} aria-hidden="true">
            <Image
              src={`/img/${card.img}.webp`}
              alt=""
              width={1080}
              height={726}
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
          <div className={s.scrim} aria-hidden="true" />
          <div className={s.copy}>
            <span className={`${s.ar} ar`} lang="ar">
              {card.ar}
            </span>
            <span className={s.title}>{card.title}</span>
            <span className={s.note}>{card.note}</span>
            <span className={s.cta}>
              {card.cta}
              <span className={s.arrow} aria-hidden="true">
                →
              </span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
