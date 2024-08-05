import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({ required: true })
  firstName: string;

  @ApiProperty({ required: true })
  lastName: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false, default: UserRoles.STUDENT })
  role: UserRoles;
}
