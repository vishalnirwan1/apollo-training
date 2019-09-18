import { pubsub, LOGIN } from '../../subscription';
import { ErrorHandling } from '../../libs';

const userMutation = {
  login: async (parent, args, { dataSources }) => {
    try {
      const result = await dataSources.userApi.login(args);
      if (result.error) {
        new ErrorHandling(result.error);
      }
      pubsub.publish(LOGIN, {
        login: result,
      });
      return result;
    } catch (err) {
      new ErrorHandling(err);
    }
  },
};

export default userMutation;
