import React, { useState } from 'react'
import styles from "./Timer.module.scss"
import CountDownTimer from './CountDownTimer';
import Controls from './Controls';
import countDown from "../../../../Assets/countDown.wav"


const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);

        new Audio(countDown).play()
    };

    const handleComplete = () => {
        setIsRunning(false)
        new Audio("./src/Assets/countDown.wav").play()
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    };

    const increment = (unit) => {
        switch (unit) {
            case "sec":
                setSeconds(seconds + 1)
                break;
            case "min":
                setMinutes(minutes + 1)
                break;
            case "hour":
                setHours(hours + 1)
                break;

            default:
                break;
        }
    }

    const decrement = (unit) => {
        switch (unit) {
            case "sec":
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                break;
            case "min":
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                } else if (hours > 0) {
                    setHours(hours - 1);
                    setMinutes(59);
                }
                break;
            case "hour":
                if (hours > 0) {
                    setHours(hours - 1);
                }
                break;
            default:
                break;
        }
    };


   const doubleDigitSeconds = String(seconds).padStart(2,"0");
   const doubleDigitMinutes = String(minutes).padStart(2,"0");
   const doubleDigitHours = String(hours).padStart(2,"0")

    return (
        <div className={styles.main}>

            <div className={styles.countDownTimer}>
                <CountDownTimer duration={totalSeconds} isRunning={isRunning} onComplete={handleComplete} />
            </div>



            <div className={styles.settingCountdown}>

                <div className={styles.controls}>
                    
                    <div className={styles.setTime}>
                        <p className={styles.units}>Hours</p>
                        <Controls value={doubleDigitHours} onIncrement={() => increment("hour")} onDecrement={() => decrement("hour")} />
                    </div>

                    <p className={styles.seperator}>:</p>

                    <div className={styles.setTime}>
                        <p className={styles.units}>Minutes</p>
                        <Controls value={doubleDigitMinutes} onIncrement={() => increment("min")} onDecrement={() => decrement("min")} />
                    </div>

                    <p className={styles.seperator}>:</p>

                    <div className={styles.setTime}>
                        <p className={styles.units}>Seconds</p>
                        <Controls value={doubleDigitSeconds} onIncrement={() => increment("sec")} onDecrement={() => decrement("sec")} />
                    </div>

                </div>

                {
                    isRunning ?
                        <button className={styles.btn} onClick={() => handleStop()}>STOP</button> :
                        <button className={styles.btn} onClick={() => handleStart()}>START</button>
                }

            </div>


        </div>
    )
}

export default Timer
