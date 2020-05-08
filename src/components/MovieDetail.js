import React, { Component } from 'react';
import Overdrive from 'react-overdrive';
import { URLMOVIE, POSTER_PATH, BACKDROP_PATH } from './Enums';
import { Poster, MovieWrapper, MovieInfo } from '../style/StyleEnums';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(URLMOVIE(this.props.match.params.id));
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{ movie.original_title }</h1>
            <h3>{ movie.release_date }</h3>
            <p>{ movie.overview }</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}
export default MovieDetail;
