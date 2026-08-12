"use client";

import { useState } from "react";
import Image from "next/image";
import { copy, type Lang } from "@/lib/i18n";
import styles from "./Enquiry.module.css";

/* Placeholder until COBA supply the live address — see handover notes. */
const INBOX = "hello@coba.ae";

export default function Enquiry({ lang }: { lang: Lang }) {
  const c = copy(lang).enquiry;
  const [sent, setSent] = useState(false);

  /* No backend and no data collection: the browser's own mail client
     carries the enquiry. Nothing is stored or transmitted by this site. */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();

    const body = [
      `${c.mailFields.name}: ${get("name")}`,
      `${c.mailFields.org}: ${get("org")}`,
      `${c.mailFields.tier}: ${get("tier")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(
      `${c.mailSubjectPrefix}${get("org") || get("name")}`,
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
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className={`h2 ${styles.title}`}>{c.h2}</h2>
          <p className={styles.lede}>{c.lede}</p>

          <dl className={styles.details}>
            <div>
              <dt className="caps">{c.findUs}</dt>
              <dd>
                {c.address[0]}
                <br />
                {c.address[1]}
              </dd>
            </div>
            <div>
              <dt className="caps">{c.social}</dt>
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
              <dt className="caps">{c.open}</dt>
              <dd>{c.openValue}</dd>
            </div>
          </dl>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} data-reveal>
          <p className="eyebrow">{c.formEyebrow}</p>

          <label className={styles.field}>
            <span className={styles.label}>{c.nameLabel}</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{c.orgLabel}</span>
            <input name="org" type="text" autoComplete="organization" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{c.tierLabel}</span>
            <select name="tier" defaultValue={c.tiers[3]}>
              {c.tiers.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{c.messageLabel}</span>
            <textarea name="message" rows={4} />
          </label>

          <button type="submit" className="btn btn--solid">
            {c.submit}
          </button>

          <p className={styles.note}>{sent ? c.sentNote : c.unsentNote}</p>
        </form>
      </div>
    </section>
  );
}
