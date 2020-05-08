import React from 'react';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';
import { Poster } from '../style/StyleEnums';
import { POSTER_PATH } from './Enums';


const Movie = ({ movie }) => {
  if (!movie) return null;
  return (
    <Link to={`/${movie.id}`}>
      <Overdrive id={movie.id}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </Overdrive>
    </Link>
  );
};

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};
