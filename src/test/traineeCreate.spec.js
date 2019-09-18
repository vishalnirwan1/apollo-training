import { makeExecutableSchema } from 'apollo-server-express';
import { graphql } from 'graphql';
import mockTraineeApi from './mockTraineeApi';
import schema from '../index';

const dataSources = {
  traineeApi: mockTraineeApi,
};

const traineeCreateTest = [{
  id: 'success create test',
  query: `mutation($addTrainee: createInput){
        addTrainee(input: $addTrainee) {
          data{
            details {
              email
              name
              role
              originalId
              createdBy
            }
            
          }
          message
          status
          }
        }`,
  variables: {
    addTrainee: {
      name: 'vickyt',
      password: '123',
      email: 'monty123@gmail.com',
    },
  },
  context: { dataSources },
  expected: {
    data: {
      details: {
        email: 'monty123@gmail.com',
        name: 'vickyt',
        role: 'trainee',
        originalId: '5d7b952babfeed0edaa0a393',
        createdBy: 'Vishal',
      },
    },
    message: 'Trainee created successfully',
    status: '200',
  },
  queryName: 'addTrainee',
}, {
  id: 'without name create test',
  query: `mutation($addTrainee: createInput){
        addTrainee(input: $addTrainee) {
          data{
            details {
              email
              name
              role
              originalId
              createdBy
            }
            
          }
          message
          status
          }
        }`,
  variables: {
    addTrainee: {
      name: '',
      password: '123',
      email: 'monty123@gmail.com',
    },
  },
  context: { dataSources },
  expected: {
    message: 'Name is required',
  },
  queryName: 'errors',
}, {
  id: 'without password create test',
  query: `mutation($addTrainee: createInput){
        addTrainee(input: $addTrainee) {
          data{
            details {
              email
              name
              role
              originalId
              createdBy
            }
            
          }
          message
          status
          }
        }`,
  variables: {
    addTrainee: {
      name: 'vickyt',
      password: '',
      email: 'monty123@gmail.com',
    },
  },
  context: { dataSources },
  expected: {
    message: 'password is required',
  },
  queryName: 'errors',
}, {
  id: 'without email create test',
  query: `mutation($addTrainee: createInput){
        addTrainee(input: $addTrainee) {
          data{
            details {
              email
              name
              role
              originalId
              createdBy
            }
            
          }
          message
          status
          }
        }`,
  variables: {
    addTrainee: {
      name: 'vickyt',
      password: '123',
      email: '',
    },
  },
  context: { dataSources },
  expected: {
    message: 'email is required',
  },
  queryName: 'errors',
}, {
  id: 'empty create test',
  query: `mutation($addTrainee: createInput){
        addTrainee(input: $addTrainee) {
          data{
            details {
              email
              name
              role
              originalId
              createdBy
            }
            
          }
          message
          status
          }
        }`,
  variables: {
    addTrainee: {
      name: '',
      password: '',
      email: '',
    },
  },
  context: { dataSources },
  expected: {
    message: 'email is required,password is required,Name is required',
  },
  queryName: 'errors',
},
];

describe('create test cases', () => {
  const cases = traineeCreateTest;

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
