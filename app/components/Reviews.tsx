import Image from "next/image";

export default function Reviews() {
  return (
    <section
      style={{
        padding: "4.5rem 0",
        background: "linear-gradient(135deg, var(--navy), #183a5d)",
      }}
      id="reviews"
    >
      <div
        style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto" }}
      >
        <div style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <span className="eyebrow">REVIEWS</span>
          <h2
            style={{
              margin: "0 0 0.9rem",
              lineHeight: 1.05,
              color: "var(--white)",
            }}
          >
            What our customers say about us
          </h2>
        </div>

        <a
          href="https://share.google/ddURNoDmSD4aQ1WGG"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leave a Google review for Matrix Cleaning Company"
          style={{ display: "block" }}
        >
          <Image
            src="/reviews.png"
            alt="Google reviews for Matrix Cleaning Company"
            width={1774}
            height={887}
            sizes="(max-width: 1120px) 100vw, 1120px"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "var(--radius)",
            }}
          />
        </a>
      </div>
    </section>
  );
}
