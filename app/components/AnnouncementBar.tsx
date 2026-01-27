import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#3677c7] text-white text-center py-2 px-4 text-sm font-medium shadow-md">
      <span>Serving all of Riverside County and surrounding areas! Call for a FREE quote: <a href="tel:+19512938535" className="font-semibold text-white hover:text-green-500">(951)293-8535</a></span>
    </div>
  );
}
