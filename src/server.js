import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { configuration } from './config';
import TraineeApi from './services';
import schema from '.';

console.log('****************', schema);
const app = express();
app.get('/health-check', (req, res) => {
            res.send('I am Ok');
        });

const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
  dataSources: () => {
    return {
      traineeApi : new TraineeApi(),
    };
  },
  context: ({ request, connection }) => {
    if(connection) {
      return connection.context;
    }
    else {
      return { authorization : request.headers && request.headers.authorization }
    }
  }
});

server.applyMiddleware({ app });

app.listen({ port: configuration.port }, () => {
  console.log('server is ready', app);
});
