import { request, gql } from 'graphql-request';

const endpoint = import.meta.env.VITE_HYGRAPH_URL;

// get all messages
export async function getMessages() {
  const query = gql`
    query Messages {
        messages {
            id
            date
            name
            message
            today
        }
    }
  `;

  const hygraphData = await request(endpoint, query);

  console.log('Hygraph data:', hygraphData);
  return hygraphData;
}