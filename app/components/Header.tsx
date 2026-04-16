"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#areas", label: "Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.94)",
        borderBottom: "1px solid rgba(219,227,236,0.8)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
          minHeight: 112,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Brand */}
        <Link
          href="#home"
          aria-label="Matrix Carpet Cleaning Manchester home"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem" }}
        >
          <Image
            src="/matrix_logo.png"
            alt="Matrix Carpet Cleaning Manchester"
            width={170}
            height={52}
            priority
            style={{
              height: 84,
              width: "auto",
              flexShrink: 0,
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ gap: "1.2rem", flexWrap: "wrap" as const }}
          className="hidden md:flex"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "var(--muted)", fontWeight: 600 }}
              className="hover:text-[var(--navy)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            className="btn btn-small btn-primary hidden md:inline-flex"
            href="https://wa.me/447902867017?text=Hi%20Matrix%2C%20I%27d%20like%20a%20quote%20for%20carpet%20cleaning."
          >
            WhatsApp Us
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              gap: 5,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--navy)",
                borderRadius: 2,
                transition: "0.2s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--navy)",
                borderRadius: 2,
                transition: "0.2s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "var(--navy)",
                borderRadius: 2,
                transition: "0.2s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "var(--white)",
            borderTop: "1px solid var(--border)",
            padding: "1rem",
          }}
          className="md:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.65rem 0",
                fontWeight: 600,
                color: "var(--text)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            className="btn btn-primary btn-block"
            href="https://wa.me/447902867017?text=Hi%20Matrix%2C%20I%27d%20like%20a%20quote%20for%20carpet%20cleaning."
            style={{ marginTop: "1rem" }}
            onClick={() => setMenuOpen(false)}
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
