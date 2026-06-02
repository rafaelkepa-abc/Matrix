import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#081b2f",
        color: "rgba(255,255,255,0.85)",
        padding: "2.2rem 0",
      }}
    >
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr 0.8fr",
          gap: "1.5rem",
        }}
        className="footer-responsive"
      >
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem" }}>
            <Image
              src="/new_matrix_logo.png"
              alt="Matrix Carpet Cleaning Manchester"
              width={170}
              height={52}
              style={{
                height: 60,
                width: "auto",
                flexShrink: 0,
              }}
            />
          </div>
          <p style={{ marginTop: "0.75rem" }}>
           First Class Cleaning Company in Manchester. Your Local Expert. Trusted and Honest.
          </p>
        </div>

        <div>
          <h3 style={{ color: "var(--white)" }}>Contact</h3>
          <p>
            <a href="tel:+447902867017" className="hover:underline">
              07902 867017
            </a>
            <br />
            <a href="mailto:matrixmanchester@gmail.com" className="hover:underline">
              matrixmanchester@gmail.com
            </a>
          </p>
        </div>

        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            padding: "0.75rem",
          }}
          aria-label="Footer image"
        >
          <Image
            src="/footer_image_new.jpeg"
            alt="Matrix Cleaning Company"
            width={700}
            height={520}
            sizes="(max-width: 680px) 100vw, (max-width: 960px) 50vw, 320px"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
              borderRadius: 12,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .footer-responsive { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 680px) { .footer-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
