import React, { useState, useEffect } from 'react'
import styles from "./UserDetails.module.scss"
import PreviousSelection from './PreviousSelection'

const UserDetails = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [userName, setUserName] = useState()

  //  getting name,useName,email from local Storage and setting to state variable
  //    for further use
  useEffect(() => {
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
    setUserName(localStorage.getItem("userName"))
  }, [name])


// getting previous selected genres from local storage and passing to an array
  let userPreferences = localStorage.getItem("userPreferences")

  const PreviousUserSelections = userPreferences.split(",")

  return (
    <div className={styles.main}>

      <div className={styles.leftSection}>

        <img src="./src/Assets/userProfile.png" alt="" />


      </div>

      <div className={styles.rightSection}>

        <div className={styles.userInfoContainer}>
          <p id={styles.name} className={styles.userInfo}>{name}</p>
          <p id={styles.email} className={styles.userInfo}>{email}</p>
          <p id={styles.userName} className={styles.userInfo}>{userName}</p>
        </div>

        <div className={styles.userSelections}>
          {
            PreviousUserSelections.map((item, index) => {
              return <PreviousSelection key={index} genre={item} />
            })
          }

        </div>

      </div>

    </div>
  )
}

export default UserDetails
