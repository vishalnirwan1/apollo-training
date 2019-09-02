import { errorHandling } from '../../libs';
const Query = {
  getTrainee: async (parent, args, { dataSources }) => {

    const result = await dataSources.traineeApi.getTrainee();
    if (result.error) {
      new errorHandling(result.error);
    }
    return result;

  }
}
export default Query;
