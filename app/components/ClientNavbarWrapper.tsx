"use client";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

export default function ClientNavbarWrapper() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <Navbar />
    </div>
  );
}
