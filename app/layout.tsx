import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Matrix Carpet Cleaning Manchester | Same-Day Carpet Cleaning & Stain Specialists",
  description:
    "Same-day carpet cleaning in Manchester city centre and surrounding areas. Premium stain removal, fast drying, end of tenancy carpet cleaning, upholstery cleaning, and commercial cleaning.",
  metadataBase: new URL("https://matrixcarpetcleaning.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/matrix_logo.png",
  },
  openGraph: {
    url: "https://matrixcarpetcleaning.com/",
    title: "Matrix Carpet Cleaning Manchester",
    description:
      "Same-day carpet cleaning and premium stain specialist in Manchester.",
    type: "website",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A2540",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Matrix Carpet Cleaning Manchester",
  telephone: "+44 7902 867017",
  email: "matrixmanchester@gmail.com",
  areaServed: ["Manchester City Centre", "Manchester"],
  description:
    "Same-day carpet cleaning and premium stain specialist in Manchester city centre and surrounding areas.",
  priceRange: "££",
  url: "https://matrixcarpetcleaning.com/",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
