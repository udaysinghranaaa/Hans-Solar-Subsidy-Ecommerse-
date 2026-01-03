// src/components/WhyChoose/WhyChoose.jsx
import React from 'react';
import './WhyChoose.css';
import img1 from '../../assets/team-1.jpg';
import img2 from '../../assets/team-2.jpg';
import img3 from '../../assets/partners.jpg';

const rows = [
  {
    icon: '📍',
    title: 'Presence in 80+ Cities Across India',
    text: 'Local Hans Solar teams ensure faster service, better support and on-ground understanding of your specific energy needs.',
    image: img1,
    alt: 'Hans Solar engineers at rooftop solar site',
  },
  {
    icon: '👥',
    title: '300+ Team Strength',
    text: 'A specialised team of solar engineers, technicians and experts ensures seamless installations and system optimisation.',
    image: img2,
    alt: 'Hans Solar core team standing together',
  },
  {
    icon: '🧘',
    title: 'Peace of Mind',
    text: 'From consultation to installation, Hans Solar manages every step, paperwork and coordination so your experience stays smooth.',
    image: img3,
    alt: 'Hans Solar field team working on inverter panel',
  },
];

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="why-inner">
        <h2 className="why-title">
          Why choose <span>Hans Solar in Uttar Pradesh?</span>
        </h2>

        <p className="why-intro">
          Strong presence, experienced teams and quality execution make Hans Solar a trusted
          rooftop solar partner for homes across the state.
        </p>

        <div className="why-rows">
          {rows.map((row) => (
            <div className="why-row" key={row.title}>
              {/* LEFT: icon + text */}
              <div className="why-row-left">
                <div className="why-icon-circle">
                  <span className="why-icon-emoji">{row.icon}</span>
                </div>
                <div className="why-row-text">
                  <h3>{row.title}</h3>
                  <p>{row.text}</p>
                </div>
              </div>

              {/* RIGHT: image card */}
              <div className="why-row-right">
                <div className="why-row-image-card">
                  <img src={row.image} alt={row.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
