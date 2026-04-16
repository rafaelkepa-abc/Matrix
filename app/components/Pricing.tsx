const plans = [
  {
    title: "1 Room",
    price: "£35",
    desc: "Ideal entry offer to convert first-time enquiries.",
    featured: false,
  },
  {
    title: "2 Rooms",
    price: "£59",
    desc: "Best everyday offer for call conversions.",
    featured: true,
  },
  {
    title: "End of Tenancy",
    price: "£89+",
    desc: "High-intent package for tenants and landlords.",
    featured: false,
  },
  {
    title: "Premium Add-ons",
    price: "+£15–£50",
    desc: "Stain removal, deodorising, protection, and upholstery upsells.",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section style={{ padding: "4.5rem 0" }} id="pricing">
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto" }}>
        <div style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <span className="eyebrow">PRICING</span>
          <h2 style={{ margin: "0 0 0.9rem", lineHeight: 1.05 }}>Simple pricing that sells</h2>
          <p style={{ color: "var(--muted)" }}>
            Use these as your entry offers. Final price depends on size, condition, and treatment
            needed.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1rem",
          }}
          className="pricing-responsive"
        >
          {plans.map((p) => (
            <article
              key={p.title}
              className="card-base"
              style={{
                padding: "1.4rem",
                ...(p.featured
                  ? {
                      border: "2px solid var(--orange)",
                      transform: "translateY(-4px)",
                    }
                  : {}),
              }}
            >
              <div style={{ color: "var(--muted)", fontWeight: 700 }}>{p.title}</div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  margin: "0.35rem 0 0.6rem",
                }}
              >
                {p.price}
              </div>
              <p style={{ color: "var(--muted)", margin: 0 }}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .pricing-responsive { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 680px) { .pricing-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
