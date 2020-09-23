import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  render() {
    const { isLoader, movie, error } = this.state;
    const baseUrlImg = "https://image.tmdb.org/t/p/w300";
    return (
      <>
        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={70} width={100} />
          </div>
        )}

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {this.state.movie && (
          <>
            <h1> {movie.title} </h1>
            <img src={`${baseUrlImg}${movie.poster_path}`} alt={movie.title} />
            <h2> {movie.release_date} </h2>
          </>
        )}
      </>
    );
  }
}
