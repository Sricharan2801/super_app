import React from 'react'
import styles from './PreviousSelection.module.scss'

const PreviousSelection = ({genre}) => {
  return (
   <div id={styles.genreContainer}>
    <p id={styles.text}>{genre}</p>
   </div>
  )
}

export default PreviousSelection
