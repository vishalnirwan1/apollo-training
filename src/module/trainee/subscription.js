import { withFilter } from 'graphql-subscriptions';
import { pubsub, ADD_TRAINEE, UPDATE_TRAINEE, DELETE_TRAINEE } from '../../subscription';
import { authorize } from '../../libs';

const traineeSubscription = {

  addTrainee: {
    subscribe: withFilter(() => pubsub.asyncIterator([ADD_TRAINEE]),
      (payload, variables, context) => {
        const {
          addTrainee: {
            result: {
              data: { details: { originalId } },
            }, authorization: token,
          },
        } = payload;
        const { Authorization: subscriptionToken } = context;

        const answer = authorize(originalId, token, subscriptionToken);
        return answer;
      }),
  },

  updateTrainee: {
    subscribe: withFilter(() => pubsub.asyncIterator([UPDATE_TRAINEE]),
      (payload, variables, context) => {
        const { updateTrainee: { result: { data: { id } }, authorization: token } } = payload;
        const { Authorization: subscriptionToken } = context;

        const answer = authorize(id, token, subscriptionToken);
        return answer;
      }),
  },

  deleteTrainee: {
    subscribe: withFilter(() => pubsub.asyncIterator([DELETE_TRAINEE]),
      (payload, variables, context) => {
        const { deleteTrainee: { result: { data: { id } }, authorization: token } } = payload;
        const { Authorization: subscriptionToken } = context;

        const answer = authorize(id, token, subscriptionToken);
        return answer;
      }),
  },
};

export default traineeSubscription;
