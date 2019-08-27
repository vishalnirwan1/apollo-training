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

    async login(args) {
        const { email, password} = args.input;
        const result = await this.post('user/login', { email, password });
        return result;

    }
}
export default UserApi;
