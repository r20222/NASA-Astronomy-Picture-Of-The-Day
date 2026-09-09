import { APOD_KEY } from '$env/static/private';
import { createMessage } from '$lib/server/hygraph';

// Get Apod photo and data of a specific day
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

// Post message to Hygraph
export const actions = {
    default: async ({ request, url }) => {
        const formData = await request.formData();

        const name = formData.get('Name');
        const message = formData.get('Message');
        const date = url.searchParams.get('day');

        if (
            typeof name !== 'string' ||
            typeof message !== 'string' ||
            !name.trim() ||
            !message.trim()
        ) {
            return {
                success: false,
                error: 'Name and message are required.'
            };
        }
        if (name.length > 50 || message.length > 500) {
            return {
                success: false,
                error: 'Message is too long.'
            };
        }

        const today = new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        const result = await createMessage(
            name,
            message,
            date,
            today
        );

        return {
            success: true
        };
    }
};