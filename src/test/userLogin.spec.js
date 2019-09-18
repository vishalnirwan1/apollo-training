import { makeExecutableSchema } from 'apollo-server-express';
import { graphql } from 'graphql';
import mockUserApi from './mockUserApi';
import schema from '../index';

const dataSources = {
  userApi: mockUserApi,
};

const userLoginTest = [{
  id: 'Success login test',
  query: `mutation($login: requestLogin){
        login(input: $login)  {
          data{
            token
          }
          message
          status
        }
      }`,
  variables: {
    login: {
      email: 'vishal@gmail.com',
      password: 'Training@123',
    },
  },
  context: { dataSources },

  expected: {
    data: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDc5YzQ3OWExOTYxNzI0OWMwNzJhMGIiLCJuYW1lIjoiVmlzaGFsIiwiZW1haWwiOiJ2aXNoYWxAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkVjRlYm5SLm1hMjRrcDhZTzBGSEFPT09RNmEyM3NNQ2JXNDFjbjdVNGY1NzhrVW9GZEJBcU8iLCJyb2xlIjoiaGVhZC10cmFpbmVyIiwiY3JlYXRlZEJ5IjoiNWQ3OWM0NzlhMTk2MTcyNDljMDcyYTBiIiwib3JpZ2luYWxJZCI6IjVkNzljNDc5YTE5NjE3MjQ5YzA3MmEwYiIsImNyZWF0ZWRBdCI6IjIwMTktMDktMTJUMDQ6MDc6MjEuNzI4WiIsImlhdCI6MTU2ODM1MTI4NSwiZXhwIjoxNTY4MzUzMDg1fQ.3P12HG_kllTKUiREFCjpaGWwSbWoWKOxDQH-Iv87f1s',
    },
    message: 'Login successful',
    status: '200',
  },
  queryName: 'login',
},
{
  id: 'wrong emailId login test',
  query: `mutation($login: requestLogin){
    login(input: $login)  {
      data{
        token
      }
      message
      status
    }
  }`,
  variables: {
    login: {
      email: 'visha@gmail.com',
      password: 'Training@123',
    },
  },
  context: { dataSources },
  expected: {
    message: 'User not found',
  },
  queryName: 'errors',

},
];

describe('login test cases', () => {
  const cases = userLoginTest;

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
