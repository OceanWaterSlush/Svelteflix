<script>
	import '../styles.css';
</script>

<nav>
	<a href="/">SvelteFix</a>
	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Login</a>
	</div>
</nav>

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
</style>
