import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto text-center px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 font-montserrat">About Just Right Janitorial</h1>
      <Image src="/JustRightJanitorial.jpg" alt="Just Right Janitorial" width={400} height={200} className="rounded-xl mx-auto mb-6 shadow-md" />
      <p className="text-xl text-gray-800 mb-8">
        Just Right Janitorial Service is a family owned company. We provide quality cleaning
        services to the Inland Empire community. We specialize in office and commercial cleaning.
        We provide all equipment, supplies and the know-how!
      </p>
      <div className="bg-green-50 rounded-lg px-6 py-7 text-green-700 font-semibold mb-10">
        <span className="block text-xl mb-2 font-bold">Our Mission</span>
        <span className="font-normal text-lg">
          We work with you to create a cleaning plan that fits your unique needs for your office, building or home no matter how big or small the job is.
        </span>
      </div>
      <div className="mt-8">
        <p className="text-lg text-gray-700 mb-3">Call us today for a <span className="font-bold text-green-700">FREE estimate!</span></p>
        <h2 className="text-3xl font-bold font-montserrat">
          <a href="tel:+14354145403" className="text-green-700 underline underline-offset-4 hover:text-blue-600 transition-colors duration-150">
            (435) 414-5403
          </a>
        </h2>
      </div>
    </section>
  );
}
