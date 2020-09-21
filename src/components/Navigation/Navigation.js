import React from "react";
import { NavLink } from "react-router-dom";
// import routes from '../routes';
import "../../index.css";

const Navigation = () => (
  <ul className="list">
    <li className="item">
      <NavLink to="/" className="link" activeClassName="activeLink" exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" className="link" activeClassName="activeLink">
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
