import type { CSSProperties } from "react";
import { copy, type Lang } from "@/lib/i18n";
import s from "./Doors.module.css";

/**
 * The four doors.
 *
 * The client's note of 2026-08-31: "Immediately after the hero, I would have
 * four clear options… then the philosophical story can follow." So this sits
 * directly under the hero and before a single line of philosophy, and it is
 * deliberately typographic — the hero above it and every band below it are
 * photographic, and a visitor deciding where to go deserves one quiet screen
 * where the choice is the only thing on it.
 *
 * Locale-prefixed hrefs come from the copy object; the two route links there
 * are already written for the language being rendered.
 */
export default function Doors({ lang }: { lang: Lang }) {
  const c = copy(lang).doors;

  return (
    <section className={s.doors} aria-label={c.eyebrow}>
      <div className="shell">
        <p className={`eyebrow ${s.eyebrow}`} data-reveal>
          {c.eyebrow}
        </p>

        <ul className={s.grid}>
          {c.items.map((item, i) => (
            <li key={item.title} data-reveal style={{ "--d": `${i * 0.09}s` } as CSSProperties}>
              <a className={s.door} href={item.href}>
                <span className={s.rule} aria-hidden="true" />
                <span className={s.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={s.titleRow}>
                  <span className={s.title}>{item.title}</span>
                  <span className={`${s.ar} ar`} lang="ar">
                    {item.ar}
                  </span>
                </span>
                <span className={s.body}>{item.body}</span>
                <span className={s.cta}>
                  {item.cta}
                  <span className={s.arrow} aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
