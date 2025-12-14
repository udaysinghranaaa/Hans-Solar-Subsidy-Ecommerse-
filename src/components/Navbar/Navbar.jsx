import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="top-wrapper">
      {/* Top contact strip */}
      <div className="topbar">
        <div className="topbar-left">
          <span>📞 80030 80020</span>
          <span>✉️ info@hanssolar.in</span>
        </div>
        <button className="topbar-cta">Book FREE Site Survey</button>
      </div>

      {/* Main white navbar */}
      <nav className="navbar-main">
        <div className="navbar-logo">
          {/* yahan pe apna actual logo image use kar sakte ho */}
          <span>HANS SOLAR</span>
        </div>

        <div className="navbar-menu">
          <a href="/company">Company</a>
          <a href="/solar-home">Solar For Home</a>
          <a href="/solar-business">Solar For Business</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/investors">Investors</a>
          <a href="/contact">Let’s Connect</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
