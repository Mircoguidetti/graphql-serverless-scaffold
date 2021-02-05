import { gql } from 'apollo-server-lambda'
import { resolvers } from './resolvers'

export const albumModule = {
  resolvers,
  typeDefs: gql`
  type Album {
    id: Int
    title: String
    date: String
    artist: String
  }
  extend type Query {
    album: Album
  } 
  `,
}   