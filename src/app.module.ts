import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { GenreModule } from './genre/genre.module';
import { RentalModule } from './rental/rental.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    BookModule,
    GenreModule,
    RentalModule,
    UsersModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
