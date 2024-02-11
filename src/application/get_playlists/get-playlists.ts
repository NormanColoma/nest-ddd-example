import ApplicationService from '../../common/application/application-service';
import ApplicationResponse from '../../common/application/application-response';
import Playlist from '../../domain/playlist/playlist';
import GetPlaylistResponse from './get-playlist-response';
import ApplicationCommand from '../../common/application/application-command';

class GetPlaylists implements ApplicationService {
  execute(command: ApplicationCommand): ApplicationResponse {
    const playlist = Playlist.create({
      name: 'test',
      genre: command.fields['genre'],
    });

    return GetPlaylistResponse.create(playlist);
  }
}

export default GetPlaylists;
