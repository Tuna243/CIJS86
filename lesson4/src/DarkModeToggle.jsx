// DarkModeToggle.js
import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <button onClick={handleToggle}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
};

export default DarkModeToggle;
