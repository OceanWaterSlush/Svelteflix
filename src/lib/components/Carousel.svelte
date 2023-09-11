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
