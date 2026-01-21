"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      padding: "1.5rem 0",
      background: "#fff",
      borderBottom: "1px solid #e0e0e0"
    }}>
      <Link href="/" style={{ color: "#0070f3", fontWeight: 600 }}>Home</Link>
      <Link href="/about" style={{ color: "#009e60", fontWeight: 600 }}>About</Link>
      <Link href="/gallery" style={{ color: "#0070f3", fontWeight: 600 }}>Gallery</Link>
    </nav>
  );
}
