import ApplicationCommand from '../../common/application/application-command';

class GetPlaylistCommand implements ApplicationCommand {
  public readonly genre: string;

  constructor(genre: string) {
    this.genre = genre;
  }
}

export default GetPlaylistCommand;
