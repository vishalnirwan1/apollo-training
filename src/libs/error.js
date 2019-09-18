import { AuthenticationError, ForbiddenError, UserInputError, ApolloError } from 'apollo-server-express';

class ErrorHandling {
  constructor(err) {
    const { message, status } = err;

    if (status === 401) {
      this.authenticationError(message);
    } else if (status === 403) {
      this.forbiddenError(message);
    } else if (status === 400) {
      this.userInputError(message);
    } else {
      this.apolloError(message);
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

export default ErrorHandling;
