export async function load() {
    try {
        const apodDataUrl = import.meta.env.VITE_APOD;
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
        const day = url.searchParams.get('day');

        console.log('Name:', name);
        console.log('Message:', message);
        console.log('Day:', day);

        return {
            success: true
        };
    }
};