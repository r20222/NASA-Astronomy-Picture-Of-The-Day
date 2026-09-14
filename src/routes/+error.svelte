<script>
	import { page } from '$app/state';
</script>

<main>
	<section>
		<h1>{page.status}</h1>
		<p>{page.error.message}</p>
		<p>Go back <a href="/" title="Go back to the homepage.">home</a>!</p>
	</section>
</main>

<style>
	main {
		color: var(--text);
	}
	a {
		color: var(--link);
		text-decoration: underline var(--link-underline);

		&:hover,
		&:focus {
			color: var(--link-hover);
			text-decoration: underline var(--link-underline-hover);
		}
	}
</style>
