// Browse.jsx
import React from 'react';
import styles from './Browse.module.scss';
import { useNavigate } from 'react-router-dom';
import MovieCards from './MovieCards';
import profile from "../../Assets/Images/profile.png"

const Browse = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/home');
  };

  const userPreferences = localStorage.getItem('userPreferences');
  const userPreviosSelecions = userPreferences.split(',');

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p className={styles.appName}>Super app</p>
        <img
          className={styles.profile}
          src={profile}
          alt="Profile"
          onClick={() => clickHandler()}
        />
      </div>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Entertainment according to your choice</p>
      </div>

      {userPreviosSelecions.map((item, index) => (
        <MovieCards key={index} genre={item}/>
      ))}
    </div>
  );
};

export default Browse;
