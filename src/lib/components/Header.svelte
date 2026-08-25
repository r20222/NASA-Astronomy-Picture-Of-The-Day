<header>
	<h1>
		<a title="Nasa's API's" href="https://api.nasa.gov/" target="_blank">NASA</a><span
			class="desktop-APOD">Astronomy Picture Of The Day</span
		><a title="My Github" href="https://github.com/r20222" target="_blank">r20222</a>
	</h1>
</header>

<style>
	header {
		background-color: var(--header);
		padding: 1rem;
	}
	header h1 {
		margin-top: 0rem;
		margin-bottom: 0rem;
		color: black;
		display: flex;
		justify-content: space-between;
	}
	.desktop-APOD {
		display: none;
	}
	header a {
		color: black;
	}
	header a:hover {
		color: var(--header-hover-color);
		text-decoration-color: var(--header-underline-hover);
	}
	@media screen and (min-width: 50em) {
		.desktop-APOD {
			display: block;
		}
	}
</style>
