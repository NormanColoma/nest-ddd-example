import { Module } from '@nestjs/common';
import { PlaylistController } from './infrastructure/rest/http/playlist.controller';
import GetPlaylists from './application/get_playlists/get-playlists';
import MongoPlaylistRepository from './infrastructure/persistence/mongo/mongo-playlist-repository';

@Module({
  providers: [
    GetPlaylists,
    {
      provide: 'PlaylistRepository',
      useClass: MongoPlaylistRepository,
    },
  ],
  exports: [GetPlaylists],
  controllers: [PlaylistController],
})
export class Container {}
