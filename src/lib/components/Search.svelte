<script>
	import { navigating } from '$app/state';

	// When the page is navigating you will see the spinner
	let loading = $derived(navigating.to !== null);
	let loadingRandom = $state(false);
	let { value, max } = $props();

	function pickRandomDay() {
		loadingRandom = true;
		const minDate = new Date('1995-06-16');
		const maxDate = new Date();

		// Calculate the amount of miliseconds have past between min and max date
		const difference = maxDate - minDate;

		// calculate how many miliseconds fit in one day
		const millisecondsPerDay = 1000 * 60 * 60 * 24;

		// calculate how many days have passed
		const days = Math.floor(difference / millisecondsPerDay);
		console.log(days);

		// Give a random number that fits in the amount of days
		const randomDays = Math.floor(Math.random() * days);

		// Count randomDays up from minDate to get a random Date!
		const randomDate = new Date(minDate);
		randomDate.setDate(randomDate.getDate() + randomDays);

		// Correct date format
		const dateString = randomDate.toISOString().split('T')[0];

		window.location.href = `/day?day=${dateString}`;
	}
</script>

<div>
	<form action="/day" method="get">
		<label for="day">Pick a day:</label>
		<input type="date" id="day" name="day" {value} min="1995-06-16" {max} />
		<button type="submit">
			{#if loading}
				Search 🚀
				<span class="spinner" aria-hidden="true"></span>
			{:else}
				Search 🚀
			{/if}
		</button>
	</form>

	<button class="random" onclick={pickRandomDay}>
		{#if loadingRandom}
			Pick a random day 🌌
			<span class="spinner" aria-hidden="true"></span>
		{:else}
			Pick a random day 🌌
		{/if}
	</button>
</div>

<style>
	div {
		display: grid;
		grid-area: search;
		gap: 0.5rem;
	}
	form {
		display: grid;
		max-width: 25rem;
		grid-template-columns: 1fr 1fr;
	}
	label {
		margin-bottom: 1rem;
		color: var(--text);
		font-size: 1.5rem;
		font-weight: 600;
		grid-column: 1 / -1;
	}

	input[type='date'] {
		padding: 0.5rem 1rem;
		color: var(--form-input-text);
		background-color: var(--form-input);
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
		border: 1px solid var(--input-border);
		&:hover {
			cursor: pointer;
		}
	}
	input[type='date']::-webkit-calendar-picker-indicator {
		cursor: pointer;
	}
	button[type='submit'] {
		padding: 0.5rem 1rem;
		background-color: var(--button-background);
		color: var(--button-color);
		font-weight: 600;
		letter-spacing: 0.1rem;
		border-top-right-radius: 1rem;
		border-bottom-right-radius: 1rem;
		border: none;
		&:hover,
		&:focus {
			cursor: pointer;
			background-color: var(--button-background-hover);
		}
	}
	button.random {
		padding: 0.5rem 1rem;
		width: 100%;
		max-width: 25rem;
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
		form,
		button.random {
			max-width: 100%;
		}
	}
</style>
