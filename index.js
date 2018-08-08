import express from "express";
import graphqlHttp from "express-graphql";
import schema from "./schema";

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const rootValue = { friend: () => ({
  id: 1337,
  firstName: "White",
  lastName: "Rose",
  gender: "Female",
  language: "Chinese",
  emails: [ { email: "whiterose@example.org" } ]
})};

app.use("/graphql", graphqlHttp({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Running server on port http://localhost:${PORT}`));
