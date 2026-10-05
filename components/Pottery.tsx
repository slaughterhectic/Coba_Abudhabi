import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { d } from "@/components/Site";
import { Rise } from "@/components/motion/Primitives";
import { fraunces, lora } from "@/app/fonts";
import { waLink } from "@/lib/contact";
import { copy, type Lang } from "@/lib/i18n";
import s from "./Pottery.module.css";

/* Square crops straight out of the client's PDF, at the size it embeds them. */
const DIMS: Record<string, number> = {
  "pottery-speckled-bowl": 600,
  "pottery-vase-flowers": 600,
  "pottery-terracotta": 600,
  "pottery-fluted-vase": 500,
  "pottery-ruffled-vessel": 500,
  "pottery-irina": 700,
};

const DOTS = [s.dotOlive, s.dotBrass, s.dotInk, s.dotSage];

/**
 * /pottery — the client's "Pottery at COBA" page content, built as she
 * laid it out: Fraunces headings with a brass italic accent over Plex
 * body, linen cards, olive buttons. The first half is her page one (open
 * workshops), the second half her page two (group bookings). Both CTAs
 * open WhatsApp with the message already written, like every other form
 * on the site.
 */
export default function Pottery({ lang }: { lang: Lang }) {
  const c = copy(lang).potteryPage;
  const fonts = `${fraunces.variable} ${lang === "ru" ? lora.variable : ""}`;

  return (
    <div className={`${fonts} ${s.page}`}>
      <Header lang={lang} page="pottery" />
      <main>
        {/* ---------- page one: Pottery at COBA ---------- */}
        <section className={s.intro} id="top">
          <div className={s.wrap}>
            <Rise delay={0.05}>
              <p className="eyebrow eyebrow--olive">{c.hero.eyebrow}</p>
            </Rise>
            <Rise delay={0.15}>
              <h1 className={s.display}>
                {c.hero.title} <em>{c.hero.accent}</em>
              </h1>
            </Rise>
            <Rise delay={0.3}>
              <p className={s.lede}>{c.hero.lede}</p>
            </Rise>
          </div>
        </section>

        <section className={s.section}>
          <div className={s.wrap} data-reveal>
            <p className="eyebrow">{c.about.eyebrow}</p>
            <h2 className={s.h2}>{c.about.h2}</h2>
            {c.about.body.map((p) => (
              <p key={p.slice(0, 24)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className={s.section}>
          <div className={s.wrap}>
            <p className="eyebrow" data-reveal>
              {c.ways.eyebrow}
            </p>
            <div className={s.ways}>
              {c.ways.items.map((w, i) => (
                <article
                  key={w.title}
                  className={s.card}
                  data-reveal
                  style={d(0.08 * i)}
                >
                  <h3 className={s.h3}>{w.title}</h3>
                  <p className={s.cardBody}>{w.body}</p>
                  <p className={s.meta}>{w.meta.join(" · ")}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={s.section} id="workshops">
          <div className={s.wrap}>
            <div data-reveal>
              <p className="eyebrow">{c.regular.eyebrow}</p>
              <h2 className={s.h2}>{c.regular.h2}</h2>
              <p className={s.body}>{c.regular.body}</p>
            </div>

            <div className={`${s.card} ${s.next}`} data-reveal style={d(0.1)}>
              <div>
                <p className="eyebrow">{c.next.eyebrow}</p>
                <h3 className={s.h3}>{c.next.title}</h3>
                <p className={s.nextMeta}>{c.next.meta.join(" · ")}</p>
              </div>
              <a
                className={`btn btn--solid ${s.btn}`}
                href={waLink(c.next.message)}
                target="_blank"
                rel="noreferrer"
              >
                {c.next.cta}
              </a>
            </div>

            <ul className={s.gallery}>
              {c.gallery.map((g, i) => (
                <li
                  key={g.img}
                  className={s.tile}
                  data-reveal
                  style={d(0.06 * i)}
                >
                  <Image
                    src={`/img/${g.img}.webp`}
                    alt={g.alt}
                    width={DIMS[g.img]}
                    height={DIMS[g.img]}
                    sizes="(max-width: 700px) 46vw, 230px"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- page two: Pottery for your group ---------- */}
        <section className={s.groupsHead} id="groups">
          <div className={s.wrap} data-reveal>
            <p className="eyebrow eyebrow--olive">{c.groups.eyebrow}</p>
            <h2 className={s.display}>
              {c.groups.title} <em>{c.groups.accent}</em>
            </h2>
            <p className={s.lede}>{c.groups.lede}</p>
          </div>
        </section>

        <section className={s.section}>
          <div className={`${s.wrap} ${s.formats}`}>
            {c.groups.items.map((f, i) => (
              <article key={f.title} data-reveal style={d(0.06 * (i % 2))}>
                <h3 className={`${s.h3} ${s.formatHead}`}>
                  <span className={`${s.dot} ${DOTS[i]}`} aria-hidden="true" />
                  {f.title}
                </h3>
                <p className={s.cardBody}>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={s.section}>
          <div className={s.wrap}>
            <p className="eyebrow" data-reveal>
              {c.steps.eyebrow}
            </p>
            <ol className={`${s.card} ${s.steps}`} data-reveal>
              {c.steps.items.map((st, i) => (
                <li key={st.title}>
                  <span className={s.stepNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={s.stepTitle}>{st.title}</h3>
                  <p className={s.stepBody}>{st.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={s.section} id="faq">
          <div className={s.wrap}>
            <p className="eyebrow" data-reveal>
              {c.faq.eyebrow}
            </p>
            <dl className={s.faq}>
              {c.faq.items.map((f, i) => (
                <div key={f.q} data-reveal style={d(0.06 * (i % 2))}>
                  <dt className={s.q}>{f.q}</dt>
                  <dd className={s.a}>{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={s.section} id="plan">
          <div className={`${s.wrap} ${s.plan}`}>
            <div data-reveal>
              <h2 className={s.h2}>{c.plan.h2}</h2>
              <p className={s.body}>{c.plan.body}</p>
              <a
                className={`btn btn--solid ${s.btn}`}
                href={waLink(c.plan.message)}
                target="_blank"
                rel="noreferrer"
              >
                {c.plan.cta}
              </a>
            </div>

            <div className={s.guide} data-reveal style={d(0.1)}>
              <div className={s.portrait}>
                <Image
                  src="/img/pottery-irina.webp"
                  alt={c.guide.portraitAlt}
                  width={DIMS["pottery-irina"]}
                  height={DIMS["pottery-irina"]}
                  sizes="160px"
                />
              </div>
              <div>
                <p className="eyebrow">{c.guide.eyebrow}</p>
                <p className={s.guideBody}>{c.guide.body}</p>
                <p className={s.guideLinks}>
                  <a
                    href="https://aesthii.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.guide.site}
                  </a>
                  {" · "}
                  <a
                    href="https://instagram.com/aesthii.co"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.guide.instagram}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={s.wrap}>
          <p className={s.credit}>
            <span>
              <strong>COBA</strong> · {c.credit.place}
            </span>
            <span>{c.credit.led}</span>
          </p>
        </div>
      </main>
      <Footer lang={lang} page="pottery" />
    </div>
  );
}
