
import axios from "axios";

const getMovieDetails = async (genreIdInput) => {
  const apiKey = 'b77bf51079ecaaaf9bfc229c664c891a';
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreIdInput}`;
  
  try {
    const movieDetails = await axios.get(apiUrl);
    return movieDetails.data.results.slice(1, 5); // Return only the first 4 movies
  } catch (error) {
    console.log("error at movies", error);
  }
}

export default getMovieDetails;
