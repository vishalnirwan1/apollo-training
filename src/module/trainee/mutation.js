import { pubsub, ADD_TRAINEE, UPDATE_TRAINEE, DELETE_TRAINEE } from "../../subscription";
import { ErrorHandling } from '../../libs'

const traineeMutation = {

  addTrainee: async (parent, args, { dataSources }) => {
    try {

      const result = await dataSources.traineeApi.addTrainee(args);
      if (result.error) {
        new ErrorHandling(result.error);
      }
      pubsub.publish(ADD_TRAINEE, {
        addTrainee: result
      });
      return result;

    }
    catch (err) {
      new ErrorHandling(err);
    }
  },

  updateTrainee: async (parent, args, { dataSources }) => {
    try {

      const result = await dataSources.traineeApi.updateTrainee(args);
      if (result.error) {
        new ErrorHandling(result.error);
      }
      pubsub.publish(UPDATE_TRAINEE, {
        updateTrainee: result
      });
      return result;

    }
    catch (err) {
      new ErrorHandling(err);
    }
  },

  deleteTrainee: async (parent, args, { dataSources }) => {
    try {

      const result = await dataSources.traineeApi.deleteTrainee(args);
      if (result.error) {
        new ErrorHandling(result.error);
      }
      pubsub.publish(DELETE_TRAINEE, {
        deleteTrainee: result
      });
      return result;

    }
    catch (err) {
      new ErrorHandling(err);
    }
  },
};

export default traineeMutation;