<script lang="ts">
	import Hero from './Hero.svelte';

	export let data;

	console.log(data);
</script>

<h1>Top trending movies</h1>

<Hero movie={data.featured} />
