// src/components/LeadingCompany/LeadingCompany.jsx
import React from 'react';
import './LeadingCompany.css';
import leadingImg from '../../assets/leading-up.jpg';

const LeadingCompany = () => {
  return (
    <section className="leading">
      <div className="leading-inner">
        {/* LEFT CONTENT */}
        <div className="leading-left">
          <h2 className="leading-title">
            Leading Solar Company in <span>Uttar Pradesh</span>
          </h2>

          <p className="leading-text">
            India’s leading rooftop solar company, <strong>Hans Solar Energy</strong>,
            is helping families in Uttar Pradesh become energy independent and reduce
            high electricity bills.
          </p>

          <p className="leading-text">
            With 7+ years of experience and the trust of thousands of families across
            India, we deliver rooftop solar solutions that are efficient, smart, and
            subsidy-ready under PM Surya Ghar and state programs.
          </p>

          <p className="leading-text">
            Our dedicated Uttar Pradesh team is ready to energise your home with clean,
            cost-saving solar energy. So, what are you waiting for?
          </p>

          <div className="leading-actions">
            <button className="leading-btn leading-btn--primary">
              Book FREE Consultation
            </button>
            <button className="leading-btn leading-btn--ghost">
              View Portfolio
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="leading-right">
          <div className="leading-photo-card">
            <img
              src={leadingImg}
              alt="Hans Solar team with customers in Uttar Pradesh"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadingCompany;
