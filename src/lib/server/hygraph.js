import { request, gql } from 'graphql-request';
import { HYGRAPH_URL, HYGRAPH_TOKEN } from '$env/static/private';


// export async function createMessage(name, message, date, today) {
//     const mutation = gql`
//         mutation CreateMessage(
//             $name: String!
//             $message: String!
//             $date: Date!
//             $today: String!
//         ) {
//             createMessage(
//                 data: {
//                     name: $name
//                     message: $message
//                     date: $date
//                     today: $today
//                 }
//             ) {
//                 id
//                 name
//                 message
//                 date
//                 today
//             }
//         }
//     `;

//     const variables = {
//         name,
//         message,
//         date,
//         today
//     };

//     return await request(
//         HYGRAPH_URL,
//         mutation,
//         variables,
//         {
//             Authorization: `Bearer ${HYGRAPH_TOKEN}`
//         }
//     );
// }


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

    return await request(
        HYGRAPH_URL,
        publishMutation,
        {
            id: created.createMessage.id
        },
        {
            Authorization: `Bearer ${HYGRAPH_TOKEN}`
        }
    );

    console.log('Publish request klaar');
}