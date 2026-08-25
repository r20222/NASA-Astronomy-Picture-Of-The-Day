import { getMessages } from '$lib';

export async function load() {
    const dataHygraph = await getMessages();

    return {
        dataHygraph
    };
}
