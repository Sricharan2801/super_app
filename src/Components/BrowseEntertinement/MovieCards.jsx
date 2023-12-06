// MovieCards.jsx
import React, { useState, useEffect } from 'react';
import styles from './MovieCards.module.scss';
import getMovieDetails from '../../API/Movies';

const MovieCards = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genreId = getGenreIdWithName(genre);
        const movieDetails = await getMovieDetails(genreId);
        setMovies(movieDetails);
      } catch (error) {
        console.log("error while fetching movies", error);
      }
    };

    fetchMovies();
  }, [genre]);

  const getGenreIdWithName = (name) => {

    const genreIdNumber = {
      action: 28,
      drama: 18,
      romance: 10749,
      horror: 27,
      western: 37,
      thriller: 53,
      fantasy: 14,
      music: 10402,
      fiction: 878,
    };

    return genreIdNumber[name.toLowerCase()] || 0;
  };



  return (
    <div className={styles.main}>
      <p className={styles.category}>{genre}</p>
      <div className={styles.relatedMovies}>
        {movies.map((movie, index) => (
          <img
            key={index}
            className={styles.moviePoster}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />

        ))}
      </div>

    </div>

  );
};

export default MovieCards;
