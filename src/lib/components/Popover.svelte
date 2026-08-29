<script>
	let { url, hdurl, copyright } = $props();
</script>

<div class="image-container">
	<button popovertarget="image-popover">
		<figure>
			<img src={url} alt="" width="300" height="300" />
			{#if copyright}
				<figcaption>
					&#169; {copyright}
				</figcaption>
			{/if}
		</figure>
	</button>

	<div class="img-popover-container" id="image-popover" popover>
		<button class="popover-close" popovertarget="image-popover" popovertargetaction="hide">
			Close &#10006;
		</button>
		<figure>
			<img src={hdurl} alt="" width="300" height="300" />
			{#if copyright}
				<figcaption>
					&#169; {copyright}
				</figcaption>
			{/if}
		</figure>
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
	[popovertarget='image-popover'] {
		padding: 0;
		border: none;
		cursor: pointer;
		background-color: var(--vanilla);
	}
	[popover] {
		width: 95%;
		height: 95%;
		border-radius: 1rem;
		border: solid 1px var(--dark-blue);
		object-fit: contain;
		overflow: hidden;
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
		margin-top: calc(1rem - 4px);
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
		/* .image-container {
			background-color: pink;
		} */
		[popovertarget='image-popover'] {
			position: relative;
			width: 100%;
			background-color: black;
			object-fit: contain;
			border-radius: 1rem;
		}
		figure {
			/* width:100%; */
			/* background-color: green; */
			/* display: flex;
			flex-direction: column; */
			/* align-items: center; */
			/* justify-content: center; */
		}
		img {
			width: 100%;
			height: 27rem;
			object-fit: contain;
		}
		/* .image-container,
		button {
			position:relative;
			width: 100%;
			height: 20rem;
			overflow: hidden;
			background-color: black;
			border: none;
		} */
		/* .image-container img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			cursor: pointer;
		}

		.img-popover-container {
			width: 95%;
			height: 95%;
			object-fit: contain;
			overflow: hidden;
			background-color: black;
		} */
	}
	/* .img-popover-container {
	}


	.popover-close:hover {
		cursor: pointer;
	}
	.popover-not-working {
		display: none;
	}  */
</style>
