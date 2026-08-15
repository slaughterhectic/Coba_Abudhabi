import Image from "next/image";
import { copy, type Lang } from "@/lib/i18n";
import styles from "./RoomStrip.module.css";

const DIMS: Record<string, [number, number]> = {
  "room-laughing": [1700, 1141],
  "room-artists": [1750, 1174],
  "room-children": [1700, 1141],
  "room-coffee": [1750, 1174],
  "room-parents": [1700, 1141],
  "room-networking": [1700, 1141],
  "act-science": [1080, 726],
  "act-chess": [1080, 726],
  "act-lego": [1080, 726],
  "act-etiquette": [1080, 726],
  "act-mumtoddler": [1080, 726],
  "act-boardgames": [1080, 726],
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
