import { ApiProperty } from '@nestjs/swagger';

export class CreateRentalDto {
  @ApiProperty({ required: true })
  rentDays: number;

  @ApiProperty({ required: true })
  bookCopyId: string;

  @ApiProperty({ required: true })
  userId: string;
}
