import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { configuration } from './config';
import {resolvers} from './module/trainee';
import typeDefs from './module';
console.log('frrrfrfrfr', resolvers);
const app = express();
export default class Server {
  constructor() {
    
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });
    app.listen({ port: configuration.port }, () => {
      console.log('server is ready');
    });
  }
}
