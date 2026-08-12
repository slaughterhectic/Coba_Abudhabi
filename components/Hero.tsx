import Owl from "./Owl";
import BgVideo from "./BgVideo";
import styles from "./Hero.module.css";

export default function Hero() {
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
            Somewhere
            <br />
            you belong.
          </h1>

          <p className={`${styles.lede} rise`} style={{ "--d": ".28s" } as React.CSSProperties}>
            A community house in Nation Towers Mall, Abu Dhabi — a permanent
            address for the classes, clubs and meet-ups that bring people
            together.
          </p>

          <div className={`${styles.actions} rise`} style={{ "--d": ".4s" } as React.CSSProperties}>
            <a href="#visit" className="btn btn--solid">
              Become a resident
            </a>
            <a href="#happens" className="btn btn--ghost">
              What happens here
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
            <div>
              <dt className="caps">Address</dt>
              <dd>Nation Towers Mall, 1st Floor</dd>
            </div>
            <div>
              <dt className="caps">Open</dt>
              <dd>Seven days a week</dd>
            </div>
            <div>
              <dt className="caps">The room</dt>
              <dd>10 – 35 guests</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
