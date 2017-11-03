import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const propTypes = {
  title: PropTypes.string,
  coverImg: PropTypes.string,
};

const defaultProps = {
  title: 'no-title',
  coverImg: 'no-image',
};

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, idx) =>
         <MovieCard
            title={movie.title}
            img={movie.coverImg}
            key={idx}
          />
      )}
    </ul>
  )
}

MovieList.propTypes = propTypes;
MovieList.defaultProps = defaultProps;

export default MovieList;
