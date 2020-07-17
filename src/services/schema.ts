import { makeExecutableSchema } from 'apollo-server-lambda'
import { GraphQLSchema } from 'graphql';

import { resolversArray, typeDefsArray } from './graphql/modules'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDefsArray,
  resolvers: resolversArray,
})


export default schema