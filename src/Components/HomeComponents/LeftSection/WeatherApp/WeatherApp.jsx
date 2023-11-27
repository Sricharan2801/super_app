import React, { useEffect, useState } from 'react'
import styles from "./WeatherApp.module.scss"
import axios from 'axios'

const WheatherApp = () => {

  const [weatherData, setWeatherData] = useState()

  // code to fetch current date from date object
  const time = new Date().toLocaleString("en-US",
    {
      timeZone: "Asia/Kolkata",
      timeStyle: "short"
    })

  // code to fetch current time
  const date = new Date().toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" }).replace(/\//g, '-');



  // Fetches Data from weather api
  useEffect(() => {
    const apiUrl = "https://api.weatherapi.com/v1/current.json";
    axios.get(apiUrl, {
      params: {
        key: "334d9d438fec4f759fb70050232711",
        q: "Hyderabad, India",
      }
    }).then(responce => setWeatherData(responce.data))
      .catch(error => console.log("SomeThing Went Wrong...", error))
  }, [])


  if (!weatherData) {
    // Data is still being fetched, or an error occurred
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.main}>

      {/* top contains date and time */}
      <div className={styles.top}>
        <p className={styles.date}>{date}</p>
        <p className={styles.time}>{time}</p>
      </div>

      {/* bottom contains entire weatherReport */}
      <div className={styles.bottom}>

        {/* contains cloud details */}
        <div id={styles.cloud} className={styles.wheatherReport}>

          <img id={styles.weatherImage} src={weatherData.current.condition.icon} alt="weatherIcon" />
          <p id={styles.weatherText}>{weatherData.current.condition.text}</p>

        </div>

        <div className={styles.lines}></div>

        {/* contains temperature and presuure details */}
        <div id={styles.temperature} className={styles.wheatherReport}>

          <p id={styles.currentTemperature}>{weatherData.current.feelslike_c}&deg;C</p>

          <div className={styles.pressureDetails}>

            <img id={styles.pressureImage} src="./src/Components/HomeComponents/LeftSection/WeatherApp/pressureGuage.png" alt="" />
            <p id={styles.pressure}>{weatherData.current.pressure_mb} mBar &nbsp;Pressure</p>

          </div>
        </div>

        <div className={styles.lines}></div>

        {/* contains humudity details */}
        <div id={styles.humidity} className={styles.wheatherReport}>

          <div className={styles.windDetails}>

            <img id={styles.windImage} src="./src/Components/HomeComponents/LeftSection/WeatherApp/windImage.png" alt="" />
            <p id={styles.wind}>{weatherData.current.wind_kph} Km/h Wind</p>

          </div>

          <div className={styles.humidityDetails}>

            <img id={styles.humidityImage} src="./src/Components/HomeComponents/LeftSection/WeatherApp/HumidityImage.png" alt="" />
            <p id={styles.humidity}>{weatherData.current.humidity} % Humidity</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default WheatherApp
