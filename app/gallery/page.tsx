import React from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/JustRightJanitorial.jpg", alt: "Janitorial Service" },
  { src: "/globe.svg", alt: "Globe Icon" },
  { src: "/window.svg", alt: "Window Icon" },
  { src: "/file.svg", alt: "File Icon" },
  { src: "/next.svg", alt: "Next.js Logo" },
  { src: "/vercel.svg", alt: "Vercel Logo" }
];

export default function GalleryPage() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ color: "#0070f3", fontSize: 32, textAlign: "center", marginBottom: 32 }}>Gallery</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 32,
        justifyItems: "center"
      }}>
        {galleryImages.map((img, idx) => (
          <div key={idx} style={{ background: "#f8fbff", borderRadius: 12, padding: 16, boxShadow: "0 2px 12px rgba(0,112,243,0.06)", textAlign: "center" }}>
            <Image src={img.src} alt={img.alt} width={200} height={120} style={{ borderRadius: 8, marginBottom: 12, objectFit: "cover" }} />
            <div style={{ color: "#009e60", fontWeight: 500 }}>{img.alt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
