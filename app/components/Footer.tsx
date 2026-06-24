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
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              marginTop: "0.9rem",
            }}
          >
            <a
              href="https://www.instagram.com/matrixmanchester/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{ display: "inline-flex" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#instagramGradient)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/Matrix-Cleaning-Company/61590254565545/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ display: "inline-flex" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#1877F2"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@petandthecity?_r=1&_t=ZN-97TweYCNduY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              style={{ display: "inline-flex" }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#ffffff"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
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
