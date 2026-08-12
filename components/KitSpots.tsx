"use client";

import { useState } from "react";
import styles from "./KitSpots.module.css";

export type KitSpot = {
  x: number;
  y: number;
  label: string;
  side: "left" | "right";
};

/**
 * Brass hotspot markers over the membership-kit flat-lay. Hover or tap a
 * dot and the object introduces itself. Decorative annotation — the alt
 * text on the photograph still carries the full description.
 */
export default function KitSpots({ spots }: { spots: KitSpot[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={styles.layer}>
      {spots.map((spot, i) => (
        <div
          key={spot.label}
          className={styles.spot}
          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
        >
          <button
            type="button"
            className={styles.dot}
            aria-expanded={open === i}
            aria-label={spot.label}
            onMouseEnter={() => setOpen(i)}
            onMouseLeave={() => setOpen((v) => (v === i ? null : v))}
            onFocus={() => setOpen(i)}
            onBlur={() => setOpen((v) => (v === i ? null : v))}
            onClick={() => setOpen((v) => (v === i ? null : i))}
          >
            <span className={styles.pulse} aria-hidden="true" />
            <span className={styles.core} aria-hidden="true" />
          </button>
          <span
            className={`${styles.chip} ${styles[spot.side]} ${
              open === i ? styles.chipOn : ""
            }`}
            role="tooltip"
          >
            {spot.label}
          </span>
        </div>
      ))}
    </div>
  );
}
