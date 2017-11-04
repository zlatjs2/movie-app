import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  genre: PropTypes.string,
};

const defaultProps = {
  genre: '',
};

const MovieGenres = ({ genre }) => {
  return(
    <span> {genre} </span>
  )
}

MovieGenres.propTypes = propTypes;
MovieGenres.defaultProps = defaultProps;

export default MovieGenres;
