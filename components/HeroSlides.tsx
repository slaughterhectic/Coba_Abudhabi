"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { copy, type Lang } from "@/lib/i18n";
import s from "./HeroSlides.module.css";

/** How long each community holds the frame. */
const SLIDE_MS = 3600;

/**
 * The hero slideshow (client ask, 2026-08-16 23:10).
 *
 * The old hero was a single clip of two women talking, which "doesn't
 * really show the concept — you can't really figure out what it's for".
 * She asked for four or five completely different images cycling
 * immediately — kids, art, birthdays, family, ladies, business — so that
 * "whoever has a kid straight away sees there is something for the kids"
 * within the first three seconds, without scrolling.
 *
 * Each slide names its audience in a small caption, so the picture and
 * the promise arrive together. Pure CSS crossfade; honours
 * prefers-reduced-motion by holding the first frame.
 */
export default function HeroSlides({ lang }: { lang: Lang }) {
  const slides = copy(lang).heroSlides;
  const [idx, setIdx] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(
      () => setIdx((i) => (i + 1) % slides.length),
      SLIDE_MS,
    );
    return () => clearTimeout(t);
  }, [idx, reduced, slides.length]);

  return (
    <div className={s.stage} aria-hidden="true">
      {slides.map((slide, i) => (
        <div
          key={slide.img}
          className={`${s.slide} ${i === idx ? s.on : ""}`}
        >
          <Image
            src={`/img/${slide.img}.webp`}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            quality={72}
            className={s.img}
          />
        </div>
      ))}

      {/* The audience label rides with the picture. */}
      <div className={s.tags}>
        {slides.map((slide, i) => (
          <span
            key={slide.img}
            className={`${s.tag} ${i === idx ? s.tagOn : ""}`}
          >
            {slide.tag}
          </span>
        ))}
      </div>

      <div className={s.dots}>
        {slides.map((slide, i) => (
          <span
            key={slide.img}
            className={`${s.dot} ${i === idx ? s.dotOn : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
