import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

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
    const { match } = this.props;
    const baseUrlImg = "https://image.tmdb.org/t/p/w300";
    return (
      <>
        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={70} width={100} />
          </div>
        )}

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {movie && (
          <>
            <h1> {movie.title} </h1>
            <img src={`${baseUrlImg}${movie.poster_path}`} alt={movie.title} />
            <h2> {movie.release_date} </h2>
            <Link
              to={{
                pathname: `${match.url}/${movie.id}`,
              }}
            >
              Reviews
            </Link>
            <Route path={`${match.path}/${movie.id}`} component={Reviews} />
            <Link
              to={{
                pathname: `${match.url}/${movie.id}`,
              }}
            >
              Cast
            </Link>
            <Route path={`${match.path}/${movie.id}`} component={Cast} />
          </>
        )}
      </>
    );
  }
}
