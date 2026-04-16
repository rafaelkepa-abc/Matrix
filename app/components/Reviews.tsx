const reviews = [
  {
    quote: "Came out the same day and got stains out we thought were permanent.",
    author: "Customer review placeholder",
  },
  {
    quote: "Fast reply, clear price, and the carpets looked fresh within hours.",
    author: "Customer review placeholder",
  },
  {
    quote: "Ideal for our move-out clean. Quick, professional, and easy to book.",
    author: "Customer review placeholder",
  },
];

export default function Reviews() {
  return (
    <section
      style={{
        padding: "4.5rem 0",
        background: "linear-gradient(135deg, var(--navy), #183a5d)",
      }}
      id="reviews"
    >
      <div style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto" }}>
        <div style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <span className="eyebrow">REVIEWS</span>
          <h2 style={{ margin: "0 0 0.9rem", lineHeight: 1.05, color: "var(--white)" }}>
            Use this section with your real Google reviews
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)" }}>
            Swap the sample text below with real customer reviews as they come in.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1rem",
          }}
          className="reviews-responsive"
        >
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="card-base"
              style={{ padding: "1.3rem", margin: 0 }}
            >
              <p style={{ fontSize: "1.05rem", marginTop: 0 }}>&ldquo;{r.quote}&rdquo;</p>
              <footer style={{ color: "var(--muted)" }}>— {r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .reviews-responsive { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 680px) { .reviews-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
