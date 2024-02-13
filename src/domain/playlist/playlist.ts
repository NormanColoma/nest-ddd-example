import DomainEntity from '../../common/domain/domain-entity';

class Playlist extends DomainEntity {
  private _name: string;
  private _favorite: boolean;
  private _genre: string;

  private constructor({
    name,
    favorite = false,
    genre,
  }: {
    name: string;
    favorite: boolean;
    genre: string;
  }) {
    super();
    this.name = name;
    this.favorite = favorite;
    this.genre = genre;
  }

  public static create({
    name,
    favorite,
    genre,
  }: {
    name: string;
    favorite?: boolean;
    genre: string;
  }): Playlist {
    return new Playlist({ name, favorite, genre });
  }

  public get name(): string {
    return this._name;
  }

  private set name(name: string) {
    this._name = name;
  }

  public get favorite(): boolean {
    return this._favorite;
  }

  private set favorite(favorite: boolean) {
    this._favorite = favorite;
  }

  public get genre(): string {
    return this._genre;
  }

  private set genre(genre: string) {
    this._genre = genre;
  }

  public toPrimitives(): object {
    return {
      id: this.id,
      name: this.name,
      favorite: this.favorite,
      genre: this.genre,
      createdAt: this.createdAt,
    };
  }
}

export default Playlist;
