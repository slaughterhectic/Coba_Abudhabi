"use client";

import { useEffect, useState } from "react";
import Owl from "./Owl";
import {
  adultsHref,
  childrenHref,
  collaborateHref,
  copy,
  homeHref,
  partnersHref,
  type Lang,
  type Page,
} from "@/lib/i18n";
import styles from "./Header.module.css";

export default function Header({
  lang,
  page = "home",
}: {
  lang: Lang;
  page?: Page;
}) {
  const c = copy(lang);
  const [settled, setSettled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setSettled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav =
    page === "partners"
      ? c.header.navPartners
      : page === "collaborate"
        ? c.header.navCollab
        : page === "children"
          ? c.header.navChildren
          : page === "adults"
            ? c.header.navAdults
            : c.header.navHome;
  const partnerSide = page === "partners" || page === "collaborate";
  const cta = partnerSide ? c.header.ctaPartners : c.header.ctaHome;
  const ctaHref = partnerSide ? "#apply" : "#visit";

  /* The single route-changing link. It sits outside the anchor list because a
     link that leaves the page should never look like one that scrolls it.
     Both partner-side pages point it back at the hub. */
  const cross =
    page === "partners" || page === "collaborate"
      ? { href: homeHref(lang), label: c.header.crossPartners }
      : { href: partnersHref(lang), label: c.header.crossHome };

  /* Scroll-spy: with only two anchors left, the bar has room to say which one
     you are actually inside. Cheaper and steadier than reading scrollY —
     rootMargin pins the "current" line just under the header. */
  useEffect(() => {
    const ids = nav.map((n) => n.href).filter((h) => h.startsWith("#"));
    const sections = ids
      .map((h) => document.querySelector(h))
      .filter((el): el is Element => el !== null);
    if (!sections.length) return;

    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(`#${e.target.id}`, e.isIntersecting);
        setActive(ids.find((id) => seen.get(id)) ?? null);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [nav]);

  /* The switcher must stay on the page you are reading, not bounce you home. */
  const href = (l: Lang) =>
    page === "partners"
      ? partnersHref(l)
      : page === "collaborate"
        ? collaborateHref(l)
        : page === "children"
          ? childrenHref(l)
          : page === "adults"
            ? adultsHref(l)
            : homeHref(l);

  const langSwitch = (className: string) => (
    <nav className={className} aria-label={c.header.langSwitchLabel}>
      <a href={href("en")} aria-current={lang === "en" ? "page" : undefined}>
        <span className={styles.flag} aria-hidden="true">🇬🇧</span>
        EN
      </a>
      <span aria-hidden="true" className={styles.langDivider} />
      <a href={href("ru")} aria-current={lang === "ru" ? "page" : undefined}>
        <span className={styles.flag} aria-hidden="true">🇷🇺</span>
        RU
      </a>
    </nav>
  );

  return (
    <header
      className={`${styles.header} ${settled ? styles.settled : ""} ${
        open ? styles.open : ""
      }`}
    >
      <div className={styles.inner}>
        <a
          href={page === "home" ? "#top" : homeHref(lang)}
          className={styles.lockup}
          aria-label={c.header.homeLabel}
        >
          <Owl className={styles.owl} />
          <span className={styles.word} aria-hidden="true">
            COBΛ
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.link}
              aria-current={active === item.href ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={cross.href} className={styles.cross}>
            {cross.label}
            <span className={styles.crossArrow} aria-hidden="true">
              →
            </span>
          </a>
          {langSwitch(styles.langSwitch)}
          <a href={ctaHref} className={styles.cta}>
            {cta}
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? c.header.closeMenu : c.header.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={styles.sheet}
        hidden={!open}
        onClick={() => setOpen(false)}
      >
        {nav.map((item) => (
          <a key={item.href} href={item.href} className={styles.sheetLink}>
            {item.label}
          </a>
        ))}
        <a href={cross.href} className={styles.sheetLink}>
          {cross.label}
          <span className={styles.crossArrow} aria-hidden="true">
            →
          </span>
        </a>
        <a href={ctaHref} className={styles.sheetCta}>
          {cta}
        </a>
        {langSwitch(styles.sheetLangSwitch)}
        <p className={styles.sheetAr} lang="ar">
          <span className="ar-display">أبدع. استكشف. تواصل.</span>
        </p>
      </div>
    </header>
  );
}
