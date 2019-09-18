import { makeExecutableSchema } from 'apollo-server-express';
import { graphql } from 'graphql';
import mockTraineeApi from './mockTraineeApi';
import schema from '../index';

const dataSources = {
  traineeApi: mockTraineeApi,
};

const traineeUpdateTest = [{
  id: 'success update test',
  query: `mutation($updateTrainee: updateInput){
      updateTrainee(input: $updateTrainee) {
        data{
          id
          name
        }
        status
        message
      }
    }`,
  variables: {
    updateTrainee: {
      id: '5d7b952babfeed0edaa0a393',
      dataToUpdate: {
        name: 'Hariom Pandey',
      },
    },
  },
  context: { dataSources },
  expected: {
    data: {
      id: '5d7f1a2dabfeed0edaa0a394',
      name: 'Hariom Pandey',
    },
    message: 'Trainee updated successfully',
    status: '200',
  },
  queryName: 'updateTrainee',
}, {
  id: 'without id update test',
  query: `mutation($updateTrainee: updateInput){
      updateTrainee(input: $updateTrainee) {
        data{
          id
          name
        }
        status
        message
      }
    }`,
  variables: {
    updateTrainee: {
      id: '',
      dataToUpdate: {
        name: 'Hariom Pandey',
      },
    },
  },
  context: { dataSources },

  expected: {
    message: 'id is required',
  },

  queryName: 'errors',
}, {
  id: 'without dataToUpdate update test',
  query: `mutation($updateTrainee: updateInput){
      updateTrainee(input: $updateTrainee) {
        data{
          id
          name
        }
        status
        message
      }
    }`,
  variables: {
    updateTrainee: {
      id: '5d7b952babfeed0edaa0a393',
      dataToUpdate: {},
    },
  },
  context: { dataSources },
  expected: {
    message: 'dataToUpdate is required',

  },
  queryName: 'errors',
},
];

describe('login test cases', () => {
  const cases = traineeUpdateTest;

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
