import ApplicationService from '../../common/application/application-service';
import ApplicationResponse from '../../common/application/application-response';
import Playlist from '../../domain/playlist/playlist';
import GetPlaylistResponse from './get-playlist-response';
import GetPlaylistCommand from './get-playlist-command';

class GetPlaylists implements ApplicationService {
  execute(command: GetPlaylistCommand): ApplicationResponse {
    const playlist = Playlist.create({ name: 'test', genre: command.genre });

    return GetPlaylistResponse.create(playlist);
  }
}

export default GetPlaylists;
