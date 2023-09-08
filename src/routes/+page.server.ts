import * as api from '$lib/api';
import { TMDB_API_KEY } from '$env/static/private';
import type { MovieDetails, MovieList } from '$lib/types';

export async function load({ fetch }) {
	const trending = (await api.get(fetch, 'trending/movie/day', {
		api_key: TMDB_API_KEY
	})) as MovieList;

	const featured = (await api.get(fetch, `movie/${trending.results[0].id}`, {
		append_to_response: 'images',
		api_key: TMDB_API_KEY
	})) as MovieDetails;

	return {
		trending,
		featured
	};
}
