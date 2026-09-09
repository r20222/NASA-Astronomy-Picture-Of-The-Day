import { request, gql } from 'graphql-request';
import { HYGRAPH_URL } from '$env/static/private';

const endpoint = HYGRAPH_URL;

// get all messages
export async function getMessages() {

  const query = gql`
    query Messages {
        messages(first: 100, orderBy: publishedAt_DESC) {
            id
            date
            name
            message
            today
        }
    }
  `;

  const hygraphData = await request(endpoint, query);

  return hygraphData;
}