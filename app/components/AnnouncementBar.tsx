import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#f8fbff] to-[#e6f7f1] text-black text-center py-2 px-4 text-sm font-medium shadow-md">
      <span>Now serving all of Perris, CA and surrounding areas! Call for a free quote: <a href="tel:+14354145403" className="underline font-semibold text-blue-600 hover:text-green-500">(435) 414-5403</a></span>
    </div>
  );
}
