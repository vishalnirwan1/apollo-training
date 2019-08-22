import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';
class TraineeApi extends RESTDataSource {
    constructor() {
        super();
        this.baseUrl = configuration.baseUrl;
    }
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.authorizarion);
    }
    async getTrainee() {
        const result = this.get('trainee');
        return result;
    }
}
export default TraineeApi;
