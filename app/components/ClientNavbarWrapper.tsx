"use client";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const AnnouncementBar = dynamic(() => import("./AnnouncementBar"), { ssr: false });

export default function ClientNavbarWrapper() {
  return (
    <>
      <AnnouncementBar />
      <div className="mt-3 md:mt-4" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Navbar />
      </div>
    </>
  );
}
