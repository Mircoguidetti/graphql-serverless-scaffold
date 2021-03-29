import { ApolloServer, ApolloError } from 'apollo-server-lambda'
import modules from './modules'
import { GraphQLFormattedError } from 'graphql'

export default new ApolloServer({
  modules,
  formatError: (err): GraphQLFormattedError<Record<string, unknown>> => {
    console.log('ERROR', err)
    // Don't give the specific errors to the client.
    if (err.extensions?.code === 'INTERNAL_SERVER_ERROR' && !process.env.IS_OFFLINE) {
      return new ApolloError('Internal server error')
    }
    return err
  },
}) as any
