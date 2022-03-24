import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMusicDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  artistId: any;

  @IsNotEmpty()
  albumId: any;
}

export class UpdateMusicDto extends PartialType(CreateMusicDto) {}
