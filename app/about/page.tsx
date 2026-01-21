import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
      <h1 style={{ color: "#0070f3", fontSize: 36, marginBottom: 16 }}>About Just Right Janitorial</h1>
      <Image src="/JustRightJanitorial.jpg" alt="Just Right Janitorial" width={400} height={200} style={{ borderRadius: 12, marginBottom: 24 }} />
      <p style={{ fontSize: 18, color: "#222", marginBottom: 24 }}>
        Just Right Janitorial is dedicated to providing top-quality cleaning services for businesses and homes. Our team is committed to excellence, reliability, and customer satisfaction. With years of experience and a passion for cleanliness, we ensure every space is spotless and welcoming.
      </p>
      <div style={{ background: "#e6f7f1", borderRadius: 8, padding: 24, color: "#009e60" }}>
        <strong>Our Mission:</strong> To deliver exceptional janitorial services with integrity and care, making your environment shine.
      </div>
    </section>
  );
}
