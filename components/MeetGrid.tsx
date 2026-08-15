import { copy, type Lang } from "@/lib/i18n";
import s from "./MeetGrid.module.css";

/**
 * The ecosystem, stated plainly: eight kinds of person, one index.
 *
 * Deliberately typographic. There is no honest photograph of "entrepreneurs"
 * or "community leaders" in the brand library, and inventing eight of them
 * would break the house rule that every image on this site is real. So the
 * type does the work instead: at rest the eight read as a set, and the one
 * you point at fills in while the rest fall back to outline — the room
 * quietening around whoever is speaking.
 *
 * The whole effect is CSS (`:has()` + `:hover`), so it costs no JavaScript
 * and degrades to a plain, fully legible list wherever it isn't supported.
 * Every note stays in the DOM and visible at rest; nothing here is hidden
 * behind a pointer.
 */
export default function MeetGrid({ lang }: { lang: Lang }) {
  const items = copy(lang).meet.items;

  return (
    <ol className={s.roster}>
      {items.map((item, i) => (
        <li
          key={item.label}
          className={s.row}
          data-reveal
          style={{ "--d": `${0.05 * i}s` } as React.CSSProperties}
        >
          <span className={s.num} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={s.label}>
            <span className={s.labelInk}>{item.label}</span>
          </h3>
          <span className={`${s.ar} ar`} lang="ar">
            {item.ar}
          </span>
          <p className={s.note}>{item.note}</p>
          <span className={s.sweep} aria-hidden="true" />
        </li>
      ))}
    </ol>
  );
}
