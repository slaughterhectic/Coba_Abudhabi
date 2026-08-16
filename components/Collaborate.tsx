"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Owl from "@/components/Owl";
import { Rise, WordsReveal } from "@/components/motion/Primitives";
import { waLink } from "@/lib/contact";
import { copy, partnersHref, type Lang } from "@/lib/i18n";
import s from "./Collaborate.module.css";
import f from "./Enquiry.module.css";

/**
 * /collaborate — the individual practitioner's door, as asked for on
 * 2026-08-16: "who are you — a painter, a singer — a session can be held".
 *
 * The page is a conversation, not a form: first you pick who you are,
 * then what it could become, and both choices are carried into the
 * introduction the mail composes. Like every form on this site, it is a
 * mailto: handoff — nothing is stored.
 */
export default function Collaborate({ lang }: { lang: Lang }) {
  const all = copy(lang);
  const c = all.collab;
  const [craft, setCraft] = useState<string | null>(null);
  const [formats, setFormats] = useState<Set<string>>(() => new Set());
  const [sent, setSent] = useState(false);

  const craftLabel =
    c.who.options.find((o) => o.key === craft)?.label ?? c.form.noCraft;

  function toggleFormat(opt: string) {
    setFormats((prev) => {
      const next = new Set(prev);
      if (next.has(opt)) next.delete(opt);
      else next.add(opt);
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();

    const text = [
      `${c.form.mailSubjectPrefix}${craftLabel} — ${get("name")}`,
      "",
      `${c.form.mailFields.craft}: ${craftLabel}`,
      `${c.form.mailFields.formats}: ${
        formats.size ? [...formats].join(" · ") : "—"
      }`,
      `${c.form.mailFields.contact}: ${get("contact")}`,
      `${c.form.mailFields.portfolio}: ${get("portfolio") || "—"}`,
      "",
      get("message"),
    ].join("\n");

    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
  }

  return (
    <>
      <Header lang={lang} page="collaborate" />
      <main>
        {/* ---------- intro ---------- */}
        <section className={s.intro} id="top">
          <div className="shell">
            <Rise delay={0.05}>
              <p className="eyebrow eyebrow--olive">{c.hero.eyebrow}</p>
            </Rise>
            <WordsReveal
              as="h1"
              lines={c.hero.title}
              delay={0.16}
              className={`display ${s.title}`}
            />
            <Rise delay={0.5}>
              <p className={`lede ${s.lede}`}>{c.hero.lede}</p>
            </Rise>
            <Rise delay={0.62}>
              <p className={`caps ${s.capsLine}`}>{c.hero.capsLine}</p>
            </Rise>
          </div>
        </section>

        {/* ---------- 01 who are you ---------- */}
        <section className={`band ${s.whoBand}`} id="who">
          <div className="shell">
            <div className={s.secHead} data-reveal>
              <p className="eyebrow">
                {c.who.num} / {c.who.title}
              </p>
              <h2 className="h2">{c.who.h2}</h2>
              <p className="body">{c.who.body}</p>
            </div>
            <div className={s.crafts} role="radiogroup" aria-label={c.who.h2}>
              {c.who.options.map((opt, i) => (
                <button
                  key={opt.key}
                  type="button"
                  role="radio"
                  aria-checked={craft === opt.key}
                  className={`${s.craft} ${craft === opt.key ? s.craftOn : ""}`}
                  onClick={() =>
                    setCraft((cur) => (cur === opt.key ? null : opt.key))
                  }
                  data-reveal
                  style={{ "--d": `${(i % 4) * 0.06}s` } as React.CSSProperties}
                >
                  <span className={s.craftLabel}>{opt.label}</span>
                  <span className={`${s.craftAr} ar`} lang="ar">
                    {opt.ar}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- 02 what you'd host ---------- */}
        <section className={`band band--linen ${s.formatsBand}`} id="formats">
          <div className="shell">
            <div className={s.secHead} data-reveal>
              <p className="eyebrow">
                {c.formats.num} / {c.formats.title}
              </p>
              <h2 className="h2">{c.formats.h2}</h2>
              <p className="body">{c.formats.body}</p>
            </div>
            <div className={s.chips} data-reveal>
              {c.formats.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  aria-pressed={formats.has(opt)}
                  className={`${s.chip} ${formats.has(opt) ? s.chipOn : ""}`}
                  onClick={() => toggleFormat(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- how it works ---------- */}
        <section className={`band band--ink ${s.how}`}>
          <div className="shell">
            <p className="eyebrow" data-reveal>
              {c.how.eyebrow}
            </p>
            <ol className={s.steps}>
              {c.how.steps.map(([idx, title, body], i) => (
                <li
                  key={title}
                  className={s.step}
                  data-reveal
                  style={{ "--d": `${i * 0.1}s` } as React.CSSProperties}
                >
                  <span className={`eyebrow ${s.stepIdx}`}>{idx}</span>
                  <span className={s.stepTitle}>{title}</span>
                  <span className={s.stepBody}>{body}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- the introduction form ---------- */}
        <section className={f.visit} id="apply">
          <div className={f.media} aria-hidden="true">
            <Image
              src="/img/act-artists.webp"
              alt=""
              width={1080}
              height={726}
              sizes="100vw"
            />
            <div className={f.scrim} />
          </div>

          <div className={`shell ${f.inner}`}>
            <div className={f.copy} data-reveal>
              <span className={f.hair} aria-hidden="true" />
              <p className="eyebrow">{c.hero.eyebrow}</p>
              <h2 className={`h2 ${f.title}`}>{c.form.h2}</h2>
              <p className={f.lede}>{c.form.lede}</p>

              {/* The choices made above, played back as a receipt. */}
              <dl className={f.details}>
                <div className={f.detailRow}>
                  <dt className="caps">{c.form.mailFields.craft}</dt>
                  <dd>{craftLabel}</dd>
                </div>
                <div className={f.detailRow}>
                  <dt className="caps">{c.form.mailFields.formats}</dt>
                  <dd>{formats.size ? [...formats].join(" · ") : "—"}</dd>
                </div>
              </dl>
            </div>

            <form className={f.form} onSubmit={handleSubmit} data-reveal>
              <div className={f.formHead}>
                <p className={`eyebrow ${f.formEyebrow}`}>{c.form.eyebrow}</p>
                <Owl className={f.formOwl} />
              </div>

              <label className={f.field}>
                <span className={f.label}>{c.form.nameLabel}</span>
                <input name="name" type="text" required autoComplete="name" />
              </label>

              <label className={f.field}>
                <span className={f.label}>{c.form.contactLabel}</span>
                <input name="contact" type="text" required autoComplete="email" />
              </label>

              <label className={f.field}>
                <span className={f.label}>{c.form.portfolioLabel}</span>
                <input name="portfolio" type="text" inputMode="url" />
              </label>

              <label className={f.field}>
                <span className={f.label}>{c.form.messageLabel}</span>
                <textarea name="message" rows={4} />
              </label>

              <button type="submit" className={`btn btn--solid ${f.send}`}>
                {c.form.submit}
                <span className={f.sendArrow} aria-hidden="true">
                  →
                </span>
              </button>

              <p
                className={`${f.note} ${sent ? f.noteSent : ""}`}
                aria-live="polite"
              >
                {sent ? c.form.sentNote : c.form.unsentNote}
              </p>
            </form>
          </div>
        </section>

        {/* ---------- the other door: organisations ---------- */}
        <section className={s.cross}>
          <div className={`shell ${s.crossInner}`} data-reveal>
            <p className="eyebrow">{c.strip.note}</p>
            <a className={s.crossLink} href={partnersHref(lang)}>
              {c.strip.label}
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </section>
      </main>
      <Footer lang={lang} page="collaborate" />
    </>
  );
}
