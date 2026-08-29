<script>
	let { title, date } = $props();
</script>

<h1>{title}</h1>
<!-- date moet ook geupdate worden wanneer je een andere foto weergeeft. -->
<p>Astronomy Picture Of The Day - {date}</p>

<style>
	h1 {
		margin-bottom: 0.5rem;
	}
	p {
		margin-top: 0.5rem;
	}
</style>
