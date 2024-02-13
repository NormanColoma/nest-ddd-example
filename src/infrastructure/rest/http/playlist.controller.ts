import { Controller, Get } from '@nestjs/common';
import GetPlaylists from '../../../application/get_playlists/get-playlists';
import GetPlaylistCommand from '../../../application/get_playlists/get-playlist-command';
import GetPlaylistResponse from '../../../application/get_playlists/get-playlist-response';

@Controller()
export class PlaylistController {
  constructor(private readonly appService: GetPlaylists) {}

  @Get()
  getHello(): object {
    const command: GetPlaylistCommand = new GetPlaylistCommand('hip-hop');
    const response: GetPlaylistResponse = this.appService.execute(command);
    return response.toJson();
  }
}
