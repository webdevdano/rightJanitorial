import React from "react";
import Footer from "../components/Footer";
import HeroSlideshow from "../components/HeroSlideshow";
import Image from "next/image";


export default function AboutPage() {
  return (
    <>
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 font-montserrat text-center md:text-left">About Just Right Janitorial</h1>
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
            <div className="bg-white rounded-2xl px-6 py-6 flex flex-col md:flex-row items-center w-full">
              <div className="w-full max-w-xs md:max-w-sm xl:max-w-md mx-auto md:mr-6">
                <Image src="/justright1.jpg" alt="About Just Right Janitorial" width={600} height={400} className="rounded-lg" />
              </div>
              <p className="text-xl text-gray-800 text-left m-0 flex-1">
                Just Right Janitorial Service is a family owned company. We provide quality cleaning
                services to the Inland Empire community. We specialize in office and commercial cleaning.
                We provide all equipment, supplies and know-how!
              </p>
            </div>
          </div>
          <div className="bg-green-50 rounded-lg px-6 py-7 text-green-700 font-semibold mb-6">
            <span className="block text-xl mb-2 font-bold">Our Mission</span>
            <span className="font-normal text-lg">
              We work with you to create a cleaning plan that fits your unique needs for your office, building or home no matter how big or small the job is.
            </span>
          </div>
          <div className="bg-white/30 backdrop-blur-xl shadow-xl border border-white/40 ring-1 ring-green-200/40 rounded-2xl px-6 py-7 text-green-700 font-semibold mb-10">
            <span className="block text-xl mb-2 font-bold">Our Pros</span>
            <ul className="list-disc pl-6 text-lg text-green-800 space-y-2">
              <li>Professional Trained Staff</li>
              <li>Service Guaranteed</li>
              <li>Customer Service Available for Special Request</li>
              <li>After Business Hours</li>
              <li>One Time Deep Cleaning Service Available</li>
              <li>Move In/Out Cleaning Services</li>
              <li>No Contract</li>
              <li>Licensed and Insured</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center md:mt-32">
          <form className="rounded-2xl bg-white/30 backdrop-blur-xl shadow-xl border border-white/40 ring-1 ring-green-200/40 px-8 py-7 flex flex-col items-center w-full max-w-md transition-all duration-300 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-blue-700 mb-4 text-center">Request a FREE Estimate</h2>
            <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" />
            <input type="tel" name="phone" placeholder="Phone" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" />
            <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" />
            <input type="text" name="company" placeholder="Company" className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" />
            <input type="text" name="zip" placeholder="Zip Code" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" />
            <select name="howOften" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300">
              <option value="">How Often?</option>
              <option value="one-time">One time service</option>
              <option value="1x">1x a week</option>
              <option value="2x">2x a week</option>
              <option value="3x">3x a week</option>
              <option value="4x">4x a week</option>
              <option value="5x">5x a week</option>
              <option value="6x">6x a week</option>
              <option value="7x">7x a week</option>
            </select>
            <button type="submit" className="w-full bg-green-600 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition-colors duration-150 mt-2">Submit</button>
          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </>

  );
}
