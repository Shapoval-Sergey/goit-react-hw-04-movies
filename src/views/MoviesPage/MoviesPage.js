import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

import moviesApi from "../../services/moviesApi";
import Searchbox from "../../components/Searchbox/Searchbox";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    moviesApi.fetchMovieWithQuery("cat").then((movies) => {
      this.setState({ movies })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ isLoader: false }));
    });
  }

  componentDidUpdate() {}

  render() {
    const { movies, isLoader, error } = this.state;
    const { match } = this.props;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={70} width={100} />
          </div>
        )}

        {movies.length > 0 && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
