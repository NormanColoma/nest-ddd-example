import { Controller, Get } from '@nestjs/common';
import GetPlaylists from '../../../application/get_playlists/get-playlists';
import GetPlaylistCommand from '../../../application/get_playlists/get-playlist-command';
import GetPlaylistResponse from '../../../application/get_playlists/get-playlist-response';

@Controller()
export class PlaylistController {
  constructor(private readonly appService: GetPlaylists) {}

  @Get()
  async getHello(): Promise<object> {
    const command: GetPlaylistCommand = new GetPlaylistCommand('rap');
    const response: GetPlaylistResponse =
      await this.appService.execute(command);
    return response.toJson();
  }
}
