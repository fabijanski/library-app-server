const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const db = require("./db");
const PORT = process.env.PORT || 4000;
const ASSETS_BASE_URL =
  process.env.ASSETS_BASE_URL || "http://examples.devmastery.pl";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
    assetsBaseUrl: ASSETS_BASE_URL
  },
  introspection: true,
  playground: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
