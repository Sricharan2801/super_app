import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountDownTimer = ({ duration, isRunning, onComplete }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    setRemainingTime(duration);
  }, [duration]);

  const renderTime = ({ remainingTime }) => {
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    const doubleDigitSeconds = String(seconds).padStart(2, "0");
    const doubleDigitMinutes = String(minutes).padStart(2, "0");
    const doubleDigitHours = String(hours).padStart(2, "0")

    return (
      <div className="timer">
        <div style={{ color: 'white', fontFamily: 'Roboto', fontSize: '2rem' }}>
          {doubleDigitHours}:{doubleDigitMinutes}:{doubleDigitSeconds}
        </div>
      </div>
    );
  };

  return (
    <div>
      <CountdownCircleTimer
        key={remainingTime}
        isPlaying={isRunning}
        duration={duration}
        colors={['rgba(255, 106, 106, 1)']}
        onComplete={() => {
          console.log('Countdown completed. Calling onComplete and resetting remaining time.');
          onComplete();
          setRemainingTime(duration); // Reset remaining time after completion
        }}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountDownTimer;
