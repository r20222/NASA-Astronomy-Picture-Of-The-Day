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

	// dit stukje js kan straks misschien in layout komen?
	// Format date to this format: Aug 29, 2026
	const formattedDateApodPhoto = $derived(
		new Date(data.dataApod.date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		})
	);
</script>

<main>
	<section class="left-desktop">
		<Search value={data.dataApod.date} max={data.dataApod.date} />
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

	/* mediaqueries */

	/* 368px is 23 em */
	@media screen and (min-width: 23em) {
		.day-picker {
			margin-right: 0.5rem;
			padding: 0.3rem 0;
			font-size: 1rem;
		}
	}

	/* 800px is 50em */

	@media screen and (min-width: 50em) {
		/* body{
        background-color: yellow;
    } */
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
		/* .right-desktop {
			width: 35%;
			padding: 1rem;
			background-color: #168aad;
		} */
		.explanation p {
			max-width: 40rem;
		}
		/* .comments {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 0;
			background-color: #168aad;
		} */

		/* image */
		.image-container,
		button {
			height: 28rem;
		}
		/* APOD */
		h2 {
			display: none;
		}
		.desktop-APOD {
			display: block;
		}
	}
</style>
