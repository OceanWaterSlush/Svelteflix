import * as api from '$lib/api';
import { TMDB_API_KEY } from '$env/static/private';
import type { MovieList } from '$lib/types.js';
import { views } from '$lib/views';

export async function load({ params, url, fetch }) {
	const view = views[params.view];
	const page = url.searchParams.get('page') ?? '1';

	const data = (await api.get(fetch, view.endpoint, { page, api_key: TMDB_API_KEY })) as MovieList;

	return {
		view: params.view,
		title: view.title,
		endpoint: view.endpoint,
		movies: data.results,
		next_page: data.page < data.total_pages ? data.page + 1 : null
	};
}
