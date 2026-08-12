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
import s from "./page.module.css";

/* Intrinsic sizes of the processed brand photography. */
const DIMS: Record<string, [number, number]> = {
  artclub: [1800, 1004],
  founders: [900, 1342],
  "house-connect": [1000, 702],
  "house-create": [1000, 702],
  "house-explore": [1000, 702],
  idea: [1200, 806],
  invitation: [1500, 844],
  kit: [1000, 1242],
  "room-artists": [860, 576],
  "room-children": [860, 578],
  "room-coffee": [860, 576],
  "room-laughing": [860, 578],
  "room-networking": [860, 578],
  "room-parents": [860, 578],
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

/* ---------------- content, taken from the two COBA decks ---------------- */

const HAPPENS = [
  {
    idx: "One",
    title: "Classes & workshops",
    ar: "دورات وورش عمل",
    body: "Art, craft and skills classes for adults and children, taught on a recurring weekly slot by resident practitioners.",
    media: { type: "video" as const, src: "loop-craft" },
  },
  {
    idx: "Two",
    title: "Clubs & community",
    ar: "أندية ومجتمع",
    body: "Book clubs, women's circles and cultural groups — each with a permanent address and a standing place in the week.",
    media: { type: "image" as const, src: "house-explore" },
  },
  {
    idx: "Three",
    title: "Professional meet-ups",
    ar: "لقاءات مهنية",
    body: "Evening meet-ups, skill shares and talks hosted by residents — peers in a circle, not a lecture.",
    media: { type: "video" as const, src: "loop-majlis" },
  },
];

const REASONS = [
  ["One", "A permanent community", "An address, not a booking."],
  ["Two", "Recurring residency", "The same room, the same hour, every week."],
  ["Three", "A shared audience", "The room is full before you arrive."],
  ["Four", "Cross-promotion", "Our following becomes yours."],
  ["Five", "Collaboration by design", "Residents find residents."],
  ["Six", "Design worth arriving for", "A room your members photograph unasked."],
  ["Seven", "A premium experience", "You bring the talent. We hold the rest."],
];

const MODEL = {
  rent: [
    "A new space each season",
    "Paid by the hour, empty or full",
    "The audience is yours to find",
    "Materials packed away",
    "Members told the address each time",
  ],
  residency: [
    "One permanent address",
    "A standing slot in the week",
    "A room full before you arrive",
    "Materials stored on site",
    "Members who always know where to find you",
  ],
};

const RECEIVE = [
  "A permanent address, listed and findable",
  "Marketing, social and your own listing",
  "Concierge, reception and refreshments",
  "The room dressed before your first guest",
  "Introductions, referrals and member perks",
];

const PARTNERSHIP = [
  [
    "Flexible basis",
    "Per event, per session, or a revenue share — chosen to suit the activity.",
  ],
  ["No lock-in", "No fixed employment commitment and no long tenancy to sign."],
  [
    "Built to last",
    "Long-term partnerships that help you reach more clients and grow.",
  ],
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* ---------- voice strip ---------- */}
        <section className={s.voice} aria-label="Create. Explore. Connect.">
          <div className="shell">
            <div className={s.voiceRow}>
              <span className={s.voiceWord}>Create</span>
              <span className={s.voiceDot} aria-hidden="true" />
              <span className={s.voiceWord}>Explore</span>
              <span className={s.voiceDot} aria-hidden="true" />
              <span className={s.voiceWord}>Connect</span>
            </div>
            <p className={`${s.voiceAr} ar-display`} lang="ar">
              أبدع. استكشف. تواصل.
            </p>
          </div>
        </section>

        {/* ---------- 01 the idea ---------- */}
        <section className="band" id="idea">
          <div className="shell">
            <SectionHead num="01" title="The Idea" />
            <div className={s.ideaGrid}>
              <div data-reveal>
                <h2 className="h2">
                  More than a venue.
                  <br />
                  A home for creativity, connection and collaboration.
                </h2>
                <div className={s.ideaNote}>
                  <p className="eyebrow eyebrow--olive">
                    Nation Towers Mall, Abu Dhabi
                  </p>
                  <p className="body" style={{ marginTop: "1.1rem" }}>
                    A place where people from different cultures, backgrounds
                    and professions come together to inspire one another and
                    build something meaningful.
                  </p>
                  <p className="body" style={{ marginTop: "1.1rem" }}>
                    Our mission is an environment where{" "}
                    <strong>everyone feels welcome</strong>,{" "}
                    <strong>every talent is valued</strong>, and{" "}
                    <strong>
                      every connection has the potential to become an
                      opportunity
                    </strong>
                    .
                  </p>
                </div>
              </div>
              <figure className={`figure ${s.ideaFigure}`} data-reveal style={d(0.1)}>
                <Shot
                  name="idea"
                  alt="A resident leads a session at COBA, sketching on an easel while a group listens around an oak table."
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* ---------- 02 in the room ---------- */}
        <section className="band band--linen">
          <div className="shell">
            <SectionHead num="02" title="In the Room" />
            <div className={s.roomIntro} data-reveal>
              <h2 className="h2">
                COBA is about people,
                <br />
                not interiors.
              </h2>
              <p className="body">
                A room only becomes a hub when someone fills it. These are the
                people COBA is built for — and the reason every image here has
                someone in it.
              </p>
            </div>

            <div data-reveal>
              <RoomStrip />
            </div>

            <p className={s.rule2} data-reveal>
              Every hero image contains people. It is a rule, not a preference.
            </p>
          </div>
        </section>

        {/* ---------- 03 what happens here ---------- */}
        <section className="band" id="happens">
          <div className="shell">
            <SectionHead num="03" title="What Happens Here" />
            <ul className={s.cards}>
              {HAPPENS.map((card, i) => (
                <li key={card.title} data-reveal style={d(0.08 * i)}>
                  <figure className={`figure ${s.cardFig}`}>
                    {card.media.type === "video" ? (
                      <BgVideo name={card.media.src} />
                    ) : (
                      <Shot
                        name={card.media.src}
                        alt={`${card.title} at COBA.`}
                        sizes="(max-width: 800px) 100vw, 31vw"
                      />
                    )}
                  </figure>
                  <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
                    {card.idx}
                  </p>
                  <div className={s.cardTitle}>
                    <h3 className="h3">{card.title}</h3>
                    <span className={`${s.cardAr} ar`} lang="ar">
                      {card.ar}
                    </span>
                  </div>
                  <p className="body" style={{ marginTop: "0.85rem" }}>
                    {card.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className={s.modelNote} data-reveal>
              <p className="eyebrow eyebrow--olive">The residency model</p>
              <p className="body">
                Residents block a recurring slot, store their materials on site,
                and are promoted through COBA&apos;s channels alongside their own
                brand. Monday&apos;s art class hears about Tuesday&apos;s
                masterclass. We are not renting out a space — we are building a
                relationship.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- children band ---------- */}
        <section className={s.children}>
          <div className={s.childrenMedia}>
            <Shot
              name="artclub"
              alt="Children painting and shaping clay at the COBA children's art club, with two teachers helping."
              sizes="100vw"
            />
          </div>
          <div className="shell">
            <div className={s.childrenCopy} data-reveal>
              <div>
                <span className={s.hair} aria-hidden="true" />
                <p className="eyebrow eyebrow--olive">
                  Our community{" "}
                  <span className="ar" lang="ar">
                    — مجتمعنا
                  </span>
                </p>
                <h2 className="h2" style={{ marginTop: "1.2rem" }}>
                  A place where children discover their talents — and parents
                  find friendships.
                </h2>
              </div>
              <div className={s.childrenMeta}>
                <p className={`${s.childrenAr} ar`} lang="ar">
                  مكان يكتشف فيه الأطفال مواهبهم
                </p>
                <p className="caps" style={{ color: "var(--brass-text)" }}>
                  Children&apos;s art club · Every Saturday
                  <br />
                  Nation Towers Mall, Abu Dhabi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 04 why coba ---------- */}
        <section className="band band--linen">
          <div className="shell">
            <SectionHead num="04" title="Why COBA" />
            <div className={s.whyGrid}>
              <div className={s.whyLead} data-reveal>
                <h2 className="h2">
                  A function room is somewhere you leave.{" "}
                  <em className={s.em}>COBA is somewhere you belong.</em>
                </h2>
                <p className="body" style={{ marginTop: "2rem" }}>
                  Everywhere else you rent the room and bring the audience.
                  Here, <strong>the audience is already in the building.</strong>
                </p>
                <blockquote className={s.quote}>
                  <p>
                    “We are not renting out a space — we are building a
                    relationship.”
                  </p>
                  <cite className="caps">COBA — Founders</cite>
                </blockquote>
              </div>

              <ul className={s.reasons}>
                {REASONS.map(([n, title, body], i) => (
                  <li key={title} data-reveal style={d(0.04 * i)}>
                    <p className="eyebrow">{n}</p>
                    <h3 className="h3" style={{ marginTop: "0.5rem" }}>
                      {title}
                    </h3>
                    <p className="body" style={{ marginTop: "0.4rem" }}>
                      {body}
                    </p>
                  </li>
                ))}
                <li className={s.difference} data-reveal>
                  <p className="eyebrow">The difference</p>
                  <p className={s.differenceBody}>
                    A hotel charges for the room.
                    <br />
                    COBA invests in the return.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- 05 the model ---------- */}
        <section className={`band band--ink ${s.model}`} id="residency">
          <div className={s.modelMedia} aria-hidden="true">
            <BgVideo name="loop-calm" />
          </div>
          <div className={`shell ${s.modelInner}`}>
            <SectionHead num="05" title="The Model" arabic="النموذج" />
            <h2 className="h2" data-reveal>
              A booking ends.
              <br />
              An address does not.
            </h2>

            <div className={s.compare}>
              <div data-reveal>
                <p className="eyebrow" style={{ color: "rgba(241,235,223,.45)" }}>
                  Renting a room
                </p>
                <ul className={`${s.list} ${s.listMuted}`}>
                  {MODEL.rent.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div data-reveal style={d(0.1)}>
                <p className="eyebrow">A COBA residency</p>
                <ul className={s.list}>
                  {MODEL.residency.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className={s.modelKicker} data-reveal>
              A venue charges for the room. COBA invests in the return.
            </p>
          </div>
        </section>

        {/* ---------- tiers ---------- */}
        <section className="band">
          <div className="shell">
            <SectionHead num="06" title="Residency Formats" />
            <div className={s.weekIntro} data-reveal>
              <h2 className="h2">Choose your hour of the day.</h2>
              <p className="body">
                Three hours of the day, seven days of the week. A resident takes
                one and keeps it — the same room, the same hour, every week.
              </p>
            </div>

            <div className={s.weekHolder} data-reveal>
              <TheWeek />
            </div>
          </div>
        </section>

        {/* ---------- what you receive ---------- */}
        <section className="band band--linen">
          <div className="shell">
            <SectionHead num="07" title="What You Receive" />
            <div className={s.receiveGrid}>
              <div data-reveal>
                <h2 className="h2">
                  Everything except
                  <br />
                  the talent.
                </h2>
                <p className="eyebrow" style={{ marginTop: "2.6rem" }}>
                  Included in every residency
                </p>
                <ul className={s.receive}>
                  {RECEIVE.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <figure className={`figure ${s.kitFig}`} data-reveal style={d(0.1)}>
                <Shot
                  name="kit"
                  alt="The COBA membership kit — brass-foil keycard, olive notebook, black card wallet and a sage mug on lime plaster."
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
              </figure>
            </div>

            <div className={s.partnership}>
              <h3 className={`h2 ${s.partnershipTitle}`} data-reveal>
                A partnership, not a tenancy.
              </h3>
              <p className="lede" data-reveal style={d(0.06)}>
                You bring your activity, your facilitators and your voice. We
                provide the space, the marketing, the community and the clients.
              </p>
              <ul className={s.partnerGrid}>
                {PARTNERSHIP.map(([t, b], i) => (
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
            <SectionHead num="08" title="Who We Welcome" />
            <div className={s.roomIntro} data-reveal>
              <h2 className="h2">
                Every community that brings people together.
              </h2>
              <p className="body">
                Community groups · Business and networking · Hobby clubs ·
                Language exchange — and any initiative that brings people
                together.
              </p>
            </div>
            <div data-reveal>
              <WelcomeList />
            </div>
          </div>
        </section>

        <Founders />

        {/* ---------- the house ---------- */}
        <section id="house">
          <figure className={s.shopfront} data-reveal>
            <Shot
              name="shopfront"
              alt="The COBA shopfront at Nation Towers Mall — black metal lettering and the owl mark on beige brick."
              sizes="100vw"
            />
          </figure>
          <div className="band">
            <div className="shell">
              <div className={s.houseGrid}>
                <div data-reveal>
                  <p className="eyebrow">
                    Nation Towers Mall, 1st Floor · Abu Dhabi
                  </p>
                  <h2 className="h2" style={{ marginTop: "1.4rem" }}>
                    A room your members
                    <br />
                    photograph unasked.
                  </h2>
                  <p className="body" style={{ marginTop: "1.8rem" }}>
                    Lime plaster, light oak, brushed brass. Open seven days.
                  </p>
                </div>
                <div className={s.houseSpecs} data-reveal style={d(0.08)}>
                  {[
                    ["Capacity", "10 – 35 guests"],
                    ["Configurations", "Coffee circle, workshop or lounge"],
                    ["On arrival", "Reception & concierge"],
                    ["Between sessions", "Materials kept on site"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <span className="caps">{k}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- visit ---------- */}
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
