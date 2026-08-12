import Image from "next/image";
import styles from "./RoomStrip.module.css";

const SHOTS = [
  { img: "room-laughing", cap: "People laughing", w: 860, h: 578 },
  { img: "room-artists", cap: "Artists creating", w: 860, h: 576 },
  { img: "room-children", cap: "Children building", w: 860, h: 578 },
  { img: "room-coffee", cap: "Coffee conversations", w: 860, h: 576 },
  { img: "room-parents", cap: "Parents talking", w: 860, h: 578 },
  { img: "room-networking", cap: "Business networking", w: 860, h: 578 },
];

/**
 * A continuous filmstrip rather than a wall of tiles — the room passing by.
 * Pure CSS translation, duplicated once for a seamless wrap; pauses on hover
 * and stops entirely under prefers-reduced-motion.
 */
export default function RoomStrip() {
  return (
    <div className={styles.viewport}>
      <div className={styles.track}>
        {[0, 1].map((copy) => (
          <div className={styles.run} key={copy} aria-hidden={copy === 1}>
            {SHOTS.map((shot) => (
              <figure className={styles.item} key={`${copy}-${shot.img}`}>
                <Image
                  src={`/img/${shot.img}.webp`}
                  alt={copy === 0 ? `${shot.cap} at COBA.` : ""}
                  width={shot.w}
                  height={shot.h}
                  sizes="(max-width: 700px) 78vw, 34vw"
                />
                <figcaption>{shot.cap}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
