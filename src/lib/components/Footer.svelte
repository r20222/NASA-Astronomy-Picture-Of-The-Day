<footer>
	<p>
		This website is created by 
		<a title="My Github" href="https://github.com/r20222" target="_blank">r20222</a>
		<span>with the 
			<a title="Nasa's API's" href="https://api.nasa.gov/" target="_blank">NASA APOD
			API.</a>
		</span>
	</p>
</footer>

<style>
	footer {
		padding: 1rem;
		grid-area: footer;
		color: var(--text);
	}
	span{
		display:block;
	}
	a {
		color: var(--footer-link);
		text-decoration: underline var(--footer-link-underline);

		&:hover, &:focus {
			color: var(--footer-link-hover);
			text-decoration: underline var(--footer-link-underline-hover);
		}
	}
	@media screen and (min-width: 64em) {
			footer {
				padding: 1rem 4rem;
			}
	}
</style>
