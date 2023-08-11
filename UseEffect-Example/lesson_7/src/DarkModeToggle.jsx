// DarkModeToggle.js
import React, { useEffect, useState,useContext } from 'react';
import './DarkModeToggle.css';
import { ThemeContext } from './Context/ThemeContext';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme,changeTheme] = useContext(ThemeContext);
 
  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    changeTheme()
  };

  return (
    <div className="dark-mode-toggle">
      <button onClick={handleToggle}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
};

export default DarkModeToggle;
