import { gql, makeExecutableSchema } from 'apollo-server-lambda'

import deepmerge from 'deepmerge'

const globalTypeDefs = gql`
  type Query
  type Mutation
`

export const makeExecutableFromModules = ({ modules }) => {

    const [typeDefs, resolvers] = modules.map((module) => {
        const typeDef = [...typeDefs, ...module.typeDefs]

        const resolver = deepmerge(resolvers, module.resolvers)
        return [typeDef, resolver]
    })
    let schema = makeExecutableSchema({
        typeDefs: [...typeDefs, globalTypeDefs],
        resolvers,
        schemaDirectives: {},
    })

    return schema
}
