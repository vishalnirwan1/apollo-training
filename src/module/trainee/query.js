// import { RESTDataSource } from 'apollo-datasource-rest'
const Query = {
    getTrainee: async (parent, args, { dataSource }) => {
        return await dataSource.TraineeApi.getTrainee();
    }
}
export default Query;
