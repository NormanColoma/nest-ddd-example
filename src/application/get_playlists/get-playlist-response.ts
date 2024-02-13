import ApplicationResponse from '../../common/application/application-response';
import Playlist from '../../domain/playlist/playlist';

class GetPlaylistResponse implements ApplicationResponse {
  private playlist: Playlist;
  private constructor(playlist: Playlist) {
    this.playlist = playlist;
  }

  public static create(playlist: Playlist): GetPlaylistResponse {
    return new GetPlaylistResponse(playlist);
  }
  toJson(): object {
    return {
      id: this.playlist.id,
      name: this.playlist.name,
      genre: this.playlist.genre,
      favorite: this.playlist.favorite,
    };
  }
}

export default GetPlaylistResponse;
