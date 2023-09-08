import type { MovieList } from '$lib/types.js';
import { TMDB_API_KEY } from '$env/static/private';

const base = 'https://api.themoviedb.org/3';

export async function load({ fetch }) {
	const response = await fetch(`${base}/trending/movie/day?api_key=${TMDB_API_KEY}`);

	const trending = (await response.json()) as MovieList;

	return {
		trending
	};
}
