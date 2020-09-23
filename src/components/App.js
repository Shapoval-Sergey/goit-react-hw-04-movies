import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../views/HomePage/HomePage";
import MoviesPage from "../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";
import Cast from "../views/MovieDetailsPage/Cast/Cast";
import Reviews from "../views/MovieDetailsPage/Reviews/Reviews";
import Appbar from "./Appbar/Appbar";
import routes from "../routes";

const App = () => (
  <>
    <Appbar />
    <hr />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.cast} component={Cast} />
        <Route path={routes.reviews} component={Reviews} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </>
);

export default App;
