// ScrollProgressBar.js
import React, { useState, useEffect } from 'react';
import './scrollprogressbar.css';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    console.log(scrollHeight)
    console.log(scrollY)

    const progress = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>;
};

export default ScrollProgressBar;
