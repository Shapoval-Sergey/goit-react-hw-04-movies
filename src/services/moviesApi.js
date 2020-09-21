const apiKey = "a874a20001c1a2b686b34f1eba843c8d";
const baseURL = "https://api.themoviedb.org/3/";

const fetchMovieDetails = (movie_id) => {
  return fetch(`${baseURL}movie/${movie_id}?api_key=${apiKey}`).then((res) =>
    res.json()
  );
};

const fetchMovieWithQuery = (searchQuery) => {
  return fetch(`${baseURL}search/movie?api_key=${apiKey}&query=${searchQuery}`)
    .then((res) => res.json())
    .then((entries) => entries.map((entry) => entry.movie));
};

const fetchHomePageMovies = () => {
  return fetch(`${baseURL}trending/all/day?api_key=${apiKey}`)
    .then((res) => res.json())
    .then(({ results }) =>
      results.map((result) => result.title || result.name)
    );
};

export default { fetchMovieDetails, fetchMovieWithQuery, fetchHomePageMovies };
