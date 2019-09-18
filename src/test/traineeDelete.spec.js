import { makeExecutableSchema } from 'apollo-server-express';
import { graphql } from 'graphql';
import mockTraineeApi from './mockTraineeApi';
import schema from '../index';

const dataSources = {
  traineeApi: mockTraineeApi,
};

const traineeDeleteTest = [{
  id: 'successful delete test',
  query: `mutation($deleteTrainee: deleteInput){
        deleteTrainee(input: $deleteTrainee)
        {
          data{
            id
          }
          message
          status
        }
    }`,
  variables: {
    deleteTrainee: {
      id: '5d79c479a19617249c072a0b',
    },
  },
  context: { dataSources },
  expected: {
    data: {
      id: '5d7b9406abfeed0edaa0a391',
    },
    message: 'Trainee deleted successfully',
    status: '200',
  },
  queryName: 'deleteTrainee',
}, {
  id: 'unsuccessful delete test',
  query: `mutation($deleteTrainee: deleteInput){
    deleteTrainee(input: $deleteTrainee)
    {
      data{
        id
      }
      message
      status
    }
}`,
  variables: {
    deleteTrainee: {
      id: '3',
    },
  },
  context: { dataSources },
  expected: {
    message: 'user not found for delete',
  },
  queryName: 'errors',
},
];

describe('login test cases', () => {
  const cases = traineeDeleteTest;
  cases.forEach(({
    id, query, variables, context, expected, queryName,
  }) => {
    const schemaa = makeExecutableSchema(schema);

    it(`query: ${id}`, async () => {
      const result = await graphql(schemaa, query, null, context, variables);
      if (result.errors) {
        return expect(result[queryName][0].message).toEqual(expected.message);
      }
      return expect(result.data[queryName]).toEqual(expected);
    });
  });
});
