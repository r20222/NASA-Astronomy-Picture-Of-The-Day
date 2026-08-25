export async function load({ url }) {
    const day = url.searchParams.get('day');

    if (!day) {
        return {
            error: 'Geen datum opgegeven.'
        };
    }

    const apodDataUrl = `${import.meta.env.VITE_APOD}&date=${encodeURIComponent(day)}`;

    const response = await fetch(apodDataUrl);

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const dataApod = await response.json();

    return {
        dataApod
    };
}