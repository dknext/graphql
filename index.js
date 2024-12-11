
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

import { typeDefs } from "./shema";

// server setup
const server = new ApolloServer({
  // typeDefs→definitions of types of data
  typeDefs,
  // resolvers→

})


const {url} = await startStandaloneServer(server, {
  listen:{port:4000}
})

console.log("Server ready at port", 4000)