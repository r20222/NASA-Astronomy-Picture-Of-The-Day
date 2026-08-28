<script>
	let { url, hdurl, copyright } = $props();
</script>

<div class="image-container">
	<button popovertarget="image-popover">
		<figure>
			<img src={url} alt="" width="100%" />
			{#if copyright}
				<figcaption>
					&#169; {copyright}
				</figcaption>
			{/if}
		</figure>
	</button>

	<div class="img-popover-container" id="image-popover" popover>
		<button class="popover-close" popovertarget="image-popover" popovertargetaction="hide">
			<span>Close &#10006;</span>
		</button>
		<img src={hdurl} alt="Astronomy Picture" />
	</div>
</div>

<style>
figure {
    margin: 0;
    border-radius: 1rem;
}
img {
    border-radius: 1rem;
}
figcaption {
    text-align: start;
}
button {
    padding: 0;
    border:none;
    cursor: pointer;
    background-color: var(--vanilla);
}
</style>
