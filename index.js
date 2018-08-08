import express from "express";
import graphqlHttp from "express-graphql";
import schema from "./schema";

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

class Friend {
  constructor(id, { firstName, lastName, gender, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
  }
};

const friendDatabase = {};

const rootValue = { 
  friend: () => ({
    id: 1337,
    firstName: "White",
    lastName: "Rose",
    gender: "Female",
    language: "Chinese",
    emails: [ { email: "whiterose@example.org" } ]
  }),
  createFriend: ({ input }) => {
    let id = require("crypto").randomBytes(10).toString("hex")
    friendDatabase[id] = input;
    return new Friend(id, input);
  }
};

app.use("/graphql", graphqlHttp({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Running server on port http://localhost:${PORT}`));
