"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { copy, type Lang } from "@/lib/i18n";
import s from "./ActivityReel.module.css";

/** Milliseconds each activity holds the frame before the crossfade. */
const SLIDE_MS = 4200;

/**
 * The slideshow the client asked for twice: the image changes on its own as
 * soon as the site opens — floristry, LEGO, t-shirt painting, makeup class —
 * one image per activity, captioned, so a customer can visualize the week
 * without reading anything first.
 *
 * Only the slides that have been shown (plus the next in line) are mounted,
 * so seventeen full-width images never land on the first paint at once.
 * Autoplay pauses on hover, off-screen, and under prefers-reduced-motion;
 * the arrows, dots and pause button always work.
 */
export default function ActivityReel({ lang }: { lang: Lang }) {
  const c = copy(lang).happening;
  const items = c.items;
  const count = items.length;

  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0, 1]));
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const go = useCallback(
    (next: number) => {
      const n = ((next % count) + count) % count;
      setIdx(n);
      setSeen((prev) => {
        const grown = new Set(prev);
        grown.add(n);
        grown.add((n + 1) % count);
        return grown;
      });
    },
    [count],
  );

  const playing = !hovered && !stopped && inView && !reduced;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(idx + 1), SLIDE_MS);
    return () => clearTimeout(t);
  }, [playing, idx, go]);

  const active = items[idx];

  return (
    <div
      ref={rootRef}
      className={s.reel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ "--dur": `${SLIDE_MS}ms` } as React.CSSProperties}
    >
      <div className={s.frame}>
        {items.map(
          (item, i) =>
            (seen.has(i) || i === idx) && (
              <div
                key={item.img}
                className={`${s.slide} ${i === idx ? s.active : ""}`}
                aria-hidden={i !== idx}
              >
                <Image
                  src={`/img/${item.img}.webp`}
                  alt={i === idx ? `${item.cap} — COBA` : ""}
                  fill
                  sizes="(max-width: 900px) 100vw, 92vw"
                  priority={i === 0}
                  className={s.img}
                />
              </div>
            ),
        )}

        <div className={s.scrim} aria-hidden="true" />

        {/* No aria-live: announcing an auto-rotating caption every four
            seconds would talk over a screen reader. The dots carry the
            captions as labels instead. */}
        <div className={s.caption}>
          <p className={s.tag}>{active.tag}</p>
          <p className={s.cap}>{active.cap}</p>
        </div>

        <p className={s.counter} aria-hidden="true">
          {String(idx + 1).padStart(2, "0")}
          <span className={s.counterOf}> / {String(count).padStart(2, "0")}</span>
        </p>

        <div className={s.controls}>
          <button
            type="button"
            className={s.arrow}
            aria-label={c.prevLabel}
            onClick={() => go(idx - 1)}
          >
            ←
          </button>
          <button
            type="button"
            className={s.arrow}
            aria-label={stopped ? c.playLabel : c.pauseLabel}
            aria-pressed={stopped}
            onClick={() => setStopped((v) => !v)}
          >
            {stopped ? "▶" : "❚❚"}
          </button>
          <button
            type="button"
            className={s.arrow}
            aria-label={c.nextLabel}
            onClick={() => go(idx + 1)}
          >
            →
          </button>
        </div>
      </div>

      <div className={s.bars}>
        {items.map((item, i) => (
          <button
            key={item.img}
            type="button"
            className={`${s.bar} ${i === idx ? s.barActive : ""} ${
              i < idx ? s.barDone : ""
            }`}
            aria-label={`${c.goToLabel} ${i + 1} ${c.ofLabel} ${count} — ${item.cap}`}
            aria-current={i === idx ? "true" : undefined}
            onClick={() => go(i)}
          >
            <span
              className={s.barFill}
              style={playing && i === idx ? undefined : { animation: "none" }}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
