import UserQuery from './user';
import TraineeQuery from './trainee';

const resolvers = {
    Query: {
        ...UserQuery,
        ...TraineeQuery,
    },
};

export default resolvers;
