"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-8">
      <div
        className="relative flex items-center justify-between gap-4 md:gap-8 px-2 md:px-8 py-3 rounded-full bg-white/30 backdrop-blur-xl shadow-xl border border-white/40 ring-1 ring-gray-200/40 overflow-x-auto whitespace-nowrap group w-full max-w-full md:max-w-4xl scrollbar-hide"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
      >
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-2 min-w-max min-w-0">
          <img src="/justright1.jpg" alt="Just Right Janitorial Logo" className="h-10 w-10 object-contain" />
          <span className="text-2xl font-bold text-blue-700 tracking-tight">Just Right Janitorial Services</span>
        </Link>
        {/* Nav links on the right */}
        <div className="flex gap-4 md:gap-8 ml-auto min-w-max min-w-0">
          <Link href="/" className="text-blue-600 font-semibold hover:text-green-600 transition-colors">Home</Link>
          <Link href="/about" className="text-green-600 font-semibold hover:text-blue-600 transition-colors">About</Link>
          <Link href="/gallery" className="text-blue-600 font-semibold hover:text-green-600 transition-colors">Gallery</Link>
        </div>
        {/* Shine effect */}
        <span
          className="pointer-events-none absolute left-[-75%] top-0 h-full w-1/2 opacity-0 group-hover:opacity-100 group-hover:animate-shine"
          style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.0) 100%)',
            filter: 'blur(2px)',
          }}
        />
      </div>
      <style jsx global>{`
        @keyframes shine {
          0% { left: -75%; opacity: 0; }
          20% { opacity: 1; }
          60% { left: 110%; opacity: 1; }
          100% { left: 110%; opacity: 0; }
        }
        .group:hover .group-hover\:animate-shine {
          animation: shine 1.1s cubic-bezier(.4,0,.2,1);
        }
        /* Hide scrollbar for all browsers */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}
