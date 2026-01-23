"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

const galleryImages = [
  { src: "/rightJanitorial-Images/ClassroomGrid2Image.JPEG", alt: "Classroom Grid 2" },
  { src: "/rightJanitorial-Images/ClassroomGrid4Image.JPEG", alt: "Classroom Grid 4" },
  { src: "/rightJanitorial-Images/ClassroomGrid4Image2.PNG", alt: "Classroom Grid 4 (PNG)" },
  { src: "/rightJanitorial-Images/Auditorium3.JPEG", alt: "Auditorium 3" },
  { src: "/rightJanitorial-Images/Kitchen1.jpeg", alt: "Kitchen 1" },
  { src: "/rightJanitorial-Images/Kitchen2.JPEG", alt: "Kitchen 2" },
  { src: "/rightJanitorial-Images/Kitchen3.JPEG", alt: "Kitchen 3" },
  { src: "/rightJanitorial-Images/Moproom.JPEG", alt: "Mop Room" },
  { src: "/rightJanitorial-Images/Auditorium2.JPEG", alt: "Auditorium 2" },
];

export default function GalleryPage() {
  const [previewIdx, setPreviewIdx] = useState<number | null>(null);

  return (
    <>
    <section style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ color: "#0070f3", fontSize: 32, textAlign: "center", marginBottom: 32 }}>Gallery</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 32,
        justifyItems: "center",
        marginBottom: 64
      }}>
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            style={{ background: "#f8fbff", borderRadius: 12, padding: 16, boxShadow: "0 2px 12px rgba(0,112,243,0.06)", textAlign: "center", cursor: "pointer" }}
            onClick={() => setPreviewIdx(idx)}
          >
            <Image src={img.src} alt={img.alt} width={200} height={120} style={{ borderRadius: 8, marginBottom: 12, objectFit: "cover" }} />
          </div>
        ))}
      </div>
      {previewIdx !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
          onClick={() => setPreviewIdx(null)}
        >
          <div style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
            <Image
              src={galleryImages[previewIdx].src}
              alt={galleryImages[previewIdx].alt}
              width={800}
              height={600}
              style={{ borderRadius: 0, objectFit: "contain", maxWidth: "90vw", maxHeight: "90vh", background: "transparent" }}
            />
          </div>
        </div>
      )}
    </section>
    <Footer/>
    </>
  );
}
