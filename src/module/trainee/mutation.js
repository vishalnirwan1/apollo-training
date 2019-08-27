import { pubsub, ADD_TRAINEE, UPDATE_TRAINEE, DELETE_TRAINEE } from "../../subscription";

const traineeMutation = {
    addTrainee: async (parent, args, { dataSources }) => {
        const result = await dataSources.traineeApi.addTrainee(args);
        pubsub.publish(ADD_TRAINEE, {
            addTrainee: result
        });
        return result;
    },
    updateTrainee: async (parent, args, { dataSources }) => {
        const result = await dataSources.traineeApi.updateTrainee(args);
        pubsub.publish(UPDATE_TRAINEE, {
            updateTrainee: result
        });
        return result;
    },
    deleteTrainee: async (parent, args, { dataSources }) => {
        const result = await dataSources.traineeApi.deleteTrainee(args);
        pubsub.publish(DELETE_TRAINEE, {
            deleteTrainee: result
        });
        return result;
    }

}
export default traineeMutation;