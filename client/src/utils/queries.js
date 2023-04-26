import gql from 'graphql-tag';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_ENTRIES = gql`
query entries ($email: String!) {
  entries (email: $email) {
    _id
    title
    entryText
    createdAt
  }
}
`;

export const QUERY_ENTRY = gql`
query entry($id: ID!) {
  entry(_id: $id) {
    _id
    title
    entryText
    createdAt
  }
}`