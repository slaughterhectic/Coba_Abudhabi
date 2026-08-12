import Image from "next/image";
import type { CSSProperties } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";
import Owl from "@/components/Owl";
import RoomStrip from "@/components/RoomStrip";
import WelcomeList from "@/components/WelcomeList";
import TheWeek from "@/components/TheWeek";
import Founders from "@/components/Founders";
import BgVideo from "@/components/BgVideo";
import WhyCarousel from "@/components/WhyCarousel";
import { CheckMark, CrossMark } from "@/components/Icons";
import OrbitBadge from "@/components/OrbitBadge";
import KitSpots from "@/components/KitSpots";
import HouseReveal from "@/components/HouseReveal";
import {
  CurtainReveal,
  ParallaxDrift,
  StaggerIn,
  StaggerItem,
  WordsReveal,
} from "@/components/motion/Primitives";
import { copy, type Lang } from "@/lib/i18n";
import s from "@/app/page.module.css";

/* Intrinsic sizes of the processed brand photography. */
const DIMS: Record<string, [number, number]> = {
  artclub: [1800, 1004],
  founders: [900, 1342],
  "house-connect": [1000, 702],
  "house-create": [1000, 702],
  "house-explore": [1000, 702],
  "club-community": [1050, 1406],
  idea: [1200, 806],
  invitation: [1500, 844],
  kit: [1000, 1242],
  shopfront: [1800, 506],
  "tier-afternoon": [900, 686],
  "tier-evening": [900, 686],
  "tier-morning": [900, 686],
  "who-books": [760, 568],
  "who-creative": [760, 568],
  "who-cultural": [760, 568],
  "who-parenting": [760, 568],
  "who-wellness": [760, 568],
  "who-women": [760, 568],
};

function Shot({
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

function SectionHead({
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

const d = (delay: number) => ({ "--d": `${delay}s` }) as CSSProperties;

export default function Site({ lang }: { lang: Lang }) {
  const c = copy(lang);

  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />

        {/* ---------- voice strip ---------- */}
        <section className={s.voice} aria-label={`${c.voice.create}. ${c.voice.explore}. ${c.voice.connect}.`}>
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

        {/* ---------- 01 the idea ---------- */}
        <section className="band" id="idea">
          <div className="shell">
            <SectionHead num={c.idea.num} title={c.idea.title} />
            <div className={s.ideaGrid}>
              <div>
                <WordsReveal
                  as="h2"
                  lines={c.idea.h2}
                  onScroll
                  className="h2"
                />
                <div className={s.ideaNote} data-reveal>
                  <p className="eyebrow eyebrow--olive">{c.idea.place}</p>
                  <p className="body" style={{ marginTop: "1.1rem" }}>
                    {c.idea.p1}
                  </p>
                  <p className="body" style={{ marginTop: "1.1rem" }}>
                    {c.idea.p2a}
                    <strong>{c.idea.p2Strong1}</strong>
                    {c.idea.p2b}
                    <strong>{c.idea.p2Strong2}</strong>
                    {c.idea.p2c}
                    <strong>{c.idea.p2Strong3}</strong>
                    {c.idea.p2d}
                  </p>
                </div>
              </div>
              <div className={s.ideaFigureWrap}>
                <span className={s.ideaArchGhost} aria-hidden="true" />
                <CurtainReveal className={`figure ${s.ideaFigure}`} delay={0.1}>
                  <Shot name="idea" alt={c.idea.imgAlt} sizes="(max-width: 900px) 100vw, 46vw" />
                </CurtainReveal>
                <OrbitBadge
                  text={`${c.voice.create} · ${c.voice.explore} · ${c.voice.connect}`}
                  className={s.ideaBadge}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 02 in the room ---------- */}
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

        {/* ---------- 03 what happens here ---------- */}
        <section className="band" id="happens">
          <div className="shell">
            <SectionHead num={c.happens.num} title={c.happens.title} />
            <ul className={s.cards}>
              {c.happens.cards.map((card, i) => (
                <li key={card.title} className={s.happensCard} data-reveal style={d(0.08 * i)}>
                  <div className={s.happensMedia} aria-hidden="true">
                    {card.media.type === "video" ? (
                      <BgVideo name={card.media.src} />
                    ) : (
                      <Shot
                        name={card.media.src}
                        alt=""
                        sizes="(max-width: 1000px) 100vw, 33vw"
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
              <p className="eyebrow eyebrow--olive">{c.happens.modelNoteEyebrow}</p>
              <p className="body">{c.happens.modelNoteBody}</p>
            </div>
          </div>
        </section>

        {/* ---------- children band ---------- */}
        <section className={s.children}>
          <ParallaxDrift className={s.childrenMedia} strength={8}>
            <Shot name="artclub" alt={c.children.imgAlt} sizes="100vw" />
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

        {/* ---------- 04 why coba ---------- */}
        <section className="band band--linen">
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

            <div className={s.difference} data-reveal>
              <p className="eyebrow">{c.why.differenceLabel}</p>
              <p className={s.differenceBody}>
                {c.why.differenceLine1}
                <br />
                {c.why.differenceLine2}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- 05 the model ---------- */}
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

        {/* ---------- tiers ---------- */}
        <section className="band">
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

        {/* ---------- what you receive ---------- */}
        <section className="band band--linen">
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

        {/* ---------- who we welcome ---------- */}
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

        {/* ---------- visit ---------- */}
        <Enquiry lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
