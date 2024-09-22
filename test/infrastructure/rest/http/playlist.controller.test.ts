import { INestApplication } from '@nestjs/common';
import GetPlaylistResponse from '../../../../src/application/get_playlists/get-playlist-response';
import Playlist from '../../../../src/domain/playlist/playlist';
import { Test } from '@nestjs/testing';
import { Container } from '../../../../src/container';
import GetPlaylists from '../../../../src/application/get_playlists/get-playlists';
import * as request from 'supertest';

describe('PlaylistController', () => {
  let app: INestApplication;
  describe('/GET playlists', () => {
    const playlist = Playlist.build({
      id: '1',
      name: 'playlist',
      genre: 'rap',
      favorite: false,
      createdAt: new Date(),
    });
    const response = GetPlaylistResponse.create([playlist]);
    const getPlaylists = { execute: () => response };

    beforeAll(async () => {
      const moduleRef = await Test.createTestingModule({
        imports: [Container],
      })
        .overrideProvider(GetPlaylists)
        .useValue(getPlaylists)
        .compile();

      app = moduleRef.createNestApplication();
      await app.init();
    });

    it(`should return the playlists correctly`, () => {
      return request(app.getHttpServer()).get('/').expect(200).expect({
        data: getPlaylists.execute().toJson(),
      });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
