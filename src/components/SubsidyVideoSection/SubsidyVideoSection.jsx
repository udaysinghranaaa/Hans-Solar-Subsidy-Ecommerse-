// src/components/SubsidyVideoSection/SubsidyVideoSection.jsx
import React from 'react';
import './SubsidyVideoSection.css';

const SubsidyVideoSection = () => {
  return (
    <section className="subsidy-video-section">
      <div className="subsidy-video-inner">
        <div className="subsidy-video-card">
          <div className="subsidy-video-responsive">
            <iframe
              src="https://www.youtube.com/embed/x-zbjyRlS4c?rel=0&modestbranding=1"
              title="Solar subsidy walkthrough"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="subsidy-video-meta">
            <p className="subsidy-video-title">
              See how solar subsidy changes your monthly bill
            </p>
            <p className="subsidy-video-sub">
              Short story from a real PM Surya Ghar beneficiary. Understand the process, payout
              and timelines in under 3 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidyVideoSection;
