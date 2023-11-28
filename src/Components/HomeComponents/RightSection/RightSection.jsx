import React, { useState, useEffect } from 'react';
import styles from "./RightSection.module.scss";
import axios from 'axios';

const RightSection = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=37f24c25d26c4e619ee8a0c89818bb91')
    .then(res => setData(res.data.articles))
    .catch(error=> console.log("error"))
  };
  
  useEffect(() => {
    fetchData();
   
  }, []);


  const randomNumber = Math.floor(Math.random() * data.length ) 
 
  const articleDescription = data.length > 0 ? data[randomNumber].description : '';
  const articleImage = data.length >0 ? data[randomNumber].urlToImage : '';
  const articleTitle = data.length>0 ? data[randomNumber].title : '';
  const publishedDate = data.length>0 ? data[randomNumber].publishedAt : "";

  return (
    <div id={styles.main}>
      <div className={styles.news}>
        <div className={styles.image}>
          <img src={articleImage} alt="" />
        </div>

        <div className={styles.transparentBlock}>
          <p id={styles.question}>{articleTitle}</p>
          <p id={styles.dateAndTime}>{publishedDate}</p>
        </div>

        <div className={styles.contentBox}>
          <p className={styles.content}>
            {articleDescription}
          </p>
        </div>
      </div>
      <button className={styles.browseButton}>Browse</button>
    </div>
  );
};

export default RightSection;
