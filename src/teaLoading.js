import React, { useState, useEffect } from 'react';
import './App.css'; // You'll need to create this CSS file for styling

function TeaMakingAnimation() {
  const [percentage, setPercentage] = useState(0);
  const [isBrewing, setIsBrewing] = useState(false);

  useEffect(() => {
    let interval;

    if (isBrewing) {
      // Simulate the tea-making process by incrementing the percentage every second.
      interval = setInterval(() => {
        if (percentage < 100) {
          setPercentage(percentage + 1);
        } else {
          setIsBrewing(false);
        }
      }, 30);
    } else {
      // Clear the interval if not brewing.
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [percentage, isBrewing]);

  const handleStartButtonClick = () => {
    // Start brewing when the button is clicked.
    setIsBrewing(true);
  };

  return (
    <div className="tea-making-animation">
      <div className="circle">
        <div className={`mask full ${isBrewing ? 'brewing' : ''}`}>
          <div className="fill"></div>
        </div>
        <div className={`mask half ${isBrewing ? 'brewing' : ''}`}>
          <div className="fill"></div>
        </div>
        <div className="inside-circle">
          <span className="percentage">{percentage}%</span>
        </div>
      </div>
      <button onClick={handleStartButtonClick} className="start-button">
        Start Brewing
      </button>
    </div>
  );
}

export default TeaMakingAnimation;
