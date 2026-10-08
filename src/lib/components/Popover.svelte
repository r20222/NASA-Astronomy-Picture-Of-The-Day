<script>
	let { data, url, mediatype, hdurl, copyright } = $props();

	// To show load button or not for vimeo and youtube video's.
	let loadedVideoUrl = $state(null);

	function getVideoUrls(data) {
		if (data.media_type !== 'video') {
			return {
				videoUrl: null,
				youtubeUrl: null,
				vimeoUrl: null
			};
		}

		const html = data.basic_html;

		// Directe video (.mp4)
		const sourceMatch = html.match(/<source\s+src="([^"]+)"/);
		const videoUrl = sourceMatch?.[1] ?? null;

		// YouTube
		const youtubeMatch = html.match(
			/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^"&?/\s]+)/
		);
		const youtubeUrl = youtubeMatch ? `https://www.youtube.com/embed/${youtubeMatch[1]}` : null;

		// Vimeo
		const vimeoMatch = html.match(/(?:vimeo\.com\/(?:video\/)?)(\d+)/);
		const vimeoUrl = vimeoMatch ? `https://player.vimeo.com/video/${vimeoMatch[1]}` : null;

		
		return {
			videoUrl,
			youtubeUrl,
			vimeoUrl
		};
	}

	let videoUrls = $derived(getVideoUrls(data.dataApod));

	let videoUrl = $derived(videoUrls.videoUrl);
	let youtubeUrl = $derived(videoUrls.youtubeUrl);
	let vimeoUrl = $derived(videoUrls.vimeoUrl);
</script>

<div class="image-container">
	{#if videoUrl}
		{#key videoUrl}
			<video width="300" height="300" controls>
				<source src={videoUrl} type="video/mp4" />
				Je browser ondersteunt geen video.
			</video>
		{/key}
	{:else if youtubeUrl}
		{#if loadedVideoUrl !== youtubeUrl}
			<button class="btn"  onclick={() => (loadedVideoUrl = youtubeUrl)}>Click to load the Youtube Video</button
			>
		{:else}
			{#key youtubeUrl}
				<iframe src={youtubeUrl} title="YouTube video" allowfullscreen> </iframe>
			{/key}
		{/if}
	{:else if vimeoUrl}
		{#if loadedVideoUrl !== vimeoUrl}
			<button class="btn" onclick={() => (loadedVideoUrl = vimeoUrl)}>Click to load the Vimeo Video</button>
		{:else}
			{#key vimeoUrl}
				<iframe src={vimeoUrl} title="Vimeo video" allowfullscreen> </iframe>
			{/key}
		{/if}
	{:else if mediatype === 'image'}
		<button title="Open popover" class="popover-open-button" popovertarget="image-popover">
			<figure>
				<img src={url} alt="" width="300" height="300" />

				<figcaption>
					{#if copyright}
						<span>&#169; {@html copyright}</span>
					{/if}
					<span>⛶ Click to open popover</span>
				</figcaption>
			</figure>
		</button>
	{:else}
		<p>Today's photo/video is missing.</p>
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
						&#169; {@html copyright}
					</figcaption>
				{/if}
			</figure>
		</div>
	{/if}
</div>

<style>
	.image-container {
		min-height: 20rem;
		grid-area: popover;
	}
	p {
		color: var(--text);
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
		border-radius: 1rem;
	}
	img {
		height: 100%;
		transition: transform 0.3s;
	}

	figcaption {
		position: relative;
		text-align: start;
		color: var(--popover-figcaption-color-mobile);
		z-index: 99999;
	}
	span {
		padding-inline: 1rem;
		background: var(--popover-figcaption-span-mobile);
		border-radius: 0.2rem;
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
		background-color: var(--popover-open-background);
		&:focus {
			box-shadow: 0 0 0 3px var(--popover-focus-border);
		}
		&:hover,
		&:focus {
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
		border: solid 1px var(--popover-border);
		background-color: var(--popover-opened-background);
		& img {
			margin: 1rem 0;
		}
		& figcaption {
			background-color: var(--popover-opened-background);
		}
	}
	:global(html:has([popover]:popover-open)) {
		overflow: hidden;
	}
	.popover-close {
		display: block;
		margin-left: auto;
		padding: 0.5rem 1rem;
		background-color: var(--button-background);
		color: var(--button-color);
		font-weight: 600;
		letter-spacing: 0.1rem;
		border-radius: 1rem;
		border: none;
		&:hover,
		&:focus {
			cursor: pointer;
			background-color: var(--button-background-hover);
		}
	}

	@media screen and (min-width: 48em) {
		.image-container {
			min-height: 27rem;
		}
		.popover-open-button {
			position: relative;
			width: 100%;
			background-color: var(--popover-button-background);
			object-fit: contain;
			border-radius: 1rem;
		}
		figcaption {
			padding: 0 1rem 1rem;
			text-align: start;
			color: var(--popover-figcaption-color-desktop);
		}
		span {
			background: var(--popover-button-background);
		}

		img,
		video,
		iframe {
			height: 100%;
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
