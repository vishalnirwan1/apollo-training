import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { configuration } from './config';
import { TraineeApi, UserApi }from './services';
import schema from '.';

// console.log(TraineeApi, '------->>>>>>', UserApi);

const app = express();

const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  dataSources: () => {

    return {
      traineeApi: new TraineeApi(),
      userApi: new UserApi(),

    };
  },

  context: ({ req }) => {
    return { authorization: req.headers.authorization }
  }
});

server.applyMiddleware({ app });

app.listen({ port: configuration.port }, () => {
  console.log('server is ready');
});
