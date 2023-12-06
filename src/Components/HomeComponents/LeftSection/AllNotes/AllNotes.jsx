import React,{useState} from 'react'
import styles from "./AllNotes.module.scss"

const AllNotes = () => {

  const [text,setText] = useState("")

  const changeHandler = (e)=>{
    setText(e.target.value)
  }
  
  localStorage.setItem("textInput",text)

  

  return (
    <div className={styles.main}>
      <p className={styles.heading}>All Notes</p>

      <textarea className={styles.textArea} 
      value={text} onChange={(e)=> changeHandler(e)}
      ></textarea> 
    </div>
  )
}

export default AllNotes
