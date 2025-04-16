import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = ({ onToggle }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (onToggle) onToggle(newTheme);
  };

  return (
    <span className="theme-toggle-icon" onClick={toggleTheme} title="Toggle Theme" role="button" tabIndex={0}>
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </span>
  );
};

export default ThemeToggle;
