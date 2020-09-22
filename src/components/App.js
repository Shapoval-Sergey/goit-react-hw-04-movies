import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../views/HomePage/HomePage";
import MoviesPage from "../views/MoviesPage/MoviesPage";
import MovieDetailsPage from "../views/MovieDetailsPage/MovieDetailsPage";
import Cast from "../views/MovieDetailsPage/Cast/Cast";
import Reviews from "../views/MovieDetailsPage/Reviews/Reviews";
import Appbar from "./Appbar/Appbar";

const App = () => (
  <>
    <Appbar />
    <hr />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
