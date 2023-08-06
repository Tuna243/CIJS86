// Greeting.js
import React, { useState, useEffect } from 'react';


const Greeting = (props) => {
// props.time
// <20 : Good morning
//  >=20 && <40 : Good afternoon
// >=40 : Good evening
  return (
    <div className="greeting">
      <h2>Greeting</h2>
      <p>, User!</p>
    </div>
  );
};

export default Greeting;
