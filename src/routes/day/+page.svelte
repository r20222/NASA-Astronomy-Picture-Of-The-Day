<script>
	import Search from '$lib/components/Search.svelte';
	import Title from '$lib/components/Title.svelte';
	import Popover from '$lib/components/Popover.svelte';
	import Explanation from '$lib/components/Explanation.svelte';
	import Comments from '$lib/components/Comments.svelte';
	import Form from '$lib/components/Form.svelte';

	let { data } = $props();
	let hasMessage = $derived(
		data.dataHygraph.messages.some((message) => message.date === data.dataApod.date)
	);
	const today = new Date().toISOString().split('T')[0];

	// Format date to this format: Aug 29, 2026
	let formattedDateApodPhoto = $derived(
		new Date(data.dataApod.date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		})
	);
</script>

<main>
	<section class="left-desktop">
		<Search value={data.dataApod.date} max={today} />
		<Title title={data.dataApod.title} date={formattedDateApodPhoto} />
		<Popover
			url={data.dataApod.url}
			hdurl={data.dataApod.hdurl}
			copyright={data.dataApod.copyright}
		/>
		<Explanation explanation={data.dataApod.explanation} />
	</section>

	<!-- right part desktop -->

	<section class="right-desktop">
		<section class="comments">

			<Comments messages={data.dataHygraph.messages} apodDate={data.dataApod.date} />
			<Form apodDate={data.dataApod.date} />

		</section>
	</section>
</main>

<style>
	main {
		margin: 0 1rem 0 1rem;
	}
	.day-picker {
		margin-right: 0.5rem;
		padding: 0;
		font-size: 0.8rem;
	}
	.image-container,
	button {
		width: 100%;
		height: 20rem;
		overflow: hidden;
		background-color: black;
		border: none;
	}
	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		cursor: pointer;
	}

	.img-popover-container {
		width: 95%;
		height: 95%;
		object-fit: contain;
		overflow: hidden;
		background-color: black;
	}








	/* mediaqueries */



	/* 768px is 48em */

	@media screen and (min-width: 48em) {
		main {
			display: flex;
			margin-right: 0;
		}
		.left-desktop {
			width: 65%;
			margin-right: 1rem;
			margin-top: 1rem;
		}
		.day-picker {
			margin-right: 0.5rem;
			padding: 0;
			font-size: 1.3rem;
		}
		

		/* image */
		.image-container,
		button {
			height: 28rem;
		}
		/* APOD */
		h2 {
			display: none;
		}
	}
</style>
