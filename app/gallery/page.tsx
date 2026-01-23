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
      <div
        className="gallery-pill mx-auto mb-8 px-8 py-3 rounded-full bg-white/30 backdrop-blur-xl shadow-lg border border-white/40 ring-1 ring-blue-200/40 text-blue-700 hover:text-green-600 text-2xl font-extrabold font-montserrat text-center relative overflow-hidden group transition-colors duration-200"
        style={{ maxWidth: 320 }}
      >
        Gallery
        <span
          className="pointer-events-none absolute left-[-75%] top-0 h-full w-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-shine"
          style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.0) 100%)',
            filter: 'blur(2px)',
          }}
        />
        <style jsx>{`
          @keyframes shine {
            0% { left: -75%; opacity: 0; }
            20% { opacity: 1; }
            60% { left: 110%; opacity: 1; }
            100% { left: 110%; opacity: 0; }
          }
          .group:hover {
            color: #16a34a !important; /* Tailwind green-600 */
          }
          .group:hover .group-hover\\:animate-shine {
            animation: shine 1.1s cubic-bezier(.4,0,.2,1);
          }
        `}</style>
      </div>
      <div
        className="bg-linear-to-br from-[#f8fbff] to-[#e6f7f1] rounded-3xl shadow-xl px-8 py-10 flex flex-col items-center"
        style={{ marginBottom: 64 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            justifyItems: "center"
          }}
        >
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
