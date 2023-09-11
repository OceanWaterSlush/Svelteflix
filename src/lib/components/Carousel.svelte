<script lang="ts">
	import type { MovieListResult } from '$lib/types';
	import { media } from '$lib/api';

	export let movies: MovieListResult[];
</script>

<div class="carousel">
	{#each movies as movie}
		<a href="/movie/{movie.id}">
			<img alt={movie.title} src={media(movie.poster_path, 500)} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		--padding: max(var(--side), calc(var(--side) + (100vw - var(--column)) / 2));

		display: flex;
		gap: 1rem;

		padding: 0 var(--padding);

		height: 10rem;

		overflow-x: scroll;

		scroll-snap-type: mandatory;
		scroll-padding-left: --padding;
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	a {
		height: 100%;
	}

	img {
		height: 100%;
	}
</style>
