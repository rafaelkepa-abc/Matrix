const stats = [
  { value: "From £35", label: "Single room cleaning" },
  { value: "From £59", label: "Two-room offer" },
  { value: "From £89", label: "End of tenancy packages" },
  { value: "2-Hour Slots", label: "Same-day availability" },
];

export default function StatsStrip() {
  return (
    <div style={{ padding: "0 0 2rem" }}>
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "1rem",
        }}
        className="stats-responsive"
      >
        {stats.map((s) => (
          <div
            key={s.value}
            style={{
              background: "#f8fbff",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "1rem",
              textAlign: "center" as const,
            }}
          >
            <strong
              style={{
                display: "block",
                fontSize: "1.35rem",
                color: "var(--navy)",
              }}
            >
              {s.value}
            </strong>
            <span style={{ color: "var(--muted)" }}>{s.label}</span>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) { .stats-responsive { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 680px) { .stats-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
