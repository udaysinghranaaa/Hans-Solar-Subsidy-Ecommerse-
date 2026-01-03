import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const primaryCtaLabel = 'Book Free Subsidy Guide';

  return (
    <header className={`nav-wrapper ${scrolled ? 'nav-scrolled' : 'nav-hero'}`}>
      <div className="nav-main">
        {/* Brand logo from public folder */}
        <NavLink to="/" className="nav-logo-block">
          <img
            src="/logo-hans-solar.png"
            alt="Hans Solar Energy Pvt. Ltd."
            className="nav-logo-img"
          />
        </NavLink>

        {/* Desktop links */}
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

        {/* CTA + burger */}
        <div className="nav-cta-wrap">
          <button
            type="button"
            className="nav-cta"
            onClick={() => (window.location.href = '/#contact')}
          >
            {primaryCtaLabel}
          </button>

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

      {/* Mobile menu */}
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
