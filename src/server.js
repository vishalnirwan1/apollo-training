import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { configuration } from './config';
import  Trainee  from './services';
import schema from '.';


// console.log('****************', Trainee);
const app = express();

const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  dataSources: () => {
    return {
      traineeApi: new Trainee(),
    };
  },
  context: ({ req }) => {
    return { authorization: req && req.headers && req.headers.authorization }
  }
});

server.applyMiddleware({ app });

app.listen({ port: configuration.port }, () => {
  console.log('server is ready');
});
