import { Module } from '@nestjs/common';
import { PlaylistController } from './infrastructure/rest/http/playlist.controller';
import GetPlaylists from './application/get_playlists/get-playlists';
import MongoPlaylistRepository from './infrastructure/persistence/mongo/mongo-playlist-repository';
import MongoParser from './infrastructure/persistence/mongo/mongo-parser';
import { ApiResponseParser } from './shared/infrastructure/rest/http/api-response';

@Module({
  providers: [
    {
      provide: 'PlaylistRepository',
      useClass: MongoPlaylistRepository,
    },
    {
      provide: 'MongoPlaylistParser',
      useClass: MongoParser,
    },
  ],
  exports: ['PlaylistRepository', 'MongoPlaylistParser'],
})
class InfrastructureDependencies {}

@Module({
  providers: [GetPlaylists],
  exports: [GetPlaylists],
  imports: [InfrastructureDependencies],
})
class ApplicationServices {}

@Module({
  imports: [ApplicationServices],
  exports: [ApiResponseParser],
  providers: [ApiResponseParser],
  controllers: [PlaylistController],
})
export class Container {}
