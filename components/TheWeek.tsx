"use client";

import { useState } from "react";
import styles from "./TheWeek.module.css";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TIERS = [
  {
    tier: "Tier A",
    hours: "09:00 — 13:00",
    name: "Morning sanctuary",
    suits: "Wellness, parent and child, book clubs.",
  },
  {
    tier: "Tier B",
    hours: "14:00 — 17:30",
    name: "Afternoon salon",
    suits: "Masterclasses and youth enrichment.",
  },
  {
    tier: "Tier C",
    hours: "18:30 — 22:00",
    name: "Evening gathering",
    suits: "Clubs, meet-ups and cultural circles.",
  },
];

/* The two residencies COBA have already announced. */
const TAKEN: Record<string, string> = {
  "2-0": "Art Club",
  "1-5": "Children's Art Club",
};

const key = (r: number, c: number) => `${r}-${c}`;

export default function TheWeek() {
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

            {DAYS.map((day, c) => {
              const k = key(r, c);
              const taken = TAKEN[k];
              const isClaimed = claimed === k;

              if (taken) {
                return (
                  <div key={k} className={`${styles.cell} ${styles.taken}`}>
                    <span className={styles.takenName}>{taken}</span>
                    <span className={styles.takenMeta}>Every {day}</span>
                  </div>
                );
              }

              return (
                <button
                  key={k}
                  type="button"
                  className={`${styles.cell} ${isClaimed ? styles.claimed : ""}`}
                  onMouseEnter={() => setHover({ r, c })}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover({ r, c })}
                  onBlur={() => setHover(null)}
                  onClick={() => setClaimed(isClaimed ? null : k)}
                  aria-pressed={isClaimed}
                  aria-label={`${tier.name}, every ${day}, ${tier.hours}`}
                >
                  <span className={styles.cellInner}>
                    {isClaimed ? (
                      <>
                        <span className={styles.claimedName}>Yours</span>
                        <span className={styles.takenMeta}>Every {day}</span>
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
              Every {DAYS[Number(k.split("-")[1])]}
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
            <p className="eyebrow">The residency model</p>
            <p className={styles.panelName}>Take an hour. Keep it.</p>
            <p className={styles.panelSuits}>
              Choose any hour of any day — it becomes your standing slot, week
              after week. The same room, the same hour, the same members.
            </p>
          </>
        )}
        <p className={styles.hint}>
          {claimed
            ? "That hour is yours every week. Enquire to make it real."
            : "Choose an hour to see how it works."}
        </p>
      </div>
    </div>
  );
}
