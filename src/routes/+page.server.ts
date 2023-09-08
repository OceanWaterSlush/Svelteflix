import type { MovieDetails, MovieList } from '$lib/types.js';
import { TMDB_API_KEY } from '$env/static/private';

const base = 'https://api.themoviedb.org/3';
const apiKeyQueryParameter = `?api_key=${TMDB_API_KEY}`;

export async function load({ fetch }) {
	const trendingMoviesResponse = await fetch(`${base}/trending/movie/day${apiKeyQueryParameter}`);
	const trendingMovies = (await trendingMoviesResponse.json()) as MovieList;

	const featuredMovie = trendingMovies.results[0];

	const featuredMovieDataResponse = await fetch(
		`${base}/movie/${featuredMovie.id}${apiKeyQueryParameter}`
	);
	const featuredMovieData = (await featuredMovieDataResponse.json()) as MovieDetails;

	return {
		trendingMovies,
		featuredMovieData
	};
}
