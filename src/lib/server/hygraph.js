import { request, gql } from 'graphql-request';
import { HYGRAPH_URL, HYGRAPH_TOKEN } from '$env/static/private';
import { getMessages } from '$lib';

export async function createMessage(name, message, date, today) {
    const createMutation = gql`
        mutation CreateMessage(
            $name: String!
            $message: String!
            $date: Date!
            $today: String!
        ) {
            createMessage(
                data: {
                    name: $name
                    message: $message
                    date: $date
                    today: $today
                }
            ) {
                id
            }
        }
    `;

    const variables = {
        name,
        message,
        date,
        today
    };

    const created = await request(
        HYGRAPH_URL,
        createMutation,
        variables,
        {
            Authorization: `Bearer ${HYGRAPH_TOKEN}`
        }
    );

    const publishMutation = gql`
        mutation PublishMessage($id: ID!) {
            publishMessage(
                where: {
                    id: $id
                }
            ) {
                id
            }
        }
    `;

    await request(
        HYGRAPH_URL,
        publishMutation,
        {
            id: created.createMessage.id
        },
        {
            Authorization: `Bearer ${HYGRAPH_TOKEN}`
        }
    );

    // Wacht heel even zodat het bericht weergegeven kan worden (anders wil die nog wel eens niet verschijnen)
    await new Promise((resolve) => setTimeout(resolve, 400));

    return await getMessages();
}