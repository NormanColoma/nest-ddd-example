import { TestBed } from '@automock/jest';
import GetPlaylists from '../../../src/application/get_playlists/get-playlists';
import PlaylistRepository from '../../../src/domain/playlist/playlist-repository';
import Playlist from '../../../src/domain/playlist/playlist';
import GetPlaylistCommand from '../../../src/application/get_playlists/get-playlist-command';

describe('get-playlists', () => {
  let getPlaylists: GetPlaylists;
  let playlistRepository: jest.Mocked<PlaylistRepository>;
  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(GetPlaylists).compile();

    getPlaylists = unit;
    playlistRepository = unitRef.get('PlaylistRepository');
  });

  it('should return a list of playlists', async () => {
    const playlist = Playlist.create({
      name: 'Test',
      favorite: false,
      genre: 'Test',
    });
    playlistRepository.find.mockResolvedValue([playlist]);

    const command = new GetPlaylistCommand('rap');
    const playlists = await getPlaylists.execute(command);

    expect(playlists.toJson()).toEqual([
      {
        id: playlist.id,
        name: playlist.name,
        genre: playlist.genre,
        favorite: playlist.favorite,
      },
    ]);

    expect(playlistRepository.find).toHaveBeenCalledWith('rap');
  });
});
