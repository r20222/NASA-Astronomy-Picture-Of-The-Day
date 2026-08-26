<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children()}

<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');

	/* ik wil nog een dark mode */
	:root {
		--header: #00b4d8;
		--header-hover-color: white;
		--header-underline-hover: hotpink;
		--input-background-color: #fcf6bd;
		--input-color: black;
	}
	:global(body) {
		font-family: 'Space Grotesk', sans-serif;
		background-color: #a9def9;
		margin: 0rem;
	}




/* Nog goed uitzoeken */


</style>
