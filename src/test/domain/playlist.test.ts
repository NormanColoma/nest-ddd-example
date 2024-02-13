import Playlist from '../../domain/playlist/playlist';

const uuid = '1f12349d-4ff3-4da3-9134-8132fafe5d8a';
const mockedDate = new Date();
jest.mock('uuid', () => ({ v4: () => uuid }));
jest.spyOn(global, 'Date').mockImplementation(() => mockedDate);

describe('Playlist domain entity', () => {
  const name = 'Shutter Island';
  const genre = 'thriller';
  it('should build Playlist correctly', () => {
    const playlist: Playlist = Playlist.create({
      name,
      genre,
    });

    expect(playlist.toPrimitives()).toEqual({
      id: uuid,
      name,
      genre,
      favorite: false,
      createdAt: mockedDate,
    });
  });
});
