import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { configuration } from './config';
import schema from '.';

console.log('****************', schema);
const app = express();

const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
});

server.applyMiddleware({ app });

app.listen({ port: configuration.port }, () => {
  console.log('server is ready');
});
