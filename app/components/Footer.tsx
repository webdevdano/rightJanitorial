import React from 'react'

export default function Footer() {
  return (
    <div>
        {/* Contact Info */}
      <section className="max-w-md mx-auto mb-8 text-center card reveal-on-scroll">
        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
        <div className="mb-1"><strong>Phone:</strong> <a className="text-blue-600 hover:underline" href="tel:+14354145403">(435) 414-5403</a></div>
        <div className="mb-1"><strong>Email:</strong> <a className="text-blue-600 hover:underline" href="mailto:rightjanitorialservice@gmail.com">rightjanitorialservice@gmail.com</a></div>
        <div><strong>Service Area:</strong> <span className="text-green-600 font-semibold">Perris, CA & Southern California</span></div>
      </section>
    </div>
  )
}
