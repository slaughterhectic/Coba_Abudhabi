import Image from "next/image";
import Owl from "./Owl";
import s from "./Founders.module.css";

/* Names and roles only — the decks do not divide the work between them,
   and the shared line below is theirs verbatim. */
const FOUNDERS = [
  { name: "Hana Kash", role: "Co-founder" },
  { name: "Natalia Scully", role: "Co-founder" },
];

export default function Founders() {
  return (
    <section className={`band band--linen ${s.section}`} id="founders">
      <Owl className={s.watermark} />

      <div className="shell">
        <div className="sec-head">
          <div className="sec-head__mark">
            <Owl />
            <span className="caps">COBA</span>
          </div>
          <div className="sec-head__num">
            <span className="eyebrow">09 / The Founders</span>
          </div>
        </div>

        <div className={s.grid}>
          <div className={s.portraitCol} data-reveal>
            <figure className={s.portrait}>
              <span className={s.frame} aria-hidden="true" />
              <Image
                src="/img/founders.webp"
                alt="Hana Kash and Natalia Scully, co-founders of COBA, beside the owl mark on a plaster wall."
                width={900}
                height={1342}
                sizes="(max-width: 1000px) 100vw, 38vw"
              />
            </figure>
            <figcaption className={s.plate}>
              <span className="caps">The founders</span>
              <span className={s.plateAr} lang="ar">
                <span className="ar">المؤسِّستان</span>
              </span>
            </figcaption>
          </div>

          <div className={s.copyCol}>
            <h2 className={`h2 ${s.title}`} data-reveal>
              Fifteen years of community, brought to Abu Dhabi.
            </h2>

            <blockquote className={s.quote} data-reveal>
              <p>“A room only becomes a hub when someone tends it.”</p>
            </blockquote>

            <div data-reveal>
              <p className="body">
                For more than fifteen years we have built and nurtured a
                thriving community hub in Ireland — a place where children
                discovered their talents, parents found friendships,
                professionals collaborated, and ideas turned into
                opportunities.
              </p>
              <p className="body" style={{ marginTop: "1.1rem" }}>
                Today we are bringing that same spirit to Abu Dhabi.
              </p>
            </div>

            {/* The move, drawn as a rail. Both endpoints are stated in the decks. */}
            <ol className={s.rail} data-reveal aria-label="From Ireland to Abu Dhabi">
              <li>
                <span className={s.node} aria-hidden="true" />
                <span className="caps">Ireland</span>
                <span className={s.railNote}>Fifteen years of community</span>
              </li>
              <li>
                <span className={`${s.node} ${s.nodeOn}`} aria-hidden="true" />
                <span className="caps">Abu Dhabi</span>
                <span className={s.railNote}>Nation Towers Mall · August 2026</span>
              </li>
            </ol>

            <div className={s.people} data-reveal>
              <ul className={s.names}>
                {FOUNDERS.map((f) => (
                  <li key={f.name}>
                    <p className={s.name}>{f.name}</p>
                    <p className="eyebrow">{f.role}</p>
                  </li>
                ))}
              </ul>
              <p className={s.note}>
                Between them, fifteen years of building the community COBA is
                modelled on — and the conviction that a room only becomes a hub
                when someone tends it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
