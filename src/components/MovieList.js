import React from 'react';
import MovieCard from './MovieCard';

import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) =>
         <MovieCard
            title={movie.title_english}
            image={movie.medium_cover_image}
            synopsis={movie.synopsis}
            genres={movie.genres}
            uploadDate={movie.date_uploaded}
            key={movie.id}
          />
      )}
    </ul>
  )
}

export default MovieList;
