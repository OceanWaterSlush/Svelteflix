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
		--padding: var(--side);

		display: flex;
		gap: 1rem;

		padding: 0 var(--padding);

		height: 10rem;

		overflow-x: scroll;

		scroll-snap-type: mandatory;
		scroll-padding-left: --padding;
	}

	a {
		height: 100%;
	}

	img {
		height: 100%;
	}
</style>
