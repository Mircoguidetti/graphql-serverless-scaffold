import { ApolloServer } from 'apollo-server-lambda'
import { makeExecutableFromModules } from './helpers/modules'
import { modules } from './modules'

const schema = makeExecutableFromModules({ modules })
export default new ApolloServer({
    formatError: (err) => {
        console.log(err)
        // Don't give the specific errors to the client.
        if (err.extensions && err.extensions.code) {
            return new Error('Internal server error')
        }
        return err
    },
    context: async (integrationContext) => integrationContext,
    schema,
})
