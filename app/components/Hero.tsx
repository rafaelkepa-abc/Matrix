const heroPoints = [
  "Same-day availability",
  "Pet odour & stain removal",
  "Fast drying in hours",
  "WhatsApp booking",
];

const trustCards = [
  {
    title: "Testimonials",
    sub: "As two busy professionals with one of us working from home full-time, plus having a very energetic dog, keeping the flat spotless was becoming impossible. We love cooking and hosting dinner parties for friends, so having Matrix Cleaning Company come every week has honestly changed everything. The place always feels fresh, tidy and guest-ready without us stressing after long workdays. Reliable, friendly and genuinely professional service every single time.” – Dan & Marcus",
    imageSrc: "/dan_marcus.jpeg",
    imageAlt: "Dan and Marcus",
  },
  {
    title: "Testimonials",
    sub: "I am a new mum, keeping my home clean isn’t just about appearance anymore — my baby girl’s safety comes before everything. I know hoovering alone doesn’t properly remove bacteria, allergens and deep dirt from carpets, so I always book a professional clean every 6 months. This time a friend recommended Matrix and I was genuinely impressed from start to finish. The carpets looked, felt and smelled amazing afterwards, and the whole service was professional and friendly. I’ll definitely be booking them again before Christmas.” – Cat",
    imageSrc: "/cat.jpeg",
    imageAlt: "Cat",
  },
  {
    title: "Testimonials",
    sub: "I contacted Matrix Cleaning Company before moving out of my flat because I really wanted my full deposit back — and they absolutely delivered. The carpets and sofa looked amazing and my landlord returned every penny of my deposit without any issues. I actually used the money to pay my deposit for a Love Holidays trip and now I’m off to Ibiza this summer with my friends! Super friendly service, fast communication and worth every penny.” – Anna",
    imageSrc: "/anna.png",
    imageAlt: "Anna",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(255,106,0,0.13), transparent 24%), linear-gradient(180deg,#f7fbff 0%,#ffffff 100%)",
        padding: "4.5rem 0 3rem",
      }}
    >
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
        }}
      >
        {/* Top row: content + aside */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.8fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="hero-responsive"
        >
          {/* Left */}
          <div>
            <span className="eyebrow">FIRST CLASS CLEANING • MANCHESTER</span>
            <h1
              style={{
                margin: "0 0 0.9rem",
                lineHeight: 1.05,
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              }}
            >
              YOUR LOCAL
              <br />
              CLEANING EXPERT.
              <br />
              Trusted and Honest.
            </h1>
            <p style={{ fontSize: "1.15rem", maxWidth: "56ch", color: "var(--muted)" }}>
              2-hour arrival slots, premium stain treatment, fast drying, and instant quotes for
              homes, tenants, landlords, and businesses.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.75rem",
                margin: "1.3rem 0 1.5rem",
              }}
            >
              {heroPoints.map((p) => (
                <span
                  key={p}
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--border)",
                    padding: "0.7rem 0.95rem",
                    borderRadius: 999,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "0.9rem",
              }}
            >
              <a className="btn btn-primary" href="tel:+447902867017">
                Call Now
              </a>
              <a
                className="btn btn-primary"
                href="https://wa.me/447902867017?text=Hi%20Matrix%2C%20I%27d%20like%20a%20quote%20for%20carpet%20cleaning."
              >
                WhatsApp for a Fast Quote
              </a>
            </div>
          </div>

          <aside className="card-base" style={{ padding: "1.35rem" }}>
            <h2 style={{ marginTop: 0 }}>Get a fast quote</h2>
            <p style={{ color: "var(--muted)" }}>
              Send your room count, postcode, and any stain photos.
            </p>
            <a
              className="btn btn-primary btn-block"
              href="https://wa.me/447902867017?text=Hi%20Matrix%2C%20please%20quote%20me.%20Rooms%3A%20%20Postcode%3A%20%20Notes%3A%20"
              style={{ margin: "8px 0" }}
            >
              Start on WhatsApp
            </a>
            <a
              className="btn btn-primary btn-block"
              href="tel:+447902867017"
              style={{ margin: "8px 0" }}
            >
              Call 07902 867017
            </a>
            <a
              className="btn btn-light btn-block"
              href="mailto:matrixmanchester@gmail.com?subject=Quote%20Request%20-%20Matrix%20Carpet%20Cleaning"
              style={{ margin: "8px 0" }}
            >
              Email us
            </a>
            <ul
              style={{
                paddingLeft: "1.1rem",
                margin: "1rem 0 0",
                color: "var(--muted)",
              }}
            >
              <li>Instant response during working hours</li>
              <li style={{ marginTop: "0.5rem" }}>Transparent quote before booking</li>
              <li style={{ marginTop: "0.5rem" }}>Manchester city centre &amp; surrounding areas</li>
            </ul>
          </aside>
        </div>

        {/* Testimonials row — full container width, 3 equal columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1.5rem",
            marginTop: "2rem",
            alignItems: "stretch",
          }}
          className="trust-responsive"
        >
          {trustCards.map((c) => (
            <div
              key={c.imageAlt}
              className="card-base"
              style={{
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={c.imageSrc}
                alt={c.imageAlt}
                width={900}
                height={520}
                style={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              <div style={{ padding: "1.35rem", flex: 1 }}>
                <strong style={{ display: "block", marginBottom: "0.55rem", fontSize: "1.05rem" }}>
                  {c.title}
                </strong>
                <span
                  style={{
                    display: "block",
                    color: "var(--muted)",
                    fontSize: "1rem",
                    lineHeight: 1.65,
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  {c.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-responsive { grid-template-columns: 1fr 1fr !important; }
          .trust-responsive { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 680px) {
          .hero-responsive { grid-template-columns: 1fr !important; }
          .trust-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
