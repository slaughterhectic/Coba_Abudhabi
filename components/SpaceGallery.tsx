"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { copy, type Lang } from "@/lib/i18n";
import {
  GROUP_ORDER,
  PREVIEW,
  SPACE_SHOTS,
  type SpaceGroup,
} from "@/lib/spaceShots";
import s from "./SpaceGallery.module.css";

/**
 * The real room. A filterable masonry of the photographer's pictures with a
 * full-screen viewer (keyboard, swipe, focus-trapped). Everything is a real
 * <button> so the grid is usable without a pointer.
 */
export default function SpaceGallery({ lang }: { lang: Lang }) {
  const c = copy(lang).space;
  const [group, setGroup] = useState<SpaceGroup | "all">("all");
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);

  const filtered = useMemo(
    () =>
      group === "all"
        ? SPACE_SHOTS
        : SPACE_SHOTS.filter((shot) => shot.group === group),
    [group],
  );
  const showAll = expanded || group !== "all";
  const visible = showAll ? filtered : filtered.slice(0, PREVIEW);

  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) =>
        i === null ? i : (i + dir + visible.length) % visible.length,
      ),
    [visible.length],
  );

  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab") {
        // The viewer holds three controls; keep focus inside them.
        const nodes = document.querySelectorAll<HTMLElement>(
          `.${s.viewer} button`,
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const current = open === null ? null : visible[open];

  return (
    <div className={s.wrap}>
      <div className={s.filters} role="group" aria-label={c.title}>
        {(["all", ...GROUP_ORDER] as const).map((g) => (
          <button
            key={g}
            type="button"
            className={`${s.chip} ${group === g ? s.chipOn : ""}`}
            aria-pressed={group === g}
            onClick={() => {
              setGroup(g);
              setOpen(null);
            }}
          >
            {g === "all" ? c.all : c.groups[g]}
          </button>
        ))}
      </div>

      <ul className={s.grid}>
        {visible.map((shot, i) => (
          <li key={shot.file} className={s.cell}>
            <button
              type="button"
              className={s.tile}
              aria-label={`${c.open}: ${shot.alt}`}
              onClick={(e) => {
                opener.current = e.currentTarget;
                setOpen(i);
              }}
            >
              <Image
                src={`/img/real/${shot.file}.webp`}
                alt=""
                width={shot.w}
                height={shot.h}
                sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 28vw"
                quality={70}
              />
              <span className={s.tag}>{c.groups[shot.group]}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className={s.foot}>
        <p className={s.credit}>
          {c.credit} · {SPACE_SHOTS.length} {c.count}
        </p>
        {group === "all" && filtered.length > PREVIEW ? (
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? c.less : c.more}
          </button>
        ) : null}
      </div>

      {current ? (
        <div
          className={s.viewer}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button
            ref={closeBtn}
            type="button"
            className={s.close}
            aria-label={c.close}
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            ×
          </button>
          <button
            type="button"
            className={`${s.nav} ${s.navPrev}`}
            aria-label={c.prev}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            ←
          </button>
          <figure className={s.figure} onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.file}
              src={`/img/real/${current.file}.webp`}
              alt={current.alt}
              width={current.w}
              height={current.h}
              sizes="100vw"
              quality={82}
              priority
              className={s.big}
            />
            <figcaption>
              <span>{c.groups[current.group]}</span>
              <span>
                {(open ?? 0) + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className={`${s.nav} ${s.navNext}`}
            aria-label={c.next}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            →
          </button>
        </div>
      ) : null}
    </div>
  );
}
