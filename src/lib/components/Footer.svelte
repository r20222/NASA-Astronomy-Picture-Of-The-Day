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
		color: var(--color5);
	}
	span{
		display:block;
	}
	a {
		color: var(--color4);
		text-decoration: underline var(--color4);

		&:hover, &:focus {
			color: var(--color3);
			text-decoration: underline var(--color5);
		}
	}
	@media screen and (min-width: 64em) {
			footer {
				padding: 1rem 4rem;
			}
	}
</style>
