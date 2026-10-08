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
	<Search value={data.dataApod[0].date} max={data.dataApod[0].date} />
	<Title title={data.dataApod[0].title} date={formattedDateApodPhoto} />
	<Popover
		data={data}
		url={data.dataApod[0].hdurl}
		mediatype={data.dataApod[0].media_type}
		hdurl={data.dataApod[0].hdurl}
		copyright={data.dataApod[0].copyright}
	/>
	<Explanation explanation={data.dataApod[0].explanation} />

	<Comments messages={data.dataHygraph.messages} apodDate={data.dataApod[0].date} />
	<Form apodDate={data.dataApod[0].date} />
</main>
