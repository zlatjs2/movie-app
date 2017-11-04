import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  uploadDate: PropTypes.string,
};

const defaultProps = {
  uploadDate: '-',
};

const MovieUploaded = ({ uploadDate }) => {
  return (
    <div className="movie-card__uploade">{uploadDate}</div>
  )
}

MovieUploaded.propTypes = propTypes;
MovieUploaded.defaultProps = defaultProps;

export default MovieUploaded;
