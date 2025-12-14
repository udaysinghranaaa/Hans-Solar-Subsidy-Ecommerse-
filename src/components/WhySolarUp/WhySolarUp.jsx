// src/components/WhySolarUP/WhySolarUP.jsx
import React from 'react';
import './WhySolarUp.css';

const benefits = [
  {
    icon: '🏅',
    title: 'Attractive Government Subsidies',
    text:
      'Benefit from Central and State Government subsidies up to ₹1.08 Lakhs under schemes like PM Surya Ghar Yojana, making solar more affordable.',
  },
  {
    icon: '🏠',
    title: 'Increase Your Property Value',
    text:
      'Solar adds a long-term asset to your home. Strong warranties and lower running costs make your property more attractive to future buyers.',
  },
  {
    icon: '📈',
    title: 'Beat Rising Electricity Costs',
    text:
      'With tariffs rising every few years, solar lets you lock-in low energy costs and significantly reduce monthly electricity bills.',
  },
  {
    icon: '🌍',
    title: 'Sustainability with 21–25% ROI',
    text:
      'Solar delivers solid financial returns while also cutting carbon emissions, helping you secure both energy savings and a greener future.',
  },
];

const WhySolarUP = () => {
  return (
    <section className="wsup">
      <div className="wsup-inner">
        {/* Title */}
        <h2 className="wsup-title">
          Why Choose <span>Solar in Uttar Pradesh?</span>
        </h2>

        <p className="wsup-subtitle">
          Switching to solar in Uttar Pradesh is a smart move for homeowners and
          businesses looking to cut electricity bills and secure a brighter, low-carbon
          future.
        </p>

        {/* Benefit cards */}
        <div className="wsup-grid">
          {benefits.map((item) => (
            <article className="wsup-card" key={item.title}>
              <div className="wsup-icon-wrap">
                <span className="wsup-icon">{item.icon}</span>
              </div>
              <h3 className="wsup-card-title">{item.title}</h3>
              <p className="wsup-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySolarUP;
