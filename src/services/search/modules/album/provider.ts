import { AlbumInterface } from './interface'

export class AlbumProvider {
  static album(): AlbumInterface {
    return {
      "title": "The Dark Side of the Moon.",
      "date": "March 1st, 1973",
      "artist": "Pink Floyd"
    }
  }
}