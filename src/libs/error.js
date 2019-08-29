import { AuthenticationError, ForbiddenError, UserInputError, ApolloError } from 'apollo-server-express';

class errorHandling {
  constructor(err) {
    const { error, status } = err;
    if (status === 401) {
      this.authenticationError(error);
    }
    else if (status === 403) {
      this.forbiddenError(error);
    }
    else if (status === 400) {
      this.userInputError(error);
    }
    else {
      this.apolloError(error);

    }
  }
  authenticationError(err) {
    throw new AuthenticationError(err);
  }
  forbiddenError(err) {
    throw new ForbiddenError(err);
  }
  userInputError(err) {
    throw new UserInputError(err);
  }
  apolloError(err) {
    throw new ApolloError(err);
  }
}
export default errorHandling;