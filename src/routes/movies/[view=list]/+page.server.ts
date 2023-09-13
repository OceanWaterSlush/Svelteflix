import * as api from '$lib/api';
import { TMDB_API_KEY } from '$env/static/private';
import type { MovieList } from '$lib/types.js';
import { views } from '$lib/views';

export async function load({ params, url, fetch }) {
	const view = views[params.view];

	const data = (await api.get(fetch, view.endpoint, { api_key: TMDB_API_KEY })) as MovieList;

	return {
		title: view.title,
		endpoint: view.endpoint,
		movies: data.results
	};
}
