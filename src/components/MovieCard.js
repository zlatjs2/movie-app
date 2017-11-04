import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.css';

import MovieImage from './MovieImage';
import MovieSynopsis from './MovieSynopsis';
import MovieGenres from './MovieGenres';
import MovieUploadDate from './MovieUploadDate';

const propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  synopsis: PropTypes.string,
  genres: PropTypes.array,
  uploadDate: PropTypes.string,
};

const defaultProps = {
  title: '',
  image: '',
  synopsis: '',
  genres: () => console.error('no data..'),
  uploadDate: '-',
};

const MovieCard = ({ title, image, synopsis, genres, uploadDate }) => {
  console.log(uploadDate);
  return (
    <li className="movie-card">
      <MovieImage
        image={image}
        title={title}
      />
      <h3 className="movie-card__title">{title}</h3>
      <MovieSynopsis synopsis={synopsis} />
      <MovieUploadDate uploadDate={uploadDate} />
      <div className="movie-card__genres">
        {genres.map((genre, idx) => <MovieGenres genre={genre} key={idx} /> )}
      </div>
    </li>
  );
}

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

export default MovieCard;
