<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Nasa Astronomy Picture Of The Day</title>
	<meta name="description" content="Discover the Astronomy Picture of the Day from NASA." />
</svelte:head>

<Header />

{@render children()}

<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');

	/* ik wil nog een dark mode */
	:root {
		/* Header */
		--header: #044356;
		--header-hover: #042b38;

		/* Background and text */
		--background: #fcf6bd;
		--text: #222222;

		/* Comments */
		--comment-background: #fffbd3;
		--comment-border: #044356;

		/* Buttons and forms */
		--button-background: #044356;
		--button-background-hover: #042b38;
		--button-color: #fcf6bd;
		--button-spinner: #fcf6bd;
		--form-input: #fffbd3;
		--input-border: #044356;

		/* Popover */
		--popover-button-background: #000000;
		--popover-focus-border: #044356;
		--popover-figcaption-color-mobile: #222222;
		--popover-figcaption-background: #fcf6bd;
		--popover-figcaption-color-desktop: #fcf6bd;
		--popover-open--text-figcaption: #222222;
		--popover-open-background: #fffbd3;
		--popover-border: #044356;

		/* Footer */
		--footer-link: #044356;
		--footer-link-underline: #042b38;
		--footer-link-hover: #042b38;
		--footer-link-underline-hover: #044356;

		/* --color1: #fcf6bd;
		--color2: #fffbd3;
		--color3: #042b38;
		--color4: #044356;
		--color5: #222222;
		--color6: black;

		--vanilla: #fcf6bd;
		--not-white: #fffbd3;
		--dark-blue: #044356;
		--darker-blue: #042b38;
		--text: #222222;
		--black: var(--black); */
	}
	@media (prefers-color-scheme: dark) {
		:root {
			/* Header */
			--header: var(--vanilla);
			--header-hover: var(--not-white);

			/* Background and text */
			--background: var(--darker-blue);
			--text: var(--vanilla);

			/* Comments */
			--comment-background: var(--dark-blue);
			--comment-border: var(--not-white);

			/* Buttons and forms */
			--button-background: var(--not-black);
			--button-background-hover: var(--not-black-either);
			--button-color: var(--vanilla);
			--button-spinner: #fcf6bd;
			--form-input: #fffbd3;
			--form-input-text: #222222;
			--input-border: #044356;

			/* Popover */
			--popover-button-background: #000000;
			--popover-focus-border: #044356;
			--popover-figcaption-color-mobile: #222222;
			--popover-figcaption-background: #fcf6bd;
			--popover-figcaption-color-desktop: #fcf6bd;
			--popover-open--text-figcaption: #222222;
			--popover-open-background: #fffbd3;
			--popover-border: #044356;

			/* Footer */
			--footer-link: #044356;
			--footer-link-underline: #042b38;
			--footer-link-hover: #042b38;
			--footer-link-underline-hover: #044356;

			--vanilla: #fcf6bd;
			--not-white: #fffbd3;
			--dark-blue: #044356;
			--darker-blue: #042b38;
			--not-black: #0a0a0a;
			--not-black-either: #141414;
		}
	}
	:global(body) {
		font-family: 'Space Grotesk', sans-serif;
		background-color: var(--background);

		margin: 0rem;
	}

	:global(main) {
		margin: 0 1rem;
	}
	:global(.spinner) {
		margin-left: 0.5rem;
		width: 1.1rem;
		height: 1.1rem;
		border: 4px dotted var(--button-spinner);
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
			grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
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
