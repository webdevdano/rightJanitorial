"use client";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const AnnouncementBar = dynamic(() => import("./AnnouncementBar"), { ssr: false });

export default function ClientNavbarWrapper() {
  return (
    <>
      <AnnouncementBar />
      <div style={{ maxWidth: 1200, margin: "0 auto", marginTop: '0.75rem' }}>
        <Navbar />
      </div>
    </>
  );
}
