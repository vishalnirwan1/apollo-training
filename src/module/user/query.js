import { ErrorHandling } from '../../libs';

const userQuery = {

  userProfile: async (parent, args, { dataSources }) => {
    try {
      const result = await dataSources.userApi.profile();
      if (result.error) {
        new ErrorHandling(result.error);
      }
      return result;
    } catch (err) {
      new ErrorHandling(err);
    }
  },
};

export default userQuery;
