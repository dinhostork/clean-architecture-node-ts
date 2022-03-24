import { Injectable } from '@nestjs/common';
import { Music } from '../../../core/entities';
import { IDataServices, ICrmServices } from '../../../core/abstracts';

@Injectable()
export class MusicServices {
  constructor(
    private dataServices: IDataServices,
    private crmServices: ICrmServices,
  ) {}

  getAllMusics(): Promise<Music[]> {
    return this.dataServices.musics.getAll();
  }

  getMusicById(id: any): Promise<Music> {
    return this.dataServices.musics.get(id);
  }

  async createMusic(music: Music): Promise<Music> {
    try {
      const createdMusic = await this.dataServices.musics.create(music);
      await this.crmServices.musicAdded(createdMusic);

      return createdMusic;
    } catch (error) {
      throw error;
    }
  }

  updateMusic(musicId: string, music: Music): Promise<Music> {
    return this.dataServices.musics.update(musicId, music);
  }
}
