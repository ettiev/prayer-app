import React, { useState, useEffect } from 'react';

import style from "./CountdownTimer.module.css";

function CountdownTimer({ secondsLeft, pause }) {
  // const [currentTime, setCurrentTime] = useState(new Date());
  // const [targetDate, setTargetDate] = useState(new Date(new Date().getTime() + (secondsLeft)*1000));

  const [countDown, setCountDown] = useState(secondsLeft);

  
    useEffect(() => {
    
        const intervalId = setInterval(() => {
            if ((countDown > 0) && (!pause)) {
                setCountDown(countDown - 1);
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

  console.log(countDown);

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

  return (
    <div>
        <span className={style.time_left + " badge rounded-pill text-bg-success my-3"} >
            <span>{hours.toString().padStart(2, '0')}:</span>
            <span>{minutes.toString().padStart(2, '0')}:</span>
            <span>{seconds.toString().padStart(2, '0')}</span>
        </span>
    </div>
  );
}

export default CountdownTimer;