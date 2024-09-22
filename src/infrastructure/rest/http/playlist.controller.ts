import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import GetPlaylists from '../../../application/get_playlists/get-playlists';
import GetPlaylistCommand from '../../../application/get_playlists/get-playlist-command';
import GetPlaylistResponse from '../../../application/get_playlists/get-playlist-response';
import {
  ApiResponse,
  ApiResponseParser,
} from '../../../shared/infrastructure/rest/http/api-response';
import { CreatePlaylistRequest } from './contracts/create-playlist-request';

@Controller()
export class PlaylistController {
  constructor(
    private readonly appService: GetPlaylists,
    private readonly apiParser: ApiResponseParser,
  ) {}

  @Get()
  async getPlaylist(): Promise<ApiResponse> {
    const command: GetPlaylistCommand = new GetPlaylistCommand('rap');
    const response: GetPlaylistResponse =
      await this.appService.execute(command);
    return this.apiParser.toJson(response);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createPlaylist(@Body() body: CreatePlaylistRequest): Promise<void> {
    console.log('Creating playlist');
  }
}
