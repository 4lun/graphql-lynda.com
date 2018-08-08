import express from "express";
import graphqlHttp from "express-graphql";
import schema from "./schema";
import resolvers from "./resolvers";

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

app.use("/graphql", graphqlHttp({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Running server on port http://localhost:${PORT}`));
