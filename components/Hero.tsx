import Owl from "./Owl";
import BgVideo from "./BgVideo";
import { copy, type Lang } from "@/lib/i18n";
import styles from "./Hero.module.css";

export default function Hero({ lang }: { lang: Lang }) {
  const c = copy(lang).hero;

  return (
    <section className={styles.hero} id="top">
      <div className={styles.media}>
        <BgVideo name="hero" className={styles.video} preload="auto" />
        <div className={styles.scrim} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.arabic} ar-display rise`} lang="ar" style={{ "--d": ".05s" } as React.CSSProperties}>
            أبدع. استكشف. تواصل.
          </p>

          <h1 className={`display ${styles.title} rise`} style={{ "--d": ".15s" } as React.CSSProperties}>
            {c.title[0]}
            <br />
            {c.title[1]}
          </h1>

          <p className={`${styles.lede} rise`} style={{ "--d": ".28s" } as React.CSSProperties}>
            {c.lede}
          </p>

          <div className={`${styles.actions} rise`} style={{ "--d": ".4s" } as React.CSSProperties}>
            <a href="#visit" className="btn btn--solid">
              {c.ctaPrimary}
            </a>
            <a href="#happens" className="btn btn--ghost">
              {c.ctaSecondary}
            </a>
          </div>
        </div>

        <div className={`${styles.foot} rise`} style={{ "--d": ".55s" } as React.CSSProperties}>
          <div className={styles.footMark}>
            <Owl className={styles.footOwl} title="COBA" />
            <span className={styles.footWord} aria-hidden="true">
              COBΛ
            </span>
          </div>
          <dl className={styles.facts}>
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt className="caps">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
