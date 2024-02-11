import ApplicationCommand from '../../common/application/application-command';

class GetPlaylistCommand implements ApplicationCommand {
  public readonly fields: object;

  constructor(genre: string) {
    this.fields = {
      genre,
    };
  }
}

export default GetPlaylistCommand;
