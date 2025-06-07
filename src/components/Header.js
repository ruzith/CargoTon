import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        Cargo <span className="logo-ton">TON</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home" className="active">Home <span className="arrow">&#x25BC;</span></a></li>
          <li><a href="#pages">Pages <span className="arrow">&#x25BC;</span></a></li>
          <li><a href="#tracking">Tracking</a></li>
          <li><a href="#services">Services <span className="arrow">&#x25BC;</span></a></li>
          <li><a href="#blog">Blog <span className="arrow">&#x25BC;</span></a></li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="btn-quote">Get A Quote</button>
        <button className="btn-signin">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
