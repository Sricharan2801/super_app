import axios from "axios";

const getWeatherDetails = async() => {
    try {
        const apiUrl = "https://api.weatherapi.com/v1/current.json";
        const weatherDetails = await axios.get(apiUrl, {
            params: {
                key: "334d9d438fec4f759fb70050232711",
                q: "Hyderabad, India"
            }
        })
        return weatherDetails

    } catch (error) {
         console.log(error);
    }
   
}

export default getWeatherDetails