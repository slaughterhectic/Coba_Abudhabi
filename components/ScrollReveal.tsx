"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to every [data-reveal] element as it enters the viewport.
 * Mounted once so sections stay server components. Everything above the
 * fold uses CSS keyframes instead — nothing critical waits on hydration.
 * A MutationObserver keeps late-added nodes covered (dev HMR, any future
 * dynamic content) so nothing can be left stuck at opacity 0.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const all = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduced || !("IntersectionObserver" in window)) {
      all().forEach((n) => n.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
    );

    const seen = new WeakSet<Element>();
    const observe = () =>
      all().forEach((n) => {
        if (!seen.has(n)) {
          seen.add(n);
          io.observe(n);
        }
      });

    observe();

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}
