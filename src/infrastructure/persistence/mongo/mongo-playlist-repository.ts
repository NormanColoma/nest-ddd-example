import Playlist from 'src/domain/playlist/playlist';
import PlaylistRepository from '../../../domain/playlist/playlist-repository';

const playlists: Playlist[] = [
  Playlist.create({
    name: 'Top 2024 urban',
    genre: 'rap',
  }),
  Playlist.create({
    name: 'Top 2024 indie',
    genre: 'indie',
  }),
];

class MongoPlaylistRepository implements PlaylistRepository {
  async find(genre: string): Promise<Playlist[]> {
    return playlists.filter((it) => it.genre === genre);
  }
}

export default MongoPlaylistRepository;
