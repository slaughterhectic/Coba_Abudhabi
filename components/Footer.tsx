import Owl from "./Owl";
import { waLink } from "@/lib/contact";
import { copy, homeHref, partnersHref, type Lang, type Page } from "@/lib/i18n";
import styles from "./Footer.module.css";

export default function Footer({
  lang,
  page = "home",
}: {
  lang: Lang;
  page?: Page;
}) {
  const c = copy(lang).footer;
  const links =
    page === "partners"
      ? c.visitLinksPartners
      : page === "collaborate"
        ? c.visitLinksCollab
        : page === "home"
          ? c.visitLinksHome
          : c.visitLinksWhatsOn;

  /* The cross-link always points at the audience you are not currently reading as. */
  const cross =
    page === "partners"
      ? { href: homeHref(lang), label: c.backHome }
      : { href: partnersHref(lang), label: c.workWithUs };

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
          <p className={styles.tagline}>{c.tagline}</p>
        </div>

        <div className={styles.grid}>
          <div>
            <p className="eyebrow">{c.houseEyebrow}</p>
            <p className={styles.body}>
              {c.houseBody[0]}
              <br />
              {c.houseBody[1]}
              <br />
              {c.houseBody[2]}
            </p>
          </div>

          <div>
            <p className="eyebrow">{c.visitEyebrow}</p>
            <ul className={styles.links}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">{c.followEyebrow}</p>
            <ul className={styles.links}>
              <li>
                <a
                  href="https://instagram.com/cobaabudhabi"
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.instagram}
                </a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noreferrer">
                  {c.whatsapp}
                </a>
              </li>
              <li>
                <a href={cross.href}>{cross.label}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.base}>
          <p>
            © {new Date().getFullYear()} COBA. {c.rights}
          </p>
          <p className={styles.baseAr} lang="ar">
            <span className="ar">أبدع. استكشف. تواصل.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
