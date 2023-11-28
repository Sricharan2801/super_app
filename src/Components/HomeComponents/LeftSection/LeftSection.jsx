import React from 'react'
import styles from "./LeftSection.module.scss"
import UserDetails from './UserDetails/UserDetails'
import WheatherApp from './WeatherApp/WeatherApp'
import AllNotes from './AllNotes/AllNotes'
import Timer from './Timer/Timer'

const LeftSection = () => {
  return (
    <div className={styles.main}>


      <div className={styles.top}>

        <div className={styles.topLeft}>
          <UserDetails />
          <WheatherApp />
        </div>

        <div className={styles.topRight}>
           <AllNotes/>
        </div>
      </div>
      <div className={styles.bottom}>
      <Timer/>
      </div>
     
    </div>
  )
}

export default LeftSection
