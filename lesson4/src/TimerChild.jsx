// TimerChild.js
import React, { useState, useEffect } from 'react';

const TimerChild = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>TimerChild: {seconds} seconds</div>;
};

export default TimerChild;
