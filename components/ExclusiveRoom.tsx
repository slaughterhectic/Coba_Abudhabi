import Image from "next/image";
import { d } from "@/components/Site";
import { copy, type Lang } from "@/lib/i18n";
import s from "./ExclusiveRoom.module.css";

/**
 * An exclusive collaboration feature: The Rooms® presents the Sustainable
 * Fashion Room at COBA. Copy and prices are the organiser's own; tickets
 * and brand applications stay on their page, so both CTAs link out.
 */
export default function ExclusiveRoom({ lang }: { lang: Lang }) {
  const c = copy(lang).exclusive;

  return (
    <section className={s.band} id="exclusive" aria-label={c.title}>
      <div className={s.bg} aria-hidden="true">
        <Image
          src="/img/real/16.webp"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          className={s.bgImg}
        />
      </div>
      <div className={s.scrim} aria-hidden="true" />

      <div className={`shell ${s.inner}`}>
        <div className={s.main} data-reveal>
          <p className={s.badge}>
            <span className={s.dot} aria-hidden="true" />
            {c.eyebrow}
          </p>
          <p className={`eyebrow ${s.presented}`}>{c.presented}</p>
          <h2 className={s.title}>{c.title}</h2>
          <p className={s.tagline}>{c.tagline}</p>
          <p className={s.lede}>{c.lede}</p>

          <dl className={s.facts}>
            {c.facts.map(([k, v]) => (
              <div key={k}>
                <dt className="caps">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <div className={s.actions}>
            <a
              className="btn btn--solid"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.cta}
              <span aria-hidden="true"> →</span>
            </a>
            <a
              className="btn btn--ghost"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.ctaBrand}
            </a>
          </div>
          <p className={s.note}>{c.note}</p>
        </div>

        <div className={s.side}>
          <div className={s.card} data-reveal>
            <p className={`eyebrow ${s.cardEyebrow}`}>{c.partsLabel}</p>
            <ol className={s.parts}>
              {c.parts.map(([t, body], i) => (
                <li key={t} style={d(0.06 * i)}>
                  <span className={s.num} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={s.partTitle}>{t}</h3>
                    <p className={s.partBody}>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={s.card} data-reveal style={d(0.1)}>
            <p className={`eyebrow ${s.cardEyebrow}`}>{c.ticketsLabel}</p>
            <ul className={s.tickets}>
              {c.tickets.map(([name, price, body]) => (
                <li key={name}>
                  <div className={s.ticketHead}>
                    <span className={s.ticketName}>{name}</span>
                    <span className={s.price}>{price}</span>
                  </div>
                  <p className={s.partBody}>{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
