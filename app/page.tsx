"use client";
import React from "react";
import useRevealOnScroll from "./components/useRevealOnScroll";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import HeroSlideshow from "./components/HeroSlideshow";


export default function HomePage() {
  useRevealOnScroll();
  return (
    <>
      {/* Hero Section with Slideshow */}
      <section className="w-full bg-linear-to-br from-[#f8fbff] to-[#e6f7f1] rounded-2xl shadow-lg mb-12 pt-8 pb-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          <div className="flex-1 flex flex-col justify-center items-center text-center md:items-start md:text-left md:pr-6">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-zinc-800 tracking-tight">Just Right Janitorial Services</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-700">Professional Cleaning in Perris, CA & Southern California</h2>
            <p className="mb-6 text-lg text-zinc-700 font-medium">
              Sparkling clean businesses within a 30-mile radius of Perris, CA. Trusted, local, and eco-friendly janitorial solutions for your peace of mind.
            </p>
            <a className="inline-block bg-blue-600 hover:bg-green-600 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transition-colors duration-200" href="tel:+14354145403">Call for Free Quote</a>
          </div>
          <div className="flex-1 flex justify-end items-center w-full max-w-md md:max-w-xs lg:max-w-sm xl:max-w-md">
            <HeroSlideshow className="h-[620px] w-full max-w-xs md:max-w-sm xl:max-w-md aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mb-14 max-w-3xl reveal-on-scroll">
        <ServiceCard
          icon="/window.svg"
          title="Commitment to Excellence"
          desc="Dedicated to delivering top-notch cleaning services tailored to your needs."
        />
        <ServiceCard
          icon="/file.svg"
          title="Commercial & Office Cleaning"
          desc="Professional janitorial services for offices, retail, and businesses. Flexible scheduling."
        />
        <ServiceCard
          icon="/globe.svg"
          title="Safer, Eco-Friendly Solutions"
          desc="We use safe, green products for a healthier classroom, business, and environment."
        />
      </section>

      {/* Local Focus & Trust */}
      <section className="bg-[#e6f7f1] rounded-2xl shadow-lg py-10 px-6 text-center mx-auto mb-12 max-w-2xl font-semibold text-lg reveal-on-scroll">
        Serving Perris, CA and all surrounding communities within a 30-mile radius: Menifee, Moreno Valley, Riverside, Lake Elsinore, Hemet, and more!
      </section>

      <Footer />
    </>
  );
}

