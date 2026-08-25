export async function load({ url }) {
    const day = url.searchParams.get('day');

    if (!day) {
        return {
            error: 'Geen datum opgegeven.'
        };
    }

    const apodData = `${import.meta.env.VITE_APOD}&date=${encodeURIComponent(day)}`;

    const response = await fetch(apodData);

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return {
        data
    };
}