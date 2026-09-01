<script>
	let { url, mediatype, hdurl, copyright } = $props();
</script>

<div class="image-container">
	<button class="popover-open-button" popovertarget="image-popover">
		{#if mediatype === 'video'}
			<video width="300" height="300" controls>
				<source src={url} type="video/mp4" />
			</video>
		{:else if mediatype === 'image'}
			<figure>
				<img src={url} alt="" width="300" height="300" />
				{#if copyright}
					<figcaption>
						&#169; {copyright}
					</figcaption>
				{/if}
			</figure>
		{/if}
	</button>

	<div class="img-popover-container" id="image-popover" popover>
		<button class="popover-close" popovertarget="image-popover" popovertargetaction="hide">
			Close &#10006;
		</button>
		{#if mediatype === 'video'}
			<video width="300" height="300" controls>
				<source src={url} type="video/mp4" />
			</video>
		{:else if mediatype === 'image'}
			<figure>
				<img src={hdurl} alt="" width="300" height="300" />
				{#if copyright}
					<figcaption>
						&#169; {copyright}
					</figcaption>
				{/if}
			</figure>
		{/if}
	</div>
</div>

<style>
	.image-container {
		grid-area: popover;
	}
	figure {
		margin: 0;
		border-radius: 1rem;
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
	}
	figcaption {
		text-align: start;
		color: var(--text);
	}
	.popover-open-button {
		padding: 0;
		border: none;
		cursor: pointer;
		background-color: var(--vanilla);
		&:focus {
			 box-shadow: 0 0 0 4px var(--dark-blue);
		}
	}
	[popover] {
		box-sizing: border-box;
		padding: 1rem;
		width: 97vw;
		height: 97vh;
		border-radius: 1rem;
		border: solid 1px var(--dark-blue);
		background-color: var(--not-white);
		& img {
			margin: 1rem 0;
		}
	}
	:global(html:has([popover]:popover-open)) {
		overflow: hidden;
	}
	.popover-close {
		display: block;
		margin-left: auto;
		padding: 0.5rem 1rem;
		background-color: var(--dark-blue);
		color: var(--vanilla);
		font-weight: 600;
		letter-spacing: 0.1rem;
		border-radius: 1rem;
		border: none;
		&:hover,
		&:focus {
			cursor: pointer;
			background-color: var(--darker-blue);
		}
	}

	@media screen and (min-width: 48em) {
		.popover-open-button {
			position: relative;
			width: 100%;
			background-color: black;
			object-fit: contain;
			border-radius: 1rem;
		}
		figcaption {
			padding: 0 1rem 1rem;
			text-align: start;
			color: var(--vanilla);
		}
		img {
			width: 100%;
			height: 27rem;
			object-fit: contain;
		}
		.img-popover-container {
			& img {
				display: block;
				margin-inline: auto;
				width: auto;
				height: auto;
				max-width: 100%;
				max-height: 77vh;
				object-fit: contain;
				border-radius: 1rem;
			}
			& figcaption {
				color: var(--text);
			}
		}
	}
</style>
