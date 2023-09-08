import * as api from '$lib/api';
import type { MovieDetails, MovieList } from '$lib/types';

export async function load({ fetch }) {
	const trending = (await api.get(fetch, 'trending/movie/day')) as MovieList;

	const featured = (await api.get(fetch, `movie/${trending.results[0].id}`)) as MovieDetails;

	return {
		trending,
		featured
	};
}
