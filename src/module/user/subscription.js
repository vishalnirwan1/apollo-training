import { pubsub, LOGIN } from '../../subscription';

const userSubscription = {
  login: {
    subscribe: () => pubsub.asyncIterator([LOGIN]),
  }
}
export default userSubscription;