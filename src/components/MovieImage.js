import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  coverImg: PropTypes.string,
};

const defaultProps = {
  title: 'no-title',
  coverImg: 'no-image',
};

const MovieImage = ({ title, coverImg }) => <img src={coverImg} alt={title} />


MovieImage.propTypes = propTypes;
MovieImage.defaultProps = defaultProps;

export default MovieImage;
