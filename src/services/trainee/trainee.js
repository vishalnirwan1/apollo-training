import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';
class TraineeApi extends RESTDataSource {
    constructor() {
        super();
        this.baseUrl = configuration.serviceUrl;
        // console.log('!!!!!!!!!!!!!!!!!!!!!!!!',this.baseUrl);
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.authorizarion);
    }
    async getTrainee() {
        const result = await this.get('http://localhost:9000/api/trainee');
        return result;
    }
}
export default TraineeApi;
