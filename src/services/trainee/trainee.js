import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';

class TraineeApi extends RESTDataSource {
    constructor() {

        super();
        this.baseURL = configuration.serviceUrl;

    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.authorization);
    }
    
    async getTrainee() {
        const result = await this.get('trainee');
        return result;
    }
}
export default TraineeApi;
