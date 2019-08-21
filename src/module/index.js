import * as path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
// import * as trainee from './trainee/types.graphql';
// import * as user from './user/types.graphql'

console.log(path, __dirname);
const typeArray = fileLoader(path.join(__dirname, './**/types.graphql'));
console.log('>>>>>>>>>>', typeArray)
// const typesOfTrainee = [* as
//     trainee,
//     user,
// ]
const typeDefs = mergeTypes(typeArray, { all: true });
console.log(':::::::::', typeDefs);
export default typeDefs;
