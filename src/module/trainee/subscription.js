import { pubsub, ADD_TRAINEE, UPDATE_TRAINEE, DELETE_TRAINEE } from "../../subscription";

const traineeSubscription = {
  addTrainee: {
    subscribe: () => pubsub.asyncIterator([ADD_TRAINEE]),
  },
  updateTrainee: {
    subscribe: () => pubsub.asyncIterator([UPDATE_TRAINEE]),

  },
  deleteTrainee: {
    subscribe: () => pubsub.asyncIterator([DELETE_TRAINEE]),

  }
}
export default traineeSubscription;
