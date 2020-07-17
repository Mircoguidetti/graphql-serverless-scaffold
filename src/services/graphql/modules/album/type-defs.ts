import { gql } from 'apollo-server-lambda'

export default gql`
  type Album {
    id: Int
    title: String
    date: String
    artist: String
  }
  extend type Query {
    album: Album
  } 
`