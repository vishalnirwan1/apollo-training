import { errorHandling } from '../../libs';

const Query = {

  userProfile: async (parent, args, { dataSources }) => {

    const result = await dataSources.userApi.profile();
    if (result.message) {
      new errorHandling(result.message);
    }
    return result;

  },
};
export default Query;
