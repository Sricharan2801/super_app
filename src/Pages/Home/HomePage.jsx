import React from 'react'
import styles from "./HomePage.module.scss"
import LeftSection from '../../Components/HomeComponents/LeftSection/LeftSection'
import RightSection from '../../Components/HomeComponents/RightSection/RightSection'


const HomePage = () => {
  return (
    <div className={styles.main}>
        <LeftSection/>
        <RightSection/>
      
    </div>
  )
}

export default HomePage
