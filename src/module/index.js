import { userQuery, userMutation, userSubscription } from './user';
import { traineeQuery, traineeMutation, traineeSubscription } from './trainee';

const resolvers = {

  Query: {
    ...userQuery,
    ...traineeQuery,
  },

  Mutation: {
    ...userMutation,
    ...traineeMutation,
  },

  Subscription: {
    ...traineeSubscription,
    ...userSubscription
  }
};

export default resolvers;
