import React, { Component } from 'react';
import { MovieGrid } from '../style/StyleEnums';
import { URLMOVIES } from './Enums';
import Movie from './Movie';
import Error from './Error';

class MovieList extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      movies: [],
      error: true,
    };

    async componentDidMount() {
      try {
        const res = await fetch(URLMOVIES);
        const movies = await res.json();
        this.setState({
          movies: movies.results,
        });
      } catch (e) {
        this.setState({
          error: false,
        });
      }
    }

    render() {
      const { movies, error } = this.state;
      return (
        <MovieGrid>
          {error ? movies.map((movie) => <Movie key={movie.id} movie={movie} />) : <Error />}
        </MovieGrid>
      );
    }
}

export default MovieList;
