import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: true })
  publicationYear: number;

  @ApiProperty({ required: true })
  genreId: string;

  @ApiProperty({ required: true })
  authorId: string;

  @ApiProperty({ required: true })
  numberOfCopies: number;
}
