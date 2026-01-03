// src/components/Navbar/index.jsx
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // route change pe mobile menu close
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Company', to: '/' },
    { label: 'Subsidy For Home', to: '/solar-home' },
    { label: 'Solar Business', to: '/solar-business' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Let’s Connect', to: '/connect' },
  ];

  // single place pe CTA text manage karo
  const primaryCtaLabel = 'Book Free Subsidy Guide';
  const secondaryCtaLabel = 'Get Free Subsidy Guide';

  return (
    <header className={`nav-wrapper ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-topbar">
        <span>📞 +91 9358622621</span>
        <span>✉️ info@hanssolar.in</span>
      </div>

      <div className="nav-main">
        <NavLink to="/" className="nav-logo-block">
          <div className="nav-logo-icon" aria-hidden="true">
            ☀️
          </div>
          <div className="nav-logo-text">
            <span className="nav-logo-main">HANS SOLAR</span>
            <span className="nav-logo-sub">ENERGY PVT. LTD.</span>
          </div>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta-wrap">
          {/* Primary CTA – call for subsidy guidance */}
          <button
            type="button"
            className="nav-cta"
            onClick={() => (window.location.href = '/#contact')}
          >
            {primaryCtaLabel}
          </button>

          {/* Optional secondary text link / icon button for guide download 
              – agar abhi nahi chahiye to is block ko comment out kar sakte ho */}
          {/* <button
            type="button"
            className="nav-cta-secondary"
            onClick={() => (window.location.href = '/#subsidy-guide')}
          >
            {secondaryCtaLabel}
          </button> */}

          <button
            type="button"
            className={`nav-burger ${mobileOpen ? 'nav-burger-open' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`nav-mobile-menu ${
          mobileOpen ? 'nav-mobile-menu-open' : ''
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="nav-mobile-link"
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}

        {/* Mobile CTA – same messaging */}
        <button
          type="button"
          className="nav-mobile-cta"
          onClick={() => (window.location.href = '/#contact')}
        >
          {primaryCtaLabel}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
