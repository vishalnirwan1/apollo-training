const Query = {

  userProfile: async (parent, args, { dataSources }) => {

    const result = await dataSources.userApi.profile();
    return result;

  },
};
export default Query;
