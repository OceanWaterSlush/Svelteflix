import type { MovieList } from '$lib/types.js';

const base = 'https://api.movies.tastejs.com';

export async function load({ fetch }) {
	const response = await fetch(`${base}/trending/movies/day`);

	const trending = (await response.json()) as MovieList;

	return {
		trending
	};
}
