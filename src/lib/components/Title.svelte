<script>
	let { title, date } = $props();
</script>

<section>
<h1>{title}</h1>
<p>Astronomy Picture Of The Day - {date}</p>
</section>


<style>
	section {
		  grid-area: title;
	}
	h1 {
		margin-bottom: 0.5rem;
		color: var(--color5);
	}
	p {
		margin-top: 0.5rem;
		color: var(--color5);
	}
</style>
