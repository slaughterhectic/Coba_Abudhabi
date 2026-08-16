import Image from "next/image";
import { copy, type Lang } from "@/lib/i18n";
import styles from "./RoomStrip.module.css";

/* Every shot in the strip is now a 1080×726 act-* still — the deck room-*
   photos were retired on 2026-08-16 (they showed exterior windows; COBA is
   a windowless first-floor mall unit). The map stays for any future
   odd-sized addition. */
const DIMS: Record<string, [number, number]> = {};

/**
 * Two counter-scrolling filmstrips — the room passing by in both
 * directions at once. Pure CSS translation, each row duplicated once
 * for a seamless wrap; cards lift on hover, the rows pause, and
 * everything stops under prefers-reduced-motion.
 */
export default function RoomStrip({ lang }: { lang: Lang }) {
  const shots = copy(lang).room.shots;
  const rows = [shots.slice(0, 6), shots.slice(6)];

  return (
    <div className={styles.stack}>
      {rows.map((row, r) => (
        <div className={styles.viewport} key={r}>
          <div className={`${styles.track} ${r === 1 ? styles.trackReverse : ""}`}>
            {[0, 1].map((copyIdx) => (
              <div className={styles.run} key={copyIdx} aria-hidden={copyIdx === 1}>
                {row.map((shot) => {
                  const [w, h] = DIMS[shot.img] ?? [1080, 726];
                  return (
                    <figure className={styles.item} key={`${copyIdx}-${shot.img}`}>
                      <Image
                        src={`/img/${shot.img}.webp`}
                        alt={copyIdx === 0 ? `${shot.cap} at COBA.` : ""}
                        width={w}
                        height={h}
                        sizes="(max-width: 700px) 62vw, 26vw"
                      />
                      <figcaption>{shot.cap}</figcaption>
                    </figure>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
