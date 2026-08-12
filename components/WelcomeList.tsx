"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./WelcomeList.module.css";

const ITEMS = [
  { img: "who-women", label: "Women's groups", ar: "مجموعات نسائية" },
  { img: "who-parenting", label: "Parenting communities", ar: "مجتمعات الأمومة" },
  { img: "who-books", label: "Book clubs", ar: "أندية الكتاب" },
  { img: "who-cultural", label: "Cultural associations", ar: "جمعيات ثقافية" },
  { img: "who-creative", label: "Creative collectives", ar: "تجمعات إبداعية" },
  { img: "who-wellness", label: "Wellness communities", ar: "مجتمعات العافية" },
];

/**
 * One image at a time instead of a wall of six. The list is the interface;
 * the photograph follows the cursor down it.
 */
export default function WelcomeList() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrap}>
      <ol
        className={styles.list}
        onMouseLeave={() => setActive(0)}
      >
        {ITEMS.map((item, i) => (
          <li key={item.img}>
            <button
              type="button"
              className={`${styles.row} ${i === active ? styles.on : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-describedby="welcome-preview"
            >
              <span className={styles.num}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.label}>{item.label}</span>
              <span className={`${styles.ar} ar`} lang="ar">
                {item.ar}
              </span>
            </button>

            {/* Inline on small screens, where hover does not exist. */}
            <div className={styles.inlineShot}>
              <Image
                src={`/img/${item.img}.webp`}
                alt={`${item.label} meeting at COBA.`}
                width={760}
                height={568}
                sizes="100vw"
              />
            </div>
          </li>
        ))}
      </ol>

      <div className={styles.preview} id="welcome-preview" aria-live="polite">
        {ITEMS.map((item, i) => (
          <figure
            key={item.img}
            className={`${styles.shot} ${i === active ? styles.shotOn : ""}`}
            aria-hidden={i !== active}
          >
            <Image
              src={`/img/${item.img}.webp`}
              alt={`${item.label} meeting at COBA.`}
              width={760}
              height={568}
              sizes="42vw"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
