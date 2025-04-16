import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}><ThemeToggle/></button>
    </nav>
  );
};

export default Navbar;
