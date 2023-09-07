<script>
	import tmdb from '$lib/images/tmdb.svg';
	import '../styles.css';
</script>

<nav>
	<a href="/"><img alt="Svelteflix" src="/images/logo.svg" /></a>
	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Login</a>
	</div>
</nav>

<main>
	<slot />
</main>

<footer>
	<p>
		Data provided by
		<a href="https://www.themoviedb.org/">
			<img alt="The Movie DB" src={tmdb} />
		</a>
	</p>
</footer>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		max-width: var(--column);

		height: 3rem;

		padding: 0 var(--side);

		color: var(--accent);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	img {
		height: 1rem;
	}

	.links {
		display: flex;
		gap: 1rem;
	}
</style>
