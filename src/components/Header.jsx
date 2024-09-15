import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Trademarkia</div>
      <div className="search-bar">
        <input type="text" placeholder="Search Trademark Here e.g. Mickey Mouse" />
        <button>Search</button>
      </div>
      <nav className="nav-links">
        <a href="/services">Services</a>
        <a href="/attorneys">Attorneys</a>
        <a href="/support">Support</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
}

export default Header;
