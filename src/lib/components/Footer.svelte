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
	}
	span{
		display:block;
	}
	a {
		color: var(--dark-blue);
		text-decoration: underline var(--dark-blue);

		&:hover, &:focus {
			color: var(--darker-blue);
			text-decoration: underline var(--text);
		}
	}
</style>
