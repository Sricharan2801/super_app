import React from 'react'
import styles from "./userChoice.module.scss"

const userChoice = ({genres,onCrossClick}) => {

  


    return (
            <div className={styles.selection}>
                <p id={styles.userSelection}>{genres}</p>
                <button id={styles.crossSymbol} onClick={()=>onCrossClick(genres)}>X</button>
            </div>
        
    )
}

export default userChoice
