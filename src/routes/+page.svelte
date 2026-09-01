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
	<Search value={data.dataApod.date} max={data.dataApod.date} />
	<Title title={data.dataApod.title} date={formattedDateApodPhoto} />
	<Popover
		url={data.dataApod.url}
		mediatype={data.dataApod.media_type}
		hdurl={data.dataApod.hdurl}
		copyright={data.dataApod.copyright}
	/>
	<Explanation explanation={data.dataApod.explanation} />

	<Comments messages={data.dataHygraph.messages} apodDate={data.dataApod.date} />
	<Form apodDate={data.dataApod.date} />
</main>
