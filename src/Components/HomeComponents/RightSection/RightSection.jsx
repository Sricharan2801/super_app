import React from 'react'
import styles from "./RightSection.module.scss"


const RightSection = () => {
  return (
    <div id={styles.main}>

      <div className={styles.news}>

        <div className={styles.image}>
          <img src="./src/Components/HomeComponents/RightSection/mountEverest.png" alt="" />
        </div>

        <div className={styles.transparentBlock}>

          <p id={styles.question}>Want to climb Mount Everest?</p>
          <p id={styles.dateAndTime}>2-20-2023|07:35 PM</p>

        </div>


        <div className={styles.contentBox}>
          <p className={styles.content}>In the years since human beings first reached the summit of Mount Everest
            in 1953, climbing the world’s highest mountain has changed dramatically.
            Today, hundreds of mountaineers manage the feat each year thanks to
            improvements in knowledge, technology, and the significant infrastructure
            provided by commercially guided expeditions that provide a veritable
            highway up the mountain for those willing to accept both the......
          </p>
        </div>
      </div>

    </div>
  )
}

export default RightSection
