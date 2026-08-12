import Image from "next/image";
import { copy, type Lang } from "@/lib/i18n";
import styles from "./RoomStrip.module.css";

const DIMS: Record<string, [number, number]> = {
  "room-laughing": [860, 578],
  "room-artists": [860, 576],
  "room-children": [860, 578],
  "room-coffee": [860, 576],
  "room-parents": [860, 578],
  "room-networking": [860, 578],
  "act-science": [860, 578],
  "act-chess": [860, 578],
  "act-lego": [860, 578],
  "act-etiquette": [860, 578],
  "act-mumtoddler": [860, 578],
  "act-boardgames": [860, 578],
};

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
                  const [w, h] = DIMS[shot.img] ?? [860, 578];
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
