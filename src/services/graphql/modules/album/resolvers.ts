import Album from './album'

export default {
  Query: {
    album: async () => Album.album(),
  },
}