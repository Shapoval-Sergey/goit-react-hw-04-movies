import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import MoviesPage from "./MoviesPage/MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import Cast from "./MovieDetailsPage/Cast/Cast";
import Reviews from "./MovieDetailsPage/Reviews/Reviews";

const App = () => (
  <>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
