<script lang="ts">
	import ResultsPage from '$lib/components/ResultsPage.svelte';

	export let data;
</script>

<div class="column">
	<h1>{data.title}</h1>
</div>

<ResultsPage
	movies={data.movies}
	next={data.next_page ? `/movies/${data.view}?page=${data.next_page}` : null}
	on:end={() => console.log('TODO load some more data')}
/>
