import DatabaseParser from '../../../shared/infrastructure/persistence/database-parser';
import Playlist from '../../../domain/playlist/playlist';

class MongoPlaylistParser implements DatabaseParser {
  to_database_object(entity: Playlist): object {
    const document = entity.toPrimitives();
    document['_id'] = entity.id;
    delete document['id'];

    return document;
  }

  to_domain_object(data: object): Playlist {
    return Playlist.build({
      id: data['_id'],
      createdAt: data['createdAt'],
      name: data['name'],
      favorite: data['favorite'],
      genre: data['genre'],
    });
  }
}

export default MongoPlaylistParser;
