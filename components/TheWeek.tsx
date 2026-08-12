"use client";

import { useState } from "react";
import { copy, type Lang } from "@/lib/i18n";
import styles from "./TheWeek.module.css";

const key = (r: number, c: number) => `${r}-${c}`;

export default function TheWeek({ lang }: { lang: Lang }) {
  const c = copy(lang).week;
  const DAYS = c.days;
  const TIERS = c.tiers;
  const TAKEN = c.taken as Record<string, string>;

  const [claimed, setClaimed] = useState<string | null>(null);
  const [hover, setHover] = useState<{ r: number; c: number } | null>(null);

  const focusRow = hover ? hover.r : claimed ? Number(claimed.split("-")[0]) : null;
  const active = focusRow !== null ? TIERS[focusRow] : null;

  return (
    <div className={styles.wrap}>
      <div className={styles.gridWrap}>
        <div className={styles.head} aria-hidden="true">
          <span />
          {DAYS.map((day) => (
            <span key={day} className={styles.day}>
              {day}
            </span>
          ))}
        </div>

        {TIERS.map((tier, r) => (
          <div
            key={tier.tier}
            className={`${styles.row} ${focusRow === r ? styles.rowOn : ""}`}
          >
            <div className={styles.rowLabel}>
              <span className={styles.rowTier}>{tier.tier}</span>
              <span className={styles.rowHours}>{tier.hours}</span>
            </div>

            {DAYS.map((day, colIdx) => {
              const k = key(r, colIdx);
              const taken = TAKEN[k];
              const isClaimed = claimed === k;

              if (taken) {
                return (
                  <div key={k} className={`${styles.cell} ${styles.taken}`}>
                    <span className={styles.takenName}>{taken}</span>
                    <span className={styles.takenMeta}>
                      {c.every} {day}
                    </span>
                  </div>
                );
              }

              return (
                <button
                  key={k}
                  type="button"
                  className={`${styles.cell} ${isClaimed ? styles.claimed : ""}`}
                  onMouseEnter={() => setHover({ r, c: colIdx })}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover({ r, c: colIdx })}
                  onBlur={() => setHover(null)}
                  onClick={() => setClaimed(isClaimed ? null : k)}
                  aria-pressed={isClaimed}
                  aria-label={`${tier.name}, ${c.every.toLowerCase()} ${day}, ${tier.hours}`}
                >
                  <span className={styles.cellInner}>
                    {isClaimed ? (
                      <>
                        <span className={styles.claimedName}>{c.yours}</span>
                        <span className={styles.takenMeta}>
                          {c.every} {day}
                        </span>
                      </>
                    ) : (
                      <span className={styles.plus} aria-hidden="true" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* On narrow screens the cells are too small to carry a name. */}
      <ul className={styles.legend}>
        {Object.entries(TAKEN).map(([k, name]) => (
          <li key={k}>
            <span className={styles.swatch} aria-hidden="true" />
            <span>{name}</span>
            <span className={styles.legendDay}>
              {c.every} {DAYS[Number(k.split("-")[1])]}
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.panel} aria-live="polite">
        {active ? (
          <>
            <p className="eyebrow">
              {active.tier} · {active.hours}
            </p>
            <p className={styles.panelName}>{active.name}</p>
            <p className={styles.panelSuits}>{active.suits}</p>
          </>
        ) : (
          <>
            <p className="eyebrow">{c.panelEyebrow}</p>
            <p className={styles.panelName}>{c.panelName}</p>
            <p className={styles.panelSuits}>{c.panelSuits}</p>
          </>
        )}
        <p className={styles.hint}>{claimed ? c.hintClaimed : c.hintUnclaimed}</p>
      </div>
    </div>
  );
}
