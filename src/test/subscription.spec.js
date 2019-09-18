import { userSubscription } from '../module/user';

jest.mock(
  '../subscription', () => ({
    pubsub: {
      asyncIterator: () => ['login successful', 'trainee added successfully', 'trainee updated successfully', 'trainee deleted successfully'],
    },
    LOGIN: 'LOGIN',
    ADD_TRAINEE: 'ADD_TRAINEE',
    UPDATE_TRAINEE: 'UPDATE_TRAINEE',
    DELETE_TRAINEE: 'DELETE_TRAINEE',
  }),
);

describe('login subscription', () => {
  it('should subscribe login', async (done) => {
    const { login } = userSubscription;
    expect(login.subscribe()[0]).toBe('login successful');
    done();
  });
});
