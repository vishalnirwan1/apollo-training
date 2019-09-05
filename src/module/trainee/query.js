import { ErrorHandling } from '../../libs';

const Query = {
  getTrainee: async (parent, args, { dataSources }) => {
    try {

      const result = await dataSources.traineeApi.getTrainee();
      if (result.error) {
        new ErrorHandling(result.error);
      }
      return result;

    }
    catch (err) {
      new ErrorHandling(err);
    }
  },
};

export default Query;
