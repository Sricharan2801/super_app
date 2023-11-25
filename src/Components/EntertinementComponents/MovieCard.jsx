import React from 'react'
import styles from "./MovieCard.module.css"

const movieCard = ({ color, genres, image, onCardClick }) => {

   

   return (

      <div className={styles.cardContainer} onClick={()=> onCardClick(genres)}>
         <div className={styles.card} style={{ backgroundColor: color }}>

            <p className={styles.genres}>{genres}</p>
            <img src={image} alt="" className={styles.image} />

         </div>
      </div>

   )
}

export default movieCard
