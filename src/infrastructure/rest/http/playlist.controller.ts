import { Controller, Get } from '@nestjs/common';
import GetPlaylists from '../../../application/get_playlists/get-playlists';
import ApplicationResponse from '../../../common/application/application-response';
import GetPlaylistCommand from '../../../application/get_playlists/get-playlist-command';
import ApplicationCommand from '../../../common/application/application-command';

@Controller()
export class PlaylistController {
  constructor(private readonly appService: GetPlaylists) {}

  @Get()
  getHello(): object {
    const command: ApplicationCommand = new GetPlaylistCommand('hip-hop');
    const response: ApplicationResponse = this.appService.execute(command);
    return response.toJson();
  }
}
