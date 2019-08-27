const Query = {
    getTrainee: async (parent, args, { dataSources }) => {

        const result = await dataSources.traineeApi.getTrainee();
        return result;

    }
}
export default Query;
