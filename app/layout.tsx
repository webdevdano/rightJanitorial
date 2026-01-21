import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { montserrat } from "./fonts";
import "./globals.css";
import ClientNavbarWrapper from "./ClientNavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Just Right Janitorial | Cleaning Services in Perris, CA & Southern California",
  description: "Professional cleaning services for homes and businesses in Perris, CA and surrounding areas. Trusted, local, and reliable janitorial solutions within a 30-mile radius of Perris, Southern California.",
  keywords: [
    "cleaning service",
    "janitorial",
    "Perris CA",
    "Southern California",
    "office cleaning",
    "house cleaning",
    "commercial cleaning",
    "local cleaners",
    "move out cleaning",
    "deep cleaning",
    "eco-friendly cleaning"
  ].join(", ")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Just Right Janitorial",
              "image": "/JustRightJanitorial.jpg",
              "@id": "#justrightjanitorial",
              "url": "https://justrightjanitorial.com/",
              "telephone": "+1-555-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Clean St",
                "addressLocality": "Perris",
                "addressRegion": "CA",
                "postalCode": "92571",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.7825,
                "longitude": -117.2286
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 33.7825,
                  "longitude": -117.2286
                },
                "geoRadius": 48280 // 30 miles in meters
              },
              "description": "Professional cleaning services for homes and businesses in Perris, CA and surrounding areas. Trusted, local, and reliable janitorial solutions within a 30-mile radius of Perris, Southern California.",
              "priceRange": "$$",
              "openingHours": "Mo-Sa 08:00-18:00"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
        style={{
          background: 'linear-gradient(135deg, #ada996 0%, #f2f2f2 40%, #dbdbdb 80%, #eaeaea 100%)',
          minHeight: '100vh'
        }}
      >
        {/* Navigation Bar */}
        <ClientNavbarWrapper />
        <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}


