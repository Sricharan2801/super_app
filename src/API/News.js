import axios from "axios";

const getNewsDetails = async()=>{
    try {
        const apiUrl = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=5397b6be1b436d97488fa3141ef42dca';
        const newsDetails = await axios.get(apiUrl)
        return newsDetails
    } catch (error) {

        console.log("Something went wrong..",error);
        
    }
}

export default getNewsDetails;