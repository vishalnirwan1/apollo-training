import { datasource } from 'apollo-datasource-graphql';
import { configuration } from '../config';
class traineeApi extends datasource {
    constructor() {
        this.baseUrl = configuration.baseUrl;
    }
    async getTrainee() {
        const result = this.get('trainee');
        return result;
    }
}
export default traineeApi;
