const services = [
  {
    title: "Carpet Cleaning",
    desc: "Deep clean for bedrooms, lounges, hallways, stairs, and whole homes.",
  },
  {
    title: "Premium Stain Removal",
    desc: "Targeted treatment for spills, marks, pet accidents, and stubborn spots.",
  },
  {
    title: "End of Tenancy",
    desc: "Ideal for move-outs, landlords, letting agents, and deposit-focused cleans.",
  },
  {
    title: "Sofa & Upholstery",
    desc: "Freshen sofas, fabric chairs, and upholstered furniture with quick drying times.",
  },
  {
    title: "Pet Odour Treatment",
    desc: "Neutralise smells and refresh carpets in homes with pets and heavy use.",
  },
  {
    title: "Commercial Cleaning",
    desc: "Flexible bookings for offices, serviced apartments, shops, and common areas.",
  },
];

export default function Services() {
  return (
    <section style={{ padding: "4.5rem 0" }} id="services">
      <div
        style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto" }}
      >
        <div style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <span className="eyebrow">SERVICES</span>
          <h2 style={{ margin: "0 0 0.9rem", lineHeight: 1.05 }}>
            Fast service. Premium finish.
          </h2>
          <p style={{ color: "var(--muted)" }}>
            Built for urgent bookings and high-standard results.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1rem",
          }}
          className="services-responsive"
        >
          {services.map((s) => (
            <article
              key={s.title}
              className="card-base"
              style={{ padding: "1.3rem" }}
            >
              <h3 style={{ marginTop: 0 }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", margin: 0 }}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .services-responsive { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 680px) { .services-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
