"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./WhyCarousel.module.css";

export default function WhyCarousel({
  reasons,
}: {
  reasons: string[][];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });
  const [mounted, setMounted] = useState(false);
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setMounted(true);
    // trimSnaps can collapse trailing snap points once the last slide is
    // fully in view, so dots must track the real snap list, not slide count.
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnapCount(emblaApi.scrollSnapList().length);
      onSelect();
    });
  }, [emblaApi, onSelect]);

  // Before mount, an SSR'd client component has no embla instance yet, so
  // every derived control state must render identically to its initial
  // value here — never a client-only computed one — or hydration mismatches.
  const dotCount = mounted ? snapCount : reasons.length;
  const prevDisabled = mounted ? !canPrev : true;
  const nextDisabled = mounted ? !canNext : true;

  return (
    <div className={styles.wrap}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {reasons.map(([n, title, body], i) => (
            <div className={styles.slide} key={title}>
              <div className={styles.card}>
                <span className={styles.num} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="eyebrow">{n}</p>
                <h3 className="h3" style={{ marginTop: "0.5rem" }}>
                  {title}
                </h3>
                <p className="body" style={{ marginTop: "0.4rem" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bar}>
        <div className={styles.dots}>
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === selected ? styles.dotOn : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === selected}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Previous"
            disabled={prevDisabled}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Next"
            disabled={nextDisabled}
            onClick={() => emblaApi?.scrollNext()}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
