"use client";

import { useState } from "react";
import Image from "next/image";
import Owl from "./Owl";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/contact";
import { copy, type Lang } from "@/lib/i18n";
import styles from "./Enquiry.module.css";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nation+Towers+Mall%2C+Abu+Dhabi";

/** Two audiences, one form. `visit` is the visitor asking to come;
 *  `partner` is the club, sponsor or freelancer asking to work with COBA. */
export default function Enquiry({
  lang,
  variant = "visit",
}: {
  lang: Lang;
  variant?: "visit" | "partner";
}) {
  const all = copy(lang);
  const c = variant === "partner" ? all.enquiry : all.visit;
  const [sent, setSent] = useState(false);

  /* No backend and no data collection: the enquiry opens in the visitor's
     own WhatsApp, addressed to COBA's line, with the message composed.
     Nothing is stored or transmitted by this site. */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();

    const text = [
      `${c.mailSubjectPrefix}${get("org") || get("name")}`,
      "",
      `${c.mailFields.name}: ${get("name")}`,
      `${c.mailFields.org}: ${get("org")}`,
      `${c.mailFields.tier}: ${get("tier")}`,
      "",
      get("message"),
    ].join("\n");

    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
  }

  return (
    <section className={styles.visit} id={variant === "partner" ? "apply" : "visit"}>
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
          <span className={styles.hair} aria-hidden="true" />
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 className={`h2 ${styles.title}`}>{c.h2}</h2>
          <p className={styles.lede}>{c.lede}</p>

          <dl className={styles.details}>
            <div className={styles.detailRow}>
              <dt className="caps">{c.findUs}</dt>
              <dd>
                {c.address[0]}
                <br />
                {c.address[1]}
                <br />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  {c.directionsLabel}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </dd>
            </div>
            <div className={styles.detailRow}>
              <dt className="caps">{c.whatsappLabel}</dt>
              <dd>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </dd>
            </div>
            <div className={styles.detailRow}>
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
            <div className={styles.detailRow}>
              <dt className="caps">{c.open}</dt>
              <dd>{c.openValue}</dd>
            </div>
          </dl>
        </div>

        {/* The form is the one solid, lit object on the band — a plaster
           card with a brass rule, so "write to us" reads as the point of
           the section rather than an afterthought floating in the dark. */}
        <form className={styles.form} onSubmit={handleSubmit} data-reveal>
          <div className={styles.formHead}>
            <p className={`eyebrow ${styles.formEyebrow}`}>{c.formEyebrow}</p>
            <Owl className={styles.formOwl} />
          </div>

          <label className={styles.field}>
            <span className={styles.label}>{c.nameLabel}</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{c.orgLabel}</span>
            <input
              name="org"
              type="text"
              required={variant === "visit"}
              autoComplete={variant === "partner" ? "organization" : "email"}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{c.tierLabel}</span>
            <span className={styles.selectWrap}>
              <select name="tier" defaultValue={c.tiers[c.tiers.length - 1]}>
                {c.tiers.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <span className={styles.selectArrow} aria-hidden="true" />
            </span>
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{c.messageLabel}</span>
            <textarea name="message" rows={4} />
          </label>

          <button type="submit" className={`btn btn--solid ${styles.send}`}>
            {c.submit}
            <span className={styles.sendArrow} aria-hidden="true">
              →
            </span>
          </button>

          <p
            className={`${styles.note} ${sent ? styles.noteSent : ""}`}
            aria-live="polite"
          >
            {sent ? c.sentNote : c.unsentNote}
          </p>
        </form>
      </div>
    </section>
  );
}
