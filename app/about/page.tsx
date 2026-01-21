import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto text-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-4 font-montserrat">About Just Right Janitorial</h1>
      <Image src="/JustRightJanitorial.jpg" alt="Just Right Janitorial" width={400} height={200} className="rounded-xl mx-auto mb-6 shadow-md" />
      <p className="text-lg text-gray-800 mb-6">
        Just Right Janitorial Service is a family owned company. We provide quality cleaning
        services to the Inland Empire community. We specialize in office and commercial cleaning.
        We provide all equipment, supplies and the know-how!
      </p>
      <div className="bg-green-50 rounded-lg px-6 py-5 text-green-700 font-semibold mb-8">
        <span className="block text-lg mb-1 font-bold">Our Mission</span>
        <span className="font-normal">
          We work with you to create a cleaning plan that fits your unique needs for your office, building or home—no matter how big or small the job is.
        </span>
      </div>
      <div className="mt-6">
        <p className="text-base text-gray-700 mb-2">Call us today for a <span className="font-bold text-green-700">FREE estimate!</span></p>
        <h2 className="text-2xl font-bold font-montserrat">
          <a href="tel:+14354145403" className="text-green-700 underline underline-offset-4 hover:text-blue-600 transition-colors duration-150">
            (435) 414-5403
          </a>
        </h2>
      </div>
    </section>
  );
}
