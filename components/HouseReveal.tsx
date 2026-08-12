"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Owl from "./Owl";
import styles from "./HouseReveal.module.css";

type Props = {
  eyebrow: string;
  h2: string[];
  body: string;
  specs: string[][];
  alt: string;
  scrollHint: string;
};

/**
 * The doors open. The shopfront photograph is split into its two glass-door
 * halves; scrolling slides them apart — the building literally opens for
 * the reader — revealing the warm interior and the room's numbers. The
 * gesture scrubs with scroll, forward and back.
 */
export default function HouseReveal({
  eyebrow,
  h2,
  body,
  specs,
  alt,
  scrollHint,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const doorL = useTransform(scrollYProgress, [0.08, 0.62], ["0%", "-104%"]);
  const doorR = useTransform(scrollYProgress, [0.08, 0.62], ["0%", "104%"]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  /* Reduced motion: the same content as a calm static composition. */
  if (reduced) {
    return (
      <div className={styles.static}>
        <figure className={styles.staticMedia}>
          <Image src="/img/shopfront.webp" alt={alt} width={1800} height={506} sizes="100vw" />
        </figure>
        <div className={`shell ${styles.staticCopy}`}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2">
            {h2[0]} {h2[1]}
          </h2>
          <p className="body">{body}</p>
          <dl className={styles.specs}>
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt className="caps">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className={styles.stage}>
      <div className={styles.sticky}>
        {/* ---- inside the house, waiting behind the doors; the doors
             themselves are the reveal, so this layer stays static ---- */}
        <div className={styles.inside}>
          <div className={styles.glow} aria-hidden="true" />
          <Owl className={styles.insideOwl} />
          <div className={`shell ${styles.insideCopy}`}>
            <p className={`eyebrow ${styles.insideEyebrow}`}>{eyebrow}</p>
            <h2 className={`h2 ${styles.insideTitle}`}>
              {h2[0]}
              <br />
              {h2[1]}
            </h2>
            <p className={styles.insideBody}>{body}</p>
            <dl className={styles.specs}>
              {specs.map(([k, v]) => (
                <div key={k}>
                  <dt className="caps">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ---- the two door halves ---- */}
        <motion.div
          className={`${styles.door} ${styles.doorLeft}`}
          style={{ x: doorL }}
          aria-hidden="true"
        >
          <Image
            src="/img/shopfront.webp"
            alt=""
            width={1800}
            height={506}
            sizes="100vw"
            className={styles.doorImg}
          />
        </motion.div>
        <motion.div
          className={`${styles.door} ${styles.doorRight}`}
          style={{ x: doorR }}
          aria-hidden="true"
        >
          <Image
            src="/img/shopfront.webp"
            alt={alt}
            width={1800}
            height={506}
            sizes="100vw"
            className={styles.doorImg}
          />
        </motion.div>

        <motion.p className={styles.hint} style={{ opacity: hintOpacity }}>
          <span className={styles.hintLine} aria-hidden="true" />
          {scrollHint}
        </motion.p>
      </div>
    </div>
  );
}
