import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import resolvers from './module';

const typeArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all: true });
console.log('>>>>>>>>>>>>',typeArray);
console.log('::::::::::',typeDefs);


export default {
    resolvers,
    typeDefs
};
