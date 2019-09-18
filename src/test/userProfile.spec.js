import { makeExecutableSchema } from 'apollo-server-express';
import { graphql } from 'graphql';
import mockUserApi from './mockUserApi';
import schema from '../index';

const dataSources = {
  userApi: mockUserApi,
};

const userProfileTestCase = {
  id: 'All test',
  query: `query { userProfile{
        data{
          _id
          email
          name
          role
        }
        message
        status
      }

    }`,
  variables: {},
  context: { dataSources },

  expected: {
    data: {
      _id: '5d79c479a19617249c072a0b',
      email: 'vishal@gmail.com',
      name: 'Vishal',
      role: 'head-trainer',
    },
    status: '200',
    message: 'User fetched successfully',
  },
  queryName: 'userProfile',
};

describe('user fetch test cases', () => {
  const cases = [userProfileTestCase];
  cases.forEach(({
    id, query, variables, context, expected, queryName,
  }) => {
    const schemaa = makeExecutableSchema(schema);

    it(`query: ${id}`, async () => {
      const result = await graphql(schemaa, query, null, context, variables);
      return expect(result.data[queryName]).toEqual(expected);
    });
  });
});
