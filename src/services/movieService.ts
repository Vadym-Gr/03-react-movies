import axios from "axios";
import type { Movie, MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const token = import.meta.env.VITE_API_KEY;

interface FetchMoviesParams {
  query: string;
}

export const fetchMovies = async ({ query }: FetchMoviesParams): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(BASE_URL, {
    params: {
      query,
      language: "en-US",
      page: 1,
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.results;
};