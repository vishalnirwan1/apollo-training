import { pubsub, ADD_TRAINEE, UPDATE_TRAINEE, DELETE_TRAINEE } from "../../subscription";
import { errorHandling } from '../../libs'

const traineeMutation = {
  addTrainee: async (parent, args, { dataSources }) => {
    const result = await dataSources.traineeApi.addTrainee(args);
    if (result.error) {
      new errorHandling(result.error);
    }
    pubsub.publish(ADD_TRAINEE, {
      addTrainee: result
    });
    return result;
  },
  updateTrainee: async (parent, args, { dataSources }) => {
    const result = await dataSources.traineeApi.updateTrainee(args);
    console.log(result)
    if (result.error) {
      new errorHandling(result.error);
    }
    pubsub.publish(UPDATE_TRAINEE, {
      updateTrainee: result
    });
    return result;
  },
  deleteTrainee: async (parent, args, { dataSources }) => {
    const result = await dataSources.traineeApi.deleteTrainee(args);
    if (result.error) {
      new errorHandling(result.error);
    }
    pubsub.publish(DELETE_TRAINEE, {
      deleteTrainee: result
    });
    return result;
  }

}
export default traineeMutation;