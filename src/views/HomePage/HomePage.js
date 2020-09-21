import React from "react";
import { Link } from "react-router-dom";

import moviesApi from "../../services/moviesApi";

const HomePage = () => (
  <ul>
    {moviesApi.fetchHomePageMovies().then((arr) => {
      arr.map((name) => (
        <li>
          <Link>{name}</Link>
        </li>
      ));
    })}
  </ul>
);

export default HomePage;
