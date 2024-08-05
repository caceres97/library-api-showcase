import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RentalService } from 'src/rental/rental.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, RentalService],
  exports: [UsersService],
  imports: [PrismaModule],
})
export class UsersModule {}
