import React from "react";

import s from "./DescMovie.module.css";

const DescMovie = ({ movie }) => {
  const {
    title,
    poster_path,
    genres,
    vote_average,
    overview,
    release_date,
  } = movie;

  const baseUrlImg = "https://image.tmdb.org/t/p/w300";

  return (
    <div className={s.descMovie}>
      <img className={s.img} src={`${baseUrlImg}${poster_path}`} alt={title} />
      <div className={s.wrapperDetails}>
        <h2 className={(s.detailsTitle, s.mainTitle)}>
          {title} ({release_date})
        </h2>
        <p>User Score: {vote_average * 10}%</p>

        <h2 className={s.detailsTitle}>Overview</h2>
        <p>{overview}</p>
        <h2 className={s.detailsTitle}>Genres</h2>

        {genres && (
          <ul className={s.genresMovie}>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DescMovie;
