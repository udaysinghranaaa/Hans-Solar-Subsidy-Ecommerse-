// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-col footer-brand">
          <div className="footer-logo">Hans Solar</div>
          <p className="footer-tagline">Simplifying Solar</p>
        </div>

        {/* About links */}
        <div className="footer-col">
          <h4>About Hans Solar</h4>
          <ul>
            <li><a href="#company">Company</a></li>
            <li><a href="#solar-home">Solar for Home</a></li>
            <li><a href="#solar-business">Solar for Business</a></li>
            <li><a href="#presence">Our Presence</a></li>
          </ul>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#portfolio">Our Portfolio</a></li>
            <li><a href="#partner">Partner with Us</a></li>
            <li><a href="#support">Service &amp; Support</a></li>
            <li><a href="#investors">Investors</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h4>Let’s Connect</h4>
          <p className="footer-contact-item">📞 +91 93586 22621</p>
          <p className="footer-contact-item">✉️ info@hanssolar.in</p>
          <div className="footer-social">
            <a href="#fb" aria-label="Facebook"></a>
            <a href="#ig" aria-label="Instagram"></a>
            <a href="#li" aria-label="LinkedIn"></a>
            <a href="#yt" aria-label="YouTube"></a>
          </div>
        </div>
      </div>

      {/* Presence bar */}
      <div className="footer-middle">
        <p className="footer-presence-title">Our Presence across India</p>
        <div className="footer-presence-tags">
          <span>Delhi</span>
          <span>Gujarat</span>
          <span>Haryana</span>
          <span>Madhya Pradesh</span>
          <span>Maharashtra</span>
          <span>Rajasthan</span>
          <span>Uttar Pradesh</span>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hans Solar Energy Ltd</p>
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
