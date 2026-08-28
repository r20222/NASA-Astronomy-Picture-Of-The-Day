<script>
	// Enhance kan je gebruiken om bij submit van form geen volledige pagina refresh te krijgen. 
	// Maar wel bericht weer te geven.
	import { enhance } from '$app/forms';
	import Search from '$lib/components/Search.svelte';
	import Title from '$lib/components/Title.svelte';
	let { data } = $props();
	let hasMessage = $derived(
		data.dataHygraph.messages.some((message) => message.date === data.dataApod.date)
	);

	const dateApodPhoto = data.dataApod.date;

	const formattedDateApodPhoto = new Date(dateApodPhoto).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
</script>

<main>

	<section class="left-desktop">
		<Search value={data.dataApod.date} max={data.dataApod.date}/>
		<Title title={data.dataApod.title} date={formattedDateApodPhoto} />


		<div class="image-container">
			<button popovertarget="image-popover">
				<img src={data.dataApod.url} alt="" width="100%" />
			</button>

			<div class="img-popover-container" id="image-popover" popover>
				<button class="popover-close" popovertarget="image-popover" popovertargetaction="hide">
					<span>Close &#10006;</span>
				</button>
				<img src={data.dataApod.hdurl} alt="" />
			</div>

			{#if data.dataApod.copyright}
				<p class="copyright">&#169; {data.dataApod.copyright}</p>
			{/if}
		</div>

		<section class="explanation">
			<h4>Explanation:</h4>
			<p>{data.dataApod.explanation}</p>
		</section>
	</section>

	<!-- right part desktop -->

	<section class="right-desktop">
		<section class="comments">
			<section class="desktop-comments-container">
				<h4>Comments:</h4>
				{#if !hasMessage}
					<p class="no-messages-yet">No comments yet, be the first to leave a comment! 🛸</p>
				{/if}
				<section class="column-reverse">
					{#each data.dataHygraph.messages as message}
						{#if data.dataApod.date === message.date}
							<section class="messages">
								<h5>{message.name}<span>{message.today}</span></h5>
								<p>{message.message}</p>
							</section>
						{/if}
					{/each}
				</section>
				<button class="more-messages">READ ALL MESSAGES 🌠</button>
			</section>

			<section class="form-message-container">
				<h4>Add your comment:</h4>
				<form action="/?day={data.dataApod.date}" method="post" use:enhance>
					<fieldset class="post-form">
						<label for="Name"
							>Name:
							<input name="Name" id="Name" type="text" required />
						</label>

						<label for="Message"
							>Message:
							<input name="Message" id="Message" type="text" required />
						</label>

						<input type="submit" value="SEND 🛰️" />
					</fieldset>
				</form>
			</section>
		</section>
	</section>
</main>

<style>
	main {
		margin: 0 1rem 0 1rem;
	}
	form {
		display: flex;
	}
	h3 {
		height: 3.5rem;
	}
	input {
		border: none;
		font-family: 'Space Grotesk', sans-serif;
		background-color: var(--input-background-color);
		height: 2rem;
		color: var(--input-color);
	}
	input:nth-of-type(1) {
		margin-right: 1rem;
		padding: 0 0.3rem;
	}
	input:hover {
		cursor: pointer;
	}
	.day-picker {
		margin-right: 0.5rem;
		padding: 0;
		font-size: 0.8rem;
	}
	.image-container,
	button {
		width: 100%;
		height: 20rem;
		overflow: hidden;
		background-color: black;
		border: none;
	}
	.image-container img {
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
	}
	.image-popover:hover {
		cursor: pointer;
	}
	.popover-close {
		position: absolute;
		width: fit-content;
		height: fit-content;
		color: white;
		right: 0rem;
		font-size: 1.5rem;
	}
	.popover-close:hover {
		cursor: pointer;
	}
	.popover-not-working {
		display: none;
	}
	.copyright {
		color: #fcf6bd;
		position: relative;
		top: -4rem;
		left: 0.5rem;
		width: fit-content;
		background-color: rgba(0, 0, 0, 0.8);
	}
	.explanation {
		background-color: #caf0f8;
		padding: 0.5rem;
	}
	.comments {
		padding: 0.5rem;
		background-color: #00b4d8;
	}
	.no-messages-yet {
		padding-left: 0rem;
	}
	/* meer dan 3 berichten */
	.comments .messages:nth-last-child(-n + 3) {
		display: block;
	}
	.column-reverse {
		display: flex;
		flex-direction: column-reverse;
		gap: 0;
	}
	.messages.js-enabled {
		display: none;
	}
	.more-messages {
		display: none;
		border: none;
		width: 100%;
		background-color: #fcf6bd;
		padding: 0.3rem 0;
		height: fit-content;
	}
	.more-messages:hover {
		cursor: pointer;
	}
	.more-messages.js-enabled.four-plus-messages {
		display: block;
	}
	.messages.js-enabled.more-messages-clicked {
		display: block;
	}
	.messages {
		background-color: #caf0f8;
		padding: 0.5rem;
		margin: 0.5rem 0 0.5rem 0;
	}
	.messages h5 {
		margin: 0 0 auto 0;
		display: flex;
		justify-content: space-between;
	}
	.post-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border: none;
		width: 100%;
		padding: 0.5rem 0rem;
		margin: 0rem;
	}
	.post-form label {
		display: flex;
		flex-direction: column;
	}
	.post-form input {
		background-color: #fcf6bd;
		margin-right: 0rem;
	}

	/* mediaqueries */

	/* 368px is 23 em */
	@media screen and (min-width: 23em) {
		.day-picker {
			margin-right: 0.5rem;
			padding: 0.3rem 0;
			font-size: 1rem;
		}
	}

	/* 800px is 50em */

	@media screen and (min-width: 50em) {
		/* body{
        background-color: yellow;
    } */
		main {
			display: flex;
			margin-right: 0;
		}
		.left-desktop {
			width: 65%;
			margin-right: 1rem;
			margin-top: 1rem;
		}
		.day-picker {
			margin-right: 0.5rem;
			padding: 0;
			font-size: 1.3rem;
		}
		.right-desktop {
			width: 35%;
			padding: 1rem;
			background-color: #168aad;
		}
		.explanation p {
			max-width: 40rem;
		}
		.comments {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 0;
			background-color: #168aad;
		}

		/* image */
		.image-container,
		button {
			height: 28rem;
		}
		/* APOD */
		h2 {
			display: none;
		}
		.desktop-APOD {
			display: block;
		}
	}
</style>
