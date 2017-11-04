import React from 'react';
import PropTypes from 'prop-types';

import './MovieImage.css';

const propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

const defaultProps = {
  title: '',
  image: '',
};
const MovieImage = ({ title, image }) => {
  return(
    <span className="movie-card__image">
      <img src={image} alt={title} />
    </span>
  );
}

MovieImage.propTypes = propTypes;
MovieImage.defaultProps = defaultProps;

export default MovieImage;
