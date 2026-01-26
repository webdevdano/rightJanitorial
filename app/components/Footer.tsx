import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-white m-0 p-0">
      <div className="w-full flex flex-col items-center justify-center">
        <section className="w-full bg-white/90 py-12 px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="mb-6 md:mb-0 md:mr-8 flex justify-center">
            <Image
              src="/justright1.jpg"
              alt="Just Right Janitorial Team"
              width={220}
              height={124}
              priority
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="w-full max-w-xl flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 text-black">Contact Us</h3>
            <div className="mb-2 text-lg"><strong>Phone:</strong> <a className="text-blue-600 hover:underline hover:text-green-600" href="tel:+19512938535">(951) 293-8535</a></div>
            <div className="mb-2 text-lg"><strong>Email:</strong> <a className="text-blue-600 hover:underline hover:text-green-600" href="mailto:sales@rightjanitorial.com">sales@rightjanitorial.com</a></div>
            <div className="text-lg"><strong>Service Area:</strong> <span className="text-green-600 font-semibold">Riverside County & Surrounding Areas</span></div>
          </div>
        </section>
      </div>
      <div className="w-full bg-[#eaf5fb] text-sm text-black py-6 text-center m-0">
        &copy; {new Date().getFullYear()} Just Right Janitorial. All rights reserved.<br/>
        Developed by <a href='https://danielmarinelarena.vercel.app/' className='text-blue-600 hover:underline hover:text-green-600'>Daniel Marinelarena</a>
      </div>
    </footer>
  );
}