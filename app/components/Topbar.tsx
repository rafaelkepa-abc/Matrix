export default function Topbar() {
  return (
    <div
      style={{ background: "var(--navy)", color: "rgba(255,255,255,0.9)", fontSize: "0.92rem" }}
    >
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
          minHeight: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap" as const,
          padding: "0.5rem 0",
        }}
      >
        <span>Same-Day Carpet Cleaning • Manchester City Centre &amp; Surrounding Areas</span>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" as const }}>
          <a href="tel:+447902867017" className="hover:underline">
            Call 07902 867017
          </a>
          <a href="mailto:matrixmanchester@gmail.com" className="hover:underline">
            matrixmanchester@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
