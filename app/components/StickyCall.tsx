export default function StickyCall() {
  return (
    <>
      <a
        href="tel:+447902867017"
        style={{
          position: "fixed",
          left: "50%",
          bottom: 14,
          transform: "translateX(-50%)",
          width: "min(680px, calc(100% - 1rem))",
          minHeight: 56,
          borderRadius: 16,
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, var(--orange), #ff8a3d)",
          color: "var(--white)",
          fontWeight: 800,
          boxShadow: "0 16px 40px rgba(255,106,0,0.35)",
          zIndex: 60,
        }}
        className="sticky-call-mobile"
      >
        Call Now • Same-Day Slots
      </a>
      <style>{`
        @media (max-width: 680px) {
          .sticky-call-mobile { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
