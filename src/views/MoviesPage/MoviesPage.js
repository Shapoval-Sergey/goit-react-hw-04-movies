import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

import moviesApi from "../../services/moviesApi";
import Searchbox from "../../components/Searchbox/Searchbox";

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi.fetchMovieWithQuery("cat").then((movies) => {
      this.setState({ movies });
      console.log(this.state.movies);
    });
  }

  componentDidUpdate() {}

  render() {
    const { movies } = this.state;
    const { match } = this.props;

    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />

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
