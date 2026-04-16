const heroPoints = [
  "Same-day availability",
  "Pet odour & stain removal",
  "Fast drying in hours",
  "WhatsApp booking",
];

const trustCards = [
  { title: "Same Day", sub: "Limited slots available" },
  { title: "Local Team", sub: "Manchester city centre coverage" },
  { title: "Premium Results", sub: "Stain and odour specialists" },
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
          display: "grid",
          gridTemplateColumns: "1.3fr 0.8fr",
          gap: "2rem",
          alignItems: "start",
        }}
        className="hero-responsive"
      >
        {/* Left */}
        <div>
          <span className="eyebrow">FAST &amp; BOLD • PREMIUM STAIN SPECIALIST</span>
          <h1
            style={{
              margin: "0 0 0.9rem",
              lineHeight: 1.05,
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              maxWidth: "10ch",
            }}
          >
            Same-Day Carpet Cleaning in Manchester
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
              marginBottom: "1.4rem",
            }}
          >
            <a className="btn btn-primary" href="tel:+447902867017">
              Call Now
            </a>
            <a
              className="btn btn-secondary"
              href="https://wa.me/447902867017?text=Hi%20Matrix%2C%20I%27d%20like%20a%20quote%20for%20carpet%20cleaning."
            >
              WhatsApp for a Fast Quote
            </a>
          </div>

          {/* Trust cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "1rem",
              marginTop: "1rem",
            }}
            className="trust-responsive"
          >
            {trustCards.map((c) => (
              <div key={c.title} className="card-base" style={{ padding: "1rem" }}>
                <strong style={{ display: "block", marginBottom: "0.25rem" }}>{c.title}</strong>
                <span style={{ color: "var(--muted)", fontSize: "0.96rem" }}>{c.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote card */}
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
            className="btn btn-secondary btn-block"
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
