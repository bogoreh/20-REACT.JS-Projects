const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}&s=${query}`);
  const data = await res.json();
  return data.Search || [];
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}&i=${id}`);
  const data = await res.json();
  return data;
};
