import React, { Component, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";

import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import routes from "../../routes";
import DescMovie from "../../components/DescMovie/DescMovie";

import s from "./MovieDetailsPage.module.css";

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
            <DescMovie movie={movie} />
            <hr />
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={{
                pathname: `${match.url}${routes.Reviews}`,
              }}
            >
              Reviews
            </NavLink>

            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={{
                pathname: `${match.url}${routes.Cast}`,
              }}
            >
              Cast
            </NavLink>

            <Suspense fallback={<div>Loading...</div>}>
              <Route
                path={`${match.path}${routes.Reviews}`}
                component={Reviews}
              />
              <Route path={`${match.path}${routes.Cast}`} component={Cast} />
            </Suspense>
          </>
        )}
      </>
    );
  }
}
