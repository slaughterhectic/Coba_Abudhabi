import Owl from "./Owl";
import BgVideo from "./BgVideo";
import { WordsReveal, Rise, CountUp } from "./motion/Primitives";
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
          <Rise delay={0.05}>
            <p className={`${styles.arabic} ar-display`} lang="ar">
              أبدع. استكشف. تواصل.
            </p>
          </Rise>

          <WordsReveal
            as="h1"
            lines={[c.title[0], c.title[1]]}
            delay={0.18}
            className={`display ${styles.title}`}
          />

          <Rise delay={0.55}>
            <p className={styles.lede}>{c.lede}</p>
          </Rise>

          <Rise delay={0.7} className={styles.actions}>
            <a href="#visit" className="btn btn--solid">
              {c.ctaPrimary}
            </a>
            <a href="#happens" className="btn btn--ghost">
              {c.ctaSecondary}
            </a>
          </Rise>
        </div>

        <Rise delay={0.9} className={styles.foot}>
          <div className={styles.footMark}>
            <Owl className={styles.footOwl} title="COBA" />
            <span className={styles.footWord} aria-hidden="true">
              COBΛ
            </span>
          </div>
          <dl className={styles.facts}>
            {c.facts.map((f, i) => (
              <div key={f.label}>
                <dt className="caps">{f.label}</dt>
                <dd>
                  {/* the capacity line gets a live count-up */}
                  {i === 2 ? (
                    <>
                      <CountUp to={70} suffix="+" /> {f.value.replace(/^70\+\s*/, "")}
                    </>
                  ) : (
                    f.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Rise>
      </div>

      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
