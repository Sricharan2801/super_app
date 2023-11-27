import React from 'react'
import styles from "./LeftSection.module.scss"
import UserDetails from './UserDetails/UserDetails'
import WheatherApp from './WeatherApp/WeatherApp'

const LeftSection = () => {
  return (
    <div className={styles.main}>

      <UserDetails/>
      <WheatherApp/>
      
    </div>
  )
}

export default LeftSection
