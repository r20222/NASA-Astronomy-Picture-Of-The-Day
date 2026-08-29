<script>
	let { explanation } = $props();
</script>

<section>
	<h2>Explanation:</h2>
	<p>{explanation}</p>
</section>

<style>
	section {
		margin-bottom: 3rem;
		color: var(--text);
	}
	section p {
		max-width: 40rem;
	}
</style>
