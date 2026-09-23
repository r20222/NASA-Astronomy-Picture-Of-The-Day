<script>
	import { onMount } from 'svelte';

	let dark = $state(false);

	onMount(() => {
		// check if a theme is saved to localStorage
		const savedTheme = localStorage.getItem('theme');

		if (savedTheme) {
			// if theme is saved to localStorage and is dark, dark = true
			dark = savedTheme === 'dark';
		} else {
			// check if system is set to dark model
			dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		// sets data-theme to the html element
		document.documentElement.dataset.theme = dark ? 'dark' : 'light';
	});

	
	function toggleTheme() {
		// Toggle dark value
		dark = !dark;

		// Change localStorage theme
		localStorage.setItem('theme', dark ? 'dark' : 'light');

		// Toggle data-theme on html element
		document.documentElement.dataset.theme = dark ? 'dark' : 'light';
	}
</script>

<header>
	<a class="homelink" title="Home" href="/">NASA APOD</a>

	<button onclick={toggleTheme} title="Toggle theme light or dark.">
		<span class:dark class="emojis">{dark ? '☀️' : '🌙'}</span>
		<span class="btn-text">Toggle theme</span>
	</button>
</header>

<style>
	header {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
	}
	header a {
		color: var(--header);
		&:focus,
		&:hover {
			color: var(--header-hover);
		}
	}
	.homelink {
		font-size: 1.8rem;
		font-weight: 600;
		text-decoration: none;
	}

	/* Progressive Enhancement, button only visible when js is active.
	Without this button, the website just listens to your 
	system preference on light or dark mode */
	button {
		display: none;
	}
	:global(html.js) button {
		cursor: pointer;
		box-sizing: border-box;
		position: relative;
		display: inline-block;
		width: 4rem;
		background-color: var(--switch-background);
		border: 3px solid var(--switch-border);
		border-radius: 1.5rem;
		& span.emojis {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 0;
			bottom: 0;
			aspect-ratio: 1;
			background-color: var(--switch-span);
			border-radius: 1rem;
			transform: translateX(-1rem);
			transition: transform 0.3s ease;
		}
		& span.btn-text {
			position: absolute;
			white-space: nowrap;
			top: 2.3rem;
			right: 0;
			color: var(--text);
		}
	}
	/* left */
	:global(html.js[data-theme='light']) button span.emojis,
	:global(html.js) button span:not(.dark) {
		transform: translateX(-0.4rem);
	}

	/* right */
	:global(html.js[data-theme='dark']) button span.emojis,
	:global(html.js) button span.dark {
		transform: translateX(1.4rem);
	}

	@media screen and (min-width: 64em) {
		header {
			padding: 1rem 4rem;
		}
	}
</style>
