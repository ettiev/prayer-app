import React, { useState, useEffect } from 'react';

import style from "./CountdownTimer.module.css";

function CountdownTimer({ secondsLeft, pause, endFunction, loop }) {
  const [countDown, setCountDown] = useState(secondsLeft);
  const [persentage, setPersentage] = useState(100);

      useEffect(() => {
        const intervalId = setInterval(() => {
            if ((countDown > 0) && (!pause)) {
                setCountDown(countDown - 1);
                setPersentage(Math.floor(countDown/secondsLeft * 100));
            }
        }, 1000);
        return () => clearInterval(intervalId);
    
    });

  function getTimeRemaining (totalTime) {
    const seconds = Math.floor((totalTime) % 60);
    const minutes = Math.floor((totalTime * 60) % 60);
    const hours = Math.floor((totalTime / (60 * 60)) % 24);
    return {
      hours,
      minutes,
      seconds,
    };
  };

  let { hours, minutes, seconds } = getTimeRemaining(countDown);
  
  if (hours <= 0) {
    hours = 0
  }
  if (minutes <= 0) {
    minutes = 0
  }
  if (seconds <= 0) {
    seconds = 0
  }
  
  if (countDown === 0) {
    endFunction(); 
  };
  if ((countDown <= 0) && (loop === true)) {
    setCountDown(secondsLeft);
    setPersentage(100);
  }

  return (
    <div style={{ width: '100%' }}>
        <div style={{ width: '40%' }}>
          <span className={style.time_left + " badge rounded-pill text-bg-success my-3"} >
              <span>{hours.toString().padStart(2, '0')}:</span>
              <span>{minutes.toString().padStart(2, '0')}:</span>
              <span>{seconds.toString().padStart(2, '0')}</span>
          </span>
        </div>
        <div style={{ width: '100%' }}>
          <div className="progress mb-3" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
            <div className="progress-bar bg-success" style={{ width: persentage + "%" }}></div>
          </div>
        </div>  
    </div>
  );
}

export default CountdownTimer;