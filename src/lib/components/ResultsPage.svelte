<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';

	export let movies: MovieListResult[];
	export let next: string | null;
</script>

<div class="viewport" style="height: 500px">
	<div class="results">
		{#each movies as movie}
			<a href="/movies/{movie.id}">
				<img alt={movie.title} src={media(movie.poster_path, 500)} />
			</a>
		{/each}
	</div>
</div>

<style>
	.viewport {
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
