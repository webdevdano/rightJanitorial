'use client';
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

export default function AboutPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    zip: ""
  });
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setForm({ name: "", phone: "", email: "", company: "", zip: "" });
      } else {
        setStatus({ success: false, message: data.error || "Failed to send message." });
      }
    } catch {
      setStatus({ success: false, message: "An error occurred. Please try again." });
    }
  };

  return (
    <>
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 font-montserrat text-center ">About Us</h1>
      
      {/* Top Row: Image and Description */}
      <div className="mb-8">
        <div className="bg-white rounded-2xl px-2 md:px-6 py-4 flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto">
          <div className="w-full max-w-xs md:max-w-sm xl:max-w-md mx-auto md:mr-6">
            <Image src="/justright1.jpg" alt="About Just Right Janitorial" width={580} height={400} className="rounded-lg" />
          </div>
          <p className="text-xl text-gray-800 text-left m-0 flex-1 mt-4 md:mt-0">
            At Just Right Janitorial, we provide reliable, detail-oriented cleaning services designed to keep your space spotless,
            safe, and welcoming.<br/> We take pride in delivering consistent results, using proven cleaning methods and professional-grade products.<br/>
            Our team understands that a clean environment matters—for productivity, health, and first impressions.<br/> That’s why we approach every
            job with care, integrity, and a commitment to doing the job just right every time.
          </p>
        </div>
      </div>

      {/* Bottom Row: Mission/Pros on Left, Form on Right */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Column: Mission and Pros */}
        <div className="flex-1 space-y-6">
          <div className="bg-green-50 rounded-lg px-6 py-7 text-green-700 font-semibold">
            <span className="block text-xl mb-2 font-bold">Our Mission</span>
            <span className="font-normal text-lg">
              We work with you to create a cleaning plan that fits your unique needs for your office, building or home no matter how big or small the job is.
            </span>
          </div>
          <div className="bg-white/30 backdrop-blur-xl shadow-xl border border-white/40 ring-1 ring-green-200/40 rounded-2xl px-6 py-7 text-green-700 font-semibold">
            <span className="block text-xl mb-2 font-bold">Our Pros</span>
            <ul className="list-disc pl-6 text-lg text-green-800 space-y-2">
              <li>Professional Trained Staff</li>
              <li>100% Service Guaranteed</li>
              <li>Customer Service Available for Special Request</li>
              <li>After Business Hours</li>
              <li>One Time Deep Cleaning Service Available</li>
              <li>Move In/Out Cleaning Services</li>
              <li>No Contract</li>
              <li>Licensed and Insured</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 flex flex-col items-center justify-start" id="quote-form">
          <div className="rounded-2xl bg-white/30 backdrop-blur-xl shadow-xl border border-white/40 ring-1 ring-green-200/40 px-8 py-7 flex flex-col items-center w-full max-w-md transition-all duration-300 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-blue-700 mb-4 text-center">Request a free estimate <br /> or inquire for more information</h2>
            <input type="text" name="name" placeholder="Name" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" value={form.name} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" value={form.phone} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" value={form.email} onChange={handleChange} />
            <input type="text" name="company" placeholder="Company" className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" value={form.company} onChange={handleChange} />
            <input type="text" name="zip" placeholder="Zip Code" required className="w-full px-4 py-2 rounded-lg border border-green-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-green-300" value={form.zip} onChange={handleChange} />
            <button onClick={handleSubmit} className="w-full bg-green-600 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition-colors duration-150 mt-2">Submit</button>
            {status && <div className={`text-sm mt-2 ${status.success ? 'text-green-600' : 'text-red-600'}`}>{status.message}</div>}
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}