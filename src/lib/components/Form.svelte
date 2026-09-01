<script>
	// Enhance kan je gebruiken om bij submit van form geen volledige pagina refresh te krijgen.
	// Maar wel bericht weer te geven.
	import { enhance } from '$app/forms';

	let { apodDate } = $props();
	// When loading, you see the spinner on the button
	let loading = $state(false);

	function handleSubmit() {
		loading = true;

		return async ({ update }) => {
			await update();
			loading = false;
		};
	}
</script>

<section>
	<h3>Add your comment:</h3>
	<form action="/?day={apodDate}" method="post" use:enhance={handleSubmit}>
		<fieldset>
			<label for="Name"
				>Name:
				<input
					name="Name"
					id="Name"
					type="text"
					placeholder="Your name"
					autocomplete="given-name"
					required
				/>
			</label>

			<label for="Message"
				>Message:
				<input
					name="Message"
					id="Message"
					type="text"
					placeholder="Write your message..."
					autocomplete="off"
					required
				/>
			</label>
			<button type="submit">
				{#if loading}
					Send Message 🛰️
					<span class="spinner" aria-hidden="true"></span>
				{:else}
					Send Message 🛰️
				{/if}
			</button>
		</fieldset>
	</form>
</section>

<style>
	section {
		margin-bottom: 3rem;
		color: var(--text);
		grid-area: form;
	}
	h3 {
		margin-bottom: 0.5rem;
		font-size: 1.5rem;
	}
	fieldset {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		border: none;
	}
	label {
		display: flex;
		flex-direction: column;
		font-size: 1.3rem;
	}
	input {
		padding: 0.7rem 0.5rem;
		border-radius: 1rem;
		border: 1px solid var(--dark-blue);
	}
	button[type='submit'] {
		display: block;
		margin-left: auto;
		padding: 0.7rem 3rem;
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
</style>
