import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";
import WelcomeList from "@/components/WelcomeList";
import TheWeek from "@/components/TheWeek";
import BgVideo from "@/components/BgVideo";
import WhyCarousel from "@/components/WhyCarousel";
import KitSpots from "@/components/KitSpots";
import { CheckMark, CrossMark } from "@/components/Icons";
import { CurtainReveal } from "@/components/motion/Primitives";
import { Shot, SectionHead, d } from "@/components/Site";
import { copy, type Lang } from "@/lib/i18n";
import s from "@/app/page.module.css";

/**
 * The collaborator page.
 *
 * Everything that answers "why should I work with COBA?" — residency,
 * collaboration, sponsorship, freelance practice. It used to sit inside the
 * home page and outweigh the visitor material five sections to three.
 */
export default function Partners({ lang }: { lang: Lang }) {
  const c = copy(lang);

  return (
    <>
      <Header lang={lang} page="partners" />
      <main>
        {/* The 2560px master. `loop-majlis` itself stays small — it also plays
            in a card on the home page, which must not pull a hero-sized file. */}
        <Hero lang={lang} page="partners" video="loop-majlis-hero" />

        {/* ---------- 01 who we work with ---------- */}
        <section className="band" id="roles">
          <div className="shell">
            <SectionHead num={c.partners.roles.num} title={c.partners.roles.title} />
            <div className={s.roomIntro} data-reveal>
              <h2 className="h2">{c.partners.roles.h2}</h2>
              <p className="body">{c.partners.roles.body}</p>
            </div>

            <ul className={s.roles}>
              {c.partners.roles.items.map(([title, body], i) => (
                <li key={title} data-reveal style={d(0.07 * i)}>
                  <span className={s.rolesNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`h3 ${s.rolesTitle}`}>{title}</h3>
                  <p className={s.rolesBody}>{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 02 why coba ---------- */}
        <section className="band band--linen" id="why">
          <div className="shell">
            <SectionHead num={c.why.num} title={c.why.title} />

            <div className={s.whyLead2} data-reveal>
              <h2 className="h2">
                {c.why.h2Lead}
                <em className={s.em}>{c.why.h2Em}</em>
              </h2>
              <div className={s.whyLeadRight}>
                <p className="body">
                  {c.why.body}
                  <strong>{c.why.bodyStrong}</strong>
                </p>
                <blockquote className={s.quote}>
                  <p>“{c.why.quote}”</p>
                  <cite className="caps">{c.why.cite}</cite>
                </blockquote>
              </div>
            </div>

            <div className={s.reasonsHolder} data-reveal style={d(0.08)}>
              <WhyCarousel reasons={c.why.reasons} />
            </div>
          </div>
        </section>

        {/* ---------- 03 the model ---------- */}
        <section className={`band band--ink ${s.model}`} id="residency">
          <div className={s.modelMedia} aria-hidden="true">
            <BgVideo name="loop-calm" />
          </div>
          <div className={`shell ${s.modelInner}`}>
            <SectionHead num={c.model.num} title={c.model.title} arabic={c.model.arabic} />
            <h2 className="h2" data-reveal>
              {c.model.h2[0]}
              <br />
              {c.model.h2[1]}
            </h2>

            <div className={s.compare}>
              <div className={s.compareCol} data-reveal>
                <p className="eyebrow" style={{ color: "rgba(241,235,223,.45)" }}>
                  {c.model.rentLabel}
                </p>
                <ul className={`${s.list} ${s.listMuted}`}>
                  {c.model.rent.map((x) => (
                    <li key={x}>
                      <CrossMark className={s.listIcon} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className={s.compareDivider} aria-hidden="true" />
              <div className={`${s.compareCol} ${s.compareColOn}`} data-reveal style={d(0.1)}>
                <p className="eyebrow">{c.model.residencyLabel}</p>
                <ul className={s.list}>
                  {c.model.residency.map((x) => (
                    <li key={x}>
                      <CheckMark className={s.listIcon} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className={s.modelKicker} data-reveal>
              {c.model.kicker}
            </p>
          </div>
        </section>

        {/* ---------- 04 residency formats ---------- */}
        <section className="band" id="formats">
          <div className="shell">
            <SectionHead num={c.tiers.num} title={c.tiers.title} />
            <div className={s.weekIntro} data-reveal>
              <h2 className="h2">{c.tiers.h2}</h2>
              <p className="body">{c.tiers.body}</p>
            </div>

            <div className={s.weekHolder} data-reveal>
              <TheWeek lang={lang} />
            </div>
          </div>
        </section>

        {/* ---------- 05 what you receive ---------- */}
        <section className="band band--linen" id="receive">
          <div className="shell">
            <SectionHead num={c.receive.num} title={c.receive.title} />
            <div className={s.receiveGrid}>
              <div data-reveal>
                <h2 className="h2">
                  {c.receive.h2[0]}
                  <br />
                  {c.receive.h2[1]}
                </h2>
                <p className="eyebrow" style={{ marginTop: "2.6rem" }}>
                  {c.receive.includedEyebrow}
                </p>
                <ul className={s.receive}>
                  {c.receive.items.map((x, i) => (
                    <li key={x} data-reveal style={d(0.12 * i)}>
                      <CheckMark className={s.receiveIcon} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <CurtainReveal className={`figure ${s.kitFig}`} delay={0.1}>
                <div className={s.kitInner}>
                  <Shot name="kit" alt={c.receive.kitAlt} sizes="(max-width: 900px) 100vw, 40vw" />
                  <KitSpots spots={c.receive.kitSpots} />
                </div>
              </CurtainReveal>
            </div>

            <div className={s.partnership}>
              <h3 className={`h2 ${s.partnershipTitle}`} data-reveal>
                {c.receive.partnershipTitle}
              </h3>
              <p className="lede" data-reveal style={d(0.06)}>
                {c.receive.partnershipLede}
              </p>
              <ul className={s.partnerGrid}>
                {c.receive.partnership.map(([t, b], i) => (
                  <li key={t} data-reveal style={d(0.05 * i)}>
                    <p className="eyebrow">{t}</p>
                    <p className="body" style={{ marginTop: "0.6rem" }}>
                      {b}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- 06 who we welcome ---------- */}
        <section className="band">
          <div className="shell">
            <SectionHead num={c.welcome.num} title={c.welcome.title} />
            <div className={s.roomIntro} data-reveal>
              <h2 className="h2">{c.welcome.h2}</h2>
              <p className="body">{c.welcome.body}</p>
            </div>
            <div data-reveal>
              <WelcomeList lang={lang} />
            </div>
          </div>
        </section>

        {/* ---------- apply ---------- */}
        <Enquiry lang={lang} variant="partner" />
      </main>
      <Footer lang={lang} page="partners" />
    </>
  );
}
