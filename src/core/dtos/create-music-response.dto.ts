import { Music } from '../entities';

export class CreateMusicResponseDto {
  success: boolean;

  createdMusic: Music;
}
