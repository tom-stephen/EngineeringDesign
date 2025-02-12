import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="header-nav">
      <Link to="/" className="header-link">How to Better Design</Link>
      <Link to="/misuse" className="header-link">Commonly Misused Products</Link>
      <Link to="/quiz" className="header-link">Quiz</Link>
    </nav>
  );
};

export default Header;
