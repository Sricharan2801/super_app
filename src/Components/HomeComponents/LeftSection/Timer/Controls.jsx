import React from 'react'
import styles from "./Controls.module.scss"


const Controls = ({onIncrement,value,onDecrement}) => {
    return (
        <div className={styles.timerControls}>
       
            <div className={styles.arrow} onClick={onIncrement}>
              
            </div>

            <div className={styles.value}>{value}</div>

            <div className={styles.arrow} onClick={onDecrement}>
             
            </div>

        </div>
    )
}

export default Controls
