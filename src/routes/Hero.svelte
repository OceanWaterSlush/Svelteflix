<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: images = movie.images;
	$: backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
</script>

<a href="/movie/{movie.id}">
	<img alt={movie.title} src={media(backdrop.file_path, 1280)} />
</a>
