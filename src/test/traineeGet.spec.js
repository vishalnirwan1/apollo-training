import { makeExecutableSchema } from 'apollo-server-express';
import { graphql } from 'graphql';
import mockTraineeApi from './mockTraineeApi';
import schema from '../index';

const dataSources = {
  traineeApi: mockTraineeApi,
};

const getTraineeTestCases = {
  id: 'All test',
  query: `query { getTrainee {
        count
        status
        message
        data {
          name
          email
          role
          createdAt
        }
      }
    }`,
  variables: {},
  context: { dataSources },

  expected: {
    count: 3,
    status: '200',
    message: 'All trainees fetched successfully',
    data: [
      {
        name: 'Hariom Pandey',
        email: 'hariom2w@gmail.com',
        role: 'trainee',
        createdAt: '2019-09-16T05:14:21.542Z',
      },
      {
        name: 'cdcdc',
        email: 'hariom321dede21d3633ddwdf3d4w@gmail.com',
        role: 'trainee',
        createdAt: '2019-09-12T07:30:17.590Z',
      },
      {
        name: 'vickyt',
        email: 'monty123@gmail.com',
        role: 'trainee',
        createdAt: '2019-09-13T13:10:03.950Z',
      },
    ],
  },
  queryName: 'getTrainee',
};

describe('user fetch test cases', () => {
  const cases = [getTraineeTestCases];
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
