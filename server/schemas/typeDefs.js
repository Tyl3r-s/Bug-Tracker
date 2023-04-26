const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Entry {
  _id: ID
  title: String!
  entryText: String!
  createdAt: String
}

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    entries: [Entry]
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    entries(email: String): [Entry]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addEntry(title: String!, entryText: String!): Entry
    editEntry(_id: ID!, title: String, entryText: String): Entry
    deleteEntry(_id: ID!): ID
  }
`;

module.exports = typeDefs;