export const base = 'https://api.themoviedb.org/3';

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const query = new URLSearchParams(params);

	const response = await fetch(`${base}/${endpoint}?${query}`);

	return await response.json();
}
