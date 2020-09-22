import React, { Component } from "react";
import Loader from "react-loader-spinner";

import moviesApi from "../../services/moviesApi";
import MoviesList from "../../components/MoviesList/MoviesList";

export default class HomePage extends Component {
  state = {
    movies: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchHomePageMovies()
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  render() {
    const { isLoader, movies } = this.state;

    return (
      <>
        <h2>Popular Films</h2>

        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={70} width={100} />
          </div>
        )}

        {movies && <MoviesList movies={movies} {...this.props} />}

        <ul></ul>
      </>
    );
  }
}
