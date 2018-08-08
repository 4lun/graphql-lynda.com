import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    friend: Friend
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }

  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
  }

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    gender: String
    language: String
    email: String
  }
`);

export default schema;
