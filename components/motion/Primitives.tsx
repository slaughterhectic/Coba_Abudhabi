"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/* The house easing — same curve as the CSS var(--ease). */
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Words rise out of a clipped line, one after another — the classic
 * editorial mask reveal. Splits on spaces; keeps <br/> behaviour by
 * passing an array of lines.
 */
export function WordsReveal({
  lines,
  delay = 0,
  className,
  as: Tag = "span",
  onScroll = false,
}: {
  lines: string[];
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  /** true: reveal when scrolled into view instead of on mount */
  onScroll?: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  /* One observer on the container — per-word whileInView is unreliable for
     spans that sit fully clipped inside overflow:hidden line masks. */
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const play = !onScroll || inView;
  let wordIndex = 0;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag className={className} ref={ref as any}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {line.split(" ").map((word) => {
            const i = wordIndex++;
            return (
              <span
                key={`${word}-${i}`}
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  verticalAlign: "bottom",
                  paddingBottom: "0.08em",
                  marginBottom: "-0.08em",
                }}
              >
                <motion.span
                  style={{ display: "inline-block", willChange: "transform" }}
                  initial={reduced ? false : { y: "115%" }}
                  animate={play ? { y: 0 } : undefined}
                  transition={{
                    duration: 0.9,
                    ease: EASE,
                    delay: delay + i * 0.075,
                  }}
                >
                  {word}
                </motion.span>
                {" "}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

/** Fade-and-rise entrance for hero elements below the headline. */
export function Rise({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 26, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Image unveiled by a rising clip as it enters the viewport, while the
 * image itself settles from a slight zoom — a quiet curtain lift.
 */
export function CurtainReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ overflow: "hidden" }}
      initial={reduced ? false : { clipPath: "inset(100% 0 0 0)" }}
      animate={inView ? { clipPath: "inset(0% 0 0 0)" } : undefined}
      transition={{ duration: 1.15, ease: EASE, delay }}
    >
      <motion.div
        initial={reduced ? false : { scale: 1.14 }}
        animate={inView ? { scale: 1 } : undefined}
        transition={{ duration: 1.5, ease: EASE, delay }}
        style={{ height: "100%", willChange: "transform" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Slow scroll-linked drift. The child is oversized slightly and glides
 * vertically as the section passes through the viewport.
 */
export function ParallaxDrift({
  children,
  className,
  strength = 7,
}: {
  children: React.ReactNode;
  className?: string;
  /** percent of element height to drift over the full scroll pass */
  strength?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`],
  );

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div
        style={{
          y,
          scale: 1 + strength / 45,
          height: "100%",
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** A number that counts up when it scrolls into view. */
export function CountUp({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  const spring = useSpring(0, { stiffness: 42, damping: 18 });
  const text = useTransform(spring, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView && !reduced) spring.set(to);
  }, [inView, reduced, to, spring]);

  if (reduced) {
    return (
      <span ref={ref} className={className}>
        {to}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      <motion.span>{text}</motion.span>
    </span>
  );
}

/** Staggered entrance for a list's children as it enters the viewport. */
export function StaggerIn({
  children,
  className,
  step = 0.07,
}: {
  children: React.ReactNode;
  className?: string;
  step?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: step } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
