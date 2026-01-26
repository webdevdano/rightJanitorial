"use client";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });
const AnnouncementBar = dynamic(() => import("./AnnouncementBar"), { ssr: false });

export default function ClientNavbarWrapper() {
  return (
    <>
      <AnnouncementBar />
      <div
        className="flex items-center gap-4 mt-8"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingTop: 24,
          background: "#eaf5fb",
        }}
      >
        <img
          src="/rightJanitorial-Images/logo/JRJ.jpeg"
          alt="JRJ Logo"
          style={{ width: 80, height: 80, objectFit: 'contain', background: 'transparent' }}
        />
        <div className="flex-1">
          <Navbar />
        </div>
      </div>
    </>
  );
}
