import React from "react";
import Image from "next/image";


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <Image className="responsive-img" src="/JustRightJanitorial.jpg" alt="Just Right Janitorial cleaning team" width={520} height={260} priority />
          <h1>Just Right Janitorial</h1>
          <h2>Professional Cleaning Services in Perris, CA & Southern California</h2>
          <p>
            Sparkling clean homes and businesses within a 30-mile radius of Perris, CA. Trusted, local, and eco-friendly janitorial solutions for your peace of mind.
          </p>
          <a className="cta-btn" href="tel:+14354145403">Get a Free Quote</a>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="service-highlights">
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
      <section className="local-focus">
        Serving Perris, CA and all surrounding communities within a 30-mile radius: Menifee, Moreno Valley, Riverside, Lake Elsinore, Hemet, and more!
      </section>

      {/* Contact Info */}
      <section className="contact-info card">
        <h3>Contact Us</h3>
        <div><strong>Phone:</strong> <a href="tel:+14354145403">(435) 414-5403</a></div>
        <div><strong>Email:</strong> <a href="mailto:rightjanitorialservice@gmail.com">rightjanitorialservice@gmail.com</a></div>
        <div><strong>Service Area:</strong> <span className="highlight-green">Perris, CA & Southern California</span></div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card service-card">
      <Image className="service-icon" src={icon} alt={title} width={48} height={48} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

// Modern responsive styles for Home page
// You can move these to a CSS/SCSS file if desired
const style = `
.hero-section {
  background: linear-gradient(90deg, #f8fbff 60%, #e6f7f1 100%);
  border-radius: 24px;
  box-shadow: 0 6px 32px rgba(0,112,243,0.07);
  margin-bottom: 48px;
  padding: 3rem 1rem 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  width: 100%;
  text-align: center;
}
.cta-btn {
  display: inline-block;
  background: #0070f3;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  padding: 0.9rem 2.2rem;
  border-radius: 32px;
  box-shadow: 0 2px 12px rgba(0,112,243,0.10);
  text-decoration: none;
  margin-top: 8px;
  transition: background 0.2s;
}
.cta-btn:hover {
  background: #009e60;
}
.service-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  margin: 0 auto 56px auto;
  max-width: 900px;
}
.service-card {
  text-align: center;
  padding-top: 2.2rem;
}
.service-icon {
  margin-bottom: 18px;
}
.local-focus {
  background: #e6f7f1;
  border-radius: 18px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  margin: 0 auto 48px auto;
  max-width: 800px;
  font-weight: 600;
  font-size: 20px;
}
.contact-info {
  max-width: 500px;
  margin: 0 auto 32px auto;
  text-align: center;
}
@media (max-width: 900px) {
  .hero-section { padding: 2rem 0.5rem 1.5rem 0.5rem; }
  .service-highlights { gap: 18px; }
}
@media (max-width: 600px) {
  .hero-section { padding: 1.2rem 0.2rem 1rem 0.2rem; }
  .hero-content h1 { font-size: 1.4rem; }
  .hero-content h2 { font-size: 1.1rem; }
  .service-highlights { grid-template-columns: 1fr; }
}
`;

if (typeof window !== 'undefined') {
  if (!document.getElementById('home-page-modern-style')) {
    const styleTag = document.createElement('style');
    styleTag.id = 'home-page-modern-style';
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
  }
}
