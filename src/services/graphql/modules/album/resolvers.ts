import { AlbumProvider } from './provider'

export const resolvers = {
  Query: {
    album: () => AlbumProvider.getAlbum(),
  },
}
