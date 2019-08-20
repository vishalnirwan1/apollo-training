import { ApolloServer, gql } from 'apollo-server-express';
import * as express from 'express';
import { configuration } from './config';

const app = express();
export default class Server {
  constructor() {
    const typeDefs = gql`
type Query {
  "A simple type for getting started!"
  hello: String
}
`;
    const resolvers = {
      Query: {
        hello: () => 'world',
      },
    };
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });
    app.listen({ port: configuration.port }, () => {
      console.log('server is ready');
    });
  }
}
