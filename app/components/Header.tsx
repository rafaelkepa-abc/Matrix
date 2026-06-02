"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
        className="py-2 md:py-3"
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
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
          className="inline-flex items-center md:my-1"
        >
          <Image
            src="/new_logo.JPG"
            alt="Matrix Cleaning Company"
            width={500}
            height={500}
            sizes="(max-width: 767px) 84px, 250px"
            priority
            className="shrink-0 rounded-full object-cover w-[84px] h-[84px] md:w-[250px] md:h-[250px] md:mx-1"
          />
        </Link>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            className="btn btn-small btn-primary hidden md:inline-flex"
            href="https://wa.me/447902867017?text=Hi%20Matrix%2C%20I%27d%20like%20a%20quote%20for%20carpet%20cleaning."
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
