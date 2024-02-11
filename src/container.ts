import { Module } from '@nestjs/common';
import { PlaylistController } from './infrastructure/rest/http/playlist.controller';
import GetPlaylists from './application/get_playlists/get-playlists';

@Module({
  providers: [GetPlaylists],
  exports: [GetPlaylists],
  controllers: [PlaylistController],
})
export class Container {}
