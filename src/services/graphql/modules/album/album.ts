import { AlbumInterface } from './interface'

class Album {
  static async album():Promise<AlbumInterface> {
    return {
      "title": "The Dark Side of the Moon.",
      "date": "March 1st, 1973",
      "artist": "Pink Floyd"
    }
  }
}

export default Album