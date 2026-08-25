export async function load() {
    try {
        const apodData = import.meta.env.VITE_APOD;
        const response = await fetch(apodData);
        if (!response.ok) {
            throw new Error(`Failed to fetch data (status ${response.status})`);
        }
        const data = await response.json();
        return { data };

    } catch (err) {
        console.error(err);
        error = 'Error fetching data. Please try again later.';
    }
}