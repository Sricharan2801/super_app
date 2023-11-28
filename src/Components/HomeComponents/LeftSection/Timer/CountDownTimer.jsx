import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountDownTimer = ({ duration, isRunning, onComplete }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    console.log('Setting remaining time:', duration);
    setRemainingTime(duration);
  }, [duration]);

  const renderTime = ({ remainingTime }) => {
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    if (duration === 0) {
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    return (
      <div className="timer">
        <div style={{ color: 'white', fontFamily: 'Roboto', fontSize: '2rem' }}>
          {hours}:{minutes}:{seconds}
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
