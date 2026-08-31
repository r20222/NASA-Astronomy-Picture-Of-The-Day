<script>
	let { messages, apodDate } = $props();
	let hasMessage = $derived(messages.some((message) => message.date === apodDate));
</script>

<section>
	<h2>Comments:</h2>

	<div>
		{#if !hasMessage}
			<p>No comments yet, be the first to leave a comment! 🛸</p>
		{/if}
		{#if hasMessage}
			<ul>
				{#each messages as message}
					<!-- Check which comments belong to current apod photo -->
					{#if apodDate === message.date}
						<li>
							<h3>{message.name}<span>{message.today}</span></h3>
							<p>{message.message}</p>
						</li>
					{/if}
				{/each}
			</ul>
		{/if}
	</div>
</section>

<style>
	section {
		grid-area: comments;
		height: 25rem;
	}
	div {
		position: relative;
		margin-bottom: 3rem;
		height: calc(100% - 4.5rem);
		color: var(--text);
		overflow: auto;
	}

	ul {
		position: absolute;
		height: 100%;
		inset: 0;
		padding-left: 0;
		list-style: none;
	}
	li {
		padding: 1rem;
		margin: 0.5rem 0 0.5rem 0;
		background-color: var(--not-white);
		border: 1px solid var(--dark-blue);
		border-radius: 1rem;
	}
	h3 {
		margin: 0 0 auto 0;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		& span {
			font-size: 1rem;
			font-weight: 400;
		}
	}
	@media screen and (min-width: 48em) {
		section {
			grid-area: comments;
			height: 100%;
		}
	}
</style>
