"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/rightJanitorial-Images/Auditorium.JPEG",
  "/rightJanitorial-Images/Auditorium1.JPEG",
  "/rightJanitorial-Images/Auditorium2.JPEG",
  "/rightJanitorial-Images/Auditorium3.JPEG",
  '/rightJanitorial-Images/Kitchen2.JPEG',
  '/rightJanitorial-Images/Kitchen3.JPEG',
  '/rightJanitorial-Images/restaurant.jpeg',
];

export default function HeroSlideshow({ className = "", interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className={`relative w-full aspect-[3/5] rounded-2xl overflow-hidden shadow-xl bg-gray-100 ${className}`}>
      {images.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`Slideshow image ${idx + 1}`}
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          priority={idx === 0}
        />
      ))}
      {/* Guarantee badge overlay */}
      <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 20 }}>
        <Image
          src="/rightJanitorial-Images/logo/guarantee.png"
          alt="Guarantee Badge"
          width={80}
          height={80}
          style={{ objectFit: 'contain', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
        />
      </div>
    </div>
  );
}
