import { gql } from 'apollo-server-lambda'
import { albumTypedefs, albumResolvers } from './album'

// Base typedef 
const baseTypedef = gql`
  type Query
`

export const resolversArray = [
    albumResolvers
]

export const typeDefsArray = [
    baseTypedef,
    albumTypedefs
]