<script>
	let { title, date } = $props();
</script>

<h1>{title}</h1>
<p>Astronomy Picture Of The Day - {date}</p>

<style>
	h1 {
		margin-bottom: 0.5rem;
		color: var(--text);
	}
	p {
		margin-top: 0.5rem;
		color: var(--text);
	}
</style>
