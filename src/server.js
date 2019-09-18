import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { createServer } from 'http';
import { configuration } from './config';
import { TraineeApi, UserApi } from './services';
import schema from '.';

const app = express();

export const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  dataSources: () => ({
    traineeApi: new TraineeApi(),
    userApi: new UserApi(),

  }),

  context: ({ req, connection }) => {
    if (connection) {
      return connection.context;
    }
    return { authorization: req.headers.authorization || '' };
  },
});

server.applyMiddleware({ app });
export const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: configuration.port }, () => {
  console.log(`🚀 Server ready at http://localhost:${configuration.port}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${configuration.port}${server.subscriptionsPath}`);

  console.log('server is ready');
});
