"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to every [data-reveal] element as it enters the viewport.
 * Mounted once so sections stay server components. Everything above the
 * fold uses CSS keyframes instead — nothing critical waits on hydration.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
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

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
}
