import Image from "next/image";
import Owl from "./Owl";
import { copy, type Lang } from "@/lib/i18n";
import {
  CountUp,
  CurtainReveal,
  WordsReveal,
} from "./motion/Primitives";
import s from "./Founders.module.css";

export default function Founders({ lang }: { lang: Lang }) {
  const c = copy(lang).founders;

  return (
    <section className={`band band--linen ${s.section}`} id="founders">
      <Owl className={s.watermark} />

      <div className="shell">
        <div className="sec-head">
          <div className="sec-head__mark">
            <Owl />
            <span className="caps">COBA</span>
          </div>
          <div className="sec-head__num">
            <span className="eyebrow">
              {c.num} / {c.title}
            </span>
          </div>
        </div>

        <div className={s.grid}>
          <div className={s.portraitCol} data-reveal>
            <figure className={s.portrait}>
              <span className={s.frame} aria-hidden="true" />
              <CurtainReveal className={s.portraitMedia}>
                <Image
                  src="/img/founders.webp"
                  alt={c.portraitAlt}
                  width={900}
                  height={1342}
                  sizes="(max-width: 1000px) 100vw, 38vw"
                />
              </CurtainReveal>
            </figure>
            <figcaption className={s.plate}>
              <span className="caps">{c.plateCaption}</span>
              <span className={s.plateAr} lang="ar">
                <span className="ar">المؤسِّستان</span>
              </span>
            </figcaption>
          </div>

          <div className={s.copyCol}>
            {/* fifteen years, made visible — counts up as it enters */}
            <div className={s.bigYears} aria-hidden="true">
              <CountUp to={15} />
            </div>

            <h2 className={`h2 ${s.title}`} data-reveal>
              {c.h2}
            </h2>

            <blockquote className={s.quote}>
              <WordsReveal as="p" lines={[`“${c.quote}”`]} onScroll />
            </blockquote>

            <div data-reveal>
              <p className="body">{c.p1}</p>
              <p className="body" style={{ marginTop: "1.1rem" }}>
                {c.p2}
              </p>
            </div>

            {/* the journey draws itself when it scrolls into view */}
            <ol className={s.rail} data-reveal aria-label={c.railLabel}>
              {c.rail.map((r, i) => (
                <li key={r.place}>
                  <span className={`${s.node} ${i === 1 ? s.nodeOn : ""}`} aria-hidden="true" />
                  <span className="caps">{r.place}</span>
                  <span className={s.railNote}>{r.note}</span>
                </li>
              ))}
            </ol>

            <div className={s.people} data-reveal>
              <ul className={s.names}>
                {c.people.map((f) => (
                  <li key={f.name}>
                    <p className={s.name}>{f.name}</p>
                    <p className="eyebrow">{f.role}</p>
                  </li>
                ))}
              </ul>
              <p className={s.note}>{c.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
