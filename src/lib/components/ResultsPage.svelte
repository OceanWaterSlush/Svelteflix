<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';
	import { onMount } from 'svelte';

	export let movies: MovieListResult[];
	export let next: string | null;

	let viewport: HTMLDivElement;
	let results: HTMLDivElement;

	let a = 0;
	let b = movies.length;

	let padding_top = 0;
	let padding_bottom = 0;

	let item_width: number;
	let item_height: number;

	let num_columns = 4;

	function handle_scroll() {
		console.log('scrolling');
	}

	function handle_resize() {
		const first = results.firstChild as HTMLAnchorElement;

		item_width = first.offsetWidth;
		item_height = first.offsetHeight;

		num_columns = 4;

		handle_scroll();
	}

	onMount(handle_resize);
</script>

<svelte:window on:resize={handle_resize} />

<div bind:this={viewport} class="viewport" on:scroll={handle_scroll}>
	<div bind:this={results} class="results">
		{#each movies.slice(a, b) as movie}
			<a href="/movies/{movie.id}">
				<img alt={movie.title} src={media(movie.poster_path, 500)} />
			</a>
		{/each}
	</div>
</div>

{#if next}
	<a href={next}>next page</a>
{/if}

<style>
	.viewport {
		height: 500px;

		overflow-y: auto;
	}

	.results {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		width: 100%;
	}

	a {
		width: 100%;
		height: auto;

		padding: 0.5rem;

		aspect-ratio: 2/3;
	}

	img {
		width: 100%;
	}
</style>
