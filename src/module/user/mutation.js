import { pubsub, LOGIN } from '../../subscription';
import { errorHandling } from '../../libs';

const userMutation = {
  login: async (parent, args, { dataSources }) => {
    const result = await dataSources.userApi.login(args);
    if (result.error) {
      new errorHandling(result.error);
    }
    pubsub.publish(LOGIN, {
      login: result
    });
    return result;
  }
}
export default userMutation;
