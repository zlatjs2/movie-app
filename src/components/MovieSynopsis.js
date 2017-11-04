import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  synopsis: PropTypes.string,
};

const defaultProps = {
  synopsis: '...',
};

const MovieSynopsis = ({ synopsis }) => <p className="movie-card__synopsis">{synopsis}</p>;

MovieSynopsis.propTypes = propTypes;
MovieSynopsis.defaultProps = defaultProps;

export default MovieSynopsis;
