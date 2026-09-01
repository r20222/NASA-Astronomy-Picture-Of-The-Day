<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Nasa Astronomy Picture Of The Day</title>
	<meta
        name="description"
        content="Discover the Astronomy Picture of the Day from NASA."
    />
</svelte:head>

<Header />

{@render children()}

<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');

	/* ik wil nog een dark mode */
	:root {
		--vanilla: #FCF6BD;
		--not-white: #FFFBD3;
		--dark-blue: #044356;
		--darker-blue: #042b38;
		--text: #222222;
		--black: var(--black);
	}
	:global(body) {
		font-family: 'Space Grotesk', sans-serif;
		background-color: var(--vanilla);
		margin: 0rem;
	}

	:global(main) {
		margin: 0 1rem ;
	}
	:global(.spinner) {
		margin-left:.5rem;
		width: 1.1rem;
		height: 1.1rem;
		border: 4px dotted var(--vanilla);
		border-radius: 50%;
		position: absolute;
		box-sizing: border-box;
		animation: rotation 2s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* mediaqueries */

	@media screen and (min-width: 48em) {
		:global(main) {
			display: grid;
			grid-template-columns:  minmax(0, 3fr) minmax(0, 2fr);
			column-gap: 3rem;
			grid-template-areas:
				'title       title'
				'popover     search'
				'popover     comments'
				'explanation comments'
				'explanation form'
				'footer 	 footer';
		}
	}
	@media screen and (min-width: 64em) {
			:global(main) {
				margin: 0 4rem;
			}
	}
</style>
