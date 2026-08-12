import Owl from "./Owl";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.lockup}>
          <Owl className={styles.owl} title="COBA" />
          <p className={styles.word} aria-hidden="true">
            COBΛ
          </p>
          <span className={styles.hair} aria-hidden="true" />
          <p className={`${styles.arabic} ar-display`} lang="ar">
            كُوبا
          </p>
          <p className={styles.tagline}>Create · Explore · Connect</p>
        </div>

        <div className={styles.grid}>
          <div>
            <p className="eyebrow">The house</p>
            <p className={styles.body}>
              Nation Towers Mall, 1st Floor
              <br />
              Abu Dhabi, United Arab Emirates
              <br />
              Open seven days a week
            </p>
          </div>

          <div>
            <p className="eyebrow">Visit</p>
            <ul className={styles.links}>
              <li>
                <a href="#idea">The Idea</a>
              </li>
              <li>
                <a href="#happens">What happens here</a>
              </li>
              <li>
                <a href="#residency">The residency model</a>
              </li>
              <li>
                <a href="#founders">The founders</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Follow</p>
            <ul className={styles.links}>
              <li>
                <a
                  href="https://instagram.com/cobaabudhabi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram — @cobaabudhabi
                </a>
              </li>
              <li>
                <a href="#visit">Become a resident</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.base}>
          <p>© {new Date().getFullYear()} COBA. All rights reserved.</p>
          <p className={styles.baseAr} lang="ar">
            <span className="ar">أبدع. استكشف. تواصل.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
