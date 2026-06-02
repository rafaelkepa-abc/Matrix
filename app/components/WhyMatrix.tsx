const features = [
  {
    title: "Eco-friendly",
    desc: "Our cleaning products clean brilliantly, and are made using plant-based ingredients that reduce reliance on petrochemicals. Our formulations contain biodegradable ingredients and biological formulas, designed to break down naturally in the environment after use.",
  },
  {
    title: "Customer Satisfaction Guarantee",
    desc: "If any part of our clean does not meet your expectations, and you inform us within two working days, we will re-clean the specific area again, free of charge. Simply report within 48 hours and we will make it right for you.",
  },
  {
    title: "Reference Checked Technicians",
    desc: "Our technicians are experienced professionals, background checked, friendly and fully insured. We only work with people who care and are honest. We are very lucky.",
  },
];

export default function WhyMatrix() {
  return (
    <section
      style={{
        padding: "4.5rem 0",
        background: "var(--navy)",
        color: "var(--white)",
      }}
    >
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
          <span className="eyebrow">WHY PEOPLE CHOOSE MATRIX?</span>
          <p style={{ color: "rgba(255,255,255,0.78)" }}>
            When you choose Matrix Cleaning Company you&apos;re opting for quality service at
            affordable price.
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
              <strong style={{ display: "block", marginBottom: "0.25rem" }}>
                {f.title}
              </strong>
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
