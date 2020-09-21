import React, { Component } from "react";

import moviesApi from "../../services/moviesApi";
import Searchbox from "../../components/Searchbox/Searchbox";

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {}

  componentDidUpdate() {}

  fetchMovies = (query) => {
    moviesApi.fetchMovieWithQuery(query).then((movies) => console.log(movies));
  };

  render() {
    return <Searchbox />;
  }
}
