import React from 'react'
import styles from "./RegistrationPage.module.scss"
import Banner from '../../Components/RegistrationComponents/Banner/Banner'

import SignUpForm from '../../Components/RegistrationComponents/SignUpForm/SignUpForm'

const RegistrationPage = () => {
  return (
    <>
     <div id={styles.registrationPage}>

       <Banner/>
       <SignUpForm/>

     </div>
    </>
  )
}

export default RegistrationPage
