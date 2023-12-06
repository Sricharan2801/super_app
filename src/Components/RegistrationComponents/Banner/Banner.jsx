import React from 'react'
import styles from "./Banner.module.css"

const Banner = () => {
  return (
    <div>
      <img id={styles.image} src="src/Components/RegistrationComponents/Banner/Image.png"
 alt=""  />
      <p id={styles.caption}>Discover new things on Superapp</p>
    </div>
  )
}

export default Banner
