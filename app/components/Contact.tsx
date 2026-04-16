export default function Contact() {
  return (
    <section style={{ padding: "4.5rem 0" }} id="contact">
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
        }}
      >
        <span className="eyebrow">CONTACT</span>
        <h2 style={{ margin: "0 0 0.9rem", lineHeight: 1.05 }}>
          Book today before slots fill up
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: "54ch" }}>
          Call for the fastest response or send a WhatsApp message with your room count, postcode,
          and any stain photos.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap" as const,
            gap: "0.9rem",
            marginTop: "1.1rem",
          }}
        >
          <a className="btn btn-primary" href="tel:+447902867017">
            Call 07902 867017
          </a>
          <a
            className="btn btn-secondary"
            href="https://wa.me/447902867017?text=Hi%20Matrix%2C%20I%27d%20like%20to%20book%20a%20same-day%20clean."
          >
            WhatsApp Booking
          </a>
        </div>
      </div>
    </section>
  );
}
