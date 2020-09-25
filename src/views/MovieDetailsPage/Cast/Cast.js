import React, { Component } from "react";

import Loader from "react-loader-spinner";
import moviesApi from "../../../services/moviesApi";

import s from "./Cast.module.css";

export default class Cast extends Component {
  static defaultProps = {
    imgUrl:
      "https://anotherjavaduke.files.wordpress.com/2018/08/avataaars-2.png",
  };

  state = {
    cast: [],
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchCast(this.props.match.params.movieId)
      .then((cast) => this.setState({ cast }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  render() {
    const { isLoader, cast, error } = this.state;
    const { imgUrl } = this.props;
    const baseUrlImg = "https://image.tmdb.org/t/p/w92";

    return (
      <>
        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={50} width={60} />
          </div>
        )}

        {cast && (
          <ul className={s.castList}>
            {cast.map(({ id, name, profile_path, character }) => (
              <li key={id} className={s.castItem}>
                <img src={`${baseUrlImg}${profile_path}`} alt="" />
                {!profile_path && <img src={imgUrl} alt={name} width="92" />}
                <p className={s.castName}>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        )}

        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </>
    );
  }
}
