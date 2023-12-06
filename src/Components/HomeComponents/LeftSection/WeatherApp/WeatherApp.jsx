import React, { useEffect, useState } from 'react'
import styles from "./WeatherApp.module.scss"
import FormattedDate from '../../../../Utils/Date'
import FormattedTime from '../../../../Utils/Time'
import getWeatherDetails from '../../../../API/Weather'
import pressureGuage from "../../../../Assets/Images/pressureGuage.png"
import windImage from "../../../../Assets/Images/windImage.png"
import HumidityImage from "../../../../Assets/Images/HumidityImage.png"

const WheatherApp = () => {

  const [weatherData, setWeatherData] = useState()
  
  useEffect(() => {

    const fetchWeatherDetails = async () => {
      try {
        const responce = await getWeatherDetails()
        setWeatherData(responce.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchWeatherDetails();
  }, [])

  if (!weatherData) {
    // Data is still being fetched, or an error occurred
    return <div>Loading...</div>;
  }



  return (
    <div className={styles.main}>

      {/* top contains date and time */}
      <div className={styles.top}>
        <p className={styles.date}>{FormattedDate()}</p>
        <p className={styles.time}>{FormattedTime()}</p>
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

            <img id={styles.pressureImage} src={pressureGuage} alt="pressureGuageImage" />
            <p id={styles.pressure}>{weatherData.current.pressure_mb} mBar &nbsp;Pressure</p>

          </div>
        </div>

        <div className={styles.lines}></div>

        {/* contains humudity details */}
        <div id={styles.humidity} className={styles.wheatherReport}>

          <div className={styles.windDetails}>

            <img id={styles.windImage} src={windImage} alt="" />
            <p id={styles.wind}>{weatherData.current.wind_kph} Km/h Wind</p>

          </div>

          <div className={styles.humidityDetails}>

            <img id={styles.humidityImage} src={HumidityImage} alt="" />
            <p id={styles.humidity}>{weatherData.current.humidity} % Humidity</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default WheatherApp
