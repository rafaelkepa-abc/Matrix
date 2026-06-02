export default function Certificates() {
  return (
    <section style={{ padding: "4.5rem 0", background: "var(--bg)" }} id="certificates">
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
        }}
      >
        <span className="eyebrow">ACCREDITATIONS</span>
        <h2 style={{ margin: "0 0 2.5rem", lineHeight: 1.05 }}>
          Certified &amp; trusted professionals.
        </h2>

        <div
          className="cert-top-row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginBottom: "2rem",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {[
            { src: "/certificates/certificate1.png", alt: "100% Satisfaction Guaranteed" },
            { src: "/certificates/certificate2.png", alt: "King's Trust" },
            { src: "/certificates/certificate3.jpg", alt: "WoolSafe Approved – Carpet and Rug Care" },
          ].map((cert) => (
            <div
              key={cert.src}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.5rem",
                borderRadius: 20,
                border: "1px solid var(--border, rgba(0,0,0,0.08))",
                background: "#fff",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <img
                src={cert.src}
                alt={cert.alt}
                style={{
                  width: "100%",
                  maxWidth: 180,
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1.5rem 2rem",
            borderRadius: 20,
            border: "1px solid var(--border, rgba(0,0,0,0.08))",
            background: "#fff",
          }}
        >
          <img
            src="/certificates/certificate4.png"
            alt="NJØRD – Professional Hands on Modern Carpet Cleaning – Raf Kepa"
            style={{
              width: "100%",
              maxWidth: 760,
              height: "auto",
              display: "block",
              objectFit: "contain",
              borderRadius: 8,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cert-top-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
