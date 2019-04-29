import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
  type Query {
    name: String!
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers
});