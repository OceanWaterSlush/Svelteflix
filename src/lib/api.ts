import { TMDB_API_KEY } from '$env/static/private';

const apiKeyQueryParameter = `?api_key=${TMDB_API_KEY}`;

export const base = 'https://api.themoviedb.org/3';

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const response = await fetch(`${base}/${endpoint}${apiKeyQueryParameter}`);

	return await response.json();
}
