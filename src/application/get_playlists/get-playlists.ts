import ApplicationService from '../../shared/application/application-service';
import GetPlaylistResponse from './get-playlist-response';
import GetPlaylistCommand from './get-playlist-command';
import { Inject } from '@nestjs/common';
import PlaylistRepository from '../../domain/playlist/playlist-repository';
import Playlist from '../../domain/playlist/playlist';

class GetPlaylists implements ApplicationService {
  constructor(
    @Inject('PlaylistRepository')
    private readonly playlistRepository: PlaylistRepository,
  ) {}

  async execute(command: GetPlaylistCommand): Promise<GetPlaylistResponse> {
    const playlist = Playlist.create({
      name: 'Test',
      favorite: false,
      genre: 'Test',
    });
    const playlists: Playlist[] = await this.playlistRepository.find(
      command.genre,
    );

    return GetPlaylistResponse.create(playlists);
  }
}

export default GetPlaylists;
