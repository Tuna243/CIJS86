// ScrollToTop.js
import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showScrollToTop && (
      <button className="scroll-to-top show" onClick={handleScrollToTop}>
        Scroll to Top
      </button>
    )
  );
};

export default ScrollToTop;
