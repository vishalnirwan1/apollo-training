import { errorHandling } from '../../libs';

const Query = {

  userProfile: async (parent, args, { dataSources }) => {

    const result = await dataSources.userApi.profile();
    if (result.error) {
      new errorHandling(result.error);
    }
    return result;

  },
};
export default Query;
