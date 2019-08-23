import { RESTDataSource } from 'apollo-datasource-rest';
import { configuration } from '../../config';

class UserApi extends RESTDataSource {
    constructor() {

        super();
        this.baseURL = configuration.serviceUrl;

    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.authorization);
    }
    
    async profile() {
        const result = await this.get('user/profile');
        return result;
    }
}
export default UserApi;
