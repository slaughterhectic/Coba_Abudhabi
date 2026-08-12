"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Enquiry.module.css";

/* Placeholder until COBA supply the live address — see handover notes. */
const INBOX = "hello@coba.ae";

const TIERS = [
  "Tier A · 09:00 — 13:00 · Morning sanctuary",
  "Tier B · 14:00 — 17:30 · Afternoon salon",
  "Tier C · 18:30 — 22:00 · Evening gathering",
  "Not sure yet",
];

export default function Enquiry() {
  const [sent, setSent] = useState(false);

  /* No backend and no data collection: the browser's own mail client
     carries the enquiry. Nothing is stored or transmitted by this site. */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();

    const body = [
      `Name: ${get("name")}`,
      `Community or practice: ${get("org")}`,
      `Preferred hour: ${get("tier")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      `Residency enquiry — ${get("org") || get("name")}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <section className={styles.visit} id="visit">
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/img/invitation.webp"
          alt=""
          width={1500}
          height={844}
          sizes="100vw"
        />
        <div className={styles.scrim} />
      </div>

      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy} data-reveal>
          <p className="eyebrow">The invitation</p>
          <h2 className={`h2 ${styles.title}`}>
            An invitation to make COBA your permanent address.
          </h2>
          <p className={styles.lede}>
            You bring the community. We hold everything else — a standing place
            in the week, and a room already full.
          </p>

          <dl className={styles.details}>
            <div>
              <dt className="caps">Find us</dt>
              <dd>
                Nation Towers Mall, 1st Floor
                <br />
                Abu Dhabi, United Arab Emirates
              </dd>
            </div>
            <div>
              <dt className="caps">Social</dt>
              <dd>
                <a
                  href="https://instagram.com/cobaabudhabi"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  @cobaabudhabi
                </a>
              </dd>
            </div>
            <div>
              <dt className="caps">Open</dt>
              <dd>Seven days a week</dd>
            </div>
          </dl>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} data-reveal>
          <p className="eyebrow">Become a resident</p>

          <label className={styles.field}>
            <span className={styles.label}>Your name</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Your community or practice</span>
            <input name="org" type="text" autoComplete="organization" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Preferred hour</span>
            <select name="tier" defaultValue={TIERS[3]}>
              {TIERS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>What would you host?</span>
            <textarea name="message" rows={4} />
          </label>

          <button type="submit" className="btn btn--solid">
            Send enquiry
          </button>

          <p className={styles.note}>
            {sent
              ? "Your mail app should now be open with the enquiry ready to send."
              : "Opens in your own mail app. This site stores nothing."}
          </p>
        </form>
      </div>
    </section>
  );
}
