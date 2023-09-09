export const base = 'https://api.themoviedb.org/3';
export const media_base = 'https://image.tmdb.org/t/p';

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const query = new URLSearchParams(params);

	const response = await fetch(`${base}/${endpoint}?${query}`);

	return await response.json();
}

export function media(file_path: string, width: number) {
	return `${media_base}/w${width}${file_path}`;
}
