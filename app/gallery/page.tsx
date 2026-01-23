import React from "react";
import Image from "next/image";

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
          </div>
        ))}
      </div>
    </section>
  );
}
