import React, { Component } from "react";
import moviesApi from "../../services/moviesApi";

export default class MovieDetailsPage extends Component {
  state = { movies: null };

  componentDidMount() {
    moviesApi.then(console.log);
  }
  render() {
    return <div>...</div>;
  }
}
