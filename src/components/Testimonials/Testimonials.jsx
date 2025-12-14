// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

const reviews = [
  {
    name: 'Bhumi T.',
    time: '32 weeks ago',
    text:
      'Installed a 4 kW rooftop system at my residence and have not faced any electricity bill issues since. Professional service and a very supportive team.',
  },
  {
    name: 'Abhimanyu B.',
    time: '29 weeks ago',
    text:
      'Great experience from site survey to installation. Work was neat, timely and well-explained. A reliable choice for rooftop solar.',
  },
  {
    name: 'Shashank D.',
    time: '29 weeks ago',
    text:
      'Smooth installation process and good guidance on subsidy and net-metering. Would happily recommend Hans Solar to others.',
  },
];

const Testimonials = () => {
  return (
    <section className="testi">
      <div className="testi-inner">
        <h2 className="testi-title">
          Trusted by <span>20,000+ Happy Families</span>
        </h2>
        <p className="testi-subtitle">
          Wondering what it’s like to go solar with us? Hear directly from customers who
          are already saving on their electricity bills.
        </p>

        <div className="testi-grid">
          {/* Left: video / reel (dummy) */}
          <div className="testi-video-wrap">
            <div className="testi-video-card">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Hans Solar Customer Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="testi-video-caption">
              Real customer stories from rooftop solar installations across Uttar Pradesh.
            </p>
          </div>

          {/* Right: reviews */}
          <div className="testi-reviews">
            {reviews.map((r) => (
              <article className="testi-card" key={r.name}>
                <div className="testi-card-top">
                  <div className="testi-avatar">{r.name.charAt(0)}</div>
                  <div>
                    <p className="testi-name">{r.name}</p>
                    <p className="testi-time">{r.time}</p>
                    <p className="testi-stars">★★★★★</p>
                  </div>
                </div>
                <p className="testi-text">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
