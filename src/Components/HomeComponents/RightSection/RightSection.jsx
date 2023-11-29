import React, { useState, useEffect } from 'react';
import styles from "./RightSection.module.scss";
import getNewsDetails from '../../../API/News';
import FormattedDate from '../../../Utils/Date';
import FormattedTime from '../../../Utils/Time';


const RightSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newsDetails = async () => {
      try {
        const responce = await getNewsDetails()
        setData(responce.data.articles)
      } catch (error) {
        console.log("something went wrong..", error);
      }
    }

    newsDetails()
  }, [])



  
  
  const randomNumber = data.length>0 ? Math.floor(Math.random() * data.length) : 1;
  const articleDescription = data.length > 0 ? data[randomNumber].description : '';
  const articleImage = data.length > 0 ? data[randomNumber].urlToImage : '';
  const articleTitle = data.length > 0 ? data[randomNumber].title : '';

  
  return (
    <div id={styles.main}>
      <div className={styles.news}>
        <div className={styles.image}>
          <img src={articleImage} alt="" />
        </div>

        <div className={styles.transparentBlock}>
          <p id={styles.question}>{articleTitle}</p>
          <p id={styles.dateAndTime}>{FormattedDate()} | {FormattedTime()}</p>
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
