import React from 'react'
import styles from "./LeftSection.module.scss"
import UserDetails from './UserDetails/UserDetails'

const LeftSection = () => {
  return (
    <div className={styles.main}>

      <UserDetails/>
      
    </div>
  )
}

export default LeftSection
