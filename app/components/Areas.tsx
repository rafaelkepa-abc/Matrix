const areas = [
  "M1", "M2", "M3", "M4", "Ancoats", "Salford",
  "Trafford", "Hulme", "Castlefield", "Northern Quarter", "Deansgate", "Stockport",
];

export default function Areas() {
  return (
    <section style={{ padding: "4.5rem 0" }} id="areas">
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.95fr 1.05fr",
          gap: "2rem",
          alignItems: "start",
        }}
        className="areas-responsive"
      >
        <div>
          <span className="eyebrow">AREAS COVERED</span>
          <h2 style={{ margin: "0 0 0.9rem", lineHeight: 1.05 }}>
            Manchester city centre and surrounding areas
          </h2>
          <p style={{ color: "var(--muted)" }}>
            Perfect for urgent call-outs across the centre and nearby neighbourhoods.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.75rem" }}>
          {areas.map((a) => (
            <span
              key={a}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: "0.7rem 0.95rem",
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .areas-responsive { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 680px) { .areas-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
