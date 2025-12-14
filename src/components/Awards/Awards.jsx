// src/components/Awards/Awards.jsx
import React, { useEffect, useRef } from 'react';
import './Awards.css';
import award1 from '../../assets/award-1.png';
import award2 from '../../assets/award-2.png';
import award3 from '../../assets/award-3.png';
import award4 from '../../assets/award-4.png';

const items = [
  {
    logo: award1,
    title: 'MNRE Empanelled Partner',
    year: '2024',
    desc: 'Recognised implementation partner for rooftop solar projects under national schemes.',
  },
  {
    logo: award2,
    title: 'Best Rooftop Solar Installer – North India',
    year: '2023',
    desc: 'Awarded for high-quality installations and customer satisfaction across Uttar Pradesh.',
  },
  {
    logo: award3,
    title: 'ISO 9001:2015 Certified',
    year: 'Quality',
    desc: 'Quality management certification for consistent processes and documentation.',
  },
  {
    logo: award4,
    title: 'Google 4.7★ Rated',
    year: '20,000+ reviews',
    desc: 'Thousands of happy families rating our work highly on service and performance.',
  },
];

const Awards = () => {
  const trackRef = useRef(null);

  // Minimal auto-scroll effect for desktop (optional, slow & lightweight)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let scrollPos = 0;
    let frame;

    const animate = () => {
      scrollPos += 0.3; // very slow
      if (scrollPos >= el.scrollWidth - el.clientWidth) scrollPos = 0;
      el.scrollLeft = scrollPos;
      frame = requestAnimationFrame(animate);
    };

    const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mqReduce.matches) {
      frame = requestAnimationFrame(animate);
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="awards">
      <div className="awards-inner">
        <h2 className="awards-title">
          Awards &amp; <span>Certifications</span>
        </h2>
        <p className="awards-subtitle">
          Recognised by government bodies, industry organisations, and our customers for
          delivering reliable, subsidy‑ready rooftop solar projects.
        </p>

        <div className="awards-track" ref={trackRef} aria-label="Hans Solar awards carousel">
          {items.map((item) => (
            <article className="award-card" key={item.title}>
              <div className="award-logo-wrap">
                <img src={item.logo} alt={item.title} />
              </div>
              <p className="award-year">{item.year}</p>
              <h3 className="award-title">{item.title}</h3>
              <p className="award-desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
