<script>
	let { url, mediatype, hdurl, copyright } = $props();
</script>

<div class="image-container">
	{#if url.includes('youtube.com') || url.includes('youtu.be')}
		<iframe width="300" height="300" src={url} title="YouTube video" allowfullscreen></iframe>
	{:else if mediatype === 'video'}
		<video width="300" height="300" controls>
			<source src={url} type="video/mp4" />
			Je browser ondersteunt geen video.
		</video>
	{:else if mediatype === 'image'}
		<button title="Open popover" class="popover-open-button" popovertarget="image-popover">
			<figure>
				<img src={url} alt="" width="300" height="300" />

				<figcaption>
					{#if copyright}
						&#169; {copyright}
					{/if}
					<span>⛶ Click to open popover</span>
				</figcaption>
			</figure>
		</button>
	{/if}

	{#if mediatype === 'image'}
		<div class="img-popover-container" id="image-popover" popover>
			<button
				class="popover-close"
				title="Close popover"
				popovertarget="image-popover"
				popovertargetaction="hide"
			>
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
	{/if}
</div>

<style>
	.image-container {
		grid-area: popover;
	}
	figure {
		margin: 0;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;

		overflow: hidden;
	}
	img,
	video,
	iframe {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
	}
	img {
		transition: transform 0.3s;
	}

	figcaption {
		position: relative;
		background: var(--color1);
		text-align: start;
		color: var(--color5);
		z-index: 99999;
	}
	figcaption:has(span) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.popover-open-button {
		padding: 0;
		border: none;
		cursor: pointer;
		background-color: var(--color1);
		&:focus {
			box-shadow: 0 0 0 4px var(--color4);
		}
		&:hover {
			img {
				transform: scale(1.05);
			}
		}
	}
	[popover] {
		box-sizing: border-box;
		padding: 1rem;
		width: 97vw;
		height: 97vh;
		border-radius: 1rem;
		border: solid 1px var(--color4);
		background-color: var(--color2);
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
		background-color: var(--color4);
		color: var(--color1);
		font-weight: 600;
		letter-spacing: 0.1rem;
		border-radius: 1rem;
		border: none;
		&:hover,
		&:focus {
			cursor: pointer;
			background-color: var(--color3);
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
			background: none;
			color: var(--color1);
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
				color: var(--color5);
			}
		}
	}
</style>
