import Image from "next/image";
import type { CSSProperties } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";
import Owl from "@/components/Owl";
import RoomStrip from "@/components/RoomStrip";
import ActivityReel from "@/components/ActivityReel";
import Doors from "@/components/Doors";
import PotteryBand from "@/components/PotteryBand";
import MeetGrid from "@/components/MeetGrid";
import Founders from "@/components/Founders";
import BgVideo from "@/components/BgVideo";
import OrbitBadge from "@/components/OrbitBadge";
import HouseReveal from "@/components/HouseReveal";
import {
  CurtainReveal,
  ParallaxDrift,
  StaggerIn,
  StaggerItem,
  WordsReveal,
} from "@/components/motion/Primitives";
import { childrenHref, collaborateHref, copy, type Lang } from "@/lib/i18n";
import s from "@/app/page.module.css";

/* Intrinsic sizes of the processed brand photography. */
const DIMS: Record<string, [number, number]> = {
  "act-adultart-v5": [1080, 726],
  "act-birthday-w": [1080, 726],
  "act-kidsart-v5": [1900, 1277],
  artclub: [1900, 1060],
  founders: [1140, 1700],
  "club-community": [1050, 1406],
  idea: [1750, 1174],
  invitation: [1750, 985],
  kit: [1410, 1750],
  shopfront: [1900, 535],
  "who-books": [1200, 896],
  "who-creative": [1200, 896],
  "who-cultural": [1200, 896],
  "who-parenting": [1200, 896],
  "who-wellness": [1200, 896],
  "who-women": [1200, 896],
};

export function Shot({
  name,
  alt,
  sizes,
  priority,
  className,
}: {
  name: keyof typeof DIMS | string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [w, h] = DIMS[name];
  return (
    <Image
      src={`/img/${name}.webp`}
      alt={alt}
      width={w}
      height={h}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}

export function SectionHead({
  num,
  title,
  arabic,
}: {
  num: string;
  title: string;
  arabic?: string;
}) {
  return (
    <div className="sec-head">
      <div className="sec-head__mark">
        <Owl />
        <span className="caps">COBA</span>
      </div>
      <div className="sec-head__num">
        <span className="eyebrow">
          {num} / {title}
        </span>
        {arabic ? (
          <span className={`${s.headAr} ar`} lang="ar">
            {" "}
            — {arabic}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export const d = (delay: number) => ({ "--d": `${delay}s` }) as CSSProperties;

/**
 * The visitor page.
 *
 * Everything here answers "why would I come to COBA?". The residency and
 * partnership material — why a club owner would work with COBA — lives on
 * /partners, reached from the nav, the strip below the house, and the footer.
 */
export default function Site({ lang }: { lang: Lang }) {
  const c = copy(lang);

  return (
    <>
      <Header lang={lang} page="home" />
      <main>
        <Hero lang={lang} page="home" />

        {/* ---------- the four doors ----------
            Before a word of philosophy: the four things a visitor can
            actually do here, and one link each. Client, 2026-08-31. */}
        <Doors lang={lang} />

        {/* ---------- pottery — its own section ----------
            The one programme already bookable, given a section of its own
            straight after the doors (client, 2026-10-05). */}
        <PotteryBand lang={lang} />

        {/* ---------- 01 what's happening — the slideshow leads ----------
            A customer landing here shouldn't need the philosophy first.
            The week itself opens the page: one image per activity,
            changing on its own. */}
        <section className="band" id="happening">
          <div className="shell">
            <SectionHead num={c.happening.num} title={c.happening.title} />
            <div className={s.roomIntro} data-reveal>
              <h2 className="h2">
                {c.happening.h2[0]}
                <br />
                {c.happening.h2[1]}
              </h2>
              <p className="body">{c.happening.lede}</p>
            </div>
            <div data-reveal>
              <ActivityReel lang={lang} />
            </div>

            {/* The room is not open yet and the site must not pretend it is.
                One line, in the open, instead of a calendar we cannot fill. */}
            <div className={s.soon} data-reveal>
              <div className={s.soonCopy}>
                <p className="eyebrow eyebrow--olive">{c.happening.soonEyebrow}</p>
                <p className={s.soonLine}>{c.happening.soon}</p>
              </div>
              <a href={c.happening.soonHref} className={s.soonCta}>
                {c.happening.soonCta}
                <span aria-hidden="true"> →</span>
              </a>
            </div>

            {/* The third door: the room itself is for hire. The customer is
                invited to book it, not only to attend the week. */}
            <div className={s.bookStrip} id="host" data-reveal>
              <div className={s.bookCopy}>
                <p className={`eyebrow ${s.bookEyebrow}`}>{c.book.eyebrow}</p>
                <h3 className={`h3 ${s.bookTitle}`}>{c.book.h2}</h3>
                <p className={s.bookBody}>{c.book.body}</p>
              </div>
              <div className={s.bookActions}>
                <a href="#visit" className="btn btn--ghost">
                  {c.book.ctaVisit}
                </a>
                <a href={collaborateHref(lang)} className={s.bookAlt}>
                  {c.book.ctaHost}
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- one space, four rhythms ----------
            The single sentence the client asked for to explain how one
            room can be a toddler morning and a networking evening. */}
        <section className={`band band--linen ${s.rhythm}`} aria-label={c.rhythm.h2.join(" ")}>
          <div className="shell">
            <div className={s.rhythmHead} data-reveal>
              <p className="eyebrow eyebrow--olive">{c.rhythm.eyebrow}</p>
              <h2 className={`h2 ${s.rhythmH2}`}>
                <span>{c.rhythm.h2[0]}</span>
                <span>{c.rhythm.h2[1]}</span>
              </h2>
              <span className={s.rhythmBar} aria-hidden="true" />
            </div>
            <ul className={s.rhythmRows}>
              {c.rhythm.rows.map(([when, what], i) => (
                <li key={when} data-reveal style={d(0.07 * i)}>
                  <span className={s.rhythmDot} aria-hidden="true" />
                  <span className={s.rhythmWhen}>{when}</span>
                  <p className={s.rhythmWhat}>{what}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 02 what you can do — four pillars, client copy ---------- */}
        <section className="band band--linen" id="happens">
          <div className="shell">
            <SectionHead num={c.happens.num} title={c.happens.title} />
            <div className={s.roomIntro} data-reveal>
              <h2 className="h2">{c.happens.h2}</h2>
            </div>
            <ul className={`${s.cards} ${s.cards4}`}>
              {c.happens.cards.map((card, i) => (
                <li
                  key={card.title}
                  className={s.happensCard}
                  data-reveal
                  style={d(0.08 * i)}
                >
                  <div className={s.happensMedia} aria-hidden="true">
                    {card.media.type === "video" ? (
                      <BgVideo name={card.media.src} />
                    ) : (
                      <Shot
                        name={card.media.src}
                        alt=""
                        sizes="(max-width: 1000px) 100vw, 25vw"
                      />
                    )}
                  </div>
                  <span className={s.happensNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={s.happensScrim} aria-hidden="true" />
                  <div className={s.happensCopy}>
                    <p className={`eyebrow ${s.happensEyebrow}`}>{card.idx}</p>
                    <div className={s.cardTitle}>
                      <h3 className={`h3 ${s.happensTitle}`}>{card.title}</h3>
                      <span className={`${s.cardAr} ${s.happensAr} ar`} lang="ar">
                        {card.ar}
                      </span>
                    </div>
                    <p className={s.happensBody}>
                      <span>{card.body}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={s.modelNote} data-reveal>
              <p className="eyebrow eyebrow--olive">{c.happens.noteEyebrow}</p>
              <p className="body">{c.happens.noteBody}</p>
            </div>
          </div>
        </section>

        {/* ---------- children band — kids stay visible, high on the page ---------- */}
        <section className={s.children}>
          <ParallaxDrift className={s.childrenMedia} strength={8}>
            <Shot name="act-kidsart-v5" alt={c.children.imgAlt} sizes="100vw" />
          </ParallaxDrift>
          <div className="shell">
            <div className={s.childrenCopy} data-reveal>
              <div>
                <span className={s.hair} aria-hidden="true" />
                <p className="eyebrow eyebrow--olive">
                  {c.children.eyebrow}{" "}
                  <span className="ar" lang="ar">
                    — مجتمعنا
                  </span>
                </p>
                <h2 className="h2" style={{ marginTop: "1.2rem" }}>
                  {c.children.h2}
                </h2>
                <a
                  href={childrenHref(lang)}
                  className={`btn btn--outline ${s.childrenCta}`}
                >
                  {c.children.cta}
                </a>
              </div>
              <div className={s.childrenMeta}>
                <p className={`${s.childrenAr} ar`} lang="ar">
                  مكان يكتشف فيه الأطفال مواهبهم
                </p>
                <p className="caps" style={{ color: "var(--brass-text)" }}>
                  {c.children.tierLine1}
                  <br />
                  {c.children.tierLine2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- voice strip — the breath before the philosophy ---------- */}
        <section
          className={s.voice}
          aria-label={`${c.voice.create}. ${c.voice.explore}. ${c.voice.connect}.`}
        >
          <div className="shell">
            <StaggerIn className={s.voiceRow} step={0.14}>
              <StaggerItem>
                <span className={s.voiceWord}>{c.voice.create}</span>
              </StaggerItem>
              <span className={s.voiceDot} aria-hidden="true" />
              <StaggerItem>
                <span className={s.voiceWord}>{c.voice.explore}</span>
              </StaggerItem>
              <span className={s.voiceDot} aria-hidden="true" />
              <StaggerItem>
                <span className={s.voiceWord}>{c.voice.connect}</span>
              </StaggerItem>
            </StaggerIn>
            <p className={`${s.voiceAr} ar-display`} lang="ar">
              أبدع. استكشف. تواصل.
            </p>
          </div>
        </section>

        {/* ---------- 03 about ---------- */}
        <section className="band" id="about">
          <div className="shell">
            <SectionHead num={c.idea.num} title={c.idea.title} />
            <div className={s.ideaGrid}>
              <div>
                <WordsReveal as="h2" lines={c.idea.h2} onScroll className="h2" />
                <div className={s.ideaNote} data-reveal>
                  <p className="eyebrow eyebrow--olive">{c.idea.place}</p>
                  <p className="body" style={{ marginTop: "1.1rem" }}>
                    {c.idea.p1}
                  </p>
                  <p className="body" style={{ marginTop: "1.1rem" }}>
                    {c.idea.p2}
                  </p>
                  {/* Named plainly, because it is the single most useful
                      thing a newcomer can know about the room. */}
                  <p className="body" style={{ marginTop: "1.1rem" }}>
                    <strong>{c.idea.note}</strong>
                  </p>
                </div>
              </div>
              <div className={s.ideaFigureWrap}>
                <span className={s.ideaArchGhost} aria-hidden="true" />
                <CurtainReveal className={`figure ${s.ideaFigure}`} delay={0.1}>
                  <Shot
                    name="idea"
                    alt={c.idea.imgAlt}
                    sizes="(max-width: 900px) 100vw, 46vw"
                  />
                </CurtainReveal>
                <OrbitBadge
                  text={`${c.voice.create} · ${c.voice.explore} · ${c.voice.connect}`}
                  className={s.ideaBadge}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- the mission ----------
            The founders' strongest line. It was buried inside a paragraph;
            it is now the quietest and largest thing on the page. */}
        <section className={`band band--ink ${s.mission}`}>
          <div className="shell">
            <p className={`eyebrow ${s.missionEyebrow}`} data-reveal>
              {c.mission.eyebrow}
            </p>
            <WordsReveal
              as="h2"
              lines={c.mission.lines}
              onScroll
              className={s.missionLines}
            />
            <p className={`${s.missionAr} ar-display`} lang="ar" data-reveal>
              {c.mission.ar}
            </p>
          </div>
        </section>

        {/* ---------- 02 who you'll meet ---------- */}
        <section className="band" id="meet">
          <div className="shell">
            <SectionHead num={c.meet.num} title={c.meet.title} />
            <div className={s.roomIntro} data-reveal>
              <h2 className="h2">{c.meet.h2}</h2>
              <p className="body">{c.meet.body}</p>
            </div>

            <MeetGrid lang={lang} />

            <div className={s.strand} data-reveal>
              <p className="eyebrow">{c.meet.strandEyebrow}</p>
              <ul className={s.strandRow}>
                {c.meet.strand.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- 03 in the room ---------- */}
        <section className="band band--linen">
          <div className="shell">
            <SectionHead num={c.room.num} title={c.room.title} />
            <div className={s.roomIntro} data-reveal>
              <h2 className="h2">
                {c.room.h2[0]}
                <br />
                {c.room.h2[1]}
              </h2>
              <p className="body">{c.room.body}</p>
            </div>

            <div data-reveal>
              <RoomStrip lang={lang} />
            </div>

            <p className={s.rule2} data-reveal>
              {c.room.rule}
            </p>
          </div>
        </section>

        {/* ---------- 06 fifteen years ---------- */}
        <Founders lang={lang} />

        {/* ---------- the house ---------- */}
        <section id="house">
          <HouseReveal
            eyebrow={c.house.eyebrow}
            h2={c.house.h2}
            body={c.house.body}
            specs={c.house.specs}
            alt={c.house.shopfrontAlt}
            scrollHint={c.house.scrollHint}
          />
        </section>

        {/* ---------- three customers, three doors ----------
            Client, 2026-08-31: someone who wants to attend, someone who
            wants to run something, someone who wants to hire the room.
            Every visitor is one of the three, so the page says so. */}
        <section className={s.paths} id="paths">
          <div className="shell">
            <div className={s.pathsHead} data-reveal>
              <p className="eyebrow">{c.paths.eyebrow}</p>
              <h2 className={`h2 ${s.pathsH2}`}>{c.paths.h2}</h2>
            </div>

            <ul className={s.pathsGrid}>
              {c.paths.items.map((item, i) => (
                <li key={item.label} data-reveal style={d(0.09 * i)}>
                  <a className={s.pathCard} href={item.href}>
                    <span className={s.pathNum} aria-hidden="true">
                      {item.num}
                    </span>
                    <span className={s.pathLabel}>{item.label}</span>
                    <p className={s.pathQuote}>“{item.quote}”</p>
                    <p className={s.pathBody}>{item.body}</p>
                    <span className={s.pathCta}>
                      {item.cta}
                      <span aria-hidden="true">→</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className={s.pathsAlt} data-reveal>
              <a href={collaborateHref(lang)} className={s.pathsAltLink}>
                {c.paths.altCta}
                <span aria-hidden="true"> →</span>
              </a>
            </p>
          </div>
        </section>

        {/* ---------- visit ---------- */}
        <Enquiry lang={lang} variant="visit" />
      </main>
      <Footer lang={lang} page="home" />
    </>
  );
}
