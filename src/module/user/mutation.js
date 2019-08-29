import { pubsub, LOGIN } from '../../subscription';
import { errorHandling } from '../../libs';

const userMutation = {
  login: async (parent, args, { dataSources }) => {
    console.log(args);
    const result = await dataSources.userApi.login(args);
    if (result.message) {
      new errorHandling(result.message);
    }
    pubsub.publish(LOGIN, {
      login: result
    });
    return result;
  }
}
export default userMutation;
