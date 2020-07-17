import { ApolloServer } from 'apollo-server-lambda'
import schema from './schema'


export default new ApolloServer({
  formatError: (err) => {
    // Don't give the specific errors to the client.
    if(err.extensions && err.extensions.code){
      console.log(err)
      return new Error('Internal server error')
    }
    console.log(err)
    return err
  },
  context: async (integrationContext) => integrationContext,
  schema,
})
