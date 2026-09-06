const stats = [
  {
    value: "Carpets",
    lines: [
      "2 areas £120",
      "3 areas £150",
      "4 areas £180",
      "5 areas £210",
      "6 areas £240",
    ],
    note: "Stairways + Hallways + Landing = 1 Area",
  },
  {
    value: "Sofas",
    lines: [
      "2 seater £30",
      "3 seater £60",
      "4 seater £90",
      "5 seater £120",
    ],
  },
  { value: "From £89", label: "End of tenancy packages" },
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
            {"lines" in s && s.lines ? (
              <>
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0.4rem auto 0",
                    padding: 0,
                    color: "var(--muted)",
                    lineHeight: 1.55,
                    display: "inline-block",
                    textAlign: "left",
                  }}
                >
                  {s.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                {"note" in s && s.note ? (
                  <p
                    style={{
                      margin: "0.5rem 0 0",
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {s.note}
                  </p>
                ) : null}
              </>
            ) : (
              <span style={{ color: "var(--muted)" }}>
                {"label" in s ? s.label : null}
              </span>
            )}
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
