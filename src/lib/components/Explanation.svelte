<script>
	let { explanation } = $props();
</script>

<section>
	<h2>Explanation:</h2>
	<p>{@html explanation}</p>
</section>

<style>
	section {
		margin-bottom: 3rem;
		grid-area: explanation;
		color: var(--text);
	}
	section p {
		max-width: 40rem;
	}
	:global(a) {
		color: var(--link);
		text-decoration: underline var(--link-underline);

		&:hover,
		&:focus {
			color: var(--link-hover);
			text-decoration: underline var(--link-underline-hover);
		}
	}
</style>
