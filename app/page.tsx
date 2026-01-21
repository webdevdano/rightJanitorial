
"use client";
import React from "react";
import Image from "next/image";
import useRevealOnScroll from "./components/useRevealOnScroll";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";


export default function HomePage() {
  useRevealOnScroll();
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f8fbff] to-[#e6f7f1] rounded-3xl shadow-lg mb-12 p-12 flex items-center justify-center">
        <div className="flex flex-col items-center max-w-xl w-full text-center">
          <Image className="w-full h-auto rounded-xl mb-4" src="/JustRightJanitorial.jpg" alt="Just Right Janitorial cleaning team" width={520} height={260} priority />
          <h1 className="text-3xl font-bold mb-2">Just Right Janitorial Services</h1>
          <h2 className="text-xl font-semibold mb-4">Professional Cleaning Services in Perris, CA & Southern California</h2>
          <p className="mb-4 text-base text-gray-700">
            Sparkling clean homes and businesses within a 30-mile radius of Perris, CA. Trusted, local, and eco-friendly janitorial solutions for your peace of mind.
          </p>
          <a className="inline-block bg-blue-600 hover:bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full shadow-md mt-2 transition-colors duration-200" href="tel:+14354145403">Call for Free Quote</a>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mb-14 max-w-3xl reveal-on-scroll">
        <ServiceCard
          icon="/window.svg"
          title="Residential Cleaning"
          desc="Deep cleans, move-in/move-out, and recurring home cleaning tailored to your needs."
        />
        <ServiceCard
          icon="/file.svg"
          title="Commercial & Office Cleaning"
          desc="Professional janitorial services for offices, retail, and businesses. Flexible scheduling."
        />
        <ServiceCard
          icon="/globe.svg"
          title="Eco-Friendly Solutions"
          desc="We use safe, green products for a healthier home, business, and environment."
        />
      </section>

      {/* Local Focus & Trust */}
      <section className="bg-[#e6f7f1] rounded-2xl py-10 px-6 text-center mx-auto mb-12 max-w-2xl font-semibold text-lg reveal-on-scroll">
        Serving Perris, CA and all surrounding communities within a 30-mile radius: Menifee, Moreno Valley, Riverside, Lake Elsinore, Hemet, and more!
      </section>

      <Footer/>
    </>
  );
}

