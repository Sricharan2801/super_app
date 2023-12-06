// Banner.jsx
import React from 'react';
import styles from './Banner.module.css';
import Image from '../../../Assets/Images/Image.png';

const Banner = () => {
  return (
    <div>
      <img id={styles.image} src={Image} alt="" />
      <p id={styles.caption}>Discover new things on Superapp</p>
    </div>
  );
}

export default Banner;
