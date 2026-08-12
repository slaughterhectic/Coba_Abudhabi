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
 * A continuous filmstrip rather than a wall of tiles — the room passing by.
 * Pure CSS translation, duplicated once for a seamless wrap; pauses on hover
 * and stops entirely under prefers-reduced-motion.
 */
export default function RoomStrip({ lang }: { lang: Lang }) {
  const shots = copy(lang).room.shots;

  return (
    <div className={styles.viewport}>
      <div className={styles.track}>
        {[0, 1].map((copyIdx) => (
          <div className={styles.run} key={copyIdx} aria-hidden={copyIdx === 1}>
            {shots.map((shot) => {
              const [w, h] = DIMS[shot.img] ?? [860, 578];
              return (
                <figure className={styles.item} key={`${copyIdx}-${shot.img}`}>
                  <Image
                    src={`/img/${shot.img}.webp`}
                    alt={copyIdx === 0 ? `${shot.cap} at COBA.` : ""}
                    width={w}
                    height={h}
                    sizes="(max-width: 700px) 78vw, 34vw"
                  />
                  <figcaption>{shot.cap}</figcaption>
                </figure>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
