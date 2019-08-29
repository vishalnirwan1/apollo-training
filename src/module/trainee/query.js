import { errorHandling } from '../../libs';
const Query = {
  getTrainee: async (parent, args, { dataSources }) => {

    const result = await dataSources.traineeApi.getTrainee();
    if (result.message) {
      new errorHandling(result.message);
    }
    return result;

  }
}
export default Query;
