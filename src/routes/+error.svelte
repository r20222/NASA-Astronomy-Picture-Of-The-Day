<script>
	import { page } from '$app/state';
</script>

<section>
	<h1>{page.status}</h1>
	<p>{page.error.message}</p>
	<p>Go back <a href="/" title="Go back to the homepage.">home</a>!</p>
</section>

<style>
	section {
		margin: 1rem;
	}
	a {
		color: var(--dark-blue);
		text-decoration: underline var(--dark-blue);

		&:hover,
		&:focus {
			color: var(--darker-blue);
			text-decoration: underline var(--text);
		}
	}
</style>
