import axios from "axios";

const getNewsDetails = async()=>{
    try {
        const apiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=37f24c25d26c4e619ee8a0c89818bb91';
        const newsDetails = await axios.get(apiUrl)
        return newsDetails
    } catch (error) {

        console.log("Something went wrong..",error);
        
    }
}

export default getNewsDetails;