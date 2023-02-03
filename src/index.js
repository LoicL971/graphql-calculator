// const {ApolloServer} = require('apollo-server');
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';
// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
import { resolvers } from './resolvers.js';



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at http://localhost:4000
    `);
  });
  