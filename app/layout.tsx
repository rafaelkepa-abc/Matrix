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
    "Matrix Carpet Cleaning Manchester | Pet Stain & Odour Removal Expert",
  description:
    "First class cleaning and premium stain specialist for Manchester and surrounding areas.",
  metadataBase: new URL("https://matrixcarpetcleaning.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/new_matrix_logo.png",
    apple: "/new_matrix_logo.png",
  },
  openGraph: {
    url: "https://matrixcarpetcleaning.com/",
    title: "Matrix Carpet Cleaning Manchester",
    description:
      "First class cleaning and premium stain specialist for Manchester and surrounding areas.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/new_matrix_logo.png",
        width: 512,
        height: 512,
        alt: "Matrix Cleaning Company",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/new_matrix_logo.png"],
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
    "First class cleaning and premium stain specialist for Manchester and surrounding areas.",
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
