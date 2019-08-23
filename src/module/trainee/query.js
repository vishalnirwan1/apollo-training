const Query = {
    getTrainee: async (parent, args, { dataSources }) => {
        // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',dataSources);
        return dataSources.traineeApi.getTrainee();
    }
}
export default Query;
