"use client";

import { useEffect, useState } from "react";
import Owl from "./Owl";
import { copy, type Lang } from "@/lib/i18n";
import styles from "./Header.module.css";

export default function Header({ lang }: { lang: Lang }) {
  const c = copy(lang);
  const [settled, setSettled] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <header
      className={`${styles.header} ${settled ? styles.settled : ""} ${
        open ? styles.open : ""
      }`}
    >
      <div className={styles.inner}>
        <a href="#top" className={styles.lockup} aria-label={c.header.homeLabel}>
          <Owl className={styles.owl} />
          <span className={styles.word} aria-hidden="true">
            COBΛ
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {c.header.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <nav className={styles.langSwitch} aria-label={c.header.langSwitchLabel}>
            <a href="/" aria-current={lang === "en" ? "page" : undefined}>
              EN
            </a>
            <span aria-hidden="true">/</span>
            <a href="/ru" aria-current={lang === "ru" ? "page" : undefined}>
              RU
            </a>
          </nav>
          <a href="#visit" className={styles.cta}>
            {c.header.cta}
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
        {c.header.nav.map((item) => (
          <a key={item.href} href={item.href} className={styles.sheetLink}>
            {item.label}
          </a>
        ))}
        <a href="#visit" className={styles.sheetCta}>
          {c.header.cta}
        </a>
        <nav className={styles.sheetLangSwitch} aria-label={c.header.langSwitchLabel}>
          <a href="/" aria-current={lang === "en" ? "page" : undefined}>
            EN
          </a>
          <span aria-hidden="true">/</span>
          <a href="/ru" aria-current={lang === "ru" ? "page" : undefined}>
            RU
          </a>
        </nav>
        <p className={styles.sheetAr} lang="ar">
          <span className="ar-display">أبدع. استكشف. تواصل.</span>
        </p>
      </div>
    </header>
  );
}
