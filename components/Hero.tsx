import Owl from "./Owl";
import BgVideo from "./BgVideo";
import HeroSlides from "./HeroSlides";
import { WordsReveal, Rise, CountUp } from "./motion/Primitives";
import { copy, type Lang, type Page } from "@/lib/i18n";
import styles from "./Hero.module.css";

export default function Hero({
  lang,
  page = "home",
  video = "hero",
}: {
  lang: Lang;
  page?: Page;
  video?: string;
}) {
  const all = copy(lang);
  const c = page === "partners" ? all.partners.hero : all.hero;

  return (
    <section className={styles.hero} id="top">
      {/* The home hero shows the communities themselves, cycling. The
          partner hero keeps its single clip — that page has one audience. */}
      <div className={styles.media}>
        {page === "partners" ? (
          <BgVideo name={video} className={styles.video} preload="auto" />
        ) : (
          <HeroSlides lang={lang} />
        )}
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
            <a href={c.ctaPrimaryHref} className="btn btn--solid">
              {c.ctaPrimary}
            </a>
            <a href={c.ctaSecondaryHref} className="btn btn--ghost">
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
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt className="caps">{f.label}</dt>
                {/* A fact carrying `count` gets a live count-up on its number. */}
                <dd>
                  {f.count !== undefined ? (
                    <>
                      <CountUp to={f.count} /> {f.value}
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
