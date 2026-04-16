const features = [
  {
    title: "Fast response",
    desc: "Call and WhatsApp-first setup for quick bookings",
  },
  {
    title: "Strong positioning",
    desc: "Same-day service plus premium stain expertise",
  },
  {
    title: "High-converting offer",
    desc: "Clear entry pricing with premium upsells",
  },
  {
    title: "Mobile-first site",
    desc: "Designed to turn clicks into calls fast",
  },
];

export default function WhyMatrix() {
  return (
    <section style={{ padding: "4.5rem 0", background: "var(--navy)", color: "var(--white)" }}>
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: "2rem",
          alignItems: "start",
        }}
        className="why-responsive"
      >
        <div>
          <span className="eyebrow">WHY MATRIX</span>
          <h2 style={{ margin: "0 0 0.9rem", lineHeight: 1.05 }}>
            Built to win urgent local jobs
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)" }}>
            Most people booking carpet cleaning want three things: a fast answer, a clear price, and
            confidence the job will be done properly. Matrix is positioned around all three.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1rem" }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                padding: "1rem 1.1rem",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 16,
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <strong style={{ display: "block", marginBottom: "0.25rem" }}>{f.title}</strong>
              <span style={{ color: "rgba(255,255,255,0.78)" }}>{f.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .why-responsive { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 680px) { .why-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
