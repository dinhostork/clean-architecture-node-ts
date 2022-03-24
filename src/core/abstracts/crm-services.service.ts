import { Music } from '../entities';

export abstract class ICrmServices {
  abstract musicAdded(book: Music): Promise<boolean>;
}
