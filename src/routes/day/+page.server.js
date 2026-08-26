import { APOD_KEY } from '$env/static/private';

export async function load({ url }) {
    const day = url.searchParams.get('day');

    if (!day) {
        return {
            error: 'Geen datum opgegeven.'
        };
    }

    const apodDataUrl = `${APOD_KEY}&date=${encodeURIComponent(day)}`;

    const response = await fetch(apodDataUrl);

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    const dataApod = await response.json();

    return {
        dataApod
    };
}