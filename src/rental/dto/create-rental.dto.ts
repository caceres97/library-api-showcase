import { ApiProperty } from '@nestjs/swagger';

export class CreateRentalDto {
  @ApiProperty({ required: true })
  rentDays: number;

  @ApiProperty({ required: true })
  bookCopyId: number;

  @ApiProperty({ required: true })
  userId: number;
}
