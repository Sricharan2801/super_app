import React, { useState } from 'react'
import styles from "./SignUpForm.module.scss"
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "", userName: "", email: "", mobileNumber: "", checkBox: false
  })

  const [nameError, setNameError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [checkBoxError, setCheckBoxError] = useState(false)




  const changeHandler = (e) => {

    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value
      }
    )


    if (formData.name.trim().length > 0) {
      setNameError(false);
    }

    if (formData.userName.trim().length > 0) {
      setUserNameError(false)
    }

    if (formData.email.trim().length > 0) {
      setEmailError(false)
    }

    if (formData.mobileNumber.trim().length > 0) {
      setMobileNumberError(false)
    }

  
    if (e.target.name === "isCheckboxChecked") {
      setCheckBoxError(false)
    }

  }

  const submitHanlder = (e) => {
    e.preventDefault();

    let navigateToEntertiment = true;

    if (formData.name.trim().length <= 0) {
      setNameError(true);
      navigateToEntertiment = false;
    }

    if (formData.userName.trim().length <= 0) {
      setUserNameError(true);
      navigateToEntertiment = false;
    }

    if (formData.email.trim().length <= 0) {
      setEmailError(true);
      navigateToEntertiment = false;
    }

    if (formData.mobileNumber.trim().length <= 10) {
      setMobileNumberError(true);
      navigateToEntertiment = false;
    }

    if (!formData.isCheckboxChecked) {
      setCheckBoxError(true);
      navigateToEntertiment = false;
    }

    if (navigateToEntertiment) {
      
      navigate("/entertinement")
      localStorage.setItem("name",formData.name)
      localStorage.setItem("userName",formData.userName)
      localStorage.setItem("email",formData.email)
      localStorage.setItem("mobileNumber",formData.mobileNumber)
    }

  }


  return (
    <div className={styles.main}>

      <div id={styles.registrationPageContents}>

        <div id={styles.registrationPageTitle}>
          <p id={styles.appName}>Super app</p>
          <p id={styles.createAccountMessage}>Create your new account</p>
        </div>

        <div id={styles.registartionForm}>

          <form action="" onSubmit={(e) => submitHanlder(e)} >
            <input className={styles.formFields}
              type="text"
              placeholder='Name'
              name='name'
              onChange={(e) => changeHandler(e)}
            />
            {
              nameError ? <p className={styles.warning}>Field is Required</p> : <></>
            }

            <input className={styles.formFields}
              type="text"
              placeholder='UserName'
              name='userName'
              onChange={(e) => changeHandler(e)} />
            {
              userNameError ? <p className={styles.warning}>Field is Required</p> : <></>
            }

            <input className={styles.formFields}
              type="email"
              placeholder='Email'
              name='email'
              onChange={(e) => changeHandler(e)} />
            {
              emailError ? <p className={styles.warning}>Field is Required</p> : <></>
            }

            <input id={styles.mobileNumber} className={styles.formFields}
               type="number"
               inputMode='numeric'
               pattern='[0-9]' 
              placeholder='Mobile'
              name='mobileNumber'
              onChange={(e) => changeHandler(e)} />
            {
              mobileNumberError ? <p id={styles.mobileNumberWarning} className={styles.warning}>Enter Proper Mobile Number</p> : <></>
            }

            <div id={styles.checkBoxContainer}>
              <input id='checkBox' type="checkbox" name='isCheckboxChecked'
                onChange={(e) => changeHandler(e)} />
              <p id={styles.checkBoxMessage}>Share my registration data with Superapp</p>
            </div>
            {
              checkBoxError ?
                <p id={styles.checkBoxWarning}
                  className={styles.warning}>Check this box if you want to proceed</p> : <></>
            }

            <button id={styles.signUpButton}>SIGN UP</button>
          </form>

        </div>

        <div id={styles.userInstructions}>
          <p className={styles.userInstructions}>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
          <p className={styles.userInstructions}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
        </div>

      </div>

    </div>
  )
}

export default SignUpForm
