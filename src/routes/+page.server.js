import { APOD_KEY } from '$env/static/private';
import { createMessage } from '$lib/server/hygraph';

export async function load() {
    try {
        const apodDataUrl = APOD_KEY;
        const response = await fetch(apodDataUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch data (status ${response.status})`);
        }
        const  dataApod = await response.json();
        return {  dataApod };

    } catch (err) {
        console.error(err);
        error = 'Error fetching data. Please try again later.';
    }
}

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
        console.log('Hygraph klaar:', result);

        return {
            success: true
        };
    }
};