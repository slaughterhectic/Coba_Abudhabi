"use client";

import { useEffect, useState } from "react";
import Owl from "./Owl";
import styles from "./Header.module.css";

const NAV = [
  { href: "#idea", label: "The Idea" },
  { href: "#house", label: "The House" },
  { href: "#residency", label: "Residency" },
  { href: "#founders", label: "Founders" },
];

export default function Header() {
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
        <a href="#top" className={styles.lockup} aria-label="COBA — home">
          <Owl className={styles.owl} />
          <span className={styles.word} aria-hidden="true">
            COBΛ
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#visit" className={styles.cta}>
            Become a resident
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
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
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className={styles.sheetLink}>
            {item.label}
          </a>
        ))}
        <a href="#visit" className={styles.sheetCta}>
          Become a resident
        </a>
        <p className={styles.sheetAr} lang="ar">
          <span className="ar-display">أبدع. استكشف. تواصل.</span>
        </p>
      </div>
    </header>
  );
}
