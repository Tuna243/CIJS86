// Greeting.js
import React, { useState, useEffect } from 'react';


const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    let newGreeting;

    if (currentHour >= 5 && currentHour < 12) {
      newGreeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      newGreeting = 'Good Afternoon';
    } else {
      newGreeting = 'Good Evening';
    }

    setGreeting(newGreeting);
  }, []);

  return (
    <div className="greeting">
      <h2>Greeting</h2>
      <p>{greeting}, User!</p>
    </div>
  );
};

export default Greeting;
