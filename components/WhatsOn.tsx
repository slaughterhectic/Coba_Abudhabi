import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";
import { d } from "@/components/Site";
import { Rise, WordsReveal } from "@/components/motion/Primitives";
import { adultsHref, childrenHref, copy, type Lang } from "@/lib/i18n";
import s from "./WhatsOn.module.css";

/* Intrinsic sizes; anything not listed is a 1080×726 act-* generation. */
const DIMS: Record<string, [number, number]> = {
  "act-kidsart": [1900, 1277],
  "club-community": [1050, 1406],
};

const dims = (name: string) => DIMS[name] ?? ([1080, 726] as [number, number]);

/**
 * One component, two customer pages: /children and /adults.
 * Both answer the only question a first-time visitor has — "what is
 * happening at the hub?" — as a captioned activity grid, then a feature
 * band (birthday parties / private events, up to 70 guests), then the
 * visitor enquiry form, so "Contact" never means leaving the page.
 */
export default function WhatsOn({
  lang,
  page,
}: {
  lang: Lang;
  page: "children" | "adults";
}) {
  const all = copy(lang);
  const c = page === "children" ? all.childrenPage : all.adultsPage;
  const featureId = page === "children" ? "parties" : "private";
  const featureImg = page === "children" ? "act-birthday-w" : "act-private";
  const crossTarget =
    page === "children" ? adultsHref(lang) : childrenHref(lang);
  const [fw, fh] = dims(featureImg);

  return (
    <>
      <Header lang={lang} page={page} />
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

        {/* ---------- the activity grid ---------- */}
        <section className={`band ${s.gridBand}`}>
          <div className="shell">
            <div className={s.gridHead} data-reveal>
              <p className="eyebrow">{c.gridEyebrow}</p>
              <h2 className="h2">{c.gridTitle}</h2>
            </div>
            <ul className={s.grid}>
              {c.items.map((item, i) => {
                const [w, h] = dims(item.img);
                return (
                  <li
                    key={`${item.img}-${item.title}`}
                    className={s.card}
                    data-reveal
                    style={d(0.06 * (i % 3))}
                  >
                    <div className={`figure ${s.cardMedia}`}>
                      <Image
                        src={`/img/${item.img}.webp`}
                        alt={`${item.title} — COBA`}
                        width={w}
                        height={h}
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 46vw, 30vw"
                      />
                    </div>
                    <div className={s.cardHead}>
                      <h3 className="h3">{item.title}</h3>
                      <span className={`${s.cardAr} ar`} lang="ar">
                        {item.ar}
                      </span>
                    </div>
                    <p className={s.cardBody}>{item.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ---------- feature: birthday parties / private events ---------- */}
        <section className={`band band--ink ${s.feature}`} id={featureId}>
          <div className={`shell ${s.featureInner}`}>
            <div className={`figure ${s.featureMedia}`} data-reveal>
              <Image
                src={`/img/${featureImg}.webp`}
                alt=""
                width={fw}
                height={fh}
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
            <div className={s.featureCopy} data-reveal style={d(0.1)}>
              <p className="eyebrow">{c.parties.eyebrow}</p>
              <h2 className={`h2 ${s.featureTitle}`}>
                {c.parties.h2[0]}
                <br />
                {c.parties.h2[1]}
              </h2>
              <p className="body">{c.parties.body}</p>
              <dl className={s.facts}>
                {c.parties.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="caps">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <a href="#visit" className="btn btn--ghost">
                {c.parties.cta}
              </a>
            </div>
          </div>
        </section>

        {/* ---------- the other door ---------- */}
        <section className={s.cross}>
          <div className={`shell ${s.crossInner}`} data-reveal>
            <p className="eyebrow">{c.cross.note}</p>
            <a className={s.crossLink} href={crossTarget}>
              {c.cross.label}
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </section>

        {/* ---------- contact / enquiry ---------- */}
        <Enquiry lang={lang} variant="visit" />
      </main>
      <Footer lang={lang} page={page} />
    </>
  );
}
