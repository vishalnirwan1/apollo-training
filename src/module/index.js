import UserQuery from './user';
import TraineeQuery from './trainee';
import { userMutation } from './user';
import { traineeMutation } from './trainee';
import { traineeSubscription } from './trainee';
import { userSubscription } from './user';

const resolvers = {
  Query: {
    ...UserQuery,
    ...TraineeQuery,
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
