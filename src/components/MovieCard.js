import React from 'react';
import PropTypes from 'prop-types';

import MovieImage from './MovieImage';

const propTypes = {
  title: PropTypes.string,
  coverImg: PropTypes.string,
};

const defaultProps = {
  title: 'no-title',
  coverImg: 'no-image',
};

const MovieCard = ({ title, coverImg }) => {
  return (
    <li>
      <MovieImage
        coverImg={coverImg}
        title={title}
      />
      <h3>{title}</h3>
      <p>synopsis</p>
      <div>date_uploaded</div>
      <div>
        genres
      </div>
    </li>
  );
}


MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;

export default MovieCard;
