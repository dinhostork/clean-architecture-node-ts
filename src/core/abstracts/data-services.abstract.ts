import { Artist, Album, Music } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract artists: IGenericRepository<Artist>;

  abstract albuns: IGenericRepository<Album>;

  abstract musics: IGenericRepository<Music>;
}
