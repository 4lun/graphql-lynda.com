import express from "express";
import graphqlHttp from "express-graphql";
import schema from "./schema";

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const rootValue = { hello: () => "Hi, I'm Alun" };

app.use("/graphql", graphqlHttp({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(PORT, () => console.log(`Running server on port http://localhost:${PORT}`));
