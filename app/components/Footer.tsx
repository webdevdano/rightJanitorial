import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-zinc-100 border-t border-zinc-200 m-0 p-0">
      <div className="w-full flex-col">
        <section className="w-full bg-white/90 py-12 px-6 rounded-none shadow-none text-center">
          <h3 className="text-2xl font-bold mb-4 text-zinc-800">Contact Us</h3>
          <div className="mb-2 text-lg"><strong>Phone:</strong> <a className="text-blue-600 hover:underline hover:text-green-600" href="tel:+14354145403">(435) 414-5403</a></div>
          <div className="mb-2 text-lg"><strong>Email:</strong> <a className="text-blue-600 hover:underline hover:text-green-600" href="mailto:rightjanitorialservice@gmail.com">rightjanitorialservice@gmail.com</a></div>
          <div className="text-lg"><strong>Service Area:</strong> <span className="text-green-600 font-semibold">Perris, CA & Southern California</span></div>
        </section>
        <div className="w-full text-sm text-zinc-500 py-6 text-center m-0">
            &copy; {new Date().getFullYear()} Just Right Janitorial. All rights reserved.<br/>
            Developed by <a href='https://danielmarinelarena.vercel.app/' className='text-blue-600 hover:underline hover:text-green-600'>Daniel Marinelarena</a>
            </div>
      </div>
    </footer>
  );
}