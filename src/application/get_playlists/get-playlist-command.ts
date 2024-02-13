import ApplicationCommand from '../../common/application/application-command';

class GetPlaylistCommand implements ApplicationCommand {
  private readonly genre: string;

  constructor(genre: string) {
    this.genre = genre;
  }

  getFields(): object {
    return {
      genre: this.genre,
    };
  }
}

export default GetPlaylistCommand;
