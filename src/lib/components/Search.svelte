<script>
    let { value, max } = $props();  
</script>

<form action="/day" method="get">
	<label for="day">Pick a day:</label>
	<input
		type="date"
		id="day"
		name="day"
		value={value}
		min="1995-06-16"
		max={max}
	/>
	<input type="submit" value="Search 🚀" />
</form>

<style>
    form {
        display:grid;
        max-width: 20rem;
        grid-area: search;
   
        grid-template-columns: 1fr 1fr;
    }
    label {
        margin-bottom:1rem;
        color:var(--text);
        font-size: 1.5rem;
        font-weight:600;
        grid-column: 1 / -1;
    }
   
    input[type="date"]{
        padding:.5rem 1rem;
        color:var(--text);
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border: 1px solid var(--dark-blue);
        &:hover{
            cursor:pointer;
        }
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;

    }
    input[type="submit"]{
        padding:.5rem 1rem;
        background-color: var(--dark-blue);
        color: var(--vanilla);
        font-weight:600;
        letter-spacing:.1rem;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        border: none;
        &:hover, &:focus{
            cursor:pointer;
            background-color: var(--darker-blue);
        }
    }
</style>
